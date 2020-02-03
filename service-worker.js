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
    "revision": "23ca7b7626e3cdcd24b1a4f21a2026fa"
  },
  {
    "url": "about/bootstrapInVS2013.html",
    "revision": "0c8051ad9df185741e13d4f1cf3d7a7a"
  },
  {
    "url": "about/index.html",
    "revision": "33b2933abee1b733bb7a9de83a8331c4"
  },
  {
    "url": "about/LOGs.html",
    "revision": "b02daf4620bffa0082000fed5d44c862"
  },
  {
    "url": "about/resources.html",
    "revision": "6610774d2e0994a3ec2d4f03f8665930"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "about/troubleshoot.html",
    "revision": "129e02370c1630912bbc90e3e7dab32a"
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
    "url": "assets/js/12.23bfccf9.js",
    "revision": "94557fd4abdf6058fa5dda4ae0a29a88"
  },
  {
    "url": "assets/js/13.09546617.js",
    "revision": "3843736e70388b41f0baddff717727db"
  },
  {
    "url": "assets/js/14.610f7ca3.js",
    "revision": "ad9e2c2c2ca1446a9c2d2c2f69da1883"
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
    "url": "assets/js/17.f072e6ea.js",
    "revision": "235f8a4be6cb3fd129ef236bafaec234"
  },
  {
    "url": "assets/js/18.5b85023c.js",
    "revision": "9bb90bb8005e2314a992d915ec9e324f"
  },
  {
    "url": "assets/js/19.022380b8.js",
    "revision": "e9fb33f26ffb57e96046b2f9a9185e75"
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
    "url": "assets/js/26.53b47426.js",
    "revision": "846684b3fab6ba355d4eccd25372edd0"
  },
  {
    "url": "assets/js/27.7f6d50c5.js",
    "revision": "adb994cfc1c0579139081b198fc5319f"
  },
  {
    "url": "assets/js/28.16edf85e.js",
    "revision": "ce6625f1c0a8e09f64bfbb111b315ac6"
  },
  {
    "url": "assets/js/29.13e8cab7.js",
    "revision": "f7e4ab1429c32cf70a33993605e1e995"
  },
  {
    "url": "assets/js/3.d4cc48a5.js",
    "revision": "a9c61d71e600e5a048b2a362e3cfbe06"
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
    "url": "assets/js/34.97754311.js",
    "revision": "1049681d0102d250ae886b72531c02d5"
  },
  {
    "url": "assets/js/35.f5186cf5.js",
    "revision": "9bf5cb958ba40993e25ec61e9cb92ea7"
  },
  {
    "url": "assets/js/36.85c18e02.js",
    "revision": "13470719dc38425bf64d59eefd41e158"
  },
  {
    "url": "assets/js/37.b1cc3a88.js",
    "revision": "3870fa5aafca040155b91ba4d5d4ee82"
  },
  {
    "url": "assets/js/38.92077897.js",
    "revision": "5402f3b60a1298e027466972859801b3"
  },
  {
    "url": "assets/js/39.77de5d20.js",
    "revision": "7d404de0a2aa7cde4f4d89c7c32e5376"
  },
  {
    "url": "assets/js/4.82ae1f42.js",
    "revision": "379c3ce1ee1d91d082b5bfd653f7e8ba"
  },
  {
    "url": "assets/js/40.eb3d2370.js",
    "revision": "a8ef4602f4a95a98fa4ee652b9e5ccca"
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
    "url": "assets/js/46.7d97b2ff.js",
    "revision": "0ca7285de869753ad5288ffd2f5952b9"
  },
  {
    "url": "assets/js/47.780c7ea7.js",
    "revision": "614e5bf71b8dbb8eb40e8ee51376ff7b"
  },
  {
    "url": "assets/js/48.f4a2890a.js",
    "revision": "eab50bd50e7d64ad7e07d4429338bdf2"
  },
  {
    "url": "assets/js/49.8f9c853d.js",
    "revision": "898db26b1bc1e3c9173f0b90806de4c3"
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
    "url": "assets/js/51.4adb6615.js",
    "revision": "d349f11ca6726eac94ec4ae12504410c"
  },
  {
    "url": "assets/js/52.12ce6176.js",
    "revision": "584686ee9245dc217e86c2621f3dff1c"
  },
  {
    "url": "assets/js/53.8df26871.js",
    "revision": "2e8b22367eb70316f671b1f2b57eb224"
  },
  {
    "url": "assets/js/54.b7792d5a.js",
    "revision": "b7b8d184fca9a4eaa4a6ebf40f5fea52"
  },
  {
    "url": "assets/js/55.8bcbc524.js",
    "revision": "8731a0cd0a2415b17877853e1b3f9eda"
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
    "url": "assets/js/69.f06b7ca1.js",
    "revision": "309c4ea28a9ccd16b2bcd36a18faa4ce"
  },
  {
    "url": "assets/js/7.63a10552.js",
    "revision": "e44fc3c6be867833dbe4305d2e24f290"
  },
  {
    "url": "assets/js/70.5ce1be02.js",
    "revision": "87b7033deed0c3923c910f172ae42b6d"
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
    "url": "assets/js/75.3a544d0e.js",
    "revision": "6b0d89421d0095589a5efed6a3bbc80f"
  },
  {
    "url": "assets/js/76.d64c4216.js",
    "revision": "31978e5741cdb7f967c20c6b30978c65"
  },
  {
    "url": "assets/js/77.13605638.js",
    "revision": "a92449305aa048216a8f01235062875e"
  },
  {
    "url": "assets/js/78.911fc08b.js",
    "revision": "fe2a79148f3e55b64502ca86ad3ce2e0"
  },
  {
    "url": "assets/js/79.befa71a9.js",
    "revision": "03c4f58f1a283b29eb21323ff37141d1"
  },
  {
    "url": "assets/js/8.9b162629.js",
    "revision": "18c7d1a4fde1b20ccc7eea788a755b31"
  },
  {
    "url": "assets/js/80.9b304bf2.js",
    "revision": "37d56669585feac73b02e1c4ceb87cf1"
  },
  {
    "url": "assets/js/81.1109d260.js",
    "revision": "cb88e8d259071580050a7d7000c2d134"
  },
  {
    "url": "assets/js/82.1ddf6a06.js",
    "revision": "560fbfb900e511f95ccba2601e63a44d"
  },
  {
    "url": "assets/js/83.3004635c.js",
    "revision": "ee7b72a913b01bbf67417ed1646c2467"
  },
  {
    "url": "assets/js/84.fe7d626d.js",
    "revision": "da66286c5bb8ff4d24e82ac5963579c0"
  },
  {
    "url": "assets/js/85.efee7e08.js",
    "revision": "e78e8269346548d54809e622e37df491"
  },
  {
    "url": "assets/js/86.7b6b3946.js",
    "revision": "d0b19b253660845a8d317e775c559df2"
  },
  {
    "url": "assets/js/87.7c6c1ce6.js",
    "revision": "883043413213e18e3647e611898c6748"
  },
  {
    "url": "assets/js/88.13cade0c.js",
    "revision": "f42c502f8143f44d6caf99f2db24a8a5"
  },
  {
    "url": "assets/js/89.bb5ab721.js",
    "revision": "3b4a090de9c7495d909e1b8a3deed032"
  },
  {
    "url": "assets/js/9.7fe5323a.js",
    "revision": "80fe02514025449422adbe914d73f8d8"
  },
  {
    "url": "assets/js/90.6cf42b34.js",
    "revision": "456e0f8bc3661ebf75399bf636034fba"
  },
  {
    "url": "assets/js/91.ad0e7f6e.js",
    "revision": "158e3c3865bfb6a811efb3b98cf8c7d6"
  },
  {
    "url": "assets/js/92.41ed1486.js",
    "revision": "3fe2d4217e3e7e63e8d678bd23110999"
  },
  {
    "url": "assets/js/93.daa9cd92.js",
    "revision": "f3c46bed176edd493b78e3c6060abfc0"
  },
  {
    "url": "assets/js/94.912c312e.js",
    "revision": "c4c7981c63dfb9d4b0cb28f645e2aeac"
  },
  {
    "url": "assets/js/95.23580df4.js",
    "revision": "09728bd41bc57d475f51c27e4e225a7f"
  },
  {
    "url": "assets/js/app.e4fd8186.js",
    "revision": "787074af3380da274b25838c915692dc"
  },
  {
    "url": "demos/Chinook/entityDemo.html",
    "revision": "3c819ec6a47c5eb8b3950ad0005b32dd"
  },
  {
    "url": "demos/Chinook/index.html",
    "revision": "7b22ef0c518c2a8f3ae9738c5c9aa277"
  },
  {
    "url": "demos/eRestaurant/about/index.html",
    "revision": "1060d0016f62eaf7a3dbcbbdf6d2b965"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminController.html",
    "revision": "f75592b6e1c3c6b60f9cb30e0057a2a7"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminSpecialEvents.html",
    "revision": "78fb64a936141375cd65274b0a696a20"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/bootstrapStyle.html",
    "revision": "3cc3905bf191d7090fcf19ba204a5bb8"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/menu.html",
    "revision": "4ec2408410ef9a70b7d6d5ef6204d897"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/occupiedTables.html",
    "revision": "f1a5daafd7f4a5d6cef4bfdf08fe5b89"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/queryString.html",
    "revision": "b754ed41dbd0667e9ac721f521df6a62"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/reservations.html",
    "revision": "fe33ff449b3d33fbfc503198d605fd67"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/fakeDateTime.html",
    "revision": "b23d4131543d9a386a75c45e77f829cb"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/messageUserControl.html",
    "revision": "bece00bd22675702ca4316bec2e89f00"
  },
  {
    "url": "demos/eRestaurant/businessRules/businessRuleException.html",
    "revision": "d6c994682f15fef96bf03bb115984ed4"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingReservations.html",
    "revision": "a7422b8afab8407d005ac1f1bae36800"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingWalkIns.html",
    "revision": "81bd4dfe68d8ada596651f514a46b2d4"
  },
  {
    "url": "demos/eRestaurant/dvcs/demo.html",
    "revision": "522583c8817d2ac6f95d8cdb67d31aaf"
  },
  {
    "url": "demos/eRestaurant/entityFramework/demo/demo.html",
    "revision": "8c95cf05158e4bc83e2a06d8adfd51c9"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice-solution.html",
    "revision": "915c51130a282add36d1fd41afc40c8e"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice.html",
    "revision": "c2b0965d556fd822afd39db46b41dbcc"
  },
  {
    "url": "demos/eRestaurant/index.html",
    "revision": "f63091bd8aa4abff0d04645ad1367a6a"
  },
  {
    "url": "demos/eRestaurant/linq/extensions.html",
    "revision": "4060df6b64071f3952af61d75f2333eb"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/occupiedTables.html",
    "revision": "c1b6317fd8821c13a40ff2d656e8a7ce"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/reservations.html",
    "revision": "c968fb065e7e4b32e52d1937adfe9c5e"
  },
  {
    "url": "demos/eRestaurant/linq/index.html",
    "revision": "f77d9abb996390514eccadea8e4b0809"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/expressions.html",
    "revision": "8474c507d03c3b34d5e3021382f41e34"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/program.html",
    "revision": "a1c6dcda56a9cea45f43962a5fbb471e"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/statements.html",
    "revision": "1eb48f56704f2cf9a2bc5ceb1c38aeaa"
  },
  {
    "url": "demos/eRestaurant/linq/practice.html",
    "revision": "bf528cc0f6b43fa71c5dff6aa6477153"
  },
  {
    "url": "demos/eRestaurant/reports/customizing/index.html",
    "revision": "3dcc4557ba0d8577ce6b51c9eed34ed6"
  },
  {
    "url": "demos/eRestaurant/reports/reportViewer/index.html",
    "revision": "04a4ce1d894eefb914c21610a6f42b31"
  },
  {
    "url": "demos/eRestaurant/security/demo.html",
    "revision": "583e30a12d4acaebca5774c13ec75647"
  },
  {
    "url": "demos/eRestaurant/sitemaps/demo2.html",
    "revision": "73aa046a64e1abbc625f1d5993e8ba0c"
  },
  {
    "url": "demos/eRestaurant/testing/manual.html",
    "revision": "b47bab171904511619c56c17d5cdf156"
  },
  {
    "url": "demos/eRestaurant/ux/frontDesk/index.html",
    "revision": "2b0e503d23b415bdb866a928b244eac6"
  },
  {
    "url": "demos/index.html",
    "revision": "30ee6e215eafc2362633ffb1809cca3e"
  },
  {
    "url": "demos/Northwind/CustomerOrders/Design.html",
    "revision": "eaddb0f69e311e3a809462815b6c1ef0"
  },
  {
    "url": "demos/Northwind/CustomerOrders/index.html",
    "revision": "47d9cf86277a61761c81a821d2b99ee9"
  },
  {
    "url": "demos/Northwind/index.html",
    "revision": "99b4dc3e78d431982fc6546cb8e5fb15"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/expressions.html",
    "revision": "2576246709b25bc59f9e169b02fd6686"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/program.html",
    "revision": "f8e558da0035a719ba410ba0d4c5cc3a"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/statements.html",
    "revision": "1559d84c413c1ad740cef07af9bc3677"
  },
  {
    "url": "demos/Northwind/Security/index.html",
    "revision": "ee0565c0de423d029a08fbd3971bdec4"
  },
  {
    "url": "exercises/dvcs.html",
    "revision": "ae54f8818db3f565e9c5a220eb6fc752"
  },
  {
    "url": "exercises/ef.html",
    "revision": "46a7c2307c9fdcc921625c5c74a284ed"
  },
  {
    "url": "exercises/index.html",
    "revision": "75760da9e307718087c929932a80d839"
  },
  {
    "url": "exercises/linq.html",
    "revision": "815a28295d1568ff720c596209944f13"
  },
  {
    "url": "exercises/oltp.html",
    "revision": "e4097e8fc0960bac0d9fdb7058dda60a"
  },
  {
    "url": "exercises/planning.html",
    "revision": "17b494215b3c449b60f3049332411fe9"
  },
  {
    "url": "exercises/reporting.html",
    "revision": "20bf6f24507e9f2f1a85091fdc6fec48"
  },
  {
    "url": "exercises/reports/install_ssdt.html",
    "revision": "be9a15e9d581a0581961d5094f468651"
  },
  {
    "url": "exercises/WorkSchedule/EntityFramework/index.html",
    "revision": "c6f0c0f9be4a5ef41b7d68c8d98c02df"
  },
  {
    "url": "exercises/WorkSchedule/Linq/index.html",
    "revision": "07997948c347a3deb9470fc67ac28b2d"
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
    "revision": "43761075b53e6e009f083fb8dc06ddc8"
  },
  {
    "url": "logs/index.html",
    "revision": "1be2de77cb0b7fe924cc77c8916917c5"
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
    "revision": "7c3109f60ed836bc20bab5caa5fb8c38"
  },
  {
    "url": "topics/aspNet/assortedWebForms.html",
    "revision": "5e73abab2acdb4f475ed970ba98946cb"
  },
  {
    "url": "topics/aspNet/databound/detailsviewOverview.html",
    "revision": "6bfd630eb340dc431e69b55a7d3d745e"
  },
  {
    "url": "topics/aspNet/databound/gridviewCustomization.html",
    "revision": "6a9552cefb4a689340691386542836f3"
  },
  {
    "url": "topics/aspNet/databound/gridviewOverview.html",
    "revision": "9eb226ee9691a506c735a68b57b66347"
  },
  {
    "url": "topics/aspNet/databound/index.html",
    "revision": "4377737e1ad05021368936c16b1e8eef"
  },
  {
    "url": "topics/aspNet/databound/listviewOverview.html",
    "revision": "b69f091ab3fc40c3f7f73fe403d6cab1"
  },
  {
    "url": "topics/aspNet/databound/repeaterOverview.html",
    "revision": "7ba2fc779f4ac027446c4a44fc4adb62"
  },
  {
    "url": "topics/aspNet/errorHandling.html",
    "revision": "8528882540b8aec0f99cc2c3266964c0"
  },
  {
    "url": "topics/aspNet/userControls.html",
    "revision": "f0b529888c987663e37f9e720fbc5d38"
  },
  {
    "url": "topics/cqrs/index.html",
    "revision": "ba1f17eb87fdf7147d3fd2c38a146614"
  },
  {
    "url": "topics/dvcs/conflicts/index.html",
    "revision": "055221d9c8e67f8caf2d833a6ba7aeaf"
  },
  {
    "url": "topics/dvcs/gh4w.html",
    "revision": "4cbb78ec4cd758fb65877d0d44d790a0"
  },
  {
    "url": "topics/dvcs/index.html",
    "revision": "82258243f2b5f307657a588af7402587"
  },
  {
    "url": "topics/entityFramework/index.html",
    "revision": "55cd430f465f55b96a5d8df299a9c9c2"
  },
  {
    "url": "topics/index.html",
    "revision": "22443e2b4475971cc596c522b74c3d28"
  },
  {
    "url": "topics/linq/index.html",
    "revision": "480bf4d80d27798209f90ca3cb42a1c1"
  },
  {
    "url": "topics/linq/lambda.html",
    "revision": "3e1d043eaaff104b58b14f7a0fc164a4"
  },
  {
    "url": "topics/reports/ssdt.html",
    "revision": "67cd3ff21ccbe7340ee29e06bdfa5ef8"
  },
  {
    "url": "topics/security/aspNetIdentity.html",
    "revision": "c9b5f444d584a79b21bd77e7b67825ec"
  },
  {
    "url": "topics/security/IdentityConfig.html",
    "revision": "4eb9974c076da4a97a1d621febacb07c"
  },
  {
    "url": "topics/security/IdentityModels.html",
    "revision": "c61d42bf8077933a574364a56c8580a2"
  },
  {
    "url": "topics/security/index.html",
    "revision": "86209035d0b052b358358330fd6faa66"
  },
  {
    "url": "topics/security/vs2017wap.html",
    "revision": "455e99b1bd5d05eb91879271b8e760a2"
  },
  {
    "url": "topics/sitemaps/index.html",
    "revision": "93308d1c0acb7e7b47e1a8098cbd221f"
  },
  {
    "url": "topics/ux/index.html",
    "revision": "b0125121f0eb1363b9815783cd61e5e7"
  },
  {
    "url": "topics/ux/workflows/index.html",
    "revision": "d8cf80fe66bc74c1c80f57dd3861bfd3"
  },
  {
    "url": "topics/ux/workflows/lesson-plan.html",
    "revision": "ca86111d404503f15f5929aea3ae3499"
  },
  {
    "url": "topics/ux/workflows/moreUX.html",
    "revision": "f09f21456f420023f9658eb03eec4a57"
  },
  {
    "url": "topics/xml/index.html",
    "revision": "600d11f462871b779f01c0ec77017d8c"
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
