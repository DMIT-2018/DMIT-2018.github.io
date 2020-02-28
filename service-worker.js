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
    "revision": "a5c971dc529fe6dc91866c890383b196"
  },
  {
    "url": "about/bootstrapInVS2013.html",
    "revision": "488bc9778055eabab7c2af52f4c968cb"
  },
  {
    "url": "about/index.html",
    "revision": "d642377a80338b73262aeff516c9fec3"
  },
  {
    "url": "about/LOGs.html",
    "revision": "0d8b965d428714715078d9c006003d29"
  },
  {
    "url": "about/resources.html",
    "revision": "bc104536b86f94c5dfb2599e0285b25b"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "about/troubleshoot.html",
    "revision": "7c73518b036ecb402f00d87724b34dee"
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
    "url": "assets/img/ContractEditor-0.cff9ee2f.png",
    "revision": "cff9ee2f849e472c8656d3728c00cd54"
  },
  {
    "url": "assets/img/ContractEditor-1.17d18d56.png",
    "revision": "17d18d56b00094774431be1943d9844a"
  },
  {
    "url": "assets/img/ContractEditor-2.6b639d55.png",
    "revision": "6b639d55d0fc0a7a6b1af441332317cb"
  },
  {
    "url": "assets/img/ContractEditor-3.b5847810.png",
    "revision": "b5847810114c2deda7e43aad5b34164f"
  },
  {
    "url": "assets/img/ContractEditor-4.4565d7e7.png",
    "revision": "4565d7e7c1d93bed06bb7af1e89e68f2"
  },
  {
    "url": "assets/img/ContractEditor.5b3c82a3.png",
    "revision": "5b3c82a3b202d8dea032d3876c227669"
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
    "url": "assets/img/WorkSchedule-ERD.05af87d4.png",
    "revision": "05af87d42444fe5ef93c01de13a7cdec"
  },
  {
    "url": "assets/js/10.8cf6e162.js",
    "revision": "0b9ba218423e857461a7f0f9b69f15ac"
  },
  {
    "url": "assets/js/11.c9f91621.js",
    "revision": "a00713181279503985219bb69ce14463"
  },
  {
    "url": "assets/js/12.5db3f79d.js",
    "revision": "22164da52248ede61187eaf67de69aa5"
  },
  {
    "url": "assets/js/13.5c17e739.js",
    "revision": "0f652b532ab1eb94fa4c11ae06beaf46"
  },
  {
    "url": "assets/js/14.e157d456.js",
    "revision": "69d6190e20f3520bccf26fa1dcd2f94c"
  },
  {
    "url": "assets/js/15.a70d1cb9.js",
    "revision": "c0526b2bcc414eb5e695c5d7b63327d8"
  },
  {
    "url": "assets/js/16.0ea9038f.js",
    "revision": "03261578712d11f0c0d30f77904c75d7"
  },
  {
    "url": "assets/js/17.7dbfd59f.js",
    "revision": "a7c13dc9c94de3e4869d34681b74fc57"
  },
  {
    "url": "assets/js/18.98b439aa.js",
    "revision": "6cff4b8389421080e7f99c65de32930a"
  },
  {
    "url": "assets/js/19.a4287141.js",
    "revision": "1e2b26884203e38cddfaeca27417f100"
  },
  {
    "url": "assets/js/2.0e476e64.js",
    "revision": "d247766e6c0198a23bc049eb46b745fa"
  },
  {
    "url": "assets/js/20.f6c47fb1.js",
    "revision": "a4b8ef8044897073e0174bca22d5fa84"
  },
  {
    "url": "assets/js/21.1b2a0a76.js",
    "revision": "eb1157d3665d0e35740b8792c95b709d"
  },
  {
    "url": "assets/js/22.3c29e8e5.js",
    "revision": "34ac7c0b9c67fa38f6d2b1a5b33f9ee0"
  },
  {
    "url": "assets/js/23.a45edc16.js",
    "revision": "959fbe17c143683f65ebb542b377c0ef"
  },
  {
    "url": "assets/js/24.b557aa98.js",
    "revision": "197c2f12469e2625895ed93b76f0f81f"
  },
  {
    "url": "assets/js/25.59220c74.js",
    "revision": "c22ccf5d9b863be26aa52fff603e2a94"
  },
  {
    "url": "assets/js/26.51aba659.js",
    "revision": "70daf02453d50b9cd984682a031fb1db"
  },
  {
    "url": "assets/js/27.e345694a.js",
    "revision": "ffb29e86cedcf1eb68c327f50c10add7"
  },
  {
    "url": "assets/js/28.360a4e12.js",
    "revision": "9507ed1ffddbef35dc87d9651ff8a7f7"
  },
  {
    "url": "assets/js/29.b926855c.js",
    "revision": "e893416d6ce1dbbe5cbbab6ea38529ff"
  },
  {
    "url": "assets/js/3.6cd92f82.js",
    "revision": "1d9ec3d54416053ffec52377b82d3dd5"
  },
  {
    "url": "assets/js/30.3f72bb47.js",
    "revision": "47e212bd7f653c5f37427ab00e82fd49"
  },
  {
    "url": "assets/js/31.7c961e50.js",
    "revision": "22434b6cfe310aee7e8cf2d53c012f4c"
  },
  {
    "url": "assets/js/32.0d331615.js",
    "revision": "70bf3927ef97bca959c1d8b9a52cc9ed"
  },
  {
    "url": "assets/js/33.e8e031d9.js",
    "revision": "3b68956b41f7499ab5b099eb2f096c3a"
  },
  {
    "url": "assets/js/34.abe25ef8.js",
    "revision": "913f9612a29da6a75113ad062fc2d9a2"
  },
  {
    "url": "assets/js/35.0602f5a3.js",
    "revision": "22d878fccee68ba312c6bb22a3bddc61"
  },
  {
    "url": "assets/js/36.8cb70c57.js",
    "revision": "fe57dcc895f397ee943480ea4404015c"
  },
  {
    "url": "assets/js/37.0f4d2c4d.js",
    "revision": "cc24065c269bb91218ce7209f10aa67a"
  },
  {
    "url": "assets/js/38.5849ce4e.js",
    "revision": "12193524a7ceab2866d4ebc469a0cd07"
  },
  {
    "url": "assets/js/39.02b2f1ad.js",
    "revision": "b760b66f2628ac9c9c1f12a05f4262a9"
  },
  {
    "url": "assets/js/4.f701e21b.js",
    "revision": "3baad30afcca96407f0fdc5098e9fb6d"
  },
  {
    "url": "assets/js/40.06b062d8.js",
    "revision": "8331165342d3baff3d30b7a2c40cb94d"
  },
  {
    "url": "assets/js/41.4cf6a103.js",
    "revision": "5d368e854b80ceaac7cab831c2b3aebb"
  },
  {
    "url": "assets/js/42.b80810c4.js",
    "revision": "b6bd34838071a0feaba14d0117fd5b84"
  },
  {
    "url": "assets/js/43.081b875c.js",
    "revision": "e06fbe7f59a17f11cad6e8874ebcf882"
  },
  {
    "url": "assets/js/44.53457846.js",
    "revision": "5adc4820c8f796518672841dd3bd9583"
  },
  {
    "url": "assets/js/45.fc8ca093.js",
    "revision": "17f426b0909b8829a8771543bcb3fadf"
  },
  {
    "url": "assets/js/46.a381ffb7.js",
    "revision": "f912f85e2c8acddfaa8d0f66e1c9f45a"
  },
  {
    "url": "assets/js/47.1f3f517c.js",
    "revision": "ce14076ab2fa4c5d5364f4234ae1f8b4"
  },
  {
    "url": "assets/js/48.ad1e3c12.js",
    "revision": "ca3cabd7ae04d9b59fa116f527036611"
  },
  {
    "url": "assets/js/49.71a8056f.js",
    "revision": "e0e628410d1a974b66ccaaa76de29e34"
  },
  {
    "url": "assets/js/5.4a0ce02e.js",
    "revision": "f716857f534d135c8bd933c5525ff898"
  },
  {
    "url": "assets/js/50.80075984.js",
    "revision": "32208b9b5d01e2bfb912a81af9194f89"
  },
  {
    "url": "assets/js/51.09e9d6fc.js",
    "revision": "c30e9432bc95046fe447f3227d59c51a"
  },
  {
    "url": "assets/js/52.9fcc1c56.js",
    "revision": "ef970335f586509c356b12ee7fbf1448"
  },
  {
    "url": "assets/js/53.c89595bd.js",
    "revision": "1f3cb2a44f7d1beb69959762c3557ca3"
  },
  {
    "url": "assets/js/54.e94a0a46.js",
    "revision": "3b1e5db947d2b1882eb4793f6feef90f"
  },
  {
    "url": "assets/js/55.a95341fe.js",
    "revision": "86166cc3243d88624f5ad053b2f88ae2"
  },
  {
    "url": "assets/js/56.c6ea8817.js",
    "revision": "d4c6a0c1b7d5a4b9eb24e1e1412b0568"
  },
  {
    "url": "assets/js/57.6a4dc085.js",
    "revision": "07d37e0a77f609a51273fbec56574d6f"
  },
  {
    "url": "assets/js/58.fdaf1e65.js",
    "revision": "ba023f44aee59fdd17461be0505f0e8e"
  },
  {
    "url": "assets/js/59.fe7a4dcd.js",
    "revision": "94722525cbc2c290f55b457a34b4bf51"
  },
  {
    "url": "assets/js/6.7c5fbb59.js",
    "revision": "9deaf775e1302a186948338089b8d24d"
  },
  {
    "url": "assets/js/60.64a7c8ae.js",
    "revision": "28c80fd1090df06d0191b48e14b28e3a"
  },
  {
    "url": "assets/js/61.08c30ee6.js",
    "revision": "f529e5d028821c540051f702d4bcd903"
  },
  {
    "url": "assets/js/62.202d3373.js",
    "revision": "fb9e2b20574336943f8611a510242237"
  },
  {
    "url": "assets/js/63.83a9d57d.js",
    "revision": "4c7097beb917a714eba235144683a48c"
  },
  {
    "url": "assets/js/64.f899703a.js",
    "revision": "5c248f976fd1b8d520dacb1085d1655e"
  },
  {
    "url": "assets/js/65.7210d8ac.js",
    "revision": "194a1ee44b0d4ed67544eb9844c8f5fc"
  },
  {
    "url": "assets/js/66.a002ece4.js",
    "revision": "4e6ec6a51896b56c99f4216469875235"
  },
  {
    "url": "assets/js/67.3117793b.js",
    "revision": "f8d6b3a5395b8583492541f1ecee966d"
  },
  {
    "url": "assets/js/68.02bbd148.js",
    "revision": "479a9ed3e858850553be168a13b5e72c"
  },
  {
    "url": "assets/js/69.fca83d69.js",
    "revision": "2eaa93358dff7f98cdd18102fb8dd8c9"
  },
  {
    "url": "assets/js/7.6150565a.js",
    "revision": "1142337530b5aeff687313ff7c0b5475"
  },
  {
    "url": "assets/js/70.66f453df.js",
    "revision": "06d47005aa16c7cf80f845fe32e8830d"
  },
  {
    "url": "assets/js/71.5e1d7fa4.js",
    "revision": "eb7a6eb4da7e88e227f80c6b751299ea"
  },
  {
    "url": "assets/js/72.826643cb.js",
    "revision": "2536d274a7f47afae382c0a2cac4df96"
  },
  {
    "url": "assets/js/73.aef4db68.js",
    "revision": "13c30798c37ed52a764ea37eca11f4b9"
  },
  {
    "url": "assets/js/74.8e7eef9a.js",
    "revision": "135823ce074bf84caddb0700b3eaa890"
  },
  {
    "url": "assets/js/75.6e29be33.js",
    "revision": "0918662af2b4dc6af54807ae529901df"
  },
  {
    "url": "assets/js/76.8b7da19e.js",
    "revision": "86dcd64c07c8c01c76ea1e33a07414ce"
  },
  {
    "url": "assets/js/77.c0722deb.js",
    "revision": "3fba1c456ed8cacc2e167f5ca2616be9"
  },
  {
    "url": "assets/js/78.8293f072.js",
    "revision": "0a92622eeb42b84a43374a753100a0fa"
  },
  {
    "url": "assets/js/79.b8799db9.js",
    "revision": "8b3e298f9e31d81f76b44da4acd81ab6"
  },
  {
    "url": "assets/js/8.725b1e99.js",
    "revision": "107c43c830e528c337870d9bef26749b"
  },
  {
    "url": "assets/js/80.26f802f1.js",
    "revision": "ec9b5224c4ea27cacfa4cd2a99557caf"
  },
  {
    "url": "assets/js/81.58821e80.js",
    "revision": "e84e427916cd5b2153203972c82a9824"
  },
  {
    "url": "assets/js/82.e355af21.js",
    "revision": "7b5a42bdf774ea50337611cc1500397b"
  },
  {
    "url": "assets/js/83.2e386f1c.js",
    "revision": "ac2b320386d695672cd2a20c6e5550db"
  },
  {
    "url": "assets/js/84.48f5da41.js",
    "revision": "09e5ff61206f94262cd66c17d1ce76e3"
  },
  {
    "url": "assets/js/85.819e9183.js",
    "revision": "73ec3773c51bec37757442bf807d7a4f"
  },
  {
    "url": "assets/js/86.9df11410.js",
    "revision": "b4d56a2dcaf18c52c496aed4df913b04"
  },
  {
    "url": "assets/js/87.ecc85a1b.js",
    "revision": "b39f03208a25a6109c09999800fd9f70"
  },
  {
    "url": "assets/js/88.d39dab6f.js",
    "revision": "cf23e4722b77e217e0c2f7573242093a"
  },
  {
    "url": "assets/js/89.e2d13c5c.js",
    "revision": "3630438895dd66172291447d545d6d4b"
  },
  {
    "url": "assets/js/9.4ec7c87a.js",
    "revision": "f55be538de0a5971dd896b14c34af2a1"
  },
  {
    "url": "assets/js/90.56067cf4.js",
    "revision": "3ac3eea7d47e5a313f3adfcaee04fc00"
  },
  {
    "url": "assets/js/91.5d98d066.js",
    "revision": "d3f5637e63a33c9c126a99c744af9273"
  },
  {
    "url": "assets/js/92.89718e3e.js",
    "revision": "7a7c6e5170615f515320576a8afa55f8"
  },
  {
    "url": "assets/js/93.a167acb8.js",
    "revision": "cb4b12c4fdd1113b824c6fd1184a75a9"
  },
  {
    "url": "assets/js/94.00c77685.js",
    "revision": "3ae75048ecb4b6a2f9abdc03ed99ac08"
  },
  {
    "url": "assets/js/95.e50ecd13.js",
    "revision": "9131fe00e64a3ce4dc687c5f6be78e92"
  },
  {
    "url": "assets/js/96.30e38eb5.js",
    "revision": "53ee6efcc4b1f70440e8160fbb4f8d96"
  },
  {
    "url": "assets/js/app.946577f9.js",
    "revision": "0fc52d08b3ce8858d03c6fa86b43ca19"
  },
  {
    "url": "demos/Chinook/entityDemo.html",
    "revision": "b1bce26a59f84460f6a6368484fde4a8"
  },
  {
    "url": "demos/Chinook/index.html",
    "revision": "0b4125c7edc0e63e5249943800f27a8c"
  },
  {
    "url": "demos/eRestaurant/about/index.html",
    "revision": "1b1382606e34995ec312b93c3aaacc94"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminController.html",
    "revision": "b2e609b80ce0dbb1346e4e77ee8d474b"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminSpecialEvents.html",
    "revision": "7eac7a2eb3a9087119e5b9f6bdd7f06a"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/bootstrapStyle.html",
    "revision": "de56ba334c588c80286016528fcef6d9"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/menu.html",
    "revision": "832a6ff199bace54699cf99ffe312a67"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/occupiedTables.html",
    "revision": "82b4694047881ffa3e17b3836ef5ca8b"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/queryString.html",
    "revision": "94dec94a91c1f7d39f56b65bf2c9da5a"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/reservations.html",
    "revision": "25f0ad543faea112290a5e8fae45bf9d"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/fakeDateTime.html",
    "revision": "b08a658197ecd528e33c70aec429e656"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/messageUserControl.html",
    "revision": "aa00f6b11df033ae786da53b448c402f"
  },
  {
    "url": "demos/eRestaurant/businessRules/businessRuleException.html",
    "revision": "34c5f475b1afc5f1f753459ec9d8220d"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingReservations.html",
    "revision": "7857cfa2dee108093b77df48d4b117a6"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingWalkIns.html",
    "revision": "3145b0650c551e01d2d55a2991dd77b4"
  },
  {
    "url": "demos/eRestaurant/dvcs/demo.html",
    "revision": "41c719266987b4e2c8fd7fed9d603b93"
  },
  {
    "url": "demos/eRestaurant/entityFramework/demo/demo.html",
    "revision": "dfb6f3d8bcc01bb138c7797266741a87"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice-solution.html",
    "revision": "018ad0bce3e70af6e814320439d8ffb1"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice.html",
    "revision": "8c8fa5b9dec0f55df9320e7f4845618a"
  },
  {
    "url": "demos/eRestaurant/index.html",
    "revision": "2d4256afae47c9d17b752b2627191dc6"
  },
  {
    "url": "demos/eRestaurant/linq/extensions.html",
    "revision": "ffacd5647475e26636abbdd9354f8609"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/occupiedTables.html",
    "revision": "951ab555b7323507d037cc8d02dadb03"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/reservations.html",
    "revision": "348f156f975757c2dbd9e8ad3dedb9bb"
  },
  {
    "url": "demos/eRestaurant/linq/index.html",
    "revision": "45cad5c0382395658c72289bac0c18ca"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/expressions.html",
    "revision": "a4931344359f0199fd52c51eb5119712"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/program.html",
    "revision": "2af19b84b5ffb4a0b7a072b2f2a3bb46"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/statements.html",
    "revision": "0c017c6e6bc04383353c5950a327d6ff"
  },
  {
    "url": "demos/eRestaurant/linq/practice.html",
    "revision": "a73511bff7c968650d070c8583c21d95"
  },
  {
    "url": "demos/eRestaurant/reports/customizing/index.html",
    "revision": "85c179a9d49fd5b61b687f6bd88bf073"
  },
  {
    "url": "demos/eRestaurant/reports/reportViewer/index.html",
    "revision": "33533205732da151a470cd67a7767a00"
  },
  {
    "url": "demos/eRestaurant/security/demo.html",
    "revision": "e7972f47e5feaf2f741a4cab1b52f11b"
  },
  {
    "url": "demos/eRestaurant/sitemaps/demo2.html",
    "revision": "0d73046497a3cabc09e9034dd44d8511"
  },
  {
    "url": "demos/eRestaurant/testing/manual.html",
    "revision": "fd0bddadf991c926d05c9439a74e140c"
  },
  {
    "url": "demos/eRestaurant/ux/frontDesk/index.html",
    "revision": "d9b03bee8824ebbefb20f8bc0bd02e40"
  },
  {
    "url": "demos/index.html",
    "revision": "02492099130cf432b2fc3d60f4f78705"
  },
  {
    "url": "demos/Northwind/CustomerOrders/Design.html",
    "revision": "c48941a86fff1a89d510f55f01dcf9e8"
  },
  {
    "url": "demos/Northwind/CustomerOrders/index.html",
    "revision": "6f54fbd58b0b53646f5994c32e855da1"
  },
  {
    "url": "demos/Northwind/index.html",
    "revision": "4166a61e820e5af9d31cf292fd21ca6a"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/expressions.html",
    "revision": "ec09a50e58041936470f26820198de39"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/program.html",
    "revision": "26069819ca468f925a498b488123a8bf"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/statements.html",
    "revision": "7f6302d94569ee805b514e52e9229cd8"
  },
  {
    "url": "demos/Northwind/Security/index.html",
    "revision": "4b27f1114ff68272418cd542043089e3"
  },
  {
    "url": "exercises/dvcs.html",
    "revision": "e12537807928dfb0cba6d1f8e3319c5b"
  },
  {
    "url": "exercises/ef.html",
    "revision": "0224026f37ec45df5cdcaa00e26af15c"
  },
  {
    "url": "exercises/index.html",
    "revision": "fc26efbbb59c7ecf6d0afe7043e175ec"
  },
  {
    "url": "exercises/linq.html",
    "revision": "e9079c1e17daed39414bc8dbfe268510"
  },
  {
    "url": "exercises/oltp.html",
    "revision": "8d6d4a42bf62cd16d6ba4ed2ca948a21"
  },
  {
    "url": "exercises/planning.html",
    "revision": "a509dcd77b7ef4c91f636f29bc7480ba"
  },
  {
    "url": "exercises/reporting.html",
    "revision": "5cee2295a3e51895f974d79bb2cc65a4"
  },
  {
    "url": "exercises/reports/install_ssdt.html",
    "revision": "14742906e40d1cfc3fd25ab86c09c647"
  },
  {
    "url": "exercises/WorkSchedule/EntityFramework/index.html",
    "revision": "e47ac5c20f3e1b3998bdb0c42499e1d8"
  },
  {
    "url": "exercises/WorkSchedule/Integrated/index.html",
    "revision": "ff7b3f7939f0a764666d58425fb61c5a"
  },
  {
    "url": "exercises/WorkSchedule/Linq/index.html",
    "revision": "e7a3cf2be8b7c3969d1d1887739e2066"
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
    "revision": "8f8f55060afda468292a875fcb87cfec"
  },
  {
    "url": "logs/index.html",
    "revision": "e42ced1e9304b98c8eb383145a04920b"
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
    "revision": "663c641af81b69712c3fbb61e7bdf498"
  },
  {
    "url": "topics/aspNet/assortedWebForms.html",
    "revision": "3fb867dfb05848da78b8b61029f0f433"
  },
  {
    "url": "topics/aspNet/databound/detailsviewOverview.html",
    "revision": "9034eb6de69a73a5188ee4a12f13d6d2"
  },
  {
    "url": "topics/aspNet/databound/gridviewCustomization.html",
    "revision": "f3adc2c131a467bbcc1954fd8ed3eafb"
  },
  {
    "url": "topics/aspNet/databound/gridviewOverview.html",
    "revision": "69a6e5fc4b71eddfaded4e75bd9f68cd"
  },
  {
    "url": "topics/aspNet/databound/index.html",
    "revision": "5800cb68c0375f2fe049920b5c409af1"
  },
  {
    "url": "topics/aspNet/databound/listviewOverview.html",
    "revision": "fffbc592c38cde6d7b280002e74ea23b"
  },
  {
    "url": "topics/aspNet/databound/repeaterOverview.html",
    "revision": "1d496cd40f47f435db340e89ef3d8eff"
  },
  {
    "url": "topics/aspNet/errorHandling.html",
    "revision": "8a2d5d34cb39aaac898f769e79a1f144"
  },
  {
    "url": "topics/aspNet/userControls.html",
    "revision": "6c7f385eaf4fe455b2d3cbc39d8a9944"
  },
  {
    "url": "topics/cqrs/index.html",
    "revision": "8d158f004c46a416fa7caccaeb5b390a"
  },
  {
    "url": "topics/dvcs/conflicts/index.html",
    "revision": "d3bd9999e90e3172580148160c9fa4ae"
  },
  {
    "url": "topics/dvcs/gh4w.html",
    "revision": "a92de3dcf8a30a7f0ac460234c1c4d51"
  },
  {
    "url": "topics/dvcs/index.html",
    "revision": "2f1725eef89985e55e52f214b4d15dd1"
  },
  {
    "url": "topics/entityFramework/index.html",
    "revision": "7c43d7c5c702660f04730b79249b4e23"
  },
  {
    "url": "topics/index.html",
    "revision": "a158447e4d1ee96e79a4d09c1198de9f"
  },
  {
    "url": "topics/linq/index.html",
    "revision": "e83c0602d5ac64249134699b5efb5b7e"
  },
  {
    "url": "topics/linq/lambda.html",
    "revision": "e08f4e525ca6bd81edbdf577e331c02d"
  },
  {
    "url": "topics/reports/ssdt.html",
    "revision": "c2821d37da9a35aeb723fafc6d3d0add"
  },
  {
    "url": "topics/security/aspNetIdentity.html",
    "revision": "bd3f88de912825021157777f14f5a9d0"
  },
  {
    "url": "topics/security/IdentityConfig.html",
    "revision": "d15429ef8bca7dce1aa5cc73d328c2d0"
  },
  {
    "url": "topics/security/IdentityModels.html",
    "revision": "c2b7ebc796ae5d5730069b6ef43d041c"
  },
  {
    "url": "topics/security/index.html",
    "revision": "e227215bf5d717453c933cf141b527e0"
  },
  {
    "url": "topics/security/vs2017wap.html",
    "revision": "ee717ac79d5a75a784258763986c8124"
  },
  {
    "url": "topics/sitemaps/index.html",
    "revision": "558e8a7f166eaa24dfd84b64b478d260"
  },
  {
    "url": "topics/ux/index.html",
    "revision": "9c647e8149006e05e2e5dcf84cacff2a"
  },
  {
    "url": "topics/ux/workflows/index.html",
    "revision": "397cc8176a4d332bbfababf00220b36b"
  },
  {
    "url": "topics/ux/workflows/lesson-plan.html",
    "revision": "a5305aab2a45a03ec22f63588dc7f37f"
  },
  {
    "url": "topics/ux/workflows/moreUX.html",
    "revision": "3ebce194299cd99658e2b4c3055bc52d"
  },
  {
    "url": "topics/xml/index.html",
    "revision": "5c75171eddde8a12e9aa4306289aaa51"
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
