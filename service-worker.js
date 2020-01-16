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
    "revision": "5bd8621c22d95479a9171df046f0e649"
  },
  {
    "url": "about/bootstrapInVS2013.html",
    "revision": "efe46e81fb0a1e009f30bd5ddcc5000a"
  },
  {
    "url": "about/index.html",
    "revision": "255fca5f6031c1d53f4032104476625b"
  },
  {
    "url": "about/LOGs.html",
    "revision": "e5c63bfcf1ae3d1dfdcaab6e76472f28"
  },
  {
    "url": "about/resources.html",
    "revision": "fb70dbc9404663d924a4e461d49a870e"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "about/troubleshoot.html",
    "revision": "4ffec831513c985a80da267df5ed9a5c"
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
    "url": "assets/js/12.7479e571.js",
    "revision": "a7dfe706b30dd0912679ddc0517625eb"
  },
  {
    "url": "assets/js/13.1af358d5.js",
    "revision": "9f1eee37993a08c3ed37b9b0a1ef1ed2"
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
    "url": "assets/js/16.c481cd06.js",
    "revision": "5aa133b7b406b925ec46f5edf78d731f"
  },
  {
    "url": "assets/js/17.f22b678e.js",
    "revision": "081dd5012773f90fa31b08d0d1e03943"
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
    "url": "assets/js/21.73142d63.js",
    "revision": "6852578bd781c98d620d19832b090e76"
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
    "url": "assets/js/26.6dfa910c.js",
    "revision": "307a6cc999deba4501948c878fde77aa"
  },
  {
    "url": "assets/js/27.0bfe25e7.js",
    "revision": "6a3b5297cf76732904d80fcd984859d8"
  },
  {
    "url": "assets/js/28.a273d51d.js",
    "revision": "fab8bac1f396a86102e2ade99d92224e"
  },
  {
    "url": "assets/js/29.f67dd159.js",
    "revision": "3eb4abd25206afb2da256bf7d40319e8"
  },
  {
    "url": "assets/js/3.c3fec701.js",
    "revision": "1cda2eaa6142e5d86d2eeb27816f6edf"
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
    "url": "assets/js/33.1df9d3e6.js",
    "revision": "4630309be7a715afb7740abf278bc40e"
  },
  {
    "url": "assets/js/34.25bf086d.js",
    "revision": "e197c95f188768489fce37a583e95afe"
  },
  {
    "url": "assets/js/35.e9d4f560.js",
    "revision": "fa0b57cec457672ca9ec7e6945287755"
  },
  {
    "url": "assets/js/36.7878e553.js",
    "revision": "a4ab58ea8aaa5e20fc4a34ce0dd16314"
  },
  {
    "url": "assets/js/37.96b58bf1.js",
    "revision": "c147ab7294962eb7400d98c000995ef1"
  },
  {
    "url": "assets/js/38.753d40dd.js",
    "revision": "edd7de168f7fc9a128a734d5fc31e755"
  },
  {
    "url": "assets/js/39.89eec30c.js",
    "revision": "6fce99ac6a5accfd1eb3af62189026f1"
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
    "url": "assets/js/45.4f3fe42c.js",
    "revision": "3d0aa22ef64ea1a524b6ca2234a7a3f0"
  },
  {
    "url": "assets/js/46.8c49a2f3.js",
    "revision": "6e61ae6921bd4f96a130a0dc1fc70265"
  },
  {
    "url": "assets/js/47.a6a8e9f5.js",
    "revision": "2e8ad2409b50550e513186b8f5626232"
  },
  {
    "url": "assets/js/48.3da5381b.js",
    "revision": "3ee34b175cea65a051336f3bdfc61137"
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
    "url": "assets/js/58.0d04e843.js",
    "revision": "a1949193a00a0d776108fe67f1298005"
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
    "url": "assets/js/74.85e77b2e.js",
    "revision": "1566725066e5c8be9c63561920b11ca0"
  },
  {
    "url": "assets/js/75.5a4a7850.js",
    "revision": "0b9feceb8b593dcebe0de03fdb5b9b21"
  },
  {
    "url": "assets/js/76.d1b9eb63.js",
    "revision": "e55801f71fe9f4a04c5b710af38e7163"
  },
  {
    "url": "assets/js/77.f3485cb2.js",
    "revision": "19e710d4b939bc9bbbda83d58bb5fc27"
  },
  {
    "url": "assets/js/78.0330c829.js",
    "revision": "b2edabe88e6cbfe2a69e717452bd1729"
  },
  {
    "url": "assets/js/79.0654aee5.js",
    "revision": "11e6ccd913a0d356a4b44c72ca71e83b"
  },
  {
    "url": "assets/js/8.6d97d24a.js",
    "revision": "5f9035fac1e446e6b0ecda1be1932f1d"
  },
  {
    "url": "assets/js/80.ce061dff.js",
    "revision": "42ba6bfc2aa02e1c3b075652f98ec9be"
  },
  {
    "url": "assets/js/81.5043053f.js",
    "revision": "1184f3fc390991a135ed0202eece17af"
  },
  {
    "url": "assets/js/82.27cd0bc9.js",
    "revision": "bf032e10055594c47c148522c21f59a6"
  },
  {
    "url": "assets/js/83.06a5f1d7.js",
    "revision": "43c8a30da76c0438c1e5ce4805bed504"
  },
  {
    "url": "assets/js/84.00e32e47.js",
    "revision": "0f81d96e22816d05cc5458eb7e8964b9"
  },
  {
    "url": "assets/js/85.c64a9a73.js",
    "revision": "ca90f3216d93c0604ca382545bd9f657"
  },
  {
    "url": "assets/js/86.bbc424b8.js",
    "revision": "c46343136702e1453227b9e96279596d"
  },
  {
    "url": "assets/js/87.93714f20.js",
    "revision": "83c189b4814e8a2bd90346ba30c1db73"
  },
  {
    "url": "assets/js/88.9c0137c3.js",
    "revision": "4c1c6c1723fac0b72d4b0ed928ecefaa"
  },
  {
    "url": "assets/js/89.39bab851.js",
    "revision": "85a243af1d691c1d25bdac5c3fd43306"
  },
  {
    "url": "assets/js/9.71ae525f.js",
    "revision": "2f11ce604658b92ed2a2206558cfd9a6"
  },
  {
    "url": "assets/js/90.e8139453.js",
    "revision": "e915f7223104509b048ef44402d57863"
  },
  {
    "url": "assets/js/91.2c95cf6d.js",
    "revision": "0918663a36cec4b85cae715074175a90"
  },
  {
    "url": "assets/js/92.8454d514.js",
    "revision": "8cd34e1218e647e371f468d2fa6f8268"
  },
  {
    "url": "assets/js/93.8bc05ed1.js",
    "revision": "e542483cc90f47888f7cae95cd1f2542"
  },
  {
    "url": "assets/js/94.850b87e5.js",
    "revision": "d7464b3afd13e6d305f79924bebd0049"
  },
  {
    "url": "assets/js/app.4e250134.js",
    "revision": "a23cc618fe7b87eb55a7b8f704dace0a"
  },
  {
    "url": "demos/Chinook/entityDemo.html",
    "revision": "555d5b8afa502df6dad09921563fd058"
  },
  {
    "url": "demos/Chinook/index.html",
    "revision": "3d49118801903cd0844938c9e1aad81b"
  },
  {
    "url": "demos/eRestaurant/about/index.html",
    "revision": "cea4d94eccafe8f135e97d5da20a3357"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminController.html",
    "revision": "23cf109476710638ed22d98c7b772a99"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminSpecialEvents.html",
    "revision": "56cd3b2bfe667a6f8b07fc06481bf32a"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/bootstrapStyle.html",
    "revision": "aa44814cec4a5a9636c195cd4d41969d"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/menu.html",
    "revision": "856577d337c5226a32f1df19f7055ce6"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/occupiedTables.html",
    "revision": "9f67643226f8b186657ee2229a3e5be4"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/queryString.html",
    "revision": "38b592869fc4ca0c89b9644f241a569a"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/reservations.html",
    "revision": "5e7d0396642742f2b2301f7622ae6098"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/fakeDateTime.html",
    "revision": "f01507c5662b3eca51b17085ffee3414"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/messageUserControl.html",
    "revision": "4f090a69902efe6092b5c43ded8ae819"
  },
  {
    "url": "demos/eRestaurant/businessRules/businessRuleException.html",
    "revision": "36274ebd08dd869a70cff4f929863fe8"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingReservations.html",
    "revision": "57ed3d9d8679e805bf9428151f55428b"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingWalkIns.html",
    "revision": "2cf2a7f3f28d5947c27005df5165d81b"
  },
  {
    "url": "demos/eRestaurant/dvcs/demo.html",
    "revision": "1c0941191bff7aa9733c291f8a229d5a"
  },
  {
    "url": "demos/eRestaurant/entityFramework/demo/demo.html",
    "revision": "8b15618887f547286e8ce7a4fd4f9cc4"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice-solution.html",
    "revision": "21dc8ea8b082c4f9d71a587a34edfa68"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice.html",
    "revision": "e70069e999d26abf1b47ba79eb6aeffe"
  },
  {
    "url": "demos/eRestaurant/index.html",
    "revision": "51d05bb793b7f721df58389cdc484680"
  },
  {
    "url": "demos/eRestaurant/linq/extensions.html",
    "revision": "6dc9782318a70b3214742e04e0b0e697"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/occupiedTables.html",
    "revision": "dd1c9a0e11e688880cb8121e33404eab"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/reservations.html",
    "revision": "1174830e8877d7e74846c0c9fbd1936d"
  },
  {
    "url": "demos/eRestaurant/linq/index.html",
    "revision": "727f47f2cdbf79b75c8831ea490a5894"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/expressions.html",
    "revision": "82246737c65129d90dbb5346d89126e7"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/program.html",
    "revision": "eab85b5a4d7cbf3b2ae1cb68ab37cbdf"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/statements.html",
    "revision": "43fae0caad2cd81fe45dd4d6b64b7df1"
  },
  {
    "url": "demos/eRestaurant/linq/practice.html",
    "revision": "23418f55644ba46f03eed146d18c8f43"
  },
  {
    "url": "demos/eRestaurant/reports/customizing/index.html",
    "revision": "3fe2aee112a1c61872e7df48fe59d5a2"
  },
  {
    "url": "demos/eRestaurant/reports/reportViewer/index.html",
    "revision": "1a63d93a93ce5bba32259e12df9218e2"
  },
  {
    "url": "demos/eRestaurant/security/demo.html",
    "revision": "fb2b61ca9c87a9499aa56eaf15a56f13"
  },
  {
    "url": "demos/eRestaurant/sitemaps/demo2.html",
    "revision": "4e1b77784ebe59a4bb8168bb82c4bdd1"
  },
  {
    "url": "demos/eRestaurant/testing/manual.html",
    "revision": "2ca8735515e6b88f34a254b9a4495aba"
  },
  {
    "url": "demos/eRestaurant/ux/frontDesk/index.html",
    "revision": "d59e7ede87438374d93746bd49c68e19"
  },
  {
    "url": "demos/index.html",
    "revision": "7cce4b3dfa6b6a842d077eb619c1b14c"
  },
  {
    "url": "demos/Northwind/CustomerOrders/Design.html",
    "revision": "02611e875bc91ede44859ff71f418522"
  },
  {
    "url": "demos/Northwind/CustomerOrders/index.html",
    "revision": "19ba9b11104f4310eed59e84dff53280"
  },
  {
    "url": "demos/Northwind/index.html",
    "revision": "c18b7a738a2eddeb1575e0a0fd634408"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/expressions.html",
    "revision": "1ceebe4ff13ef82aa02220560e74d4f9"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/program.html",
    "revision": "2c0a5773d15f896c77481301a40bd7ae"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/statements.html",
    "revision": "509e6d3dceb32b92550deabcb573a1ca"
  },
  {
    "url": "demos/Northwind/Security/index.html",
    "revision": "05e3eb6ce5fcafeaac7f8ffa3104809a"
  },
  {
    "url": "exercises/dvcs.html",
    "revision": "ca2590969a56a620d0900a5eca387dcb"
  },
  {
    "url": "exercises/ef.html",
    "revision": "3ed04b426f94933d873330cde3ef8a04"
  },
  {
    "url": "exercises/index.html",
    "revision": "a7106999241bfe3e9888939a13bfc448"
  },
  {
    "url": "exercises/linq.html",
    "revision": "d16a2b0cda7a7c19e802df6b577e6961"
  },
  {
    "url": "exercises/oltp.html",
    "revision": "f141ae6f5c7b0123526df9804736d6e2"
  },
  {
    "url": "exercises/planning.html",
    "revision": "8fe631f1e68772da5c1ac167fde3e26c"
  },
  {
    "url": "exercises/reporting.html",
    "revision": "85d62e41dc6dd3eb99383147f8a8c6d0"
  },
  {
    "url": "exercises/reports/install_ssdt.html",
    "revision": "ecab0cc85668371280c69d9bbecf9962"
  },
  {
    "url": "exercises/WorkSchedule/EntityFramework/index.html",
    "revision": "d03a458afa3a70860a2b68d2e33636f2"
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
    "revision": "8328666ba8a8603c6eeac8929e583ac9"
  },
  {
    "url": "logs/index.html",
    "revision": "e990279d84065a81df138030363e1801"
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
    "revision": "6afa4db3fc396fe8ef63ed306c8c868b"
  },
  {
    "url": "topics/aspNet/assortedWebForms.html",
    "revision": "4ea52a7268848b013201d831e6435442"
  },
  {
    "url": "topics/aspNet/databound/detailsviewOverview.html",
    "revision": "3f8fb918524265584fa359f5eec1ca31"
  },
  {
    "url": "topics/aspNet/databound/gridviewCustomization.html",
    "revision": "a8d030055db85b15f61639cc881bd9e0"
  },
  {
    "url": "topics/aspNet/databound/gridviewOverview.html",
    "revision": "ac64e3f4ff63c7c6e52230b4578a2c50"
  },
  {
    "url": "topics/aspNet/databound/index.html",
    "revision": "0cb1d0e332ac32844b4fb32472d456e5"
  },
  {
    "url": "topics/aspNet/databound/listviewOverview.html",
    "revision": "ebdcab5b4a2a24a6af912ff5cb01838a"
  },
  {
    "url": "topics/aspNet/databound/repeaterOverview.html",
    "revision": "8aa0a82b05bd0561bad91d975ccabb55"
  },
  {
    "url": "topics/aspNet/errorHandling.html",
    "revision": "50aba1d7e262fad151b05ca5fb3d6600"
  },
  {
    "url": "topics/aspNet/userControls.html",
    "revision": "38c34501c5dc0b0d2b9e8002594f6d85"
  },
  {
    "url": "topics/cqrs/index.html",
    "revision": "10582081fab2f10024b8d96c5f0f0b22"
  },
  {
    "url": "topics/dvcs/conflicts/index.html",
    "revision": "af410476b7f62856ac4b2ab738122035"
  },
  {
    "url": "topics/dvcs/gh4w.html",
    "revision": "3ae522ebaee4cb19edff76956008bc72"
  },
  {
    "url": "topics/dvcs/index.html",
    "revision": "0396362846f577785e9f09e274c8898c"
  },
  {
    "url": "topics/entityFramework/index.html",
    "revision": "1413c330dd33dd5b97bcee7add1cf709"
  },
  {
    "url": "topics/index.html",
    "revision": "eb72d8bb0e175460e41f0b8d707bd378"
  },
  {
    "url": "topics/linq/index.html",
    "revision": "c2cd36661f514e2aefc682ca7a3b4ae0"
  },
  {
    "url": "topics/linq/lambda.html",
    "revision": "3e7db8e04e92062e83adf711cc03afcf"
  },
  {
    "url": "topics/reports/ssdt.html",
    "revision": "76fc91166e9e7fbed3cdbd54fc80fc71"
  },
  {
    "url": "topics/security/aspNetIdentity.html",
    "revision": "c3887190f461fdc3e5d79cbd5cdb399d"
  },
  {
    "url": "topics/security/IdentityConfig.html",
    "revision": "86b31c9f47f757d522221fffd6fb7b13"
  },
  {
    "url": "topics/security/IdentityModels.html",
    "revision": "17048ea775f7b51be6d9a237e5991d0f"
  },
  {
    "url": "topics/security/index.html",
    "revision": "0ba7b74c089e30ee4855dcb737fed6c3"
  },
  {
    "url": "topics/security/vs2017wap.html",
    "revision": "7d04d07cdf5026ff0016b85f83388885"
  },
  {
    "url": "topics/sitemaps/index.html",
    "revision": "204512244430613a250aba86bedaa13d"
  },
  {
    "url": "topics/ux/index.html",
    "revision": "f4244f69eb5d25d62a9ba83f09614dd0"
  },
  {
    "url": "topics/ux/workflows/index.html",
    "revision": "0c323c874401f3f0ca1aafb9542d9f87"
  },
  {
    "url": "topics/ux/workflows/lesson-plan.html",
    "revision": "7e3c5d4462034fc082aa41b40ce94326"
  },
  {
    "url": "topics/ux/workflows/moreUX.html",
    "revision": "5aa69cdb35aa7552d9d2fbc120185e7e"
  },
  {
    "url": "topics/xml/index.html",
    "revision": "1f5a40e2213fb02c5f0861da3806378b"
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
