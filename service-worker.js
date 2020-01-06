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
    "revision": "f33d6e4c2bddbcb0ac3af5b85a4cb5a5"
  },
  {
    "url": "about/bootstrapInVS2013.html",
    "revision": "28738b25bc73925e1808d83b54c38015"
  },
  {
    "url": "about/index.html",
    "revision": "23ce482f3d8c60a146a838f04dcb97a5"
  },
  {
    "url": "about/LOGs.html",
    "revision": "f45dc01c0ea6c5e40e614df9a0e8f47e"
  },
  {
    "url": "about/resources.html",
    "revision": "78cff0a509de2625c8c6a2337eea174f"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "about/troubleshoot.html",
    "revision": "4a03fd13b7dfc2e8a1c85090f69fc796"
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
    "url": "assets/js/2.b966be49.js",
    "revision": "9095ae9d88e9728244e04663322ad468"
  },
  {
    "url": "assets/js/20.c99b3ef2.js",
    "revision": "1068274ae94997cb3714c0d897ec74d8"
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
    "url": "assets/js/3.ff151dba.js",
    "revision": "41700750ff8f25e9f6e2cc13c98dda1b"
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
    "url": "assets/js/35.626e0512.js",
    "revision": "2a09a6ce8f521e4532e1e1cffaf581f7"
  },
  {
    "url": "assets/js/36.5f74194e.js",
    "revision": "800191030843d6dd8c292fe1c0e54533"
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
    "url": "assets/js/39.718d0b65.js",
    "revision": "3499e40ca4345edec652b9c3b07588bb"
  },
  {
    "url": "assets/js/4.cb1f899d.js",
    "revision": "bb253e0945fb08feda2fcbcbe6d26e9f"
  },
  {
    "url": "assets/js/40.42972a17.js",
    "revision": "cd863db8dd541dccc3ea32f11f6e17e5"
  },
  {
    "url": "assets/js/41.8f743ee1.js",
    "revision": "bc055766bef3b27bfec825f8c914d792"
  },
  {
    "url": "assets/js/42.6c93568a.js",
    "revision": "01f6c07a4b89fb043e71e1e3ef1bcc57"
  },
  {
    "url": "assets/js/43.5d8e6af1.js",
    "revision": "1d03db4e988a7e2fbc4af9085b7cf0f9"
  },
  {
    "url": "assets/js/44.b14100ca.js",
    "revision": "e4458935d7f8b8c7829b7e91c85473a0"
  },
  {
    "url": "assets/js/45.077682a9.js",
    "revision": "54429233310956ba95f2077e35db56be"
  },
  {
    "url": "assets/js/46.cd956bca.js",
    "revision": "a5871e998f1e3a602d1ba504ec87ae41"
  },
  {
    "url": "assets/js/47.e3ffa2f4.js",
    "revision": "5237ae2401981c73d1559c9a1b55d01d"
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
    "url": "assets/js/51.85fc4b44.js",
    "revision": "ac0c1e962edd6d399b13e427e9f3db27"
  },
  {
    "url": "assets/js/52.36ccef95.js",
    "revision": "b1708704827f43404d59576a25d6322e"
  },
  {
    "url": "assets/js/53.e4b2225a.js",
    "revision": "27af4bba3b3f2e27ff6593884837ff1d"
  },
  {
    "url": "assets/js/54.3f468ada.js",
    "revision": "ae03acedc322b2db1dca64f6d735dc0d"
  },
  {
    "url": "assets/js/55.8ab6755b.js",
    "revision": "af6b329e40cbbf48024ae30f818e2203"
  },
  {
    "url": "assets/js/56.27b9e345.js",
    "revision": "868a481604247a97341403c71c098928"
  },
  {
    "url": "assets/js/57.82fa7f74.js",
    "revision": "1b487545943f34d8e41dde71d2abbd40"
  },
  {
    "url": "assets/js/58.66105938.js",
    "revision": "d0f1a6de4cd73a4649d70e788156d946"
  },
  {
    "url": "assets/js/59.1c48e4d1.js",
    "revision": "89af17978c9e94e4dc4a08af3351cef5"
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
    "url": "assets/js/61.92f5315b.js",
    "revision": "99fabb528cb516fe7e5a09e9a2ec4ccc"
  },
  {
    "url": "assets/js/62.0b20a578.js",
    "revision": "3e62194b43e49aad69f9297796551d2e"
  },
  {
    "url": "assets/js/63.c9790e36.js",
    "revision": "15dbd507777b4e17c2ad795ad32fb3c8"
  },
  {
    "url": "assets/js/64.5e7de227.js",
    "revision": "a66d2c44bb3cb4f109af8087c4d6ab34"
  },
  {
    "url": "assets/js/65.20bc985b.js",
    "revision": "de8f69a70d4c1a22c30df98d50f78fb7"
  },
  {
    "url": "assets/js/66.27f59f6c.js",
    "revision": "45dcfaa73e90eec4e0654215856e26ea"
  },
  {
    "url": "assets/js/67.3adde934.js",
    "revision": "e12bbd4c71eab2ffdb3d41ea604379b9"
  },
  {
    "url": "assets/js/68.e3daa99b.js",
    "revision": "186f8a1af776f2de344cd737d5129382"
  },
  {
    "url": "assets/js/69.795ac78e.js",
    "revision": "e48860ef7a58f08251d88f7a9da95edf"
  },
  {
    "url": "assets/js/7.3c8dc4cf.js",
    "revision": "2fe47e16dd5820de1a8e9ef69f986082"
  },
  {
    "url": "assets/js/70.661c9bd2.js",
    "revision": "681bec777437240075abdff30a085858"
  },
  {
    "url": "assets/js/71.f8f8bf63.js",
    "revision": "e4dc6a4f38ab54c6ed97b0f233a25128"
  },
  {
    "url": "assets/js/72.548d9689.js",
    "revision": "2599696e209949229d8e2ccc59acd022"
  },
  {
    "url": "assets/js/73.c37032eb.js",
    "revision": "78f06d5c27c4ce0d2bb844d46e00a676"
  },
  {
    "url": "assets/js/74.9517de2d.js",
    "revision": "4fdb331ccbc2afa53a110949a75f4b1e"
  },
  {
    "url": "assets/js/75.29228b29.js",
    "revision": "73cf2dee5ae7bcb099c4e4b75d43e2e7"
  },
  {
    "url": "assets/js/76.3d44d03d.js",
    "revision": "2636e14629027d1ee8604f11420eb7df"
  },
  {
    "url": "assets/js/77.28baac06.js",
    "revision": "d46469c615c84b67f1b6e15b2224e394"
  },
  {
    "url": "assets/js/78.78fd3e97.js",
    "revision": "21feb1b9f20d88da278fa9221cbd78a7"
  },
  {
    "url": "assets/js/79.ba03c2df.js",
    "revision": "1048309af2e48f188b4e4216d24b517b"
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
    "url": "assets/js/81.baeea1ca.js",
    "revision": "33dfe285197b410db7cce1b30ecbac99"
  },
  {
    "url": "assets/js/82.622bd964.js",
    "revision": "4b692c906935bfa77d67833c29918201"
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
    "url": "assets/js/86.f266654b.js",
    "revision": "e0076d623ec8766a82adb8fdeacb3a09"
  },
  {
    "url": "assets/js/87.50adbb79.js",
    "revision": "679ebb222ff41a7115ce89affa77317e"
  },
  {
    "url": "assets/js/88.482697d3.js",
    "revision": "aea373aed82c88ec55ef208a453446e5"
  },
  {
    "url": "assets/js/89.01c4b26e.js",
    "revision": "3c1d618d7d8c5a354cfa17677dae4792"
  },
  {
    "url": "assets/js/9.d58cca13.js",
    "revision": "0d1499e9b952e0d86784f447c4b3721d"
  },
  {
    "url": "assets/js/90.a380df82.js",
    "revision": "d5cc742ea5ca5955593dd3964a0edec5"
  },
  {
    "url": "assets/js/91.10b9b185.js",
    "revision": "ab4a866ca3d67aa4808a965a9983efdd"
  },
  {
    "url": "assets/js/92.a78fe91e.js",
    "revision": "9d95650a1fdab1c56758ea119d577995"
  },
  {
    "url": "assets/js/app.065aba13.js",
    "revision": "b2069dee04600e29d68ca8f2bd84b5e5"
  },
  {
    "url": "demos/Chinook/entityDemo.html",
    "revision": "b9b34130dae5c9318b18b2f04d34c32a"
  },
  {
    "url": "demos/Chinook/index.html",
    "revision": "8bc9543810b3603785c7b6c70530057e"
  },
  {
    "url": "demos/eRestaurant/about/index.html",
    "revision": "ae0722a6bb73a0697bd6721162389c82"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminController.html",
    "revision": "06c760dde4ae28bf91a3636c505fdf4b"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminSpecialEvents.html",
    "revision": "4a90e7d96131d3db39f81597206af751"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/bootstrapStyle.html",
    "revision": "5d049ce4e616db2f74dd1e61700b85e5"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/menu.html",
    "revision": "fadba58de2c9c42aa1559aa0c69dec27"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/occupiedTables.html",
    "revision": "5027615ac9859510ab2fb6b18283dc77"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/queryString.html",
    "revision": "d35f33b148f7b77cae259c81957464af"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/reservations.html",
    "revision": "7f255cbbd1f8ffa76296a11ec4c57bc8"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/fakeDateTime.html",
    "revision": "6c669d08dd411f4dc87c83a549389dfe"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/messageUserControl.html",
    "revision": "a23820f1ed731762d8480f6513113418"
  },
  {
    "url": "demos/eRestaurant/businessRules/businessRuleException.html",
    "revision": "04b5c69bd2ba32e7b236564e8589be4d"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingReservations.html",
    "revision": "da517843dcdd5d33191a85a56e87426c"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingWalkIns.html",
    "revision": "ed7639a11274789460ecb804fa5daf25"
  },
  {
    "url": "demos/eRestaurant/dvcs/demo.html",
    "revision": "688115a8438c196dc4c91ad30644eac3"
  },
  {
    "url": "demos/eRestaurant/entityFramework/demo/demo.html",
    "revision": "6c9bec402e01f958549059d21c3360ef"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice-solution.html",
    "revision": "171d2d6101c328f1da62b1d6843053d2"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice.html",
    "revision": "51514e7be0c9f00138c6ffeab6a386e2"
  },
  {
    "url": "demos/eRestaurant/index.html",
    "revision": "127533e32c8a0fc28a055334c40adc0a"
  },
  {
    "url": "demos/eRestaurant/linq/extensions.html",
    "revision": "1147c369496405ea9a3fc4f5e629909a"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/occupiedTables.html",
    "revision": "bdcdee25e934ec389e0bde99ad8d9713"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/reservations.html",
    "revision": "1119ebcc7c9ac568c0ad56a0a48333f0"
  },
  {
    "url": "demos/eRestaurant/linq/index.html",
    "revision": "24285aa10b9bd67fc83ee1c61a1348cf"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/expressions.html",
    "revision": "cf3bd299c8d1e5482bebbccbb1be1ed1"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/program.html",
    "revision": "edc0832493bd147c0ba20fce48fb4cfe"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/statements.html",
    "revision": "a6bd3563e499fb9db6a449304bca7d58"
  },
  {
    "url": "demos/eRestaurant/linq/practice.html",
    "revision": "0c7cda6ac470a5d0c6d72ce8869fdb69"
  },
  {
    "url": "demos/eRestaurant/reports/customizing/index.html",
    "revision": "91dace20514d186dc6c39ea6db536644"
  },
  {
    "url": "demos/eRestaurant/reports/reportViewer/index.html",
    "revision": "8fc3aae7c08d0491a1d43e7cb18d82e5"
  },
  {
    "url": "demos/eRestaurant/security/demo.html",
    "revision": "a1aba38fd54284fbad0c88e361b26cf7"
  },
  {
    "url": "demos/eRestaurant/sitemaps/demo2.html",
    "revision": "00ac1c880248301714f09d8b9dc55da0"
  },
  {
    "url": "demos/eRestaurant/testing/manual.html",
    "revision": "c3ac1cc974718e5e7eb7a24beaa787df"
  },
  {
    "url": "demos/eRestaurant/ux/frontDesk/index.html",
    "revision": "5efcf5f1edabcea7809c4f89a917aff8"
  },
  {
    "url": "demos/index.html",
    "revision": "3c489ffde1f4acaee1de91f69157a30f"
  },
  {
    "url": "demos/Northwind/CustomerOrders/Design.html",
    "revision": "f4c5e111e1df692874dd3f55feed7da3"
  },
  {
    "url": "demos/Northwind/CustomerOrders/index.html",
    "revision": "d6707e61589b1f4b3a6482a5f4d7ccfa"
  },
  {
    "url": "demos/Northwind/index.html",
    "revision": "a37def357499223aa514ad0865f459d1"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/expressions.html",
    "revision": "091959bd3dd5508042e5f6c83cf11b6d"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/program.html",
    "revision": "8a29976a67eef8e1631c9e858fb6f275"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/statements.html",
    "revision": "f3a044b63ea22b32a7ad4f72eddf5763"
  },
  {
    "url": "demos/Northwind/Security/index.html",
    "revision": "d57f1c004085c92b57059f014e8fdbd9"
  },
  {
    "url": "exercises/dvcs.html",
    "revision": "080c855c785699fb415f4b9a740f9400"
  },
  {
    "url": "exercises/ef.html",
    "revision": "6924abdd5dbb300d84fb790ffb454c09"
  },
  {
    "url": "exercises/index.html",
    "revision": "e1985dc742e23b5fded0990d5a6ebf78"
  },
  {
    "url": "exercises/linq.html",
    "revision": "5f09c52924a2850ee314182449d8c97b"
  },
  {
    "url": "exercises/oltp.html",
    "revision": "29936f4f6168e481552810a448d40034"
  },
  {
    "url": "exercises/planning.html",
    "revision": "49612ccad95bd6557822f0e7fb322611"
  },
  {
    "url": "exercises/reporting.html",
    "revision": "fc58cf3c872371b1653aefcef83c1c4d"
  },
  {
    "url": "exercises/reports/install_ssdt.html",
    "revision": "3d10f9595d3f2519923cce7adc950107"
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
    "revision": "c1bb7ed0d95901ec49c28555566a8388"
  },
  {
    "url": "logs/index.html",
    "revision": "91c96db19ced18e1bbfe6c55d1f0007f"
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
    "revision": "f15f9485bdc1a1da3dd4c055a77e87a8"
  },
  {
    "url": "topics/aspNet/assortedWebForms.html",
    "revision": "8e746a26d7695bcd0a82352a2d9ce3fe"
  },
  {
    "url": "topics/aspNet/databound/detailsviewOverview.html",
    "revision": "84e4195680005b18ff6886d08a39f0f3"
  },
  {
    "url": "topics/aspNet/databound/gridviewCustomization.html",
    "revision": "efe465e62c5ec03467732f338eb989d5"
  },
  {
    "url": "topics/aspNet/databound/gridviewOverview.html",
    "revision": "a9ceb07e7cafa1adecacce4617e1eacc"
  },
  {
    "url": "topics/aspNet/databound/index.html",
    "revision": "688c87f1705ce51627ee2f0085841850"
  },
  {
    "url": "topics/aspNet/databound/listviewOverview.html",
    "revision": "086d5a65b47056842953f4be08914b23"
  },
  {
    "url": "topics/aspNet/databound/repeaterOverview.html",
    "revision": "46d971cf9d3fcc0fab83c8648d158d79"
  },
  {
    "url": "topics/aspNet/errorHandling.html",
    "revision": "304e064e0086b90d3e12d83261b2e949"
  },
  {
    "url": "topics/aspNet/userControls.html",
    "revision": "9958643adfe6cb3e8bbc5b7037cb62ee"
  },
  {
    "url": "topics/cqrs/index.html",
    "revision": "fce0b79f6c3dc024b8323a1032fbec98"
  },
  {
    "url": "topics/dvcs/conflicts/index.html",
    "revision": "8233c4a13ed83146d9884e2d9ddcf58b"
  },
  {
    "url": "topics/dvcs/gh4w.html",
    "revision": "5a8b148e1c1c77c6ef35b06d17999b3e"
  },
  {
    "url": "topics/dvcs/index.html",
    "revision": "5b11f43098c7eb72fc8740e65504031f"
  },
  {
    "url": "topics/entityFramework/index.html",
    "revision": "c878ea42df15ae1c83b853ce0e7265f3"
  },
  {
    "url": "topics/index.html",
    "revision": "9edcc28fe526f42aa02110ae4136ca1d"
  },
  {
    "url": "topics/linq/index.html",
    "revision": "3e1da9b4aa7dfd43aa189912fc047793"
  },
  {
    "url": "topics/linq/lambda.html",
    "revision": "f3126e31f1c91564bfbe97f4c715c50e"
  },
  {
    "url": "topics/reports/ssdt.html",
    "revision": "30f39fd5d9013072b91d540af4096c62"
  },
  {
    "url": "topics/security/aspNetIdentity.html",
    "revision": "4c7ecc107bfe64f05e507aea847aac00"
  },
  {
    "url": "topics/security/IdentityConfig.html",
    "revision": "b0d4486f971426069401e1dbe791371d"
  },
  {
    "url": "topics/security/IdentityModels.html",
    "revision": "e110cfef9efa9144812726e75bc9f645"
  },
  {
    "url": "topics/security/index.html",
    "revision": "f51db7ee332b96d4a89e411d0ec6e16d"
  },
  {
    "url": "topics/security/vs2017wap.html",
    "revision": "da3df53e6ab5896512d8f19c9076f2a1"
  },
  {
    "url": "topics/sitemaps/index.html",
    "revision": "ddfd64372138646f3866ebf8b5cdf72e"
  },
  {
    "url": "topics/ux/index.html",
    "revision": "2d379744fa505d264fb90472111578ba"
  },
  {
    "url": "topics/ux/workflows/index.html",
    "revision": "58f6fea4f4b476094cecfd0e3eaca316"
  },
  {
    "url": "topics/ux/workflows/lesson-plan.html",
    "revision": "be9d0b54333a1e5d8adc58f9f907db76"
  },
  {
    "url": "topics/ux/workflows/moreUX.html",
    "revision": "560267360fdc5dbfff826fa264e6aa84"
  },
  {
    "url": "topics/xml/index.html",
    "revision": "cc2c3a222945df6fd9a23a2ff81d4f08"
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
