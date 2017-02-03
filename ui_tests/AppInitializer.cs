using System;
using System.IO;
using System.Linq;
using Xamarin.UITest;
using Xamarin.UITest.Queries;
using Newtonsoft.Json;
using System.Dynamic;

namespace ui_tests
{
	public class AppInitializer
	{
		public static IApp StartApp(Platform platform)
		{
			var config = ParseConfig();


			if (platform == Platform.Android)
			{
				return ConfigureApp
					.Android
					.StartApp();
			}

			var deviceIdentifier = config.phone ? config.iphone_identifier : config.ipad_identifier;

			return ConfigureApp
				.iOS
				.AppBundle(config.app_bundle_path)
				.DeviceIdentifier(deviceIdentifier)
				.EnableLocalScreenshots()
				.StartApp();
		}

		private static Config ParseConfig()
		{
			return JsonConvert.DeserializeObject<PackageJson>(File.ReadAllText(@"../../package.json")).config;
		}

		public class PackageJson
		{
			public Config config { get; set; }
		}

		public class Config
		{
			public string app_bundle_path { get; set; }
			public string iphone_identifier { get; set; }
			public string ipad_identifier { get; set; }
			public bool phone { get; set; }
		}
	}
}
