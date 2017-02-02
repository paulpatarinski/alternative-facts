using System;
using System.IO;
using System.Linq;
using System.Threading;
using NUnit.Framework;
using Xamarin.UITest;
using Xamarin.UITest.Queries;

namespace ui_tests
{
	[TestFixture(Platform.Android)]
	[TestFixture(Platform.iOS)]
	public class Tests
	{
		IApp app;
		Platform platform;

		public Tests(Platform platform)
		{
			this.platform = platform;
		}

		[SetUp]
		public void BeforeEachTest()
		{
			app = AppInitializer.StartApp(platform);
		}

		[Test]
		public void Generate_App_Screenshots()
		{
			app.WaitForElement(c => c.Css("#unlearn-btn"));
			app.Screenshot("Home Page");

			app.Tap(c => c.Css("#unlearn-btn"));
			app.WaitForElement(c => c.Css("#random-img"));
			app.Screenshot("Gallery Fact 1");

			app.Tap(c => c.Css("#random-img"));
			Thread.Sleep(TimeSpan.FromSeconds(2));
			app.Screenshot("Gallery Fact 2");
			app.Tap(c => c.Css("#random-img"));
			Thread.Sleep(TimeSpan.FromSeconds(2));

			app.Tap(c => c.Css("#random-img"));
			app.Screenshot("Quote 1");

			Thread.Sleep(TimeSpan.FromSeconds(2));
			app.Tap(c => c.Css("#random-img"));
			app.Screenshot("Quote 2");

			Thread.Sleep(TimeSpan.FromSeconds(1));
			app.Tap(c => c.Css("#share-btn"));
			app.Screenshot("Share");

			app.Tap(c => c.Marked("Cancel"));
			app.Tap(c => c.Css(".back-button"));

			app.Tap(c => c.Css("#about-btn"));
			Thread.Sleep(TimeSpan.FromSeconds(1));
			app.Screenshot("About Page");
			app.Tap(c => c.Css(".back-button"));
		}
	}
}
