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
    "revision": "adc039783d52a286def397d73ed42605"
  },
  {
    "url": "about/bootstrapInVS2013.html",
    "revision": "5b482a41cd9aa456d8a61a12b22ecee2"
  },
  {
    "url": "about/index.html",
    "revision": "fa0299bbb2c43b958312f924772e2048"
  },
  {
    "url": "about/LOGs.html",
    "revision": "f8e64e1bc24953e66e3bc1a853c66585"
  },
  {
    "url": "about/resources.html",
    "revision": "ef7ff137b60eaa4c593b7dba6a707662"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "about/troubleshoot.html",
    "revision": "be64c3c392ae1b6083aedb9a234be2c5"
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
    "url": "assets/js/29.27ce4ae9.js",
    "revision": "756587523cb07092dae561e9d4e74372"
  },
  {
    "url": "assets/js/3.939af7c8.js",
    "revision": "644ee63164338f8a4f99dbdc55ec4e65"
  },
  {
    "url": "assets/js/30.69686f2a.js",
    "revision": "b67c1aeef3d656a19c55157363c1e884"
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
    "url": "assets/js/38.db49fb69.js",
    "revision": "c2bb74d1baf85d757f0bf3e3d64f9c10"
  },
  {
    "url": "assets/js/39.70677304.js",
    "revision": "277d09c37f5666e5de9ad7b52788035e"
  },
  {
    "url": "assets/js/4.cb1f899d.js",
    "revision": "bb253e0945fb08feda2fcbcbe6d26e9f"
  },
  {
    "url": "assets/js/40.e2ecbb96.js",
    "revision": "965dea2e852416695a8bbaa0dbf960f4"
  },
  {
    "url": "assets/js/41.e72b0f6e.js",
    "revision": "b50b983b846db8c8502c5d8a7c93f71f"
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
    "url": "assets/js/47.2b95b793.js",
    "revision": "c6cda5249711372294d716d7f2e730c8"
  },
  {
    "url": "assets/js/48.01969736.js",
    "revision": "05e8e6d4452e5d8e89df06afd660e70d"
  },
  {
    "url": "assets/js/49.92bb3794.js",
    "revision": "c21c153ac2bcbc31d993a52ec1e39c93"
  },
  {
    "url": "assets/js/5.2ac5429d.js",
    "revision": "002bfefb4f1d80c5d46f18811e5302f4"
  },
  {
    "url": "assets/js/50.ca77f711.js",
    "revision": "55c28b0573caa0b1578e76f70d00eb69"
  },
  {
    "url": "assets/js/51.807e1bb1.js",
    "revision": "455d44fbd6447c23ae494616ffcd5fff"
  },
  {
    "url": "assets/js/52.f3cbf9d0.js",
    "revision": "a3e21e1d1e8bd73c921e813cc31e6af4"
  },
  {
    "url": "assets/js/53.bd403504.js",
    "revision": "10c33339d6069cf9ccd660d20a816f23"
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
    "url": "assets/js/6.44508e94.js",
    "revision": "f3aa442e71d61ead951eb45cf0ad6a7f"
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
    "url": "assets/js/65.1ff02e49.js",
    "revision": "716c3eb41f0e4d0cde3a82c8229a458c"
  },
  {
    "url": "assets/js/66.e922730a.js",
    "revision": "84a9e1e51772cfbce78e9f44f61e066f"
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
    "url": "assets/js/75.f1ad22f4.js",
    "revision": "4485970f5e0fa1450987b2e2378ec2d2"
  },
  {
    "url": "assets/js/76.ad620c54.js",
    "revision": "a9b1ef181ca9c5819dd60b05f250e63c"
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
    "url": "assets/js/79.690d4fe5.js",
    "revision": "bb8597433538542c4402d55d1dfd659b"
  },
  {
    "url": "assets/js/8.7dac20bd.js",
    "revision": "bb42577edc5751c038f5d93b1a47ac6f"
  },
  {
    "url": "assets/js/80.ea499946.js",
    "revision": "bde249a27a9df40b3b547e1674a37aba"
  },
  {
    "url": "assets/js/81.081d0eb2.js",
    "revision": "2a52a970b10ddcfd5f6fe1ee4d11e08d"
  },
  {
    "url": "assets/js/82.5b36497d.js",
    "revision": "a8467e475d2a1d1e44085462f0438c8c"
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
    "url": "assets/js/9.d58cca13.js",
    "revision": "0d1499e9b952e0d86784f447c4b3721d"
  },
  {
    "url": "assets/js/90.fd1acf46.js",
    "revision": "6ca18cdfda68ceba560ef2bb330530be"
  },
  {
    "url": "assets/js/91.a3589e17.js",
    "revision": "f03db112327c4d766a236d71adaddcc5"
  },
  {
    "url": "assets/js/app.94bf2934.js",
    "revision": "ec2a714f900f5cbcb4c4508d148ad8ba"
  },
  {
    "url": "demos/Chinook/entityDemo.html",
    "revision": "517b11d14e8f6cd17663e509b3df96b1"
  },
  {
    "url": "demos/Chinook/index.html",
    "revision": "d6e3363eb5312efac670cf4b6c9d6000"
  },
  {
    "url": "demos/eRestaurant/about/index.html",
    "revision": "0217fbcf9528857365fcc1db6e0875f6"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminController.html",
    "revision": "04612d371ea7fcf0d2e34c91f41315f6"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminSpecialEvents.html",
    "revision": "9a3eeeaadcdb9740fdc947309f1056cb"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/bootstrapStyle.html",
    "revision": "42eb0f6159496bfd3bfd8d7b2dbf588d"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/menu.html",
    "revision": "70101a19d510968302619eb83a78e7c8"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/occupiedTables.html",
    "revision": "78f9cbcff6197989d4517ad1904e9d7f"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/queryString.html",
    "revision": "cac313701b9ce5584dad914545ad76fb"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/reservations.html",
    "revision": "8a2a76db4854a2d68b6bc07e7aee2589"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/fakeDateTime.html",
    "revision": "6437c1f44f2821bb57acf73fffb00b9f"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/messageUserControl.html",
    "revision": "bbad26fac90f7bfe32574041cae49e9b"
  },
  {
    "url": "demos/eRestaurant/businessRules/businessRuleException.html",
    "revision": "1eb7524067223c99a495d1e018632d7e"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingReservations.html",
    "revision": "fef2fdee58fc532037d4333f65b86a9e"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingWalkIns.html",
    "revision": "186a26133692238175aa33fd7272203d"
  },
  {
    "url": "demos/eRestaurant/dvcs/demo.html",
    "revision": "a36020ff75db5730dfd759b63b29f53d"
  },
  {
    "url": "demos/eRestaurant/entityFramework/demo/demo.html",
    "revision": "23f3662d1b4908e7a6a6227c3cdd69b7"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice-solution.html",
    "revision": "5023f09f0362152558c52b1f394b778f"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice.html",
    "revision": "118b231723496f090dd6f255614d5673"
  },
  {
    "url": "demos/eRestaurant/index.html",
    "revision": "6aa3ca6940027a4fe3b086da790c4331"
  },
  {
    "url": "demos/eRestaurant/linq/extensions.html",
    "revision": "e6bc48fedc4da0da8518cde77f53fa78"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/occupiedTables.html",
    "revision": "2cb902517253b0e6691ca21c6a06ca4c"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/reservations.html",
    "revision": "e328c2b649f6b3ddc5613009e57893ef"
  },
  {
    "url": "demos/eRestaurant/linq/index.html",
    "revision": "c60a23af5a216fdf7be838c3b5c4e491"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/expressions.html",
    "revision": "c5511f711f935bb405d9e10333211fcf"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/program.html",
    "revision": "21be589aef55f105367d99d5a5abc57e"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/statements.html",
    "revision": "abc30378f1559c102160fa4c255eb2b4"
  },
  {
    "url": "demos/eRestaurant/linq/practice.html",
    "revision": "d88b0f00f48e28fa2351d992cb9f530f"
  },
  {
    "url": "demos/eRestaurant/reports/customizing/index.html",
    "revision": "36ba04d4c0d10ed4c5a2e543255af7c3"
  },
  {
    "url": "demos/eRestaurant/reports/reportViewer/index.html",
    "revision": "087b8e27df8ba8c89525efc49d990a09"
  },
  {
    "url": "demos/eRestaurant/security/demo.html",
    "revision": "0635b487d0f36e779364232b01d62a83"
  },
  {
    "url": "demos/eRestaurant/sitemaps/demo2.html",
    "revision": "391a6c86f1c14649c712558ada1cf6a4"
  },
  {
    "url": "demos/eRestaurant/testing/manual.html",
    "revision": "e30d6de75eeede551033cbd687aa9643"
  },
  {
    "url": "demos/eRestaurant/ux/frontDesk/index.html",
    "revision": "c6dfc95619d13cd4db37ee166732a6cd"
  },
  {
    "url": "demos/index.html",
    "revision": "5ed749dd8ee18d8a3ffed802fdc16f48"
  },
  {
    "url": "demos/Northwind/CustomerOrders/Design.html",
    "revision": "a53bee5bd9ef285f8bd5537ae9d7e4d0"
  },
  {
    "url": "demos/Northwind/CustomerOrders/index.html",
    "revision": "269973814e6e54e147a18beeb2c5ba8d"
  },
  {
    "url": "demos/Northwind/index.html",
    "revision": "47359cc8c488709429311a61c18f2728"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/expressions.html",
    "revision": "bc8866b7cedf9b00fe71e98c68e2f3f0"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/program.html",
    "revision": "ebacf74e0d3ffe57f8f72dd35e2f9c32"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/statements.html",
    "revision": "27f4eed6b7122851f8be7377b40c0573"
  },
  {
    "url": "demos/Northwind/Security/index.html",
    "revision": "ef6ad2f9da8311855bb5f09a199d20c3"
  },
  {
    "url": "exercises/dvcs.html",
    "revision": "59467d2195ae8fbc38e079976c8ff9e1"
  },
  {
    "url": "exercises/ef.html",
    "revision": "b18f776b43a983e6c6fa1a1349a7f166"
  },
  {
    "url": "exercises/index.html",
    "revision": "b1c61ec97a22f96af7cc03d0f5164315"
  },
  {
    "url": "exercises/linq.html",
    "revision": "c9070926bbfbf94a0ba1c88f3a9bedcf"
  },
  {
    "url": "exercises/oltp.html",
    "revision": "fa6a45d33f4b76f8380ed112503a2817"
  },
  {
    "url": "exercises/reporting.html",
    "revision": "a56cc41be07a12fa2e5637f82f752106"
  },
  {
    "url": "exercises/reports/install_ssdt.html",
    "revision": "982f09570d419680acbeae154bc9f46a"
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
    "revision": "1641660c7deb6a3189ad400cb45cce96"
  },
  {
    "url": "logs/index.html",
    "revision": "2e4a34d2f0d476ca474a058aed1d5094"
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
    "revision": "7d8607401c2b58ad852f5da6886a5e64"
  },
  {
    "url": "topics/aspNet/assortedWebForms.html",
    "revision": "28b2f1144ad66743688d7485878f8c52"
  },
  {
    "url": "topics/aspNet/databound/detailsviewOverview.html",
    "revision": "ad0bae7355ba1b5610280e9268a8d858"
  },
  {
    "url": "topics/aspNet/databound/gridviewCustomization.html",
    "revision": "0eb9a690256369c78e0cfa1712f842f2"
  },
  {
    "url": "topics/aspNet/databound/gridviewOverview.html",
    "revision": "c160dee70baa04ff517c805cacc57542"
  },
  {
    "url": "topics/aspNet/databound/index.html",
    "revision": "578d9f479f15f6ad6837ae2b3d6bba1d"
  },
  {
    "url": "topics/aspNet/databound/listviewOverview.html",
    "revision": "f581f99be627d19f46f216add721a11f"
  },
  {
    "url": "topics/aspNet/databound/repeaterOverview.html",
    "revision": "e0c8dbbde38ebce0c0400fe2e2c0c092"
  },
  {
    "url": "topics/aspNet/errorHandling.html",
    "revision": "f9c29b64d78b9403a2a634d9cc2df55b"
  },
  {
    "url": "topics/aspNet/userControls.html",
    "revision": "9c898e71e6190317b39195ed8ea9a2d0"
  },
  {
    "url": "topics/cqrs/index.html",
    "revision": "0a47780fc3662eefee705823ddaa2d1e"
  },
  {
    "url": "topics/dvcs/conflicts/index.html",
    "revision": "56fbf8ef00751ed8eaa1aebab904b540"
  },
  {
    "url": "topics/dvcs/gh4w.html",
    "revision": "0e872dd9467abb7a31cc6517d75552ee"
  },
  {
    "url": "topics/dvcs/index.html",
    "revision": "893bc57c0146cc1ff3894c3c04be595e"
  },
  {
    "url": "topics/entityFramework/index.html",
    "revision": "1ce72c942dee8356bbb7e991c276c690"
  },
  {
    "url": "topics/index.html",
    "revision": "7e5145038418df639b797a09cb7de475"
  },
  {
    "url": "topics/linq/index.html",
    "revision": "4eb9e9832f0ed3b4d2e398c8d60aeb8a"
  },
  {
    "url": "topics/linq/lambda.html",
    "revision": "3076df229fe8a3511100b75dd3a9f629"
  },
  {
    "url": "topics/reports/ssdt.html",
    "revision": "cbf5db89aef17ccd32e6befe5286662a"
  },
  {
    "url": "topics/security/aspNetIdentity.html",
    "revision": "4fdae6610f8786381500120b0fa9c8f5"
  },
  {
    "url": "topics/security/IdentityConfig.html",
    "revision": "b462ac82367b853d9c13a1653e874c0b"
  },
  {
    "url": "topics/security/IdentityModels.html",
    "revision": "7774d22335359f3b87b4593f7a12da1c"
  },
  {
    "url": "topics/security/index.html",
    "revision": "92f6107f7da9619a38af6d2d8eac54cb"
  },
  {
    "url": "topics/security/vs2017wap.html",
    "revision": "b7d933a8af97847888e94931dd6c078e"
  },
  {
    "url": "topics/sitemaps/index.html",
    "revision": "84f22ed66b8de04d8ba43cda0d79ed94"
  },
  {
    "url": "topics/ux/index.html",
    "revision": "f0e0d5b9daf740d859b2ff768f52affc"
  },
  {
    "url": "topics/ux/workflows/index.html",
    "revision": "57ff49ada4e1a61276f6ddd25d769c00"
  },
  {
    "url": "topics/ux/workflows/lesson-plan.html",
    "revision": "43ad6f34f5227704a014efea5494be92"
  },
  {
    "url": "topics/ux/workflows/moreUX.html",
    "revision": "b82109170b397002cd136ad14740a7c8"
  },
  {
    "url": "topics/xml/index.html",
    "revision": "4f6b9abe8c9030300f7b82cf7116c00b"
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
