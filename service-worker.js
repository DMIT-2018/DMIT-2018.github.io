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
    "revision": "9e76e25093a52ec127c3cca89d7759f8"
  },
  {
    "url": "about/bootstrapInVS2013.html",
    "revision": "4c899015dd3afac2c0286374bfb6a692"
  },
  {
    "url": "about/index.html",
    "revision": "c7c1c1ad8647ebe9dbf7f8bcb4f9b21d"
  },
  {
    "url": "about/LOGs.html",
    "revision": "0a0a41c113b01f79432a9dde0f0228ca"
  },
  {
    "url": "about/resources.html",
    "revision": "a1f054f99d56d11df54f94a1efb5b1e7"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "about/troubleshoot.html",
    "revision": "24041f17b620bdb7a4e0c842835130d2"
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
    "url": "assets/js/1.560d7d9c.js",
    "revision": "f75da3cb1663d2f2fb53385fb947ff6d"
  },
  {
    "url": "assets/js/10.3a345716.js",
    "revision": "9e631ffe7022a572c46d70964fc31b97"
  },
  {
    "url": "assets/js/11.fb314b7e.js",
    "revision": "c566178b49efb8b57ad2433941106613"
  },
  {
    "url": "assets/js/12.7a1c9d08.js",
    "revision": "c935c27ede46181daa1df3e45537e07f"
  },
  {
    "url": "assets/js/13.9bd63b13.js",
    "revision": "ba316b5c289a0c50b60b34cdc1cc49d0"
  },
  {
    "url": "assets/js/14.e7f87cd5.js",
    "revision": "dd9c72b442a75c5b4d4b1546ad6982fb"
  },
  {
    "url": "assets/js/15.0acbbcbf.js",
    "revision": "ca0b7fbcfe8e5f42bb6e673566b82547"
  },
  {
    "url": "assets/js/16.feaa74a6.js",
    "revision": "5ae3f101621fe998c3e4a35ff1ee281a"
  },
  {
    "url": "assets/js/17.b2ca9a15.js",
    "revision": "f5209ca6bc77972d83c1700a5f43d7d9"
  },
  {
    "url": "assets/js/18.be4132d8.js",
    "revision": "f63b26718922507e507c8c00c00da031"
  },
  {
    "url": "assets/js/19.da047e11.js",
    "revision": "5fd72633a05d0e8859611f72690d2264"
  },
  {
    "url": "assets/js/2.b3035573.js",
    "revision": "53815cd72ceff934ed046635b8a57f86"
  },
  {
    "url": "assets/js/20.e5fe6ac1.js",
    "revision": "f171707f79c067a775f8c5d8de29a51c"
  },
  {
    "url": "assets/js/21.5f0a2641.js",
    "revision": "dad50d9e690bbdc14741023401fa010e"
  },
  {
    "url": "assets/js/22.c3c3ab1f.js",
    "revision": "50a622644d9f7890e9da86ef2cc93000"
  },
  {
    "url": "assets/js/23.2cd7729f.js",
    "revision": "a4c769edd9df5eefbe95a57c689d2318"
  },
  {
    "url": "assets/js/24.cacda92d.js",
    "revision": "22d763d5c8f4ae532e50a1a9ba9b7fca"
  },
  {
    "url": "assets/js/25.5389b867.js",
    "revision": "57e81ece22b20e70f0bfb67cc3815451"
  },
  {
    "url": "assets/js/26.f0aaefc5.js",
    "revision": "5880d330b47903c8fec8f98ab92604e4"
  },
  {
    "url": "assets/js/27.3a35cde6.js",
    "revision": "9290815167016401b8d01eacd206ee4f"
  },
  {
    "url": "assets/js/28.c339cb7d.js",
    "revision": "73dc54b859dcd21d28a4af36fb9a510f"
  },
  {
    "url": "assets/js/29.523c2020.js",
    "revision": "af63004c1ed204e92f32bef90c5a393b"
  },
  {
    "url": "assets/js/3.939af7c8.js",
    "revision": "644ee63164338f8a4f99dbdc55ec4e65"
  },
  {
    "url": "assets/js/30.a1fb20e5.js",
    "revision": "075afe39aa57bd2ffc0367a07007a351"
  },
  {
    "url": "assets/js/31.4edc94ed.js",
    "revision": "04416f9b72b5e0f66d03882f08579613"
  },
  {
    "url": "assets/js/32.fd0d4454.js",
    "revision": "0a81df9e0b198aa426ef73fe7cdb84cd"
  },
  {
    "url": "assets/js/33.f012ab48.js",
    "revision": "6421c0c515ef45da2d566b982d83fc28"
  },
  {
    "url": "assets/js/34.94627228.js",
    "revision": "e2c218b53485ab43740dc559fd63e4f1"
  },
  {
    "url": "assets/js/35.da794e09.js",
    "revision": "66711a1c57cabea1cf106f6d9be5abef"
  },
  {
    "url": "assets/js/36.def373e8.js",
    "revision": "ebcc2fb628dc0aaf2c66296dd0b7fff3"
  },
  {
    "url": "assets/js/37.4c26cd15.js",
    "revision": "648427077d11cc1bcde4f8caff5d514a"
  },
  {
    "url": "assets/js/38.a59f2b9e.js",
    "revision": "937ef8360b88671022af37879e3b55b9"
  },
  {
    "url": "assets/js/39.1eaf93f0.js",
    "revision": "bbd9b6f971605214e4002fcdd94d7c2b"
  },
  {
    "url": "assets/js/4.cb1f899d.js",
    "revision": "bb253e0945fb08feda2fcbcbe6d26e9f"
  },
  {
    "url": "assets/js/40.d773c981.js",
    "revision": "43b6258d2362b0996b5c521704c85bbc"
  },
  {
    "url": "assets/js/41.bf2f0280.js",
    "revision": "85795ec123f2731621919ec04bff2ddc"
  },
  {
    "url": "assets/js/42.155a70cc.js",
    "revision": "ace8fa14d8c99aec8d0dabf6a31ea2b5"
  },
  {
    "url": "assets/js/43.710953d3.js",
    "revision": "7c70229a97d0208b47da2d16aa1ff01d"
  },
  {
    "url": "assets/js/44.57646831.js",
    "revision": "ff235e6a2184a039c1e9563c19ddfb33"
  },
  {
    "url": "assets/js/45.d22db543.js",
    "revision": "b42e644693847a470c5c112ac50eb109"
  },
  {
    "url": "assets/js/46.cd956bca.js",
    "revision": "a5871e998f1e3a602d1ba504ec87ae41"
  },
  {
    "url": "assets/js/47.1f67bc16.js",
    "revision": "90100d839fc329e39be6479a9b94d61a"
  },
  {
    "url": "assets/js/48.c80db11a.js",
    "revision": "8dfdfd2d584ea1086ed555b1fe40d050"
  },
  {
    "url": "assets/js/49.661cba8a.js",
    "revision": "dcc55b5bef59633469367e6cb0c2b949"
  },
  {
    "url": "assets/js/5.dcdb0e7e.js",
    "revision": "e4af28a76f3849768b2a80604a66ea18"
  },
  {
    "url": "assets/js/50.fdccb104.js",
    "revision": "a7bef2d8322ba705b99a434cff7047d3"
  },
  {
    "url": "assets/js/51.807e1bb1.js",
    "revision": "455d44fbd6447c23ae494616ffcd5fff"
  },
  {
    "url": "assets/js/52.29decb40.js",
    "revision": "ad6e3f72caac44f22b5ae189f701f424"
  },
  {
    "url": "assets/js/53.5cee6a17.js",
    "revision": "e98963dd30c8de05868ea2312d32a177"
  },
  {
    "url": "assets/js/54.67ac9c8d.js",
    "revision": "3a0c8459a639199d3e7b85752df4e646"
  },
  {
    "url": "assets/js/55.801d3868.js",
    "revision": "12fff6fb6efa0c94bc624722315ec70f"
  },
  {
    "url": "assets/js/56.14a439fd.js",
    "revision": "7af6c7e9bfedb60765c250769f93a74b"
  },
  {
    "url": "assets/js/57.18916d24.js",
    "revision": "a7998430984f1b38769c94098f7813c2"
  },
  {
    "url": "assets/js/58.ad82a66f.js",
    "revision": "0e4014f97354ab2a98622b80a56b7f7f"
  },
  {
    "url": "assets/js/59.0456ec6a.js",
    "revision": "cab75e5269fdc19cd6c1a33b4a197397"
  },
  {
    "url": "assets/js/6.a5abac4f.js",
    "revision": "0ad6dda5dd574e6a8d6991c0764e4beb"
  },
  {
    "url": "assets/js/60.58681ccf.js",
    "revision": "f59079ad27e363dad5298760345589e6"
  },
  {
    "url": "assets/js/61.5bd96b4c.js",
    "revision": "7b7bf3cd00d007161201970d1fc12a3f"
  },
  {
    "url": "assets/js/62.4e94f25d.js",
    "revision": "74f7bf70974983193b19a9cf0bff9065"
  },
  {
    "url": "assets/js/63.b8c74375.js",
    "revision": "311fbc8f0bff156e621056bca670f1ea"
  },
  {
    "url": "assets/js/64.2d140f0f.js",
    "revision": "316fa5c119ce7cff73ec1782bfc9a451"
  },
  {
    "url": "assets/js/65.d0313852.js",
    "revision": "dcd05ab1bd524290e4e14310f8df07b1"
  },
  {
    "url": "assets/js/66.27f59f6c.js",
    "revision": "45dcfaa73e90eec4e0654215856e26ea"
  },
  {
    "url": "assets/js/67.b6e78e36.js",
    "revision": "2e1ae16420a4d4762a16c5daa37aa2b8"
  },
  {
    "url": "assets/js/68.072279b3.js",
    "revision": "e7983024519bceec9b11056b455ed84a"
  },
  {
    "url": "assets/js/69.6ee039b3.js",
    "revision": "12aebdcf2666ae5ac78be87d1930ae7a"
  },
  {
    "url": "assets/js/7.3c8dc4cf.js",
    "revision": "2fe47e16dd5820de1a8e9ef69f986082"
  },
  {
    "url": "assets/js/70.b4c6445e.js",
    "revision": "03a8fc689cc66d3556ac64e219a3c007"
  },
  {
    "url": "assets/js/71.1c444632.js",
    "revision": "3d4552fd5c79f241823755516a1580ac"
  },
  {
    "url": "assets/js/72.efda5319.js",
    "revision": "a699661824fd97e0cbf4db6b6849875d"
  },
  {
    "url": "assets/js/73.dc46b5aa.js",
    "revision": "166ee3626560ea3e8e52a48a9d8581e3"
  },
  {
    "url": "assets/js/74.34533102.js",
    "revision": "f28b9e6d82c24376747f8a202bc9a1c8"
  },
  {
    "url": "assets/js/75.148172fd.js",
    "revision": "088a2210377ccd179616d923cc382b47"
  },
  {
    "url": "assets/js/76.3d44d03d.js",
    "revision": "2636e14629027d1ee8604f11420eb7df"
  },
  {
    "url": "assets/js/77.61d8fe01.js",
    "revision": "6ec23b56ba174d63092d951b3def4e27"
  },
  {
    "url": "assets/js/78.f901de0c.js",
    "revision": "6730543fb60387780c5387977cab3ac2"
  },
  {
    "url": "assets/js/79.b4316c2b.js",
    "revision": "8622648069715c812f7f1ed1b8eddba6"
  },
  {
    "url": "assets/js/8.7dac20bd.js",
    "revision": "bb42577edc5751c038f5d93b1a47ac6f"
  },
  {
    "url": "assets/js/80.612de71d.js",
    "revision": "e77499463dbc486220725ea2849bd4c7"
  },
  {
    "url": "assets/js/81.081d0eb2.js",
    "revision": "2a52a970b10ddcfd5f6fe1ee4d11e08d"
  },
  {
    "url": "assets/js/82.bf2f1979.js",
    "revision": "392cad01bfff2543cfd072d45c2a7f67"
  },
  {
    "url": "assets/js/83.5d97881c.js",
    "revision": "a06ecfd18f1981e28db5e0a02f49ca43"
  },
  {
    "url": "assets/js/84.3997ee55.js",
    "revision": "258d1ad0f67d065f151ade609a71da4b"
  },
  {
    "url": "assets/js/85.cc3ad64e.js",
    "revision": "d7f436d01b5150e5bc206090a535932c"
  },
  {
    "url": "assets/js/86.90f34cdb.js",
    "revision": "e0228233d837b292c0db6e52025c5991"
  },
  {
    "url": "assets/js/87.4cfef610.js",
    "revision": "4183d7a7c0f742b44c696107f06969f6"
  },
  {
    "url": "assets/js/88.ba76521e.js",
    "revision": "54ee6d0b9fd6451fe3733cc9327f14b1"
  },
  {
    "url": "assets/js/89.499d353e.js",
    "revision": "531447691702b8427c653c5e3ae1864c"
  },
  {
    "url": "assets/js/9.d58cca13.js",
    "revision": "0d1499e9b952e0d86784f447c4b3721d"
  },
  {
    "url": "assets/js/90.e4f4c0ae.js",
    "revision": "26ada70d4a1bc2dcecdda6436dcf76f0"
  },
  {
    "url": "assets/js/91.a3589e17.js",
    "revision": "f03db112327c4d766a236d71adaddcc5"
  },
  {
    "url": "assets/js/app.a590f4eb.js",
    "revision": "823dc7cb4884b7e2b4302d86749d9d7d"
  },
  {
    "url": "demos/Chinook/entityDemo.html",
    "revision": "6ea9d891e6b8011a43120094d69d976b"
  },
  {
    "url": "demos/Chinook/index.html",
    "revision": "e0930ab5e2a75121acdef40f77077fcb"
  },
  {
    "url": "demos/eRestaurant/about/index.html",
    "revision": "b929db1ef653a8539ae8c4cb49255db3"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminController.html",
    "revision": "a6ffc13f741b83861095dffd10c2a579"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminSpecialEvents.html",
    "revision": "baf843fc508d0a145fccdcac21a63896"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/bootstrapStyle.html",
    "revision": "f469c590d5389049ecf102a689d9a038"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/menu.html",
    "revision": "5d91110e90424a67d8cb2234825761af"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/occupiedTables.html",
    "revision": "c0362ffa617b4c8316743d7a15ffde8c"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/queryString.html",
    "revision": "7a7a45c390218cb2d74e13fc1023231d"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/reservations.html",
    "revision": "79cfd76a4ebd14de50bc888a3efcb954"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/fakeDateTime.html",
    "revision": "b42152fe80c190aa0dcff95c5cf0f31b"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/messageUserControl.html",
    "revision": "e02f7a2134be03750ebd3183356b2944"
  },
  {
    "url": "demos/eRestaurant/businessRules/businessRuleException.html",
    "revision": "f0745660fc90391727e0460ab5bdc093"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingReservations.html",
    "revision": "4aa3e80592e296beab9fb5664649cb48"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingWalkIns.html",
    "revision": "c69d4bb81bdf271aac5a511d6a61ff31"
  },
  {
    "url": "demos/eRestaurant/dvcs/demo.html",
    "revision": "ed2c2efce312a5f73349cc3cda3a4bac"
  },
  {
    "url": "demos/eRestaurant/entityFramework/demo/demo.html",
    "revision": "0b4a0055249fbfcf63150eb50b5ea760"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice-solution.html",
    "revision": "f09160e3abd9b5d573b9a673ec425cb0"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice.html",
    "revision": "82733021a915bda08d0ba7ca9c8f991f"
  },
  {
    "url": "demos/eRestaurant/index.html",
    "revision": "1548d956bbd35fbd73c46c791a61f675"
  },
  {
    "url": "demos/eRestaurant/linq/extensions.html",
    "revision": "88a41deb882792c901a54fa0c93dfeb3"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/occupiedTables.html",
    "revision": "4e5adf8159f760da16eb3087a8aa50b3"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/reservations.html",
    "revision": "8d3ef1687e0f4a72c80c1f37fdd66f4d"
  },
  {
    "url": "demos/eRestaurant/linq/index.html",
    "revision": "33bd4bbb1bb84c01b70ad848e8a19c74"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/expressions.html",
    "revision": "39e48e13f85d59fdba7dc1b44a456bae"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/program.html",
    "revision": "e8a328ed249baad3071c3f1f4932e247"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/statements.html",
    "revision": "1406090cf5497b459aca61a0723cfa77"
  },
  {
    "url": "demos/eRestaurant/linq/practice.html",
    "revision": "1e3ab6e8e50ffa75b02da719511c55a7"
  },
  {
    "url": "demos/eRestaurant/reports/customizing/index.html",
    "revision": "0fd8dcfadbbbd351819d759069ac0279"
  },
  {
    "url": "demos/eRestaurant/reports/reportViewer/index.html",
    "revision": "4633f29c108714eabfdcb45820d5d8ef"
  },
  {
    "url": "demos/eRestaurant/security/demo.html",
    "revision": "83838c333ec226f245258d465bcef678"
  },
  {
    "url": "demos/eRestaurant/sitemaps/demo2.html",
    "revision": "ddc7ee1a7d1cb84073b14b73c5746751"
  },
  {
    "url": "demos/eRestaurant/testing/manual.html",
    "revision": "f5fba309950b80eb6801a3d6c05c779b"
  },
  {
    "url": "demos/eRestaurant/ux/frontDesk/index.html",
    "revision": "61bb38778089fb7c24006efca3c8b025"
  },
  {
    "url": "demos/index.html",
    "revision": "c0abbbff68370efc8059f8c82e0ad819"
  },
  {
    "url": "demos/Northwind/CustomerOrders/Design.html",
    "revision": "7fb50570b9443a357923b9db523027ab"
  },
  {
    "url": "demos/Northwind/CustomerOrders/index.html",
    "revision": "01a86c2490ba94bcc02d78a480681119"
  },
  {
    "url": "demos/Northwind/index.html",
    "revision": "29b31643e48d288b613ffae68c363759"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/expressions.html",
    "revision": "37a8601a0af8281bb39d2abab320c4e1"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/program.html",
    "revision": "e2becf25150754ea81c8537ea84225b3"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/statements.html",
    "revision": "a32cb392ca6df5679b4692eec2eb7ab0"
  },
  {
    "url": "demos/Northwind/Security/index.html",
    "revision": "91470ed96629661e4b70875d7cc59178"
  },
  {
    "url": "exercises/dvcs.html",
    "revision": "e16d78334660edb520a41ea1daf132df"
  },
  {
    "url": "exercises/ef.html",
    "revision": "a1d8348b0245d45f0b081f4633d2c878"
  },
  {
    "url": "exercises/index.html",
    "revision": "39f12716d50dc6a092c44592b73c3662"
  },
  {
    "url": "exercises/linq.html",
    "revision": "d253370515eba58f46ad5c0672c4271d"
  },
  {
    "url": "exercises/oltp.html",
    "revision": "9ac5ea9b0aaac1f9c60df1a3894fcbf6"
  },
  {
    "url": "exercises/reporting.html",
    "revision": "452b0d6cae447be92d59f5336f02526f"
  },
  {
    "url": "exercises/reports/install_ssdt.html",
    "revision": "554b48429ea75e66de52d0965e0fc5e7"
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
    "revision": "273c7a0f2735f8686260b2f9597069c8"
  },
  {
    "url": "logs/index.html",
    "revision": "d6e02905208cc589f3cb397fdee78468"
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
    "revision": "1c96b25cb6528a2a74a13f52129c1953"
  },
  {
    "url": "topics/aspNet/assortedWebForms.html",
    "revision": "cf96a54930c15192d78889ddc91e3fcb"
  },
  {
    "url": "topics/aspNet/databound/detailsviewOverview.html",
    "revision": "7155fcb5047e0a23cca4b87bd02c2c6d"
  },
  {
    "url": "topics/aspNet/databound/gridviewCustomization.html",
    "revision": "8aad8e2116a1e172ef471759a7d95f08"
  },
  {
    "url": "topics/aspNet/databound/gridviewOverview.html",
    "revision": "f73a161c103968131d8827aedbe37bd9"
  },
  {
    "url": "topics/aspNet/databound/index.html",
    "revision": "65ff86714df5dccdba69ac3e1e51e6e5"
  },
  {
    "url": "topics/aspNet/databound/listviewOverview.html",
    "revision": "aec83208d23c79e249ff0dfddfb98a0e"
  },
  {
    "url": "topics/aspNet/databound/repeaterOverview.html",
    "revision": "76c152540804d8d72fbc4d42c9b9a14b"
  },
  {
    "url": "topics/aspNet/errorHandling.html",
    "revision": "a31da7a1458a51a18be4b74c7ef63fa4"
  },
  {
    "url": "topics/aspNet/userControls.html",
    "revision": "583983c73c4e89170f501dae1a72bd81"
  },
  {
    "url": "topics/cqrs/index.html",
    "revision": "02a8592cab82b5fa8b00dd9561a48e1d"
  },
  {
    "url": "topics/dvcs/conflicts/index.html",
    "revision": "6742cee33813182827c4d45f0a043bfa"
  },
  {
    "url": "topics/dvcs/gh4w.html",
    "revision": "b2966a40ac141ee608fa7bc140e0e150"
  },
  {
    "url": "topics/dvcs/index.html",
    "revision": "f64446e9b019f54121408c9e6b5896ba"
  },
  {
    "url": "topics/entityFramework/index.html",
    "revision": "764044fa2e485152fc7e98b2f0eeb2da"
  },
  {
    "url": "topics/index.html",
    "revision": "14f394a5bbcbf58728b880b3cd7f295a"
  },
  {
    "url": "topics/linq/index.html",
    "revision": "d14d885a4808c686997b14a311066960"
  },
  {
    "url": "topics/linq/lambda.html",
    "revision": "54cdcf0e5b692ee5a348408aa47e4a19"
  },
  {
    "url": "topics/reports/ssdt.html",
    "revision": "77e8dc6ca208feb86fbc487d831d3462"
  },
  {
    "url": "topics/security/aspNetIdentity.html",
    "revision": "1fbe0af5c05ddbcfb21374f39ff2aec7"
  },
  {
    "url": "topics/security/IdentityConfig.html",
    "revision": "0475981aa100908ed6dafe8f9cfca83f"
  },
  {
    "url": "topics/security/IdentityModels.html",
    "revision": "df417e4c052c6a76d41b6a8a24cef673"
  },
  {
    "url": "topics/security/index.html",
    "revision": "5aac5ea789e5280d093e5e6cea83457c"
  },
  {
    "url": "topics/security/vs2017wap.html",
    "revision": "2fc7a9c2bcd16a090c8ec2286106e1fb"
  },
  {
    "url": "topics/sitemaps/index.html",
    "revision": "20c2dca22bc579ae634d516e4e6171d0"
  },
  {
    "url": "topics/ux/index.html",
    "revision": "8191825307a743a35ec8d3de2d0f5ec3"
  },
  {
    "url": "topics/ux/workflows/index.html",
    "revision": "4a59e07d91d9e7f6dedb0fb12be4c2e9"
  },
  {
    "url": "topics/ux/workflows/lesson-plan.html",
    "revision": "37028ccd2164cde8999c584e02263c9e"
  },
  {
    "url": "topics/ux/workflows/moreUX.html",
    "revision": "19a30a4313e67c3022d3ac5760e9b941"
  },
  {
    "url": "topics/xml/index.html",
    "revision": "f43af8f9f5f39e68d6b9d547fd3a646a"
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
