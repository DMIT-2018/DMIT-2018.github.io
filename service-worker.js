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
    "revision": "39be4756784a927cd2139941b74d5b43"
  },
  {
    "url": "about/bootstrapInVS2013.html",
    "revision": "d9efcf722f5354bfb7b70aeccf1e0f2e"
  },
  {
    "url": "about/index.html",
    "revision": "b6cbbb1db9b98e5db55cf38d12bc4754"
  },
  {
    "url": "about/LOGs.html",
    "revision": "70f5628353e6045ef6dd90e9a428488a"
  },
  {
    "url": "about/resources.html",
    "revision": "d2efd5da8409ca65ba8fabf4e3de2dc5"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "about/troubleshoot.html",
    "revision": "7c3b9998e8978c95984e9b6b0c2a0cb7"
  },
  {
    "url": "assets/css/0.styles.63ac02b4.css",
    "revision": "cf7d6b6ed734f5926c99fbeccd93137a"
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
    "url": "assets/js/1.19f387cf.js",
    "revision": "9c8611a937983671cecdced23dd2b1a2"
  },
  {
    "url": "assets/js/10.e6446f11.js",
    "revision": "061f790d3e0941f463c1481f91cb10d1"
  },
  {
    "url": "assets/js/11.57c8ea6e.js",
    "revision": "11bddea83ce905db58f65519c671b47d"
  },
  {
    "url": "assets/js/12.a21faf4f.js",
    "revision": "a05fc21f14660bf6c88768ab0ca636f3"
  },
  {
    "url": "assets/js/13.25ef330d.js",
    "revision": "4152a8667142e156842848172ba8bea0"
  },
  {
    "url": "assets/js/14.08f91bb3.js",
    "revision": "82162ba4e350b9cd6e5ca47f03a965f4"
  },
  {
    "url": "assets/js/15.2885c65d.js",
    "revision": "954584010c4308806acf45be675846d5"
  },
  {
    "url": "assets/js/16.96427d91.js",
    "revision": "b3654df55baf3c8ad4dd0b6088fedc41"
  },
  {
    "url": "assets/js/17.71d450ca.js",
    "revision": "7bae69d4e69b56881384bddf73f57899"
  },
  {
    "url": "assets/js/18.f24cb30a.js",
    "revision": "17a72172c1f15ce24c8d14d9ac01e24c"
  },
  {
    "url": "assets/js/19.dab49227.js",
    "revision": "21a1119c70973aa8296cd82b29ecddeb"
  },
  {
    "url": "assets/js/2.dc4a1cb5.js",
    "revision": "f05b83bee259e66eed396984df6a9eab"
  },
  {
    "url": "assets/js/20.8aec7c97.js",
    "revision": "ee2cd0023ac2c7b430c34bf69bf8d20b"
  },
  {
    "url": "assets/js/21.34f8c61d.js",
    "revision": "c7c7d5bea659dac0063865aa60738046"
  },
  {
    "url": "assets/js/22.137b2093.js",
    "revision": "45a9775746c6da633873a6c88f191351"
  },
  {
    "url": "assets/js/23.760d92b7.js",
    "revision": "eda327d570ca0dd5356cbb38d31c78c6"
  },
  {
    "url": "assets/js/24.6ec22df9.js",
    "revision": "409005c496d526c49e6f19821137d23a"
  },
  {
    "url": "assets/js/25.d39d3d65.js",
    "revision": "809d1c4a550d91f7449b682c64bf1490"
  },
  {
    "url": "assets/js/26.8c8fc5cc.js",
    "revision": "419b1df47defd01548c6432d574337e6"
  },
  {
    "url": "assets/js/27.6c35433b.js",
    "revision": "28bc1caecdc2c657ab5af1789e641265"
  },
  {
    "url": "assets/js/28.df5e9d9f.js",
    "revision": "5491c908633ec326339bf8cd5c0444dd"
  },
  {
    "url": "assets/js/29.5ad056af.js",
    "revision": "1ecf94df7f69a3052d19175ed33fdd38"
  },
  {
    "url": "assets/js/3.e617e580.js",
    "revision": "c1df94ce0140145c34c143063cae2660"
  },
  {
    "url": "assets/js/30.69444788.js",
    "revision": "ae5d45ad52003f0c4506a7c446df7eba"
  },
  {
    "url": "assets/js/31.9451e9c6.js",
    "revision": "c07a8793def0f48940af64b2034b9264"
  },
  {
    "url": "assets/js/32.5128c6bb.js",
    "revision": "49cd29ba86ca15c372ff9f716bf35edc"
  },
  {
    "url": "assets/js/33.884c098c.js",
    "revision": "9de276d56c35748e5a4a68458e96ea69"
  },
  {
    "url": "assets/js/34.c00b9702.js",
    "revision": "d045e5e2677a9b5ca1ff310bbe888ca0"
  },
  {
    "url": "assets/js/35.acaff00b.js",
    "revision": "ebff39dd38ec4f92b5579e5a9cd6703e"
  },
  {
    "url": "assets/js/36.feb5b480.js",
    "revision": "d6d82d394713fd00ec1bb8257a03bd7f"
  },
  {
    "url": "assets/js/37.471b70ff.js",
    "revision": "d8aaf06a259f55f4c4ba516465e1d4db"
  },
  {
    "url": "assets/js/38.8f969eeb.js",
    "revision": "28fff5523a026cf5bc3f004b4295d708"
  },
  {
    "url": "assets/js/39.ed9657d7.js",
    "revision": "2effc8cde60a6b74f7302754003a5edc"
  },
  {
    "url": "assets/js/4.cb1f899d.js",
    "revision": "bb253e0945fb08feda2fcbcbe6d26e9f"
  },
  {
    "url": "assets/js/40.5a62ba82.js",
    "revision": "b363dba271f841fdec22f5dd5b39efc3"
  },
  {
    "url": "assets/js/41.4276cfb5.js",
    "revision": "56d167a0b51c8fa153510cd497bf4471"
  },
  {
    "url": "assets/js/42.aa925a9e.js",
    "revision": "0355968bbb3a1791c6fd72ee9b0fb936"
  },
  {
    "url": "assets/js/43.a03a6d4c.js",
    "revision": "bc9cdb2141841d5110f7c68ba945458e"
  },
  {
    "url": "assets/js/44.e5b49376.js",
    "revision": "750fcbc91d05d3fb7664bc35fa7e91a8"
  },
  {
    "url": "assets/js/45.a213000f.js",
    "revision": "0bb2918b3f1007edce3a4876dcdd0f0d"
  },
  {
    "url": "assets/js/46.b86df0a6.js",
    "revision": "6b9b1d94a5413684db5efb46e769f46e"
  },
  {
    "url": "assets/js/47.c7d52dd9.js",
    "revision": "835d91fe4ddf8df36e43ca349a4af1cc"
  },
  {
    "url": "assets/js/48.ca0ab276.js",
    "revision": "472c08af49feb7289903f0cf76e14e99"
  },
  {
    "url": "assets/js/49.55f3d815.js",
    "revision": "c27809fb8ca6f53969fbc4df0beba9b3"
  },
  {
    "url": "assets/js/5.8fd5051c.js",
    "revision": "81f9e9d91b30b95416deb4c53b70b94e"
  },
  {
    "url": "assets/js/50.2ab5d65f.js",
    "revision": "3bc273f7a6184e2e487372f34b321c66"
  },
  {
    "url": "assets/js/51.06f4f73f.js",
    "revision": "4fa25b236b5206b63adb34af6eb4e0ca"
  },
  {
    "url": "assets/js/52.ca154bfa.js",
    "revision": "492cd6252eec89cee5652ba7ba5365fd"
  },
  {
    "url": "assets/js/53.3e57eca7.js",
    "revision": "cbf08187d83733857d6847cfd5f1d551"
  },
  {
    "url": "assets/js/54.0f766c61.js",
    "revision": "de93c84909d895c557663dc8b8222b14"
  },
  {
    "url": "assets/js/55.db331a2d.js",
    "revision": "eb57994f147bf043ddd782af85855e4e"
  },
  {
    "url": "assets/js/56.2f68dd3a.js",
    "revision": "a5e2a6ec870c4acb82371c56f622ec10"
  },
  {
    "url": "assets/js/57.38545007.js",
    "revision": "e28c527e3f782476c5ba0fab9b097ed9"
  },
  {
    "url": "assets/js/58.0d423db1.js",
    "revision": "547b390a2cc9b135067d3a1731ed3d6d"
  },
  {
    "url": "assets/js/59.39ef5abc.js",
    "revision": "5cd161b96e9239cece87cf0e09695394"
  },
  {
    "url": "assets/js/6.a1e35f81.js",
    "revision": "5438426d114eb83f4d12105aa679a359"
  },
  {
    "url": "assets/js/60.70e7d295.js",
    "revision": "48e784a37e0c4e358eeb69112d23644b"
  },
  {
    "url": "assets/js/61.d926740f.js",
    "revision": "4580c4c77b6b2e45044b489a9a42d49e"
  },
  {
    "url": "assets/js/62.5cb53b4e.js",
    "revision": "61b63b3b8e1535fa78ceb51454445778"
  },
  {
    "url": "assets/js/63.da38cb9d.js",
    "revision": "4966e86671b746dea23852995a1636bb"
  },
  {
    "url": "assets/js/64.ab349050.js",
    "revision": "ea2cdbf3492cd43ba8216e4c72d46694"
  },
  {
    "url": "assets/js/65.111b220a.js",
    "revision": "0662824fb6a9d8094d9c94997f710367"
  },
  {
    "url": "assets/js/66.7c340f1d.js",
    "revision": "24ad42005ddd0327b2dd84cf4be15258"
  },
  {
    "url": "assets/js/67.887f2e96.js",
    "revision": "397169fd2256cfd27bbb36300a653f6b"
  },
  {
    "url": "assets/js/68.b74c5db0.js",
    "revision": "1ffb96a7e8d288f4c4ce993aac52f7fd"
  },
  {
    "url": "assets/js/69.5808166a.js",
    "revision": "1e67f2197f639ab30242b18091eb6bc1"
  },
  {
    "url": "assets/js/7.8725f677.js",
    "revision": "af08b68d0cd47b70f2dc60f554d5efc9"
  },
  {
    "url": "assets/js/70.71aa06fd.js",
    "revision": "d7451a7b56c6d4fd9d11e495889eea4f"
  },
  {
    "url": "assets/js/71.859b816a.js",
    "revision": "cea27f1ef9da61a89d5a7871e5c9c6ef"
  },
  {
    "url": "assets/js/72.36a27561.js",
    "revision": "63c6b3a9be6ebf9bfeac494a161e443f"
  },
  {
    "url": "assets/js/73.c71c170c.js",
    "revision": "ecd223bb7fdd28c69730712cf5dafa18"
  },
  {
    "url": "assets/js/74.b0696056.js",
    "revision": "9923a7fdc02f4113b70a2400bf633560"
  },
  {
    "url": "assets/js/75.c5a516e3.js",
    "revision": "35a68675fa56c0d237ab2332b424169d"
  },
  {
    "url": "assets/js/76.b1544722.js",
    "revision": "8b4bce8d3804960c3b95afc8cd47df50"
  },
  {
    "url": "assets/js/77.fdc0129d.js",
    "revision": "7fc403c534f1c6a1b660f13485b6fbc6"
  },
  {
    "url": "assets/js/78.ffc1818d.js",
    "revision": "f59b79aa3e7d7aadfd158c1ce603cd2d"
  },
  {
    "url": "assets/js/79.43f5ed78.js",
    "revision": "cbd80715620fbcd47c0cd4e3b8e55680"
  },
  {
    "url": "assets/js/8.102f1891.js",
    "revision": "bed7522c9796f8d5c399d2e466033cff"
  },
  {
    "url": "assets/js/80.8271ef50.js",
    "revision": "498dc2ea510f2077b3a0153be0c0cae0"
  },
  {
    "url": "assets/js/81.2d360755.js",
    "revision": "0567b917f42fa0fc9aec62de7eadd3f6"
  },
  {
    "url": "assets/js/82.788b254c.js",
    "revision": "f7b13fd6ed03b04efa7fa8318ce2b106"
  },
  {
    "url": "assets/js/83.784611e4.js",
    "revision": "ca912b476a9cf0b114152f78f17a323d"
  },
  {
    "url": "assets/js/84.3ade902c.js",
    "revision": "17d001f3cbba5e243334bd0c19a7e69f"
  },
  {
    "url": "assets/js/85.ce2d0a30.js",
    "revision": "b213971b9740b774c01f7bcdddee2df3"
  },
  {
    "url": "assets/js/86.98ed3921.js",
    "revision": "d1ddbaba6c99a4ed4ca030af06aca59b"
  },
  {
    "url": "assets/js/87.421d78f8.js",
    "revision": "e1767a0ccb9e0cc7357eab8d2661c398"
  },
  {
    "url": "assets/js/88.df1adda2.js",
    "revision": "9adae39c8c852f689be0020f00bf792d"
  },
  {
    "url": "assets/js/89.2978d9fa.js",
    "revision": "a44593617436f5cdb8e8f2b6289257ca"
  },
  {
    "url": "assets/js/9.baf7008c.js",
    "revision": "3407f914260eb2365b1dea360f7c0d91"
  },
  {
    "url": "assets/js/90.56169062.js",
    "revision": "69c95f580675678b0b1b4f8e738b8b5c"
  },
  {
    "url": "assets/js/91.cf14b523.js",
    "revision": "adda9e9a3b63cd9f05ae55909243ce73"
  },
  {
    "url": "assets/js/92.6f166f0d.js",
    "revision": "202794da554a5d37203eb47e0d001def"
  },
  {
    "url": "assets/js/93.280fb900.js",
    "revision": "aa05a24cb8815ee83cc25d8dbed84db8"
  },
  {
    "url": "assets/js/app.b7a2797b.js",
    "revision": "3eb67426bdf9fb9da23042c2e78efb25"
  },
  {
    "url": "demos/Chinook/entityDemo.html",
    "revision": "c169f99ee5be69811a08e1d86a729156"
  },
  {
    "url": "demos/Chinook/index.html",
    "revision": "0c3d09df4a2be58ce4646fc77b90b004"
  },
  {
    "url": "demos/eRestaurant/about/index.html",
    "revision": "e6d7337347ca9ee30d8f15a4da1a237c"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminController.html",
    "revision": "4b281e41c22a3bb9a30c66ab8c1c759a"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminSpecialEvents.html",
    "revision": "777b57807cbc481564e9cdf19e20088c"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/bootstrapStyle.html",
    "revision": "a0b30989a6edc4d27497cb62416188ed"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/menu.html",
    "revision": "119030ac60cfb139fb3c311f30229e85"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/occupiedTables.html",
    "revision": "6d9b322870618239d80ff99e91eb9313"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/queryString.html",
    "revision": "f88015a1b03a184785e69e04009ca7f5"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/reservations.html",
    "revision": "67b46c1ef222add7cd369e48cdf8801e"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/fakeDateTime.html",
    "revision": "2aaa16747356713f73f4d98af2f0a647"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/messageUserControl.html",
    "revision": "708df8b8ede5eed90c874f052da9a3fc"
  },
  {
    "url": "demos/eRestaurant/businessRules/businessRuleException.html",
    "revision": "888647c118ef33022224f0d90e5b4832"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingReservations.html",
    "revision": "7ff192ec09d039fec690d4dcbd6b93a6"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingWalkIns.html",
    "revision": "1cad77bf3f748e4d0857e4b01fd8db2e"
  },
  {
    "url": "demos/eRestaurant/dvcs/demo.html",
    "revision": "f8ea1efae87ec59fb6e2608824b025e4"
  },
  {
    "url": "demos/eRestaurant/entityFramework/demo/demo.html",
    "revision": "48601fc2d76eaa6d9622cf94dc51b108"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice-solution.html",
    "revision": "41f729951651eaf907724a64e4c97a83"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice.html",
    "revision": "fa20a1aed582317dbc04850026e71dde"
  },
  {
    "url": "demos/eRestaurant/index.html",
    "revision": "838d0524f25291d266046bfbbc207cab"
  },
  {
    "url": "demos/eRestaurant/linq/extensions.html",
    "revision": "1fa860a708fad61935361c0728876cac"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/occupiedTables.html",
    "revision": "e460404b32a14fe9e06bb0247a0cf429"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/reservations.html",
    "revision": "1f1aa3067e9ec29bf21397dd036b6091"
  },
  {
    "url": "demos/eRestaurant/linq/index.html",
    "revision": "0f14f10f2df04b8d7f1f861abc27e33c"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/expressions.html",
    "revision": "e8a0a64365a9fc3c012249b187dfcc4e"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/program.html",
    "revision": "13c295444e10ec99047c0888c3c6a9e9"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/statements.html",
    "revision": "4028991eac89d918c0978cb2b2bae604"
  },
  {
    "url": "demos/eRestaurant/linq/practice.html",
    "revision": "42402a14d041bf9de100e1a5ed72626b"
  },
  {
    "url": "demos/eRestaurant/reports/customizing/index.html",
    "revision": "32e57bc187ac4d1a5e1581f802199475"
  },
  {
    "url": "demos/eRestaurant/reports/reportViewer/index.html",
    "revision": "2ca2558e4e393c8e543dfbefb57c0f10"
  },
  {
    "url": "demos/eRestaurant/security/demo.html",
    "revision": "6e597354a393f4da294d0bdfc7673017"
  },
  {
    "url": "demos/eRestaurant/sitemaps/demo2.html",
    "revision": "6bb813b1fec478c6f0a304af1972a383"
  },
  {
    "url": "demos/eRestaurant/testing/manual.html",
    "revision": "b898bcc6c0b838665fee7dccd955c336"
  },
  {
    "url": "demos/eRestaurant/ux/frontDesk/index.html",
    "revision": "ab5053bd042f4d0c38465f2f4fc8676a"
  },
  {
    "url": "demos/index.html",
    "revision": "fde7d008b1191a9e0b785ade82657cd8"
  },
  {
    "url": "demos/Northwind/CustomerOrders/Design.html",
    "revision": "4ae5106918b0ab3ad6a27fbc1526bc19"
  },
  {
    "url": "demos/Northwind/CustomerOrders/index.html",
    "revision": "a7f2ca33c5f0ec96cbeb79ef13d14061"
  },
  {
    "url": "demos/Northwind/index.html",
    "revision": "a42623263198e9c9c37cdee26dd583ea"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/expressions.html",
    "revision": "c398526ecfc23834d8228298defa0cda"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/program.html",
    "revision": "03ece73c8e4955c69ec4ab9e62d60866"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/statements.html",
    "revision": "474a0547f910706bccbf01d77e6f8c6b"
  },
  {
    "url": "demos/Northwind/Security/index.html",
    "revision": "ea29c02db356df096870ad526e186fd5"
  },
  {
    "url": "exercises/dvcs.html",
    "revision": "23479251aa9ffae7a8820e948901c961"
  },
  {
    "url": "exercises/ef.html",
    "revision": "d2061281084b704cc63b11836186e73b"
  },
  {
    "url": "exercises/index.html",
    "revision": "490dee32988d89935019c0f970286949"
  },
  {
    "url": "exercises/linq.html",
    "revision": "8f31cf5e310f72b338cdabaeec1d7918"
  },
  {
    "url": "exercises/oltp.html",
    "revision": "30d770b4704e5446c378b5dde6f26df9"
  },
  {
    "url": "exercises/planning.html",
    "revision": "4d9dc17b29bb34765d912662d99b6687"
  },
  {
    "url": "exercises/reporting.html",
    "revision": "4254430126c60bdae2402b2cb23f4512"
  },
  {
    "url": "exercises/reports/install_ssdt.html",
    "revision": "d5ef9609354dc35e8269a92792752ab9"
  },
  {
    "url": "exercises/WorkSchedule/EntityFramework/index.html",
    "revision": "32eb0e79b551ba2c71b6189b70dbb537"
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
    "revision": "63081dbdf8ee2685f140466fbaf95b90"
  },
  {
    "url": "logs/index.html",
    "revision": "01bc27e41a6450c4feea306783fda570"
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
    "revision": "9c5dd1f57e7ea8fd12f53ed97effdf67"
  },
  {
    "url": "topics/aspNet/assortedWebForms.html",
    "revision": "1e4a034e9d8dc16dc9854345a9264a7c"
  },
  {
    "url": "topics/aspNet/databound/detailsviewOverview.html",
    "revision": "91255c821868c4d6d4982f82e012d017"
  },
  {
    "url": "topics/aspNet/databound/gridviewCustomization.html",
    "revision": "c0bde88dd6c8d750fac12038ae6a994a"
  },
  {
    "url": "topics/aspNet/databound/gridviewOverview.html",
    "revision": "13007ef6e51b87cc892bba530c2d9863"
  },
  {
    "url": "topics/aspNet/databound/index.html",
    "revision": "ddf74df473d7cc7ffed8317385188f72"
  },
  {
    "url": "topics/aspNet/databound/listviewOverview.html",
    "revision": "be12d087032f90c8408e2bdbf315db47"
  },
  {
    "url": "topics/aspNet/databound/repeaterOverview.html",
    "revision": "b2b5451323fc52097a8cddb98148a8ec"
  },
  {
    "url": "topics/aspNet/errorHandling.html",
    "revision": "4d346d048faba22637855444fde8ec1b"
  },
  {
    "url": "topics/aspNet/userControls.html",
    "revision": "d3e063227e47d561acad05acea7bdeaa"
  },
  {
    "url": "topics/cqrs/index.html",
    "revision": "6d5b490df64cc8374e89a7f57d5c0555"
  },
  {
    "url": "topics/dvcs/conflicts/index.html",
    "revision": "c3b5ac040e5acee5d7b9abd7107c64c5"
  },
  {
    "url": "topics/dvcs/gh4w.html",
    "revision": "dd7c2beae52910fb9f67bda983a61207"
  },
  {
    "url": "topics/dvcs/index.html",
    "revision": "8525ec84ffe84b6b7b580c2d9403dbb9"
  },
  {
    "url": "topics/entityFramework/index.html",
    "revision": "1a3d631d2f70047539dce4be14961d15"
  },
  {
    "url": "topics/index.html",
    "revision": "5f4efbf803307546d5bdecbb13b0872b"
  },
  {
    "url": "topics/linq/index.html",
    "revision": "791c57183bffbe0520b17799657e3c09"
  },
  {
    "url": "topics/linq/lambda.html",
    "revision": "489e91643140d2d2cf4cd26354c65437"
  },
  {
    "url": "topics/reports/ssdt.html",
    "revision": "5e9c0bcee962d82a4ee32fde00860958"
  },
  {
    "url": "topics/security/aspNetIdentity.html",
    "revision": "a55fe004430e9f2ac944b95db0cc87d9"
  },
  {
    "url": "topics/security/IdentityConfig.html",
    "revision": "a3774917ccfe7816691798acc81769f0"
  },
  {
    "url": "topics/security/IdentityModels.html",
    "revision": "fce69b0e030f3a0a6ad058b6ba0f0cd3"
  },
  {
    "url": "topics/security/index.html",
    "revision": "6bc8fa30d60b244629a3ef9f4a51243f"
  },
  {
    "url": "topics/security/vs2017wap.html",
    "revision": "6eeacc93ac955a1b4c7f4edae63d66f4"
  },
  {
    "url": "topics/sitemaps/index.html",
    "revision": "3e2e3f9d6f6799458b384f95ba046090"
  },
  {
    "url": "topics/ux/index.html",
    "revision": "35b698d4a18358b4d39f864138845428"
  },
  {
    "url": "topics/ux/workflows/index.html",
    "revision": "f7bb2a72618d1cf80ac90a64369abae8"
  },
  {
    "url": "topics/ux/workflows/lesson-plan.html",
    "revision": "4aebdae7f44ff62b1dfdc4479efbae11"
  },
  {
    "url": "topics/ux/workflows/moreUX.html",
    "revision": "afe90d43a70f10c379eb5c6763f7a7ad"
  },
  {
    "url": "topics/xml/index.html",
    "revision": "60d9b0e1571298c5ddcf59261e4c3027"
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
