﻿using System;
using System.IO;
using System.Linq;
using Xamarin.UITest;
using Xamarin.UITest.Queries;

namespace ui_tests
{
	public class AppInitializer
	{
		public static IApp StartApp(Platform platform)
		{
			// TODO: If the iOS or Android app being tested is included in the solution 
			// then open the Unit Tests window, right click Test Apps, select Add App Project
			// and select the app projects that should be tested.
			//
			// The iOS project should have the Xamarin.TestCloud.Agent NuGet package
			// installed. To start the Test Cloud Agent the following code should be
			// added to the FinishedLaunching method of the AppDelegate:
			//
			//    #if ENABLE_TEST_CLOUD
			//    Xamarin.Calabash.Start();
			//    #endif
			if (platform == Platform.Android)
			{
				return ConfigureApp
					.Android
					// TODO: Update this path to point to your Android app and uncomment the
					// code if the app is not included in the solution.
					//.ApkFile ("../../../Droid/bin/Debug/xamarinforms.apk")
					.StartApp();
			}

			//iPhone 6 plus
			// var deviceId = "00673C92-BEDA-445B-936E-5D811D6635EB";
			//iPad Pro 12.9
			var deviceId = "E958A769-F4AD-49F0-BA01-BED71D7536F6";

			return ConfigureApp
				.iOS
				// TODO: Update this path to point to your iOS app and uncomment the
				// code if the app is not included in the solution.
				.AppBundle("../../../platforms/ios/Build/emulator/Facts.app")
				.DeviceIdentifier(deviceId)
				.EnableLocalScreenshots()
				.StartApp();
		}
	}
}
