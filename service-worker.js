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
    "revision": "e4ebc9b7ee26a532dcfd7cf04b1cd0a7"
  },
  {
    "url": "about/bootstrapInVS2013.html",
    "revision": "0619b05ad563ebceddb25533049a09cf"
  },
  {
    "url": "about/index.html",
    "revision": "4ae222c6292e3cb29686ca37d345c320"
  },
  {
    "url": "about/LOGs.html",
    "revision": "bc4125e2c356d8295f701ef9726279f4"
  },
  {
    "url": "about/resources.html",
    "revision": "ed46d5dd1b3e37575bc09b9226cf7506"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "about/troubleshoot.html",
    "revision": "982a5554c0f5f28950b1dfd5c7dd1eeb"
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
    "url": "assets/js/1.b16f1aeb.js",
    "revision": "ecd8d645fa12afa39944a85fa70774cb"
  },
  {
    "url": "assets/js/10.7efe3c12.js",
    "revision": "7d088b06fd16e2afa45bb1c66a716820"
  },
  {
    "url": "assets/js/11.5cddc974.js",
    "revision": "2e9225dc234346ae204fa3140c3d3a63"
  },
  {
    "url": "assets/js/12.d731be8c.js",
    "revision": "856c4785806fd06e502f23d991a369d1"
  },
  {
    "url": "assets/js/13.37d29514.js",
    "revision": "46311132097a113eccc5bc5a738e6775"
  },
  {
    "url": "assets/js/14.e01d1e98.js",
    "revision": "998daf419b585e849ddda214ae6db5bb"
  },
  {
    "url": "assets/js/15.930500b7.js",
    "revision": "3e725fdc2089fee8f9d06c7f328c2167"
  },
  {
    "url": "assets/js/16.831a431a.js",
    "revision": "09b45ff420acf621d98341c7fdd9b578"
  },
  {
    "url": "assets/js/17.1a8a341e.js",
    "revision": "ae26e41e1e1159d8e752dd21ed7d457b"
  },
  {
    "url": "assets/js/18.797c4593.js",
    "revision": "dd8676a6c576eaa8ae6a2b4d48117705"
  },
  {
    "url": "assets/js/19.91a0a968.js",
    "revision": "10472a913e782659c475410b03646609"
  },
  {
    "url": "assets/js/2.b966be49.js",
    "revision": "9095ae9d88e9728244e04663322ad468"
  },
  {
    "url": "assets/js/20.373d0109.js",
    "revision": "7b35f459f6c22954faf3c8a1879ee3a6"
  },
  {
    "url": "assets/js/21.a7f92e9b.js",
    "revision": "6a1c8e4d5fd1f6a1b0afd2c9714b626b"
  },
  {
    "url": "assets/js/22.f29689fa.js",
    "revision": "c6e6536db75a2ee83075ef12d1d4b6d0"
  },
  {
    "url": "assets/js/23.a37c785a.js",
    "revision": "4e32c2e2f414fe8793714ee236b02fcc"
  },
  {
    "url": "assets/js/24.75662540.js",
    "revision": "8323c8f2505dffb190515a6cc93fae77"
  },
  {
    "url": "assets/js/25.19c2cb9a.js",
    "revision": "84c6617a7c253937f313aa92358d0bd9"
  },
  {
    "url": "assets/js/26.928e1fe5.js",
    "revision": "4398657ce3b1aebb35b98b7639ac7ae3"
  },
  {
    "url": "assets/js/27.a0d56fe0.js",
    "revision": "3f945607248e2f05a43455329dfa097f"
  },
  {
    "url": "assets/js/28.12423104.js",
    "revision": "b0dbc644daa5bbbcac98bc2ca8194b0a"
  },
  {
    "url": "assets/js/29.4572c24f.js",
    "revision": "e9857878c7eff76091ddfd487e5bf575"
  },
  {
    "url": "assets/js/3.ff151dba.js",
    "revision": "41700750ff8f25e9f6e2cc13c98dda1b"
  },
  {
    "url": "assets/js/30.c931a6dd.js",
    "revision": "55f3c86b039c5baf00b9780e34b6f5fc"
  },
  {
    "url": "assets/js/31.9e7cfad6.js",
    "revision": "3e3cfd256ac772596fb5928d4d931e0a"
  },
  {
    "url": "assets/js/32.de16fb47.js",
    "revision": "44d026311b844a8df8a18f8e1b9bd7f0"
  },
  {
    "url": "assets/js/33.815e0742.js",
    "revision": "5513e53f8a9b3165d9c9a82869827e60"
  },
  {
    "url": "assets/js/34.c85bcfa2.js",
    "revision": "d8775798efb54277001f37f32084bb50"
  },
  {
    "url": "assets/js/35.2f32aecf.js",
    "revision": "1fe25d9560b63635e0be25610dd64f6e"
  },
  {
    "url": "assets/js/36.6d3dcce6.js",
    "revision": "a854c01ec1ba3312b0d588d2c84291fb"
  },
  {
    "url": "assets/js/37.92fc035d.js",
    "revision": "6a41fd7eda4868c5dd0a53aaea51b221"
  },
  {
    "url": "assets/js/38.8b206567.js",
    "revision": "ee41eb3b673c5c66ce5819b377a4450c"
  },
  {
    "url": "assets/js/39.2bfbd9e7.js",
    "revision": "dba542ba58d4a374549d952eeb02fbbf"
  },
  {
    "url": "assets/js/4.cb1f899d.js",
    "revision": "bb253e0945fb08feda2fcbcbe6d26e9f"
  },
  {
    "url": "assets/js/40.76a83ac8.js",
    "revision": "28f2aeca4d96bfcc04c74775e233c53d"
  },
  {
    "url": "assets/js/41.4e8cac3b.js",
    "revision": "39adf9416116b8171532265dc5e95693"
  },
  {
    "url": "assets/js/42.0ca8c5bd.js",
    "revision": "fa3c5738d95cffcd9d58ef5efc3fbd10"
  },
  {
    "url": "assets/js/43.c82b5e64.js",
    "revision": "5305f579c9865d2b32c1a19bc7448d4b"
  },
  {
    "url": "assets/js/44.9d569ccd.js",
    "revision": "02b62c1a617ed17f98b3ebd21036363b"
  },
  {
    "url": "assets/js/45.71e4589b.js",
    "revision": "657bf00c6757b84dbcf38de7b859a756"
  },
  {
    "url": "assets/js/46.38cebbb2.js",
    "revision": "bebb039161c40c9b10c502f61ffcec33"
  },
  {
    "url": "assets/js/47.b0d13f97.js",
    "revision": "478faf6f5a8a90f99033e2813c521bd6"
  },
  {
    "url": "assets/js/48.3d982968.js",
    "revision": "54fec523872f58243a5b799ab51dfa62"
  },
  {
    "url": "assets/js/49.6543c32d.js",
    "revision": "3ee5943d1c50069e0855809ca6752cff"
  },
  {
    "url": "assets/js/5.6525af9e.js",
    "revision": "bba652240c031a2e7fb536733b6e6459"
  },
  {
    "url": "assets/js/50.6f879cb0.js",
    "revision": "ee1c90eb268c2dee07623bc8f419bf41"
  },
  {
    "url": "assets/js/51.f10abcb9.js",
    "revision": "09f4d7865a48646b5a9ae6065ed12275"
  },
  {
    "url": "assets/js/52.65a5f702.js",
    "revision": "67f0207d63f0ed65756786612d970100"
  },
  {
    "url": "assets/js/53.8b71f1f3.js",
    "revision": "d34951b1121674af94ba1f3f67badf80"
  },
  {
    "url": "assets/js/54.2cc5952b.js",
    "revision": "0898b82f4d9ede8b0354cf5e259bcf62"
  },
  {
    "url": "assets/js/55.f35d42f6.js",
    "revision": "51ba707b1526ccad95b3d23d87507dee"
  },
  {
    "url": "assets/js/56.d9ef657c.js",
    "revision": "0e2d070d3f6b0b719c28d7af19d69cf6"
  },
  {
    "url": "assets/js/57.b8bfc12f.js",
    "revision": "1cb0b949a467e7b3848ff5ed15ac60c7"
  },
  {
    "url": "assets/js/58.f7c3488e.js",
    "revision": "e1e464b194e10059eba3dbca93e16472"
  },
  {
    "url": "assets/js/59.5302431a.js",
    "revision": "77ca53497a40e1b216e9911890f1f383"
  },
  {
    "url": "assets/js/6.94378529.js",
    "revision": "2c6fa75765c15abf48b04e90d968dc10"
  },
  {
    "url": "assets/js/60.d483b99d.js",
    "revision": "e548f92c05cb21317d071b51c4fc7108"
  },
  {
    "url": "assets/js/61.bfe6e62c.js",
    "revision": "6b69c16f7bc1ca2195dd7833534fab84"
  },
  {
    "url": "assets/js/62.d669c8af.js",
    "revision": "6149e2f0777804cd39414f5c9447c07f"
  },
  {
    "url": "assets/js/63.04e17ea0.js",
    "revision": "8b8f8c6d31cbb82f009878d8edb7e241"
  },
  {
    "url": "assets/js/64.22a79732.js",
    "revision": "6345ab460648bb618d7222fc44f62f39"
  },
  {
    "url": "assets/js/65.0802e0fb.js",
    "revision": "9ba9f73ac65a35bdf55fe949249cf308"
  },
  {
    "url": "assets/js/66.10c8913e.js",
    "revision": "5426dd29305d4ff59b30a64372f4c782"
  },
  {
    "url": "assets/js/67.abac0051.js",
    "revision": "1cebed6e2a3bf7a6fb16248259844ae1"
  },
  {
    "url": "assets/js/68.cb3e30e9.js",
    "revision": "0d16cc8ada96baa8694ad9a435522f90"
  },
  {
    "url": "assets/js/69.d3559ab1.js",
    "revision": "c9dd56e82f685d5e91253c523fc03fb0"
  },
  {
    "url": "assets/js/7.e350251a.js",
    "revision": "adff8dbdc622843dbe791a8e4639b482"
  },
  {
    "url": "assets/js/70.8b838b3c.js",
    "revision": "77c8c5124f407e23c05996796bbacbd0"
  },
  {
    "url": "assets/js/71.3028b2fc.js",
    "revision": "1050db5a38848b882d0da05b244893c7"
  },
  {
    "url": "assets/js/72.5385c3f8.js",
    "revision": "a7a2c2f7ba0c032a23e82817713c6719"
  },
  {
    "url": "assets/js/73.ae7bef76.js",
    "revision": "55631434165140ccf221b6544ab118e2"
  },
  {
    "url": "assets/js/74.ae85fa22.js",
    "revision": "6abb8676bcbff5c8258ba01ce479f75b"
  },
  {
    "url": "assets/js/75.08542d2a.js",
    "revision": "c98dbc9245cc36a28580ead84fff8f0f"
  },
  {
    "url": "assets/js/76.9acf0fed.js",
    "revision": "f54381b603842a384bae9eb2ea7f08c1"
  },
  {
    "url": "assets/js/77.c2c0ccff.js",
    "revision": "bf02a04592569557f6bc8258be675457"
  },
  {
    "url": "assets/js/78.6f29a554.js",
    "revision": "6d0c5d80af4766c0330792896b9bdf9d"
  },
  {
    "url": "assets/js/79.72297e6d.js",
    "revision": "12db8a358c7aa0abd190504b5af22a35"
  },
  {
    "url": "assets/js/8.81d8cec3.js",
    "revision": "bb1161668cc6a86a6be90d1aa26d0b60"
  },
  {
    "url": "assets/js/80.1efd60c6.js",
    "revision": "fc996d342de3f288494bf35c9b2c946b"
  },
  {
    "url": "assets/js/81.0d335165.js",
    "revision": "be57147eafba93ba2c7b8f64df3664a4"
  },
  {
    "url": "assets/js/82.f2b85b16.js",
    "revision": "34a6b4b344674509c98c750d2e7e9788"
  },
  {
    "url": "assets/js/83.82ff9a4a.js",
    "revision": "a4b611b0b7f8eee309c59998d502b3c2"
  },
  {
    "url": "assets/js/84.fb23263b.js",
    "revision": "66eb0db2903c7d89e9506446af2d00fa"
  },
  {
    "url": "assets/js/85.c2a912dc.js",
    "revision": "1ab15a97920a99eb27ec9203e4433012"
  },
  {
    "url": "assets/js/86.b4192be7.js",
    "revision": "9692eae1e0616d34331b3a05fba94726"
  },
  {
    "url": "assets/js/87.b9fb1367.js",
    "revision": "bb1fb19759bcee0974be8e8c5554f00f"
  },
  {
    "url": "assets/js/88.77114255.js",
    "revision": "af7b8e826905f7680012b65d1e2b5c54"
  },
  {
    "url": "assets/js/89.41594e71.js",
    "revision": "6c9ea0feffd73cfd2aae9f7c82c3455b"
  },
  {
    "url": "assets/js/9.0c0e48c0.js",
    "revision": "dd2aebe93f5b7f23d33670381c927f2c"
  },
  {
    "url": "assets/js/90.e4f4c0ae.js",
    "revision": "26ada70d4a1bc2dcecdda6436dcf76f0"
  },
  {
    "url": "assets/js/91.3ec772d8.js",
    "revision": "90cb516085b72b566aab5192d65c325b"
  },
  {
    "url": "assets/js/92.a78fe91e.js",
    "revision": "9d95650a1fdab1c56758ea119d577995"
  },
  {
    "url": "assets/js/app.b202590f.js",
    "revision": "04b7783ee1dfa6c8a9ee5367a4cf8bcc"
  },
  {
    "url": "demos/Chinook/entityDemo.html",
    "revision": "d019f679c3c1e4bb29891a07bd10e9f3"
  },
  {
    "url": "demos/Chinook/index.html",
    "revision": "6b06c306df4806846855dec570be2563"
  },
  {
    "url": "demos/eRestaurant/about/index.html",
    "revision": "5e40f66d1afe4eb0cc404196a14d08d0"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminController.html",
    "revision": "f3b883e3e562d3989c099940e5ada3a3"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminSpecialEvents.html",
    "revision": "3ab3667133aaab4de13aac72dac164ef"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/bootstrapStyle.html",
    "revision": "b90cc7c19100f2816cd5bed923e8042e"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/menu.html",
    "revision": "7d4c3d3daccfefe28ea1a7d42ebf654b"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/occupiedTables.html",
    "revision": "b64c3bd38f0860d7638550adbdcea0ce"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/queryString.html",
    "revision": "d3117ad2a4f7d30b4764511af32a6139"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/reservations.html",
    "revision": "f058b25a9f158e1daec33b4e990f69de"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/fakeDateTime.html",
    "revision": "31e7b90fea714964d9bb5b80cb5e98d6"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/messageUserControl.html",
    "revision": "108131436969e071eadcd3db140ca380"
  },
  {
    "url": "demos/eRestaurant/businessRules/businessRuleException.html",
    "revision": "e4fcc3997246418e14a5d0f074a25134"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingReservations.html",
    "revision": "d0dd3202af3437401e5e1d1d03adfdbc"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingWalkIns.html",
    "revision": "f3fc537b2b889d1fbc2f83dc494c0101"
  },
  {
    "url": "demos/eRestaurant/dvcs/demo.html",
    "revision": "a3e6570c4aec746025be9ae3b02be1fb"
  },
  {
    "url": "demos/eRestaurant/entityFramework/demo/demo.html",
    "revision": "22496287e572a94551964888b1d61ba7"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice-solution.html",
    "revision": "fe11b89cad9c39ec8ab35dba7c25b818"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice.html",
    "revision": "b092d377ef6d8938de0616d3a3bcaeb2"
  },
  {
    "url": "demos/eRestaurant/index.html",
    "revision": "d813d3cd41e6113475fbf19966ac8e64"
  },
  {
    "url": "demos/eRestaurant/linq/extensions.html",
    "revision": "54fabba6f8c4880bf32a593bbae04435"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/occupiedTables.html",
    "revision": "506f1e9c5ede0447e9adb4a0d0cc3b94"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/reservations.html",
    "revision": "20e5a98bd4b840508bf0d03596b41c03"
  },
  {
    "url": "demos/eRestaurant/linq/index.html",
    "revision": "bb866f74cd3e96270d6962f2c648963b"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/expressions.html",
    "revision": "cc11b9e268eee1a9d8168bb163a88f06"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/program.html",
    "revision": "025b6ec4a746e0af4d366b8771bab948"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/statements.html",
    "revision": "5a5483e898481a3a817571c8a2d045f5"
  },
  {
    "url": "demos/eRestaurant/linq/practice.html",
    "revision": "d6b0c81382fd3ce67b2c140685c41291"
  },
  {
    "url": "demos/eRestaurant/reports/customizing/index.html",
    "revision": "cd12ae6ea64a8d6c5ec2fb413f3cdf8c"
  },
  {
    "url": "demos/eRestaurant/reports/reportViewer/index.html",
    "revision": "85a1ab9946d2d558e82aec66e192813e"
  },
  {
    "url": "demos/eRestaurant/security/demo.html",
    "revision": "7c83405bfd0d04868eeeaf711450e1eb"
  },
  {
    "url": "demos/eRestaurant/sitemaps/demo2.html",
    "revision": "abc68d3d9bc2afe27d81a1ea51b122ee"
  },
  {
    "url": "demos/eRestaurant/testing/manual.html",
    "revision": "4bd17c5b866a3f15f79a93091dcdc5ce"
  },
  {
    "url": "demos/eRestaurant/ux/frontDesk/index.html",
    "revision": "6678ba6ef03e801773b7695f6def9d84"
  },
  {
    "url": "demos/index.html",
    "revision": "a882300f586a80ad2e1d424202f45ad7"
  },
  {
    "url": "demos/Northwind/CustomerOrders/Design.html",
    "revision": "bb01defa3ffaba8da87a97983ea66017"
  },
  {
    "url": "demos/Northwind/CustomerOrders/index.html",
    "revision": "47b366a37e67ddd18704927e2d0c53ea"
  },
  {
    "url": "demos/Northwind/index.html",
    "revision": "6ac4ff0a439655cba974a3729c755fee"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/expressions.html",
    "revision": "7341e719fb04af552b6bc4caf28bd365"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/program.html",
    "revision": "3d1d7cda41402e240e832af98007271b"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/statements.html",
    "revision": "1fc7908ebcd2271108195091396d3b4e"
  },
  {
    "url": "demos/Northwind/Security/index.html",
    "revision": "d43cd11196a1a394f6eab5c715822979"
  },
  {
    "url": "exercises/dvcs.html",
    "revision": "ee3d05dd5dbcdfd8faaa1da1022010eb"
  },
  {
    "url": "exercises/ef.html",
    "revision": "bc9e6af6b690b7bd59a9234396c406e8"
  },
  {
    "url": "exercises/index.html",
    "revision": "a844a98a35a6bca09213e5a30858e02a"
  },
  {
    "url": "exercises/linq.html",
    "revision": "703677c3c6f188dbe316e524352e0a8e"
  },
  {
    "url": "exercises/oltp.html",
    "revision": "82a08a593d11de3eeee48d3f24711ff3"
  },
  {
    "url": "exercises/planning.html",
    "revision": "665242b5e6b118d88683f308c7f70e65"
  },
  {
    "url": "exercises/reporting.html",
    "revision": "56c68c7f7eba653e7a92607db8f8d0c1"
  },
  {
    "url": "exercises/reports/install_ssdt.html",
    "revision": "cf8da81bcb4f0f948e5bb2cbbae04311"
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
    "revision": "effc606f868a4f1adad9b165ba6e2e13"
  },
  {
    "url": "logs/index.html",
    "revision": "a2347236d6abd3a5acfbe05e5e995c2e"
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
    "revision": "c40ef9964b7fff01bc85eda78162af0f"
  },
  {
    "url": "topics/aspNet/assortedWebForms.html",
    "revision": "8d4af31a74f587ee716c5ded763d6d26"
  },
  {
    "url": "topics/aspNet/databound/detailsviewOverview.html",
    "revision": "de207cb73175e2e3e8adc0698ac31340"
  },
  {
    "url": "topics/aspNet/databound/gridviewCustomization.html",
    "revision": "91f91e4c3fca0c34cc5a2e32d4c97f2f"
  },
  {
    "url": "topics/aspNet/databound/gridviewOverview.html",
    "revision": "58fc70dfb1288150ce7ad4dd0a1a9e16"
  },
  {
    "url": "topics/aspNet/databound/index.html",
    "revision": "db317e82b7a1659e3adf32587a1cec9e"
  },
  {
    "url": "topics/aspNet/databound/listviewOverview.html",
    "revision": "9b0202c39452ed29423975d516e3ae9d"
  },
  {
    "url": "topics/aspNet/databound/repeaterOverview.html",
    "revision": "d39516e34065cd92f272016f466476f1"
  },
  {
    "url": "topics/aspNet/errorHandling.html",
    "revision": "6230e24416c856b52a87eb2e64472a04"
  },
  {
    "url": "topics/aspNet/userControls.html",
    "revision": "d32800d7dee90806a288b595a2698652"
  },
  {
    "url": "topics/cqrs/index.html",
    "revision": "eddc872219615b2cfdd249568deec247"
  },
  {
    "url": "topics/dvcs/conflicts/index.html",
    "revision": "5ebf91329ffb87891801fa869e8b16b1"
  },
  {
    "url": "topics/dvcs/gh4w.html",
    "revision": "9e39db211bf45fc1a13ca6f92fa2fea7"
  },
  {
    "url": "topics/dvcs/index.html",
    "revision": "4f6504a789d13fb53fb31be285870794"
  },
  {
    "url": "topics/entityFramework/index.html",
    "revision": "1c7524ae471a69a1beaa6e73f03d959b"
  },
  {
    "url": "topics/index.html",
    "revision": "a072cb3df87132d9aa4c94d0634087f1"
  },
  {
    "url": "topics/linq/index.html",
    "revision": "689bd2abc49b54b2943cf6d6fd371c62"
  },
  {
    "url": "topics/linq/lambda.html",
    "revision": "e6630696c327822d7f35ce67e901abf2"
  },
  {
    "url": "topics/reports/ssdt.html",
    "revision": "7ebe2430fe3c4463236bc18164e23a49"
  },
  {
    "url": "topics/security/aspNetIdentity.html",
    "revision": "7000db7c16dc54e0b4e9f0516a6db66b"
  },
  {
    "url": "topics/security/IdentityConfig.html",
    "revision": "1a64b933a795eb4e732d4e75f67cc1a3"
  },
  {
    "url": "topics/security/IdentityModels.html",
    "revision": "60c43ec2c3f04e0fe66652864b7df234"
  },
  {
    "url": "topics/security/index.html",
    "revision": "f3d85d2cda81f5a6f432496607842a47"
  },
  {
    "url": "topics/security/vs2017wap.html",
    "revision": "3e8bbf93029d40aca719b36691a9df2e"
  },
  {
    "url": "topics/sitemaps/index.html",
    "revision": "1ec3ace6a3708e855da20c8f1500a50f"
  },
  {
    "url": "topics/ux/index.html",
    "revision": "b336e40beeae940066ad4e84ee0c9f24"
  },
  {
    "url": "topics/ux/workflows/index.html",
    "revision": "b78e905e9b6f4bfb5ce5eea4fe573d6d"
  },
  {
    "url": "topics/ux/workflows/lesson-plan.html",
    "revision": "946c011f3810672f9db67739efa51340"
  },
  {
    "url": "topics/ux/workflows/moreUX.html",
    "revision": "1631872e458203dd0ac67f782438f19b"
  },
  {
    "url": "topics/xml/index.html",
    "revision": "06a882b336086f271f2680b98cee9541"
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
