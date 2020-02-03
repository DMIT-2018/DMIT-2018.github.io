/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a0453dd8729bc91b39a7bdd87dfac1ce"
  },
  {
    "url": "about/bootstrapInVS2013.html",
    "revision": "0b0af1db4644c9682696ec5c54bf9362"
  },
  {
    "url": "about/index.html",
    "revision": "80b980294acab9591bf367ac3c1e2e14"
  },
  {
    "url": "about/LOGs.html",
    "revision": "35649136aa0c0630cfbd5464249751f7"
  },
  {
    "url": "about/resources.html",
    "revision": "7d51e13046e8117407039a4442c53e96"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "about/troubleshoot.html",
    "revision": "97b78dafffd8f3c3e9b78d27a98a9aa8"
  },
  {
    "url": "assets/css/0.styles.30d154a3.css",
    "revision": "3b17763ce1c6a25bc88c3573317fa329"
  },
  {
    "url": "assets/img/Anon-1.95794504.png",
    "revision": "95794504b51b41590c11dbfe1ea019a6"
  },
  {
    "url": "assets/img/Anon-2.d8ba20cd.png",
    "revision": "d8ba20cd9ba632ea821179981d2ad876"
  },
  {
    "url": "assets/img/Anon-3.7f9b57ea.png",
    "revision": "7f9b57ea1d2ce003cbdec0c82b0a3600"
  },
  {
    "url": "assets/img/BloggingDB-ERD.b0659442.png",
    "revision": "b0659442c5fb93c0fd7c9fd6597415ca"
  },
  {
    "url": "assets/img/Categories.45bcf746.png",
    "revision": "45bcf7464becb648913f294bc7a1b1a7"
  },
  {
    "url": "assets/img/ChangeAuthentication.537a9763.png",
    "revision": "537a9763648acb98ab9733b1282a4d9c"
  },
  {
    "url": "assets/img/choose-data-context.c069800b.png",
    "revision": "c069800bbbf41e7bf1cfb7628791c1f0"
  },
  {
    "url": "assets/img/Combined-1.bcb502b5.png",
    "revision": "bcb502b51a1c09624d24c28063dd474f"
  },
  {
    "url": "assets/img/Combined-2.a612c417.png",
    "revision": "a612c417d715204745861a23e5fd371a"
  },
  {
    "url": "assets/img/Command-Save-Order.f95844dd.png",
    "revision": "f95844dd3c8125f6591807aa86c8e851"
  },
  {
    "url": "assets/img/Customize_01.244a1cf9.jpg",
    "revision": "244a1cf94c0cd852522078a086e132a0"
  },
  {
    "url": "assets/img/Customize_02.f0c01249.jpg",
    "revision": "f0c01249669d3c9349e83c936fa17d6f"
  },
  {
    "url": "assets/img/Customize_03.705cb3d1.jpg",
    "revision": "705cb3d1b42cf05ed31cf65d5c4f9375"
  },
  {
    "url": "assets/img/Customize_04.603d4868.jpg",
    "revision": "603d486810b534e87f8b35a8db335cfe"
  },
  {
    "url": "assets/img/Customize_05.c7b6aa4c.jpg",
    "revision": "c7b6aa4c808102513e4e2ef0491b5315"
  },
  {
    "url": "assets/img/CustomizedReport.c2cfefdf.jpg",
    "revision": "c2cfefdfce1fe725fa2a4a0b8097b646"
  },
  {
    "url": "assets/img/DetailsViewImage.4819ca20.jpg",
    "revision": "4819ca204cd5fe73da982a331b7748cf"
  },
  {
    "url": "assets/img/DropTables.d4a5faf3.png",
    "revision": "d4a5faf369118c517944e278efb3a711"
  },
  {
    "url": "assets/img/DVCS-4.1d6ef20c.png",
    "revision": "1d6ef20c431a71af345e32c911088a0c"
  },
  {
    "url": "assets/img/DVCS-5.05f5f31e.png",
    "revision": "05f5f31e93ee9e3764d683dc1a38ff0e"
  },
  {
    "url": "assets/img/Edit-Order.e5c76994.png",
    "revision": "e5c769949f8ad01823f66902eaa20e18"
  },
  {
    "url": "assets/img/EntityFrameworkCRUD.f7d51068.png",
    "revision": "f7d51068eed8e0b280d5e3ec67be2a10"
  },
  {
    "url": "assets/img/EntityFrameworkQuery.97dbc8be.png",
    "revision": "97dbc8be5140bc2a05c29146ec6d2465"
  },
  {
    "url": "assets/img/ERD-ASP.NET-Identity.edac018d.png",
    "revision": "edac018dc51311fc09f43125853ac487"
  },
  {
    "url": "assets/img/eRestaurant_ERD_entity-demo-tables.740b6fcf.png",
    "revision": "740b6fcfacbf39e66817fc14a52a3b9a"
  },
  {
    "url": "assets/img/eRestaurant_ERD_entity-post-practice-tables.8de066eb.png",
    "revision": "8de066ebc985975e20fc40c9d63b9a2c"
  },
  {
    "url": "assets/img/eRestaurant_ERD_entity-practice-tables.4513aa69.png",
    "revision": "4513aa693a479fb0674654dbf5d7b95b"
  },
  {
    "url": "assets/img/eRestaurant_ERD.6e2fe4df.png",
    "revision": "6e2fe4df3e64dc278a62ef172a006a81"
  },
  {
    "url": "assets/img/eRestaurant_Seating_Plan.9274a4fa.png",
    "revision": "9274a4fa38e062c255301bf69e84f51b"
  },
  {
    "url": "assets/img/ExerciseCRUD.547d5098.png",
    "revision": "547d5098232c670f077c8fd615224b7e"
  },
  {
    "url": "assets/img/ExerciseQuery.fb921801.png",
    "revision": "fb9218010475aa3708ecd63cd81be87e"
  },
  {
    "url": "assets/img/expand-lambda.f2fa24a8.png",
    "revision": "f2fa24a8c7cc43cbfb525d1bba8d677f"
  },
  {
    "url": "assets/img/fig-1.f460eee1.png",
    "revision": "f460eee185bf4907462603ec98ad3cc7"
  },
  {
    "url": "assets/img/First-Visit.b96b47f0.png",
    "revision": "b96b47f0c41067c7693e31cce65ecccc"
  },
  {
    "url": "assets/img/Form-State-Edit-Order.47f6c12d.png",
    "revision": "47f6c12d4aa0843d133d1d2a1a2d4d9f"
  },
  {
    "url": "assets/img/GitHubSignUp.6f7cf67f.png",
    "revision": "6f7cf67fb89fecac6239eb4d88a33fbf"
  },
  {
    "url": "assets/img/grocerylist_erd.ea5a3de4.png",
    "revision": "ea5a3de45d6bf7b601c4853b8cbdf25e"
  },
  {
    "url": "assets/img/Grouping-1.0bade2be.png",
    "revision": "0bade2be00cf2c6b83873ed5ae8f5de3"
  },
  {
    "url": "assets/img/Grouping-1.452b68e2.png",
    "revision": "452b68e233ddce8bb34fc594551e1b2f"
  },
  {
    "url": "assets/img/Grouping-2.853b5e18.png",
    "revision": "853b5e180c7cbf4d2c1ddafd093634fa"
  },
  {
    "url": "assets/img/Grouping-2.c1294b46.png",
    "revision": "c1294b46be50dcdbd1ab390309440d42"
  },
  {
    "url": "assets/img/Grouping-3.84518c08.png",
    "revision": "84518c085f0f94f730333e2ae75319ea"
  },
  {
    "url": "assets/img/Grouping-3.8eedeccb.png",
    "revision": "8eedeccb9692310e03a0e43ddb1ff997"
  },
  {
    "url": "assets/img/IdentityClasses.089a95e7.png",
    "revision": "089a95e72756dfd4a43ef009c611464d"
  },
  {
    "url": "assets/img/IIS-Express-Exit-Confirmation.282eec76.png",
    "revision": "282eec761a96791d1a7a9f8016cbaf77"
  },
  {
    "url": "assets/img/illustrated-lambda.410d6bc6.png",
    "revision": "410d6bc65e3ef6e699e5800257476e8b"
  },
  {
    "url": "assets/img/image003.81cddfcd.png",
    "revision": "81cddfcd97611eccb932f9ac93e6c172"
  },
  {
    "url": "assets/img/image005.afd3baf6.png",
    "revision": "afd3baf623a27217293cf42ed6014275"
  },
  {
    "url": "assets/img/image007.f737a7a8.png",
    "revision": "f737a7a856acc67e007e97b50602b9c8"
  },
  {
    "url": "assets/img/image009.56613b04.png",
    "revision": "56613b04948a2b48acf5b7641a87a2ef"
  },
  {
    "url": "assets/img/image10.d645bb98.png",
    "revision": "d645bb98c383728762d5668c8d27aac8"
  },
  {
    "url": "assets/img/image11.a1a17e06.png",
    "revision": "a1a17e06b6ae1d3356b4b55818dd7385"
  },
  {
    "url": "assets/img/image13.f40f2987.png",
    "revision": "f40f298748e0a55588eb2c5863435fea"
  },
  {
    "url": "assets/img/image5.77097b10.png",
    "revision": "77097b10f5f0051350f884dcbd1a41a2"
  },
  {
    "url": "assets/img/image6.62eb3d5c.png",
    "revision": "62eb3d5cca1e6ab6d6823373df93f52a"
  },
  {
    "url": "assets/img/image7.9a0d9209.png",
    "revision": "9a0d92097a7e67feca2ea19251b159c2"
  },
  {
    "url": "assets/img/image8.22f488c8.png",
    "revision": "22f488c84ebea5a8cb31aa3790bf9d71"
  },
  {
    "url": "assets/img/image9.96f8e185.png",
    "revision": "96f8e185714fcd0ee6c5397a7c122d1f"
  },
  {
    "url": "assets/img/LinqPad.5b3e21c3.png",
    "revision": "5b3e21c37dabce5a33046ce34c345e7a"
  },
  {
    "url": "assets/img/ListView-ConfigureListViewDialog.230a7b61.png",
    "revision": "230a7b6113d9b043378c60a6b86ba210"
  },
  {
    "url": "assets/img/LoginPage.924df4b9.png",
    "revision": "924df4b9f595c97745e250e1adaa7d11"
  },
  {
    "url": "assets/img/Manage_Special_Events.d59e54e7.png",
    "revision": "d59e54e7d3aedd451abe2f8c49bb9c3e"
  },
  {
    "url": "assets/img/Manage_Tables.6952bd16.png",
    "revision": "6952bd1654161d970800204ceede5be9"
  },
  {
    "url": "assets/img/Manage-NuGet-Identity-Entity-Framework-Add-To-Class-Library.8c71d5ab.png",
    "revision": "8c71d5abfbf80e03b0a44d7cf95ecdc8"
  },
  {
    "url": "assets/img/Manage-NuGet-Identity-Entity-Framework.9a98516f.png",
    "revision": "9a98516fa20bccf6e167972253003bc4"
  },
  {
    "url": "assets/img/Manage-Special-Events.d59e54e7.png",
    "revision": "d59e54e7d3aedd451abe2f8c49bb9c3e"
  },
  {
    "url": "assets/img/Nested-1.610b06e4.png",
    "revision": "610b06e48f043bbf22f7417eb06bb341"
  },
  {
    "url": "assets/img/new_desktop_jan2018.de5988b3.png",
    "revision": "de5988b32dc270a4b85df9ce3ab0e61f"
  },
  {
    "url": "assets/img/Northwind-CustomerSales-Save.c8a6d630.png",
    "revision": "c8a6d63038935d08728b2aae4c787b86"
  },
  {
    "url": "assets/img/Online_Reservations.03840965.png",
    "revision": "0384096580a8c582cbd78225735b803b"
  },
  {
    "url": "assets/img/Orderby-1.600bcf8e.png",
    "revision": "600bcf8eccd48dc0ba92b18170b1b5cc"
  },
  {
    "url": "assets/img/Orderby-2.cdaac2e4.png",
    "revision": "cdaac2e4c3ca89935948ed49c1aff8ec"
  },
  {
    "url": "assets/img/Orderby-3.f22bd7c5.png",
    "revision": "f22bd7c5053af05d81a5b799f6959ee3"
  },
  {
    "url": "assets/img/Orderby-3.f5b415f3.png",
    "revision": "f5b415f3bc67068ae1a34c4100f0e97e"
  },
  {
    "url": "assets/img/Orderby-4.15f88815.png",
    "revision": "15f8881520619f296898ea39f6dd0cae"
  },
  {
    "url": "assets/img/Orderby-4.3d5100d9.png",
    "revision": "3d5100d971f7731065b566102d3e9b48"
  },
  {
    "url": "assets/img/picking.8f692e78.png",
    "revision": "8f692e78d5a1f1cd766602bc88a56de7"
  },
  {
    "url": "assets/img/Practice-Q1.d183944e.png",
    "revision": "d183944edf1231ce17da35a306abb6ab"
  },
  {
    "url": "assets/img/Practice-Q3.453798e6.png",
    "revision": "453798e6fe37cbb732eddbe5dbc25b30"
  },
  {
    "url": "assets/img/Practice-Q5-Group-Select.e48d82c7.png",
    "revision": "e48d82c719fbb021bbf72b17b01300a3"
  },
  {
    "url": "assets/img/Practice-Q5-Group.3fef28d1.png",
    "revision": "3fef28d1605f9648e57b4a9b23640671"
  },
  {
    "url": "assets/img/product-catalog-add-product.dedb887a.png",
    "revision": "dedb887a01f3dcd7b0975405df0d2650"
  },
  {
    "url": "assets/img/product-listing-by-category.c7247d7e.png",
    "revision": "c7247d7e230f5cf001c954bce7a8edd6"
  },
  {
    "url": "assets/img/Program-1.9dff7698.png",
    "revision": "9dff7698db41c1b19d2f38bb6e51c088"
  },
  {
    "url": "assets/img/Program-1.eeadc43d.png",
    "revision": "eeadc43d6be7293ef7d2f6ff493e6c1e"
  },
  {
    "url": "assets/img/prototype_table.19293dd2.png",
    "revision": "19293dd29dc667fd22232fa193301957"
  },
  {
    "url": "assets/img/q1.0f5bbf92.png",
    "revision": "0f5bbf92b5764efec67e674b7e9772b0"
  },
  {
    "url": "assets/img/q2.a3190c19.png",
    "revision": "a3190c1918ffb2429c3b5f50e8c25008"
  },
  {
    "url": "assets/img/q3.e8d15826.png",
    "revision": "e8d15826b52ecc1892e3497c2f9934cd"
  },
  {
    "url": "assets/img/q4.62114113.png",
    "revision": "621141138cc86f24d1eee4d81cbd9f3f"
  },
  {
    "url": "assets/img/q5.f6829799.png",
    "revision": "f6829799ae5505ed11f6e998e8ef646d"
  },
  {
    "url": "assets/img/q6.4f258d14.png",
    "revision": "4f258d1441ae4ebca37c295e2fc93cc5"
  },
  {
    "url": "assets/img/Query-First-Visit.d613e3fb.png",
    "revision": "d613e3fb1b025aeefba10d106cdd14d2"
  },
  {
    "url": "assets/img/Query-Open-Order.8d7011e0.png",
    "revision": "8d7011e0b94f47e090fb358cf20beb36"
  },
  {
    "url": "assets/img/Query-Selected-Company.b5eea4a1.png",
    "revision": "b5eea4a1e88afadd9be1d9ea484e1236"
  },
  {
    "url": "assets/img/RepoPractice-1.fd2d3d1a.png",
    "revision": "fd2d3d1aa21aa47439beb82935789d11"
  },
  {
    "url": "assets/img/RepoPractice-2.ceb022ff.png",
    "revision": "ceb022ffa7fde743af8085a4bbd853bf"
  },
  {
    "url": "assets/img/RepoPractice-3.d85faa18.png",
    "revision": "d85faa1880cbe3937270a7fae3137337"
  },
  {
    "url": "assets/img/RepoPractice-4.9bc4bae9.png",
    "revision": "9bc4bae9b825f2ff3029d11032e054e9"
  },
  {
    "url": "assets/img/RepoPractice-7.eda738be.png",
    "revision": "eda738be20b6670b63625dd32caa3162"
  },
  {
    "url": "assets/img/RepoPractice-9.ce1642d8.png",
    "revision": "ce1642d85dd586da8865fcf491826524"
  },
  {
    "url": "assets/img/report_image.5fe6f595.png",
    "revision": "5fe6f59582efb1f83078468db36f20a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Seating_Reservations.46125bf0.png",
    "revision": "46125bf0d5a7ebc09725a804cc312204"
  },
  {
    "url": "assets/img/Seating-Front-Desk.3e4ba277.png",
    "revision": "3e4ba277a081d21403584f8adb70e3dd"
  },
  {
    "url": "assets/img/Seating-Reservations.46125bf0.png",
    "revision": "46125bf0d5a7ebc09725a804cc312204"
  },
  {
    "url": "assets/img/SecurityDefault.5b7554a3.png",
    "revision": "5b7554a38e0cb7b100e8c410648b6ff8"
  },
  {
    "url": "assets/img/Selected-Company.62e53b9f.png",
    "revision": "62e53b9f6e424fd447489674e2a4aa02"
  },
  {
    "url": "assets/img/special_events.bbf5fb1d.png",
    "revision": "bbf5fb1d9b1864a30c26b56b7c6e3999"
  },
  {
    "url": "assets/img/Statements-1.aa54b10c.png",
    "revision": "aa54b10cf41338634347d93c9bf6036d"
  },
  {
    "url": "assets/img/Statements-1.cef9ee4d.png",
    "revision": "cef9ee4dbec54db604eeb385d617565b"
  },
  {
    "url": "assets/img/Statements-3.005917b7.png",
    "revision": "005917b7e6aefb9fe9d2f0699111d43f"
  },
  {
    "url": "assets/img/Statements-3.92e366f6.png",
    "revision": "92e366f6d240ccb8945e06b8be960e78"
  },
  {
    "url": "assets/img/Step1.85c0e71c.png",
    "revision": "85c0e71c98fd184cbc2911e9b5adb23a"
  },
  {
    "url": "assets/img/Step11.8c27cb12.png",
    "revision": "8c27cb12ad51c16fe7f4e16f97a80e23"
  },
  {
    "url": "assets/img/Step12.a7814466.png",
    "revision": "a7814466c791949c5aa3cfab0536454a"
  },
  {
    "url": "assets/img/Step15.1bc19c5b.png",
    "revision": "1bc19c5beaacf4804611a507f2685c71"
  },
  {
    "url": "assets/img/Step17.f05054b4.png",
    "revision": "f05054b4d9667d7104a1c729a120ad8a"
  },
  {
    "url": "assets/img/Step18.11812888.png",
    "revision": "118128882ef8a3ce6a84b3637e1b9b51"
  },
  {
    "url": "assets/img/Step2.e45c497a.png",
    "revision": "e45c497a53d6a029f8fb74efe2af78e8"
  },
  {
    "url": "assets/img/Step20.bc48f52d.png",
    "revision": "bc48f52d5be48a78ff3893d9631c64f4"
  },
  {
    "url": "assets/img/Step21.d70d44f2.png",
    "revision": "d70d44f28d3f18b036f02de794b55fa3"
  },
  {
    "url": "assets/img/Step3.c811eedf.png",
    "revision": "c811eedff34b02177ef235539052f525"
  },
  {
    "url": "assets/img/Step7.883c3188.png",
    "revision": "883c3188426ee70de36bf06398443c18"
  },
  {
    "url": "assets/img/Step9.ae4db95c.png",
    "revision": "ae4db95c228ac45d3c7926459a0e7a9f"
  },
  {
    "url": "assets/img/Union-1.3992fdb9.png",
    "revision": "3992fdb949bd4d65b2e097e5afd0ddbd"
  },
  {
    "url": "assets/img/UpdateDatabase-DropTables.4d609677.png",
    "revision": "4d6096773e815af1a59107551f93b345"
  },
  {
    "url": "assets/img/UpdateNugetPackages-OverwriteFiles.bc452544.png",
    "revision": "bc4525441397ef15f2b6fe2bed313fc4"
  },
  {
    "url": "assets/img/UpdateNugetPackages.4ad17a94.png",
    "revision": "4ad17a94da7c1f86f80ce71a1e88677f"
  },
  {
    "url": "assets/img/UserProfile.485eab59.png",
    "revision": "485eab593b0d1ad5dd3d2ec1ca39714f"
  },
  {
    "url": "assets/img/vs-2017-sign-in-script-error.dc0997ba.jpg",
    "revision": "dc0997baa3cf0ab8013283a444d1a86b"
  },
  {
    "url": "assets/img/Waiters.3d3686f0.png",
    "revision": "3d3686f09fbf17b72a85b39513db57a5"
  },
  {
    "url": "assets/img/WebForm_01.71253d95.jpg",
    "revision": "71253d956d63ab7c2981dc75964fec98"
  },
  {
    "url": "assets/img/WebForm_02.7b421a57.jpg",
    "revision": "7b421a573217f6a3051ad4b87ee4a278"
  },
  {
    "url": "assets/img/WebForm_03.4397d86e.jpg",
    "revision": "4397d86eae151e2f5a306849ea658953"
  },
  {
    "url": "assets/img/Webform_04.6daafc83.jpg",
    "revision": "6daafc83f1387f30fa3f0b793418c718"
  },
  {
    "url": "assets/img/Where-1.22638247.png",
    "revision": "2263824793ec07f7d4fa17d5a7800abf"
  },
  {
    "url": "assets/img/Where-1.ebc170cb.png",
    "revision": "ebc170cbc5f42ad6b748685d5b9e4557"
  },
  {
    "url": "assets/img/Where-2-tip.165ba1c2.png",
    "revision": "165ba1c2539c35342ab724dce684b218"
  },
  {
    "url": "assets/img/Where-2.1ad94230.png",
    "revision": "1ad942303bf6ddced3a182ee4fda0839"
  },
  {
    "url": "assets/img/Where-2.2039851f.png",
    "revision": "2039851f44c6637106d9ea9487879489"
  },
  {
    "url": "assets/img/Where-3.323454ce.png",
    "revision": "323454ce14eaf17d8a933223b6000ce5"
  },
  {
    "url": "assets/img/Where-3.40607e5d.png",
    "revision": "40607e5d2298d7eb78b52e0c6dd5d62b"
  },
  {
    "url": "assets/img/Wizard_01.b11a3dcb.jpg",
    "revision": "b11a3dcb8e32db46665fc42a2dcb9f29"
  },
  {
    "url": "assets/img/Wizard_02.6dd76f55.jpg",
    "revision": "6dd76f55455ffef16a506325cd9335c2"
  },
  {
    "url": "assets/img/Wizard_03.546a1312.jpg",
    "revision": "546a1312ffa34b97a63253504244fac6"
  },
  {
    "url": "assets/img/Wizard_04.854d3439.jpg",
    "revision": "854d3439074a3c6e9125f1c7320a367c"
  },
  {
    "url": "assets/img/Wizard_05.0cc79d8a.jpg",
    "revision": "0cc79d8a193f358760ecec509190553e"
  },
  {
    "url": "assets/img/Wizard_06.cf8279a6.jpg",
    "revision": "cf8279a692d3f2550f163e6d7fdd1bf0"
  },
  {
    "url": "assets/img/work_schedule_erd.05622aae.png",
    "revision": "05622aae3669e7b5e852415460253f92"
  },
  {
    "url": "assets/js/10.8c43f8f6.js",
    "revision": "81afa4a740aa3aad57c836f30a9f10ce"
  },
  {
    "url": "assets/js/11.054b9a39.js",
    "revision": "68f0827c6dad9be6b95678e42bcd835e"
  },
  {
    "url": "assets/js/12.2971f9a5.js",
    "revision": "c40812679cbe15c480225ce900b3888e"
  },
  {
    "url": "assets/js/13.506a93ac.js",
    "revision": "640517e1d09abb376d04d4eff55fdd9d"
  },
  {
    "url": "assets/js/14.20891d17.js",
    "revision": "704405d7ed0aae62e057463ff75bfce5"
  },
  {
    "url": "assets/js/15.db048f33.js",
    "revision": "a6ed48f389a0506ff69dd18777e3adfb"
  },
  {
    "url": "assets/js/16.75255905.js",
    "revision": "d337f5baf3eae984bd7fe6f5e666a3fc"
  },
  {
    "url": "assets/js/17.69ecdbf9.js",
    "revision": "7628040ccc1bdf77e1eb637188776528"
  },
  {
    "url": "assets/js/18.faa61b0d.js",
    "revision": "61b8218bdc0c247b071a2b26e87338d6"
  },
  {
    "url": "assets/js/19.838f9836.js",
    "revision": "5c8ec47edc192290c8e0b91c24acb87f"
  },
  {
    "url": "assets/js/2.9fb9f76a.js",
    "revision": "3ce2ca7b5befdee89b2bdad8e5e9cd74"
  },
  {
    "url": "assets/js/20.134d2f6a.js",
    "revision": "74fdbb26225a16c930b3f01af4ea3747"
  },
  {
    "url": "assets/js/21.25cd9bcb.js",
    "revision": "b2e629744152b0382d301474f475164c"
  },
  {
    "url": "assets/js/22.a7c7835d.js",
    "revision": "1130e7d5d59fad0e9b15480b8cb050ab"
  },
  {
    "url": "assets/js/23.be9fb774.js",
    "revision": "93b5afc00393cc3234b6c055e90ae281"
  },
  {
    "url": "assets/js/24.eac8799b.js",
    "revision": "6259bfea1755de096d969c65778fd273"
  },
  {
    "url": "assets/js/25.c9c6735f.js",
    "revision": "45fa6334374a5a39d19b860ec07e4b75"
  },
  {
    "url": "assets/js/26.e8a0ffb6.js",
    "revision": "9b0e60ad04876d318b4fe11218ff71f8"
  },
  {
    "url": "assets/js/27.769c5941.js",
    "revision": "3afb2666beb33678a79d5db964a1483c"
  },
  {
    "url": "assets/js/28.a273d51d.js",
    "revision": "fab8bac1f396a86102e2ade99d92224e"
  },
  {
    "url": "assets/js/29.112ee0d3.js",
    "revision": "7bb20cbe41841725e93fac16e21d22fd"
  },
  {
    "url": "assets/js/3.ad179631.js",
    "revision": "c239c29f0b12fb0725ef0f789e12dcbc"
  },
  {
    "url": "assets/js/30.81a71e9a.js",
    "revision": "3f76b67496cfc1595542249c76eb820c"
  },
  {
    "url": "assets/js/31.e99b25c5.js",
    "revision": "dcac9f1fafe3830ea1ce61f4b169613b"
  },
  {
    "url": "assets/js/32.ae8b2832.js",
    "revision": "197bd07115fb2bacc583b98ffcdb6e88"
  },
  {
    "url": "assets/js/33.d25e0010.js",
    "revision": "11fa31757fd6da2b3f3840f0ec004a79"
  },
  {
    "url": "assets/js/34.fba0d9db.js",
    "revision": "2b4ec4f0da10bfe98b81bbb831c45b96"
  },
  {
    "url": "assets/js/35.e7917ad5.js",
    "revision": "93b4b17e22e32f67047a130e974cacc8"
  },
  {
    "url": "assets/js/36.9de5665c.js",
    "revision": "b39f742a4de79c16863f2d3cd4b79013"
  },
  {
    "url": "assets/js/37.79eaf926.js",
    "revision": "aa784597d7c3a974a1cf8ac4c1d82bed"
  },
  {
    "url": "assets/js/38.4416ff5e.js",
    "revision": "dee41eb6cc761549fb7ae67382cfe61e"
  },
  {
    "url": "assets/js/39.15963eb7.js",
    "revision": "b35d0faadfff7859d522cf6bf2887c18"
  },
  {
    "url": "assets/js/4.3c318a4c.js",
    "revision": "5b151e5af1d1d7b560b38f9592955562"
  },
  {
    "url": "assets/js/40.9acfd7c3.js",
    "revision": "dc7203c40964ef562a795973d180cb84"
  },
  {
    "url": "assets/js/41.a2bc4ef1.js",
    "revision": "3dd2986ab1d3f1d69cdd6d4627f2c76f"
  },
  {
    "url": "assets/js/42.757a84d1.js",
    "revision": "7d4bce747f9e5695ba3233c28d8c1fae"
  },
  {
    "url": "assets/js/43.e905c9fd.js",
    "revision": "5bee56b40a20c365c5e99f238f5ad6e9"
  },
  {
    "url": "assets/js/44.ed1a4254.js",
    "revision": "b69b89fa3c6d6656459c94e06f32b710"
  },
  {
    "url": "assets/js/45.c143bd1e.js",
    "revision": "cf324f0f6a6a79f420968f3840027af2"
  },
  {
    "url": "assets/js/46.8c49a2f3.js",
    "revision": "6e61ae6921bd4f96a130a0dc1fc70265"
  },
  {
    "url": "assets/js/47.7bbd3e32.js",
    "revision": "49589e509437a002143ca001c8fffd8d"
  },
  {
    "url": "assets/js/48.8a969d54.js",
    "revision": "4e86b167d47bcb944824a04c11c79a7c"
  },
  {
    "url": "assets/js/49.9e2d4feb.js",
    "revision": "b9078c36ac749975dfa850a1f09978c3"
  },
  {
    "url": "assets/js/5.e816576a.js",
    "revision": "e7a9b5d0a2b946e89ec83dd66605ad8a"
  },
  {
    "url": "assets/js/50.88794bf0.js",
    "revision": "93db64ebe571770eaa658283711b65d5"
  },
  {
    "url": "assets/js/51.40755144.js",
    "revision": "59f1a1a1c77820433ea383f31ff012f6"
  },
  {
    "url": "assets/js/52.87acde4a.js",
    "revision": "0c14aa6c76d05cc3d21f625564ebf49c"
  },
  {
    "url": "assets/js/53.4d0dc81b.js",
    "revision": "22c3842273ce0c8181c8a4103287c03b"
  },
  {
    "url": "assets/js/54.0261f792.js",
    "revision": "7f2d128e559204e5519e01e46342dd3e"
  },
  {
    "url": "assets/js/55.d1a6281d.js",
    "revision": "15e8454adf0f723a5c62097e98359f8f"
  },
  {
    "url": "assets/js/56.c773c3b6.js",
    "revision": "c06cafd1997d1f7ef835fd1a6e37d28c"
  },
  {
    "url": "assets/js/57.03885f1b.js",
    "revision": "37ad7a4a561efe345d16e6e22c53f065"
  },
  {
    "url": "assets/js/58.b8322db2.js",
    "revision": "81e054a1071fb9a7844d44b134cc0b96"
  },
  {
    "url": "assets/js/59.581ce853.js",
    "revision": "5b9fd9b06ab651305d0365bef1d1d686"
  },
  {
    "url": "assets/js/6.d96bf8da.js",
    "revision": "96a047f2fa05a9ec18efa13e5d120fbd"
  },
  {
    "url": "assets/js/60.7bad303d.js",
    "revision": "0ab1b6d21fe0097ccf5dce33c237e71d"
  },
  {
    "url": "assets/js/61.ea6fdac4.js",
    "revision": "74e2410b6875d17680596bf9c6461d38"
  },
  {
    "url": "assets/js/62.df920c79.js",
    "revision": "106db7d6a5b0318fb480387164f681ff"
  },
  {
    "url": "assets/js/63.8226c344.js",
    "revision": "1d4d0432be339bb0989f14a53f6d0477"
  },
  {
    "url": "assets/js/64.710417fa.js",
    "revision": "59f0553d3f62eeb0f4d2533504d64887"
  },
  {
    "url": "assets/js/65.408444ac.js",
    "revision": "d535d2aa67917f5cabc0275818c1ee7c"
  },
  {
    "url": "assets/js/66.871f6829.js",
    "revision": "b8dd82559c0968b8ed9cd07779f4bb77"
  },
  {
    "url": "assets/js/67.2c673b06.js",
    "revision": "2914957a257a7b7336ba5c8afc5b4d76"
  },
  {
    "url": "assets/js/68.41ce96d7.js",
    "revision": "664732b8759ca4ad0fffd9b529379f98"
  },
  {
    "url": "assets/js/69.7edcd2e7.js",
    "revision": "54dda52b7059b6add7986b9f95e5942c"
  },
  {
    "url": "assets/js/7.6dec6e1f.js",
    "revision": "52b2996c37a89bdfd469f6e8a5817f50"
  },
  {
    "url": "assets/js/70.d180347d.js",
    "revision": "7b158fac49c532c659af07934a0a1659"
  },
  {
    "url": "assets/js/71.b52ad326.js",
    "revision": "24db6b2873276f7be7c01838c0ada406"
  },
  {
    "url": "assets/js/72.280c4e81.js",
    "revision": "53441c643ac5cf6c51c1588b540f3aab"
  },
  {
    "url": "assets/js/73.349f253a.js",
    "revision": "03b48d7e848c85deedcbf96488f9d1bf"
  },
  {
    "url": "assets/js/74.16b0a47a.js",
    "revision": "95474ecf64d05dcb7a3df2a6aac98a29"
  },
  {
    "url": "assets/js/75.4f0303dd.js",
    "revision": "b0bc98471acb6c5242785ac5114968ba"
  },
  {
    "url": "assets/js/76.1b4794a8.js",
    "revision": "a504b382337a5daf97f738c002f0763a"
  },
  {
    "url": "assets/js/77.6c047eda.js",
    "revision": "69307bd58358de831e8db07620576f49"
  },
  {
    "url": "assets/js/78.539f31b3.js",
    "revision": "4b79d34b03996d7978bc627383356e51"
  },
  {
    "url": "assets/js/79.534e5eb0.js",
    "revision": "bec7f29ba221adbb9720a859946062c5"
  },
  {
    "url": "assets/js/8.0c70df64.js",
    "revision": "ca5d35a14dc39509635c5ea1c462d0d4"
  },
  {
    "url": "assets/js/80.f7f142cc.js",
    "revision": "6a7347338522dfbaafabdf61d29796d7"
  },
  {
    "url": "assets/js/81.42d04da9.js",
    "revision": "b0e49a39e8e95831763a7b5663e84658"
  },
  {
    "url": "assets/js/82.4a4b592b.js",
    "revision": "e92ae76c31bd2f1e3dc56310ef351927"
  },
  {
    "url": "assets/js/83.22b60ed3.js",
    "revision": "243588ace099e8afa5b1aca933b3f9a0"
  },
  {
    "url": "assets/js/84.72d1afbd.js",
    "revision": "ef2819740911bf4dc14fe4e4a8f5cd6a"
  },
  {
    "url": "assets/js/85.12f6eee1.js",
    "revision": "aef86db03e00ed5e88abc9ffc7b7a4a5"
  },
  {
    "url": "assets/js/86.af947a06.js",
    "revision": "62a5e5b05448f1979382e80d8e69cc58"
  },
  {
    "url": "assets/js/87.9f351037.js",
    "revision": "8f2c77102caf1dee9ded13d132b88025"
  },
  {
    "url": "assets/js/88.43d5155f.js",
    "revision": "6b7767c3b0e3e62839c419e6d1d37f38"
  },
  {
    "url": "assets/js/89.e278e660.js",
    "revision": "5491d0108e1df75cc5d33c30bfb5cb0e"
  },
  {
    "url": "assets/js/9.71ae525f.js",
    "revision": "2f11ce604658b92ed2a2206558cfd9a6"
  },
  {
    "url": "assets/js/90.907f7882.js",
    "revision": "da5ea983a9a5b3eda69686f8c90b2ade"
  },
  {
    "url": "assets/js/91.21f31f57.js",
    "revision": "f854ab31375022a62e59df7d34a6394d"
  },
  {
    "url": "assets/js/92.0cc8b821.js",
    "revision": "e58442a3d9293008c37d43c36eabaf0d"
  },
  {
    "url": "assets/js/93.478f6ad3.js",
    "revision": "31fc8d4c1d127faed34969f05646c2a9"
  },
  {
    "url": "assets/js/94.88240045.js",
    "revision": "8b57de7dd57d0ee1651192acaf4b9b01"
  },
  {
    "url": "assets/js/95.23580df4.js",
    "revision": "09728bd41bc57d475f51c27e4e225a7f"
  },
  {
    "url": "assets/js/app.09424acb.js",
    "revision": "d86c2a9a785f2f5dc5dea66a860e5239"
  },
  {
    "url": "demos/Chinook/entityDemo.html",
    "revision": "148c3590edfe802839df526a35015c48"
  },
  {
    "url": "demos/Chinook/index.html",
    "revision": "98948c98284df7e7bc45bc2e967282de"
  },
  {
    "url": "demos/eRestaurant/about/index.html",
    "revision": "259fb475dd5ca8ef23bcb10757e1f20f"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminController.html",
    "revision": "967a07a04ecfb44b07438403d7479a06"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminSpecialEvents.html",
    "revision": "b0d657c7f5e5bb82402991d80b42c95a"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/bootstrapStyle.html",
    "revision": "e013425167e87780939405a6a103612e"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/menu.html",
    "revision": "9cfd8736f03152a6d76adfb0ac761382"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/occupiedTables.html",
    "revision": "10d7b5ea4631633d85dde9b5e16323a1"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/queryString.html",
    "revision": "9f476d8b572c3cce88e960189a48701d"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/reservations.html",
    "revision": "83e2a8213712e42883e298b869d42fc4"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/fakeDateTime.html",
    "revision": "fa7f2a5460167f78b6b2eefea65d69bf"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/messageUserControl.html",
    "revision": "907b06251d5de705d7879ae199fd4f9c"
  },
  {
    "url": "demos/eRestaurant/businessRules/businessRuleException.html",
    "revision": "a118060c26d27f0d9ef54be85e737243"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingReservations.html",
    "revision": "d049cef6cfd6363c70c7786ddba79b17"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingWalkIns.html",
    "revision": "f8edd536c7b4ac158a73c17d97d32b2f"
  },
  {
    "url": "demos/eRestaurant/dvcs/demo.html",
    "revision": "355cf80816e6688f7ad25f9c0714b73a"
  },
  {
    "url": "demos/eRestaurant/entityFramework/demo/demo.html",
    "revision": "1fc101212e8a0ddfbf10cec78277c3a2"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice-solution.html",
    "revision": "46d7fb748e8fb0c8acc00097f3936f7f"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice.html",
    "revision": "2ffd531e8869fcf4b8f851a2aaf8fc38"
  },
  {
    "url": "demos/eRestaurant/index.html",
    "revision": "afe6be7ea5d41dc04f892c98b4a2799b"
  },
  {
    "url": "demos/eRestaurant/linq/extensions.html",
    "revision": "842f2ae8417d5f95cba97ed1d53eaa95"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/occupiedTables.html",
    "revision": "85f8ca11102505ad63429ee316f28041"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/reservations.html",
    "revision": "9cb3cc3e9db2e3740d45345a7b6bb1e9"
  },
  {
    "url": "demos/eRestaurant/linq/index.html",
    "revision": "e030dd3df66c84be6cc45a3e13927d1e"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/expressions.html",
    "revision": "57ada7486c4e4ae02e8998ffc24a142d"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/program.html",
    "revision": "cd6e3bef607d026d6703fc9a5f2db284"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/statements.html",
    "revision": "33fd2fe8be582e0f7141cac5640e9225"
  },
  {
    "url": "demos/eRestaurant/linq/practice.html",
    "revision": "e81c90232fa8fde8bb4deca0b8d72a14"
  },
  {
    "url": "demos/eRestaurant/reports/customizing/index.html",
    "revision": "312e358e2f19f27d88ea1154dca6ca0b"
  },
  {
    "url": "demos/eRestaurant/reports/reportViewer/index.html",
    "revision": "b365ab027b293653ddb640fbc722f48b"
  },
  {
    "url": "demos/eRestaurant/security/demo.html",
    "revision": "997b14457f40e8d3648be017c8fab0c4"
  },
  {
    "url": "demos/eRestaurant/sitemaps/demo2.html",
    "revision": "c23bc7bcd0407d82e75c76bb99172ccf"
  },
  {
    "url": "demos/eRestaurant/testing/manual.html",
    "revision": "7ac4530a0c55b7384f18a856d9163486"
  },
  {
    "url": "demos/eRestaurant/ux/frontDesk/index.html",
    "revision": "af7f118c2b248e37077ec253d666e190"
  },
  {
    "url": "demos/index.html",
    "revision": "00c6f110f7edcb51c3f81d390a7cb8a1"
  },
  {
    "url": "demos/Northwind/CustomerOrders/Design.html",
    "revision": "a4c6558044523555a4d6dd59d0f84b65"
  },
  {
    "url": "demos/Northwind/CustomerOrders/index.html",
    "revision": "d5c0047751d8ff03f26ed9044b6bdd61"
  },
  {
    "url": "demos/Northwind/index.html",
    "revision": "fe8a3edcb9e73a1c70e2b7b602123e4b"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/expressions.html",
    "revision": "f40f7545adfb73944e71d68422843277"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/program.html",
    "revision": "2d4b2fb9b4c7eb901f0b7237ec4edda1"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/statements.html",
    "revision": "8ebe53a25fc3f425a3e9c8a8207152e3"
  },
  {
    "url": "demos/Northwind/Security/index.html",
    "revision": "742fa38cb84c180a59d46e3a8270db80"
  },
  {
    "url": "exercises/dvcs.html",
    "revision": "a939ed088a2448316f3067168a406665"
  },
  {
    "url": "exercises/ef.html",
    "revision": "b802760ca85b32607947254864e394e9"
  },
  {
    "url": "exercises/index.html",
    "revision": "26a4180ba98f0dba757403e3d7b7b1b3"
  },
  {
    "url": "exercises/linq.html",
    "revision": "3ce6d37b401eac1e5dbe890a3951f24e"
  },
  {
    "url": "exercises/oltp.html",
    "revision": "a46cc102636252455a4fe7b8d064676e"
  },
  {
    "url": "exercises/planning.html",
    "revision": "b404ea0528686087beb1361f24aa5c3c"
  },
  {
    "url": "exercises/reporting.html",
    "revision": "07f9094d90ad916f03a032bb4011b9eb"
  },
  {
    "url": "exercises/reports/install_ssdt.html",
    "revision": "0781dcb88cc30ef63d78f500003359e3"
  },
  {
    "url": "exercises/WorkSchedule/EntityFramework/index.html",
    "revision": "a195e7c16948f95ae4de21fe16042d6d"
  },
  {
    "url": "exercises/WorkSchedule/Linq/index.html",
    "revision": "72151c7ab1bdbe1dddd8a39868f164d2"
  },
  {
    "url": "grammar.css",
    "revision": "d808d841ac2c9802ec4f3de69dafc6de"
  },
  {
    "url": "hero.png",
    "revision": "c70f643a26d40f27de57d94b6f7cb26d"
  },
  {
    "url": "index.html",
    "revision": "1a5047ea8e403685ddedcabb254d890b"
  },
  {
    "url": "logs/index.html",
    "revision": "aa89b3e523cb9814f35787d92a53cab3"
  },
  {
    "url": "ToClean/courseOffering.html",
    "revision": "139b5eb22ef1d95220ba38c5168bd654"
  },
  {
    "url": "ToClean/oltp/exercise.html",
    "revision": "d94f294d48ea31e77ba57da4d2fb98fc"
  },
  {
    "url": "ToClean/reports/exercise.html",
    "revision": "1a309931c9335a3da9314038501d108e"
  },
  {
    "url": "topics/aspNet/advancedErrorHandling.html",
    "revision": "1bcc00fb16b6f4a1fac6b38d0b990f65"
  },
  {
    "url": "topics/aspNet/assortedWebForms.html",
    "revision": "9a47202abdd19828ca2b079d689f9a29"
  },
  {
    "url": "topics/aspNet/databound/detailsviewOverview.html",
    "revision": "efa7d49bea3ed3643fe3e0b2b2dfd03b"
  },
  {
    "url": "topics/aspNet/databound/gridviewCustomization.html",
    "revision": "e7463d30c6f837a2f161839eaa3b73ed"
  },
  {
    "url": "topics/aspNet/databound/gridviewOverview.html",
    "revision": "323e20ed9cbb99a6fcd420ff37e04cb5"
  },
  {
    "url": "topics/aspNet/databound/index.html",
    "revision": "bffe2aeb235ea04c8bff8781d65c2de8"
  },
  {
    "url": "topics/aspNet/databound/listviewOverview.html",
    "revision": "df6552b558093a6ce3abbfa2435b2ce2"
  },
  {
    "url": "topics/aspNet/databound/repeaterOverview.html",
    "revision": "a6530f7d75f1659acdf2b22b34ddbb95"
  },
  {
    "url": "topics/aspNet/errorHandling.html",
    "revision": "7e8d1711ab442f53e56b653ef3180881"
  },
  {
    "url": "topics/aspNet/userControls.html",
    "revision": "785dfb26b8e671fe913cd9e5d0251d6e"
  },
  {
    "url": "topics/cqrs/index.html",
    "revision": "ee623d15c98255b870a5745732cce09d"
  },
  {
    "url": "topics/dvcs/conflicts/index.html",
    "revision": "20b3d680f3f6610383f877130428372d"
  },
  {
    "url": "topics/dvcs/gh4w.html",
    "revision": "ea48080c2cdeb6891fac837b541a805e"
  },
  {
    "url": "topics/dvcs/index.html",
    "revision": "3078e97d313b7e09502985896a119b58"
  },
  {
    "url": "topics/entityFramework/index.html",
    "revision": "d9c5cf3f52763deef6f70bc1c9352195"
  },
  {
    "url": "topics/index.html",
    "revision": "949940d27efd4b765e50846533266615"
  },
  {
    "url": "topics/linq/index.html",
    "revision": "44baca28dc7d7a471a5b2b84675a7988"
  },
  {
    "url": "topics/linq/lambda.html",
    "revision": "f9d9204e02dd3f552c2bfe24f7309ae5"
  },
  {
    "url": "topics/reports/ssdt.html",
    "revision": "a75b92469de567ab5f73885bc8c73865"
  },
  {
    "url": "topics/security/aspNetIdentity.html",
    "revision": "48edf8dde0a660ca37af95c464f42b71"
  },
  {
    "url": "topics/security/IdentityConfig.html",
    "revision": "383ead5061743fb54720585ea5e353c8"
  },
  {
    "url": "topics/security/IdentityModels.html",
    "revision": "913824cdc843ed2d8f5cf282fcb56bca"
  },
  {
    "url": "topics/security/index.html",
    "revision": "c06452d7c9e061581b7852549a08761e"
  },
  {
    "url": "topics/security/vs2017wap.html",
    "revision": "4bb415dc0f9896d9ad2c34fa525d97c0"
  },
  {
    "url": "topics/sitemaps/index.html",
    "revision": "474720f7f01a97a9956531aa5a7bca00"
  },
  {
    "url": "topics/ux/index.html",
    "revision": "21b6e03232b5780750a4ae34f58ab361"
  },
  {
    "url": "topics/ux/workflows/index.html",
    "revision": "630d962df4dc80c0cf8c5318c5804a0f"
  },
  {
    "url": "topics/ux/workflows/lesson-plan.html",
    "revision": "51ca213fb53f567d9c0807e9dd46343e"
  },
  {
    "url": "topics/ux/workflows/moreUX.html",
    "revision": "c1826fac1a78a48a793f62f3433e14e6"
  },
  {
    "url": "topics/xml/index.html",
    "revision": "b05da3e21db4cde898759212fae38a3f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
