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
    "revision": "fabc27485110ed313d66cf5920fa87e1"
  },
  {
    "url": "about/bootstrapInVS2013.html",
    "revision": "fbc04770375bfd5d584b6b3fe9a90922"
  },
  {
    "url": "about/index.html",
    "revision": "6ff988059139adaf8c0eb38a81129a20"
  },
  {
    "url": "about/LOGs.html",
    "revision": "b562d075cbf1abd7248efd96ebc84d39"
  },
  {
    "url": "about/resources.html",
    "revision": "cdd2b27a818c80d09bb5e08d03b64b04"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "about/troubleshoot.html",
    "revision": "53668c6f698c89dcc256ab5526c70841"
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
    "url": "assets/img/new_q4.63bebf47.png",
    "revision": "63bebf47a254545573c3590d1c7e819f"
  },
  {
    "url": "assets/img/new_q7.5d0d059a.png",
    "revision": "5d0d059ac290e865e7a6e22787ceaa3b"
  },
  {
    "url": "assets/img/new_q8.7a233cd9.png",
    "revision": "7a233cd9553b964838cf1599f2296193"
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
    "url": "assets/img/q1.180d248c.png",
    "revision": "180d248cabe15eb161f8def7e8179619"
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
    "url": "assets/js/10.b4bd7301.js",
    "revision": "d5f92b47c75b0570ce1193a3973f0a54"
  },
  {
    "url": "assets/js/11.35f7fb83.js",
    "revision": "43bc4b7966c4f1d4fbf2d92b678a008e"
  },
  {
    "url": "assets/js/12.79b310e0.js",
    "revision": "f2197b097fb7e821bbbb7314ed4e1a20"
  },
  {
    "url": "assets/js/13.80fb69ba.js",
    "revision": "1b45224535bde154715d4c53cd3a0b7c"
  },
  {
    "url": "assets/js/14.653230d0.js",
    "revision": "ac4f8b77d864be889b453825d905c760"
  },
  {
    "url": "assets/js/15.fa3a228f.js",
    "revision": "6750d495aef1b22d406fbda3ed05d20a"
  },
  {
    "url": "assets/js/16.4386350e.js",
    "revision": "5f6a64dd05bb571466ba4a57530ba7e2"
  },
  {
    "url": "assets/js/17.61907adb.js",
    "revision": "0f9278cdcca172792dec4d5df2c13207"
  },
  {
    "url": "assets/js/18.f1fd3d57.js",
    "revision": "5d6787e27e92670f40956dab37173e76"
  },
  {
    "url": "assets/js/19.e1d09afb.js",
    "revision": "43434c85899d26844d946dc0cfde7ff4"
  },
  {
    "url": "assets/js/2.567e7079.js",
    "revision": "ae97b9f68f65fb69746d5edc18e700de"
  },
  {
    "url": "assets/js/20.445fe35a.js",
    "revision": "34eb3e639a2d4165beac8f579c6cb7d7"
  },
  {
    "url": "assets/js/21.6139864c.js",
    "revision": "8c8652178d5979710426df5f937b8499"
  },
  {
    "url": "assets/js/22.4a648972.js",
    "revision": "c4f43b7ba0246ed6c40cea4e2aeaa944"
  },
  {
    "url": "assets/js/23.10d20fd0.js",
    "revision": "71608b367cfcbfd90d67e74e56ffe179"
  },
  {
    "url": "assets/js/24.171880d9.js",
    "revision": "b55e74ae2e8fc44cf3e3288d33c8fc6c"
  },
  {
    "url": "assets/js/25.7eaf4f01.js",
    "revision": "ec26e573f9bcf05be261c0d33246960f"
  },
  {
    "url": "assets/js/26.65701e13.js",
    "revision": "d1e6abcaae219d06ab49f35f9e7b723f"
  },
  {
    "url": "assets/js/27.48b7c033.js",
    "revision": "46d9657339f8c3c745177e04e65a0710"
  },
  {
    "url": "assets/js/28.f0211154.js",
    "revision": "c62ee3e6c9ffb159c79bb33febf664df"
  },
  {
    "url": "assets/js/29.13e8cab7.js",
    "revision": "f7e4ab1429c32cf70a33993605e1e995"
  },
  {
    "url": "assets/js/3.c9805f6b.js",
    "revision": "e0ece6248ce131417b9d66a01c549b2a"
  },
  {
    "url": "assets/js/30.74e89ec9.js",
    "revision": "b9f9288dc43d6f90ada68847faa1d6c6"
  },
  {
    "url": "assets/js/31.9c07b9c5.js",
    "revision": "1cb4b61021ff38d802650721e7a3c4be"
  },
  {
    "url": "assets/js/32.f751768b.js",
    "revision": "773c90979552b61fd2974c92f1fe1750"
  },
  {
    "url": "assets/js/33.6fa1df51.js",
    "revision": "b67327a7f50493e3b29a7b752745edad"
  },
  {
    "url": "assets/js/34.03d7bb5f.js",
    "revision": "d2aa8268fb72436ce0a99c11fa142a20"
  },
  {
    "url": "assets/js/35.2759b355.js",
    "revision": "a70e9b2b4e132d2c4aa1e1d218da14c4"
  },
  {
    "url": "assets/js/36.ec6a9fe7.js",
    "revision": "22647f64cbc08b7208d9931c28d64a9d"
  },
  {
    "url": "assets/js/37.42791c71.js",
    "revision": "d0051f22b0bc0d7b8a925cb22962d75a"
  },
  {
    "url": "assets/js/38.6074d10d.js",
    "revision": "b6524502c7ab67ecbe9cdbf11b4b3108"
  },
  {
    "url": "assets/js/39.bedfa41c.js",
    "revision": "c1fed52bade20b13232d95f2ae1a7c3e"
  },
  {
    "url": "assets/js/4.82ae1f42.js",
    "revision": "379c3ce1ee1d91d082b5bfd653f7e8ba"
  },
  {
    "url": "assets/js/40.6d679278.js",
    "revision": "8005abe684365cefdca318e6f887d006"
  },
  {
    "url": "assets/js/41.f2176a8b.js",
    "revision": "d0282295d2e5a39d945c0d1c81c9342e"
  },
  {
    "url": "assets/js/42.5ecb2f8b.js",
    "revision": "40b451e121c85f271c0e8151966710c6"
  },
  {
    "url": "assets/js/43.35c0cfde.js",
    "revision": "ad47d37f4fb21ed2c084e502d1189f4d"
  },
  {
    "url": "assets/js/44.ecc07ac8.js",
    "revision": "4d8c08a290a714556676f170403ba89c"
  },
  {
    "url": "assets/js/45.cadf2025.js",
    "revision": "c62626a31767b73738a27fce2665ead5"
  },
  {
    "url": "assets/js/46.b43949df.js",
    "revision": "c32c1cbedb01220450e089a9c826105f"
  },
  {
    "url": "assets/js/47.bfc2b006.js",
    "revision": "af95b9a66dfebfecc10ae670b6db9024"
  },
  {
    "url": "assets/js/48.04d1eb28.js",
    "revision": "319e1ae6ef8794220eb8a0e892e87725"
  },
  {
    "url": "assets/js/49.802179a6.js",
    "revision": "924c69f93464b3c1363b392b79376fcb"
  },
  {
    "url": "assets/js/5.84faa383.js",
    "revision": "3d258303a47e76d142fef190d2c6695e"
  },
  {
    "url": "assets/js/50.a3dbe7e0.js",
    "revision": "519e5715f31a04faf9ef2e23ab76feb9"
  },
  {
    "url": "assets/js/51.8d5ef038.js",
    "revision": "e062f436410ddf598c2faec43bbb4a1c"
  },
  {
    "url": "assets/js/52.89ad3c37.js",
    "revision": "993e855249b9fe95a4bc2f3f6e5edf07"
  },
  {
    "url": "assets/js/53.8df26871.js",
    "revision": "2e8b22367eb70316f671b1f2b57eb224"
  },
  {
    "url": "assets/js/54.92868cdf.js",
    "revision": "e660380f893fe363a760842d7eaa00e6"
  },
  {
    "url": "assets/js/55.9832bb7f.js",
    "revision": "85be33012c8f5b09b4b19daee747cd36"
  },
  {
    "url": "assets/js/56.ab6df3b1.js",
    "revision": "4175147f9036c1c93a3044c0a2e109eb"
  },
  {
    "url": "assets/js/57.75749f19.js",
    "revision": "1fde8fef131d2e141b68686bce83d1d4"
  },
  {
    "url": "assets/js/58.eb71827d.js",
    "revision": "fd5b605e635a4d506496de39b94b5d44"
  },
  {
    "url": "assets/js/59.3479245a.js",
    "revision": "bb41ab67fe91cc92b54523e13932e8e4"
  },
  {
    "url": "assets/js/6.a0ed62ff.js",
    "revision": "63abc1a38856ede7b26e0172073453bd"
  },
  {
    "url": "assets/js/60.37905f68.js",
    "revision": "f43b4c27c0f37baee8c93f51e1a89fc6"
  },
  {
    "url": "assets/js/61.99ba9f8b.js",
    "revision": "0b6a20bdf30c6e4da3926c1bc596d759"
  },
  {
    "url": "assets/js/62.e973efae.js",
    "revision": "77e9e9a523f010439e599c1aa7188e20"
  },
  {
    "url": "assets/js/63.85a1143e.js",
    "revision": "29ef4287e3a59bd86c0605f0a28c7dde"
  },
  {
    "url": "assets/js/64.2fb7fab2.js",
    "revision": "8a56c5283f0ab896f9632ff2e451de9e"
  },
  {
    "url": "assets/js/65.464e6e18.js",
    "revision": "be3462d58153b726a02fa8ed36cc2e12"
  },
  {
    "url": "assets/js/66.7012e0f7.js",
    "revision": "90f08c4976f92026a339998fcd66b475"
  },
  {
    "url": "assets/js/67.4c6dcd54.js",
    "revision": "69d4d74635afb591a5dadd100149fb9e"
  },
  {
    "url": "assets/js/68.a6151787.js",
    "revision": "dd79a60c93bdf87d67309369d378cf41"
  },
  {
    "url": "assets/js/69.3d39c5c3.js",
    "revision": "f8fd2e8240eedc408515557e3163dc64"
  },
  {
    "url": "assets/js/7.63a10552.js",
    "revision": "e44fc3c6be867833dbe4305d2e24f290"
  },
  {
    "url": "assets/js/70.90d3431b.js",
    "revision": "2390202f70b77448c030033b6ccde189"
  },
  {
    "url": "assets/js/71.1572d173.js",
    "revision": "e9fd009c1328387620b6e079c516813e"
  },
  {
    "url": "assets/js/72.e4a80586.js",
    "revision": "e1f603e8dd2e1764276ce80057d8173b"
  },
  {
    "url": "assets/js/73.a02572a9.js",
    "revision": "bea43124a531d4c3c31027cf9a350ff2"
  },
  {
    "url": "assets/js/74.78ae4a72.js",
    "revision": "01c8a680bbfa0727385fae7fbbdf4724"
  },
  {
    "url": "assets/js/75.9eeab8da.js",
    "revision": "917111a2a13e077f3cae9edafd7e9e2b"
  },
  {
    "url": "assets/js/76.212c3083.js",
    "revision": "5492a7aad4a87718b82ad9cd573911d6"
  },
  {
    "url": "assets/js/77.b727f4ad.js",
    "revision": "30d862dda626d28ac2063518c07dd1d1"
  },
  {
    "url": "assets/js/78.b8528016.js",
    "revision": "c7d9a7682f3ce5a3b7a32e509c6461f0"
  },
  {
    "url": "assets/js/79.b04f6dca.js",
    "revision": "83bfdde300b00b1e9732dcdc97471508"
  },
  {
    "url": "assets/js/8.47a93859.js",
    "revision": "45d966dedff23b1d16d6f02711bf740e"
  },
  {
    "url": "assets/js/80.1bf6af2f.js",
    "revision": "9596c13286a901251c65cc68b85f3fa5"
  },
  {
    "url": "assets/js/81.42d01465.js",
    "revision": "45f9e131bd1ccbcb305e42b461a0f89e"
  },
  {
    "url": "assets/js/82.ae3b86f7.js",
    "revision": "9b0deef11d8361a18dc69ae5ccb5bd8d"
  },
  {
    "url": "assets/js/83.e38bef7e.js",
    "revision": "2e580c3e926cdcf167d76efc12094843"
  },
  {
    "url": "assets/js/84.ae8152fe.js",
    "revision": "cf7dfbf5bd8486b058dbb203bf67c3c8"
  },
  {
    "url": "assets/js/85.909e301c.js",
    "revision": "82c1d4faf1df463f2d933c6c029b8ec6"
  },
  {
    "url": "assets/js/86.92d233f3.js",
    "revision": "467a0119cf94cd1bf9ab9a501ca6d5eb"
  },
  {
    "url": "assets/js/87.2dcf5faf.js",
    "revision": "203fd1552f3ad4970c2d49ca25a57afa"
  },
  {
    "url": "assets/js/88.18cfbc4b.js",
    "revision": "2be970c6fee5069d16014c4e9f5bfd69"
  },
  {
    "url": "assets/js/89.fe84c93c.js",
    "revision": "f81f55e7a61e84897ac5c806a99a59af"
  },
  {
    "url": "assets/js/9.7fe5323a.js",
    "revision": "80fe02514025449422adbe914d73f8d8"
  },
  {
    "url": "assets/js/90.a94f5805.js",
    "revision": "b0a77b5400bab4428221077140ca6094"
  },
  {
    "url": "assets/js/91.fb8c9abd.js",
    "revision": "0b318f898677cd728404580807d44247"
  },
  {
    "url": "assets/js/92.15351a1e.js",
    "revision": "2f2e4c71dfe90c18fed42b125bb5d66c"
  },
  {
    "url": "assets/js/93.c586287a.js",
    "revision": "60484c3441309d97183ecf2b8faef7ac"
  },
  {
    "url": "assets/js/94.2253bcf6.js",
    "revision": "dca54d2b81fa4fc5cce85f3fe5ea43fb"
  },
  {
    "url": "assets/js/95.23580df4.js",
    "revision": "09728bd41bc57d475f51c27e4e225a7f"
  },
  {
    "url": "assets/js/app.a26eadb8.js",
    "revision": "c42de37d7231daa2d234e985ed1ede4c"
  },
  {
    "url": "demos/Chinook/entityDemo.html",
    "revision": "4e0f8cdfc0e4e3e869f8cd48c4c65185"
  },
  {
    "url": "demos/Chinook/index.html",
    "revision": "704b78af515f22cf9128d70ec8efe3d3"
  },
  {
    "url": "demos/eRestaurant/about/index.html",
    "revision": "982c6c57117da8514b670552281816b7"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminController.html",
    "revision": "09e7965076f72fc06ea9979af84370fa"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminSpecialEvents.html",
    "revision": "1e69555590ca77c40bd8207d1a23256e"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/bootstrapStyle.html",
    "revision": "3a82e96e0034bfcb6dd16a20f6e2ca46"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/menu.html",
    "revision": "49d0ff1798289a2deab839e7af9e8e0d"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/occupiedTables.html",
    "revision": "db565cb6027d33aef9af2875b687a567"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/queryString.html",
    "revision": "3dda3c4a6d42378fe880a458fa996ad8"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/reservations.html",
    "revision": "566ef03c5c10193b3fa9e1378a00ec24"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/fakeDateTime.html",
    "revision": "dd2d47d69697c7a275439f776a7bac64"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/messageUserControl.html",
    "revision": "0f0395f9c8e88c84e54c8757cb4e6af6"
  },
  {
    "url": "demos/eRestaurant/businessRules/businessRuleException.html",
    "revision": "66c6d618ce76031b50d10621537d9e10"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingReservations.html",
    "revision": "8645bc0c09317cafc1f53e95a4c70360"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingWalkIns.html",
    "revision": "1b8e8205d9fe9bef0d9354f996e430b5"
  },
  {
    "url": "demos/eRestaurant/dvcs/demo.html",
    "revision": "e2b76f9c84520596161f152aa13bac8d"
  },
  {
    "url": "demos/eRestaurant/entityFramework/demo/demo.html",
    "revision": "50263acb6f797a8081470b33050b2a3f"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice-solution.html",
    "revision": "6c86e38867e400a11f9a769dfa5ab4ac"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice.html",
    "revision": "551e984cbf85c8909a4ab9119813aad6"
  },
  {
    "url": "demos/eRestaurant/index.html",
    "revision": "4425bfddb5c600c2ceadbc525d8eebd0"
  },
  {
    "url": "demos/eRestaurant/linq/extensions.html",
    "revision": "f90a26c1221c245a77be3554e88db019"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/occupiedTables.html",
    "revision": "96c2af4fd864500426c9ccaee5784fe5"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/reservations.html",
    "revision": "838e8000925de5a374d854452ff09846"
  },
  {
    "url": "demos/eRestaurant/linq/index.html",
    "revision": "99c9cc45f9508f7cc94fba620b96ea0e"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/expressions.html",
    "revision": "dd7753c752e216ee0a6d9e8712cf8c91"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/program.html",
    "revision": "5829cdb2d6cb348e756df928d36cb4cf"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/statements.html",
    "revision": "8690796502bc51d0e3e6427774168977"
  },
  {
    "url": "demos/eRestaurant/linq/practice.html",
    "revision": "34b1eccd65da3ac17ca8c9f2eabab3b9"
  },
  {
    "url": "demos/eRestaurant/reports/customizing/index.html",
    "revision": "286a7327faf9bd8ade0889991735a4d1"
  },
  {
    "url": "demos/eRestaurant/reports/reportViewer/index.html",
    "revision": "ef6f1ecd2aeaeb2a174d0097f065f4d4"
  },
  {
    "url": "demos/eRestaurant/security/demo.html",
    "revision": "d639786f7c24dfd0020593724fe63bf5"
  },
  {
    "url": "demos/eRestaurant/sitemaps/demo2.html",
    "revision": "50aafc46a778d04d0850bea68ac66577"
  },
  {
    "url": "demos/eRestaurant/testing/manual.html",
    "revision": "1e3800ff7d72754eadbe08fffb329568"
  },
  {
    "url": "demos/eRestaurant/ux/frontDesk/index.html",
    "revision": "53ffc776712da0e4a8a13103ed23efd0"
  },
  {
    "url": "demos/index.html",
    "revision": "a25f89b892199d5c115c4976b197a9fa"
  },
  {
    "url": "demos/Northwind/CustomerOrders/Design.html",
    "revision": "56e03e36f6a511f855f24c2f65ceffa6"
  },
  {
    "url": "demos/Northwind/CustomerOrders/index.html",
    "revision": "a987eeeeee0bd245314d3b9cba748f3e"
  },
  {
    "url": "demos/Northwind/index.html",
    "revision": "d43db183673bead8ade76cf915b137f7"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/expressions.html",
    "revision": "2dd4a961fd6c1d70773d20488de5c4cc"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/program.html",
    "revision": "cc0628215e76607cee37c173a6b2eddb"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/statements.html",
    "revision": "dc5d5e09cb943bed6b423eb3271e39e2"
  },
  {
    "url": "demos/Northwind/Security/index.html",
    "revision": "990d840f0a65d72b447549bf4983bf9d"
  },
  {
    "url": "exercises/dvcs.html",
    "revision": "f13bd7e43f90cfc684374692c7e8cf36"
  },
  {
    "url": "exercises/ef.html",
    "revision": "f5d060fa6a43e57fb100ec9a523529a3"
  },
  {
    "url": "exercises/index.html",
    "revision": "b2cba9cdec2ebaa1356d93bf9a4d77b6"
  },
  {
    "url": "exercises/linq.html",
    "revision": "bf2991cb88e2a662c34337e317659d4b"
  },
  {
    "url": "exercises/oltp.html",
    "revision": "0012fdb163a03051fd12bfe77c699ccc"
  },
  {
    "url": "exercises/planning.html",
    "revision": "af9de73b80ca4eafd1cead6b4fd2dc44"
  },
  {
    "url": "exercises/reporting.html",
    "revision": "25cce32462975343f510b37cd1c47260"
  },
  {
    "url": "exercises/reports/install_ssdt.html",
    "revision": "98f65ea7eaeabe74d8b3a1199b7bad0c"
  },
  {
    "url": "exercises/WorkSchedule/EntityFramework/index.html",
    "revision": "27fb38f3b3447bae80c8de881ab5e87d"
  },
  {
    "url": "exercises/WorkSchedule/Linq/index.html",
    "revision": "661cd0b71afebc8dade25ef7957d6592"
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
    "revision": "2d93d7947d9f5bad7b94c37ba86898a2"
  },
  {
    "url": "logs/index.html",
    "revision": "1af72e7437d831e0e539d80e6a8f40c0"
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
    "revision": "60e0408c8e469fab3e2b70c3a9e52a8a"
  },
  {
    "url": "topics/aspNet/assortedWebForms.html",
    "revision": "5f5f9d27ab0ee51a75b17977bcf46380"
  },
  {
    "url": "topics/aspNet/databound/detailsviewOverview.html",
    "revision": "20b3cbd3799d8897b2464a3bfe0f20cf"
  },
  {
    "url": "topics/aspNet/databound/gridviewCustomization.html",
    "revision": "942f10ec8583c1c446584327911716c3"
  },
  {
    "url": "topics/aspNet/databound/gridviewOverview.html",
    "revision": "a5c0d0b994f388d9f5bb444bb1569a01"
  },
  {
    "url": "topics/aspNet/databound/index.html",
    "revision": "a35fc5406ced0741f198013ca2f690c0"
  },
  {
    "url": "topics/aspNet/databound/listviewOverview.html",
    "revision": "b4427fd7350dbcabe32a92c326d13c23"
  },
  {
    "url": "topics/aspNet/databound/repeaterOverview.html",
    "revision": "a0dacf78532abeb160f100d5a93247a9"
  },
  {
    "url": "topics/aspNet/errorHandling.html",
    "revision": "1d272032d8df10476168543407005753"
  },
  {
    "url": "topics/aspNet/userControls.html",
    "revision": "df505b59aadc6d0691a0e5606f723b46"
  },
  {
    "url": "topics/cqrs/index.html",
    "revision": "b04baed7ad9fcfddf7dc3dfc82fda5f0"
  },
  {
    "url": "topics/dvcs/conflicts/index.html",
    "revision": "f0f192f6ab41206938f2602cd368d811"
  },
  {
    "url": "topics/dvcs/gh4w.html",
    "revision": "afcf19a3cf2d5f1e4439f7970027be59"
  },
  {
    "url": "topics/dvcs/index.html",
    "revision": "13c1352298695dc9a6c83a9c5fe75014"
  },
  {
    "url": "topics/entityFramework/index.html",
    "revision": "a9c7be7add83ef83edf791bd2355ee42"
  },
  {
    "url": "topics/index.html",
    "revision": "aec1f415d09c7a0cb17b9be7c6e4f905"
  },
  {
    "url": "topics/linq/index.html",
    "revision": "264eb23996c27a0475b2af864d7f7729"
  },
  {
    "url": "topics/linq/lambda.html",
    "revision": "f0fcb18211f60e4de6c77d47edea1d38"
  },
  {
    "url": "topics/reports/ssdt.html",
    "revision": "93d68603cdfb73b27dbdabd92bd11928"
  },
  {
    "url": "topics/security/aspNetIdentity.html",
    "revision": "144be08229b9f2123e1633e4bf73bf55"
  },
  {
    "url": "topics/security/IdentityConfig.html",
    "revision": "e0f974956be8b6b19e6e6a5ac554140c"
  },
  {
    "url": "topics/security/IdentityModels.html",
    "revision": "647904982a04acf7053d4fcba99549e9"
  },
  {
    "url": "topics/security/index.html",
    "revision": "40946444c7ed9bdd1062984cf147c686"
  },
  {
    "url": "topics/security/vs2017wap.html",
    "revision": "a7c896d4deeb58350c4b610325f00775"
  },
  {
    "url": "topics/sitemaps/index.html",
    "revision": "f65bf5e1b58e5f5ce952d6d357ca8d8e"
  },
  {
    "url": "topics/ux/index.html",
    "revision": "66d166a65e70503f920b76fb549cc257"
  },
  {
    "url": "topics/ux/workflows/index.html",
    "revision": "440976ee8bac9f845d0437b7de74be0f"
  },
  {
    "url": "topics/ux/workflows/lesson-plan.html",
    "revision": "749dfe407894e3d263319380421b151e"
  },
  {
    "url": "topics/ux/workflows/moreUX.html",
    "revision": "a6caccf1d6d6fa2d3b236052c06c4299"
  },
  {
    "url": "topics/xml/index.html",
    "revision": "b7e31bef6cc3a51f775c980ba9c5d738"
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
