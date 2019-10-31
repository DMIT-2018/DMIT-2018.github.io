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
    "revision": "762965cb8e7b45d1cddd88e6516cce13"
  },
  {
    "url": "about/bootstrapInVS2013.html",
    "revision": "67cfb1afabcbba426ecfb02726d68142"
  },
  {
    "url": "about/index.html",
    "revision": "61bd96bf3e4c7f25248e7ac631574826"
  },
  {
    "url": "about/LOGs.html",
    "revision": "47edd836ae287197cbd2546d11b9f911"
  },
  {
    "url": "about/resources.html",
    "revision": "cd4b58ba0bbac73a10b2e1d682e0a48e"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "about/troubleshoot.html",
    "revision": "35a51bfe2dc868d9ec7ecac7c992795e"
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
    "url": "assets/js/12.54995125.js",
    "revision": "4477b38d68c7685120498d3e9815d62a"
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
    "url": "assets/js/15.bf414966.js",
    "revision": "db8b3842926e2e9043acde055f696b7e"
  },
  {
    "url": "assets/js/16.0293c17a.js",
    "revision": "ac9600dd568a03dbf1838f1cced17baf"
  },
  {
    "url": "assets/js/17.7e697293.js",
    "revision": "c05794b7acdfc7c3d8dbc53aa83ffa9a"
  },
  {
    "url": "assets/js/18.be4132d8.js",
    "revision": "f63b26718922507e507c8c00c00da031"
  },
  {
    "url": "assets/js/19.4446720a.js",
    "revision": "38af3da1a3b72e35e228d00697c5c939"
  },
  {
    "url": "assets/js/2.b966be49.js",
    "revision": "9095ae9d88e9728244e04663322ad468"
  },
  {
    "url": "assets/js/20.56634831.js",
    "revision": "116c2328a200b662d45300d5c127c865"
  },
  {
    "url": "assets/js/21.0d22a885.js",
    "revision": "fa2f1ff2a3f102029ee61c40cd2244c6"
  },
  {
    "url": "assets/js/22.f6b1ad1e.js",
    "revision": "754cf2e4bf93b14920923acb9bd3abd8"
  },
  {
    "url": "assets/js/23.2b8e1911.js",
    "revision": "e50bbe4327353ad3fda6b0b99da43041"
  },
  {
    "url": "assets/js/24.d5a3253c.js",
    "revision": "f9dac81c0c33cdf76ea07cca0c165fc0"
  },
  {
    "url": "assets/js/25.a5de2c0d.js",
    "revision": "424a8ad806ad8760044b6bdb7f006eb8"
  },
  {
    "url": "assets/js/26.f0aaefc5.js",
    "revision": "5880d330b47903c8fec8f98ab92604e4"
  },
  {
    "url": "assets/js/27.6c121879.js",
    "revision": "9be8af370e4245ee2defc2a1fe4501b1"
  },
  {
    "url": "assets/js/28.ca2c5667.js",
    "revision": "b8d548d24d7eaaca08ae91e3d1618c6c"
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
    "url": "assets/js/30.5799e4df.js",
    "revision": "0b16429240d4cc2d2e62fe2eaf45578c"
  },
  {
    "url": "assets/js/31.afaa209b.js",
    "revision": "d57c916cf0e78a0044abd99f780a2d58"
  },
  {
    "url": "assets/js/32.bf437b1b.js",
    "revision": "99d4a39756b0c5d5f61a77c515043c25"
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
    "url": "assets/js/38.86a6ddaa.js",
    "revision": "30777c00fec618dfb434c2c6e8f2bb10"
  },
  {
    "url": "assets/js/39.3519e786.js",
    "revision": "b79b4d0781bd3704ad1c49b9aa6dfc6e"
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
    "url": "assets/js/41.21582bfc.js",
    "revision": "4f62f701e57627883611a58b0b065a5d"
  },
  {
    "url": "assets/js/42.7f2420f1.js",
    "revision": "e624497408bfa92b4bcf7a64da3a2308"
  },
  {
    "url": "assets/js/43.f797c709.js",
    "revision": "bb7a2642859e95a76a430ef44482ce88"
  },
  {
    "url": "assets/js/44.5ed9dac3.js",
    "revision": "f9743f2d8630b4bf6eb36c632148916f"
  },
  {
    "url": "assets/js/45.077682a9.js",
    "revision": "54429233310956ba95f2077e35db56be"
  },
  {
    "url": "assets/js/46.f110c574.js",
    "revision": "a2a8112ecfacf8d6d74e99e463e6ba66"
  },
  {
    "url": "assets/js/47.bb71e088.js",
    "revision": "fb49ca39f384bc7f5e269a2da84c613e"
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
    "url": "assets/js/5.76fd4333.js",
    "revision": "73fcfabcbfec651d3cce36780441afe1"
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
    "url": "assets/js/6.44508e94.js",
    "revision": "f3aa442e71d61ead951eb45cf0ad6a7f"
  },
  {
    "url": "assets/js/60.0d35ae02.js",
    "revision": "3a07f693abc522d137728403c60340e9"
  },
  {
    "url": "assets/js/61.6ef06cb7.js",
    "revision": "a19e3ba33eb1708a25702de32f9a9d2c"
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
    "url": "assets/js/76.ad620c54.js",
    "revision": "a9b1ef181ca9c5819dd60b05f250e63c"
  },
  {
    "url": "assets/js/77.59729c01.js",
    "revision": "77e7d6b5610526aa1fd4f16018003615"
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
    "url": "assets/js/91.10b9b185.js",
    "revision": "ab4a866ca3d67aa4808a965a9983efdd"
  },
  {
    "url": "assets/js/92.a78fe91e.js",
    "revision": "9d95650a1fdab1c56758ea119d577995"
  },
  {
    "url": "assets/js/app.053be182.js",
    "revision": "90ad7ea7cf1fb31ace6475974bddd6f7"
  },
  {
    "url": "demos/Chinook/entityDemo.html",
    "revision": "02bf5450014c31f941afea3ef28594f2"
  },
  {
    "url": "demos/Chinook/index.html",
    "revision": "42b99a0bec232b899dba5bfba895bfd1"
  },
  {
    "url": "demos/eRestaurant/about/index.html",
    "revision": "a02ab13ddf9bb0538c4e93ac1e7383f8"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminController.html",
    "revision": "7bc54f7577809d89f3e9937a16fd6ae7"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminSpecialEvents.html",
    "revision": "cf97c4d955d1efbec66cb8c47ae7090c"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/bootstrapStyle.html",
    "revision": "3430fa593537aca78d70586cda59c265"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/menu.html",
    "revision": "6dcf292a310d3b00ac05b3c7d1e9e916"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/occupiedTables.html",
    "revision": "94788b93e036750bef4ff0f92f441ecc"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/queryString.html",
    "revision": "f0766a83da18811ac0e3e04fa702d873"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/reservations.html",
    "revision": "f6351435157b7654d0a0be514da8c4da"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/fakeDateTime.html",
    "revision": "bf55ed42949030fe791ea05d640fbbb7"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/messageUserControl.html",
    "revision": "fc478cbd64c09a7a9a294b5e70e246d1"
  },
  {
    "url": "demos/eRestaurant/businessRules/businessRuleException.html",
    "revision": "007635571a45bc6868b2d63060c54bff"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingReservations.html",
    "revision": "261230de7a3c60abe59ca66d6d55a96d"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingWalkIns.html",
    "revision": "a120481bffae16a76ce35728c14141ce"
  },
  {
    "url": "demos/eRestaurant/dvcs/demo.html",
    "revision": "044b0f7afe45ebc70e0e7ab479014167"
  },
  {
    "url": "demos/eRestaurant/entityFramework/demo/demo.html",
    "revision": "63b354a2e2336351ee6eccb3db0c751a"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice-solution.html",
    "revision": "85d3f6aaa97ebfcd33be259e3fbbeb54"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice.html",
    "revision": "0dadf13395555fb4776e118d898641e1"
  },
  {
    "url": "demos/eRestaurant/index.html",
    "revision": "870689bd20a1b90e8c71ae45497ae6cc"
  },
  {
    "url": "demos/eRestaurant/linq/extensions.html",
    "revision": "fb84c62455defe0300b5e36a35a55134"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/occupiedTables.html",
    "revision": "2ccd907a9319d0386dd136995536b9f6"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/reservations.html",
    "revision": "8afb0e3d7468554e50e331ee7229344f"
  },
  {
    "url": "demos/eRestaurant/linq/index.html",
    "revision": "0e61f36d058cd5930dd96ecd1d0ccdd2"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/expressions.html",
    "revision": "6afbac440db4d524b909e27bfe7b18d9"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/program.html",
    "revision": "5781a5c8b51f008228f62955c77be1fd"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/statements.html",
    "revision": "22aa1a695df0b8d3bc46360e1a40e706"
  },
  {
    "url": "demos/eRestaurant/linq/practice.html",
    "revision": "1b00f832a0a358debbca2b963645f3d0"
  },
  {
    "url": "demos/eRestaurant/reports/customizing/index.html",
    "revision": "065bda0cb9f5fbafdd3d9a995110a54a"
  },
  {
    "url": "demos/eRestaurant/reports/reportViewer/index.html",
    "revision": "be6a8c341f61cc5ab6d0d8271612509e"
  },
  {
    "url": "demos/eRestaurant/security/demo.html",
    "revision": "42e33152566d802d014cce5cc33b6c03"
  },
  {
    "url": "demos/eRestaurant/sitemaps/demo2.html",
    "revision": "e5ba60dd7e4249966378c8d414bfd90f"
  },
  {
    "url": "demos/eRestaurant/testing/manual.html",
    "revision": "e4ef8ad86ec40a4370677f4f335e7a6a"
  },
  {
    "url": "demos/eRestaurant/ux/frontDesk/index.html",
    "revision": "850ae2167703977f8cf2954fa2750edd"
  },
  {
    "url": "demos/index.html",
    "revision": "8e7780178b0d557725d4f9a51a5e52fa"
  },
  {
    "url": "demos/Northwind/CustomerOrders/Design.html",
    "revision": "1c12975fa9380c77ed0870954df5858a"
  },
  {
    "url": "demos/Northwind/CustomerOrders/index.html",
    "revision": "6da3e2d24ea89211028b0002871cc2a9"
  },
  {
    "url": "demos/Northwind/index.html",
    "revision": "6dae2b41b416541ebfc06a765a3151cc"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/expressions.html",
    "revision": "f746fa35ce9dd453eb1b5b7c8f788835"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/program.html",
    "revision": "eb5fd07955867ab07c58df8f2e1924a3"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/statements.html",
    "revision": "360b52bd0cea8824901fb9e2c9a93519"
  },
  {
    "url": "demos/Northwind/Security/index.html",
    "revision": "aa2916cd1a38d1d4e366df9275ebfa97"
  },
  {
    "url": "exercises/dvcs.html",
    "revision": "17b0b15f02489e28591569da0afb0c3a"
  },
  {
    "url": "exercises/ef.html",
    "revision": "a8549448698457c1b23b4709780d54a6"
  },
  {
    "url": "exercises/index.html",
    "revision": "f635e17a7d0f932994c6a0c963ec227c"
  },
  {
    "url": "exercises/linq.html",
    "revision": "035a387dbd8a7e15bd78cca15f29c7b2"
  },
  {
    "url": "exercises/oltp.html",
    "revision": "2f904894fd8f72452c431dd9a39f2688"
  },
  {
    "url": "exercises/planning.html",
    "revision": "70d307318c2d0b4c9193917d0c596b7d"
  },
  {
    "url": "exercises/reporting.html",
    "revision": "865969368c6bc929c8fa6492da13be78"
  },
  {
    "url": "exercises/reports/install_ssdt.html",
    "revision": "690760d11aab0785b81c3dcd5dd29c04"
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
    "revision": "d9308ad00c8e3fb11b82c52fe6f6043e"
  },
  {
    "url": "logs/index.html",
    "revision": "b1c64d5d8d53ff90d1241f2accf70d6a"
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
    "revision": "e1911492428adb68f154e5e2326465cc"
  },
  {
    "url": "topics/aspNet/assortedWebForms.html",
    "revision": "347df6682b1eaaa1405af84398b07b1b"
  },
  {
    "url": "topics/aspNet/databound/detailsviewOverview.html",
    "revision": "fe7c863a70f89f30e7d7ed7f49d4ce52"
  },
  {
    "url": "topics/aspNet/databound/gridviewCustomization.html",
    "revision": "d7af254fbcfa2bab3ca06e172ca4f28d"
  },
  {
    "url": "topics/aspNet/databound/gridviewOverview.html",
    "revision": "382153db86dc87e935ae2e31ca5fbfc4"
  },
  {
    "url": "topics/aspNet/databound/index.html",
    "revision": "643e0504f270ce18e58f44051174c00c"
  },
  {
    "url": "topics/aspNet/databound/listviewOverview.html",
    "revision": "58772541a10190b5e8268fb654df317a"
  },
  {
    "url": "topics/aspNet/databound/repeaterOverview.html",
    "revision": "177f58ba0e413e493544c6bce7cbd120"
  },
  {
    "url": "topics/aspNet/errorHandling.html",
    "revision": "f461468261e69d6e9e614668615258dd"
  },
  {
    "url": "topics/aspNet/userControls.html",
    "revision": "ecc2f304ce1f59bc753bf5379e78745f"
  },
  {
    "url": "topics/cqrs/index.html",
    "revision": "647af990c54fd21f8e91ddb319a7e86e"
  },
  {
    "url": "topics/dvcs/conflicts/index.html",
    "revision": "e05206d54f9dee0285c62e28d7a33a8b"
  },
  {
    "url": "topics/dvcs/gh4w.html",
    "revision": "44c88fc3c21203310278edfea23e2a6a"
  },
  {
    "url": "topics/dvcs/index.html",
    "revision": "5051de3c2aee248029ac6358cc5836e0"
  },
  {
    "url": "topics/entityFramework/index.html",
    "revision": "320abbd5502f9a89b18957729d9e6ff0"
  },
  {
    "url": "topics/index.html",
    "revision": "9a441215a199664831c7ffc38f509106"
  },
  {
    "url": "topics/linq/index.html",
    "revision": "4f801671d865a604f0a75bc42ddfc440"
  },
  {
    "url": "topics/linq/lambda.html",
    "revision": "2dcf93564b91e4d24ef5f16c7f8fe032"
  },
  {
    "url": "topics/reports/ssdt.html",
    "revision": "65c19c763b0407d6d4f4eef313375b4f"
  },
  {
    "url": "topics/security/aspNetIdentity.html",
    "revision": "1b46710d6cb0866d235464dffd1b29c1"
  },
  {
    "url": "topics/security/IdentityConfig.html",
    "revision": "5dd3092e92d967eb80c0c69bc580f3af"
  },
  {
    "url": "topics/security/IdentityModels.html",
    "revision": "3f03dd4b7f86065f08c9d22920af7dfb"
  },
  {
    "url": "topics/security/index.html",
    "revision": "bf413929ab66db42ac317afd3084bc98"
  },
  {
    "url": "topics/security/vs2017wap.html",
    "revision": "f87f256ef37bd12f6f416b4f08aa0aec"
  },
  {
    "url": "topics/sitemaps/index.html",
    "revision": "bad624215641df6f626437c7f8e6b4f9"
  },
  {
    "url": "topics/ux/index.html",
    "revision": "141d9f5a039e20d2c251a46812facca4"
  },
  {
    "url": "topics/ux/workflows/index.html",
    "revision": "df82af6606784165b072d876b5d5b42b"
  },
  {
    "url": "topics/ux/workflows/lesson-plan.html",
    "revision": "c5ad20eea9e3b5be2448b715fc7ccb40"
  },
  {
    "url": "topics/ux/workflows/moreUX.html",
    "revision": "1db72f3dc16d3e13d8159e36fbba4747"
  },
  {
    "url": "topics/xml/index.html",
    "revision": "9938b0bf35228ee1220a667ec77b910a"
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
