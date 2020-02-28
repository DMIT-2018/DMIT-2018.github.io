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
    "revision": "9fbb090b7fd84742feebc53ac6867556"
  },
  {
    "url": "about/bootstrapInVS2013.html",
    "revision": "41af88420671b91e29776ab8d89c1b2b"
  },
  {
    "url": "about/index.html",
    "revision": "d80d124544acb98a0d3ea6fe3f537da4"
  },
  {
    "url": "about/LOGs.html",
    "revision": "2c66871e69e4c15285089047dfa9f88f"
  },
  {
    "url": "about/resources.html",
    "revision": "701fa7c8b6327884ed5afd4d5beb2fda"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "about/troubleshoot.html",
    "revision": "29ef2a2f88ecc75de98008f3fd6c66e8"
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
    "url": "assets/js/13.d5fede1e.js",
    "revision": "65d404627f73d8b7bdaaeecfe1bad4da"
  },
  {
    "url": "assets/js/14.144ccd0e.js",
    "revision": "aa3487bfab7243112c0df7a469908808"
  },
  {
    "url": "assets/js/15.fb24da3d.js",
    "revision": "3d655a73ec044bbc61c626298ba3bee4"
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
    "url": "assets/js/18.eef4a08c.js",
    "revision": "96e659be8cb75dab0abd7250a5e2aa9c"
  },
  {
    "url": "assets/js/19.181c49ca.js",
    "revision": "2d65ba8496ca84b88ae21a39b2dbe415"
  },
  {
    "url": "assets/js/2.0e476e64.js",
    "revision": "d247766e6c0198a23bc049eb46b745fa"
  },
  {
    "url": "assets/js/20.68ddbdd5.js",
    "revision": "f0bdb1ae7837f6bda64159e9719e8ed2"
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
    "url": "assets/js/27.8880fa5a.js",
    "revision": "400c62b51705b295327f4b40474bd624"
  },
  {
    "url": "assets/js/28.360a4e12.js",
    "revision": "9507ed1ffddbef35dc87d9651ff8a7f7"
  },
  {
    "url": "assets/js/29.db8ddec3.js",
    "revision": "81513a5800dea23ee5f05dec4f826084"
  },
  {
    "url": "assets/js/3.315f88a6.js",
    "revision": "eb1801cd85d394237b7cceed53a0e600"
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
    "url": "assets/js/35.bab1aefa.js",
    "revision": "697c5113663069d577741c84c8878375"
  },
  {
    "url": "assets/js/36.8cb70c57.js",
    "revision": "fe57dcc895f397ee943480ea4404015c"
  },
  {
    "url": "assets/js/37.e8040db1.js",
    "revision": "446ea58069cd80395afbe98525c4b9eb"
  },
  {
    "url": "assets/js/38.8d022c26.js",
    "revision": "e01e48d9d44d79349c11778fe8d894e3"
  },
  {
    "url": "assets/js/39.e0c5ea4a.js",
    "revision": "d8ad97ee1c389a56b88be28ccf6fba31"
  },
  {
    "url": "assets/js/4.f701e21b.js",
    "revision": "3baad30afcca96407f0fdc5098e9fb6d"
  },
  {
    "url": "assets/js/40.12039fbd.js",
    "revision": "f31dea80dd8915e5c69b374bf19aa0cc"
  },
  {
    "url": "assets/js/41.d27e4748.js",
    "revision": "edbf22cceb123a0ec09e69bb35c283e4"
  },
  {
    "url": "assets/js/42.b80810c4.js",
    "revision": "b6bd34838071a0feaba14d0117fd5b84"
  },
  {
    "url": "assets/js/43.8a0d2de2.js",
    "revision": "c69801aa1303140cfc74fab30a6a8348"
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
    "url": "assets/js/49.74d7f740.js",
    "revision": "1ce77c1a33fa99354e7cf3db6ad8aaf4"
  },
  {
    "url": "assets/js/5.dc9b13e7.js",
    "revision": "45feaba961ed63deb87001b80386ebf6"
  },
  {
    "url": "assets/js/50.0bcb7a49.js",
    "revision": "b60fca6358e18e28a9193941a0c90d34"
  },
  {
    "url": "assets/js/51.09e9d6fc.js",
    "revision": "c30e9432bc95046fe447f3227d59c51a"
  },
  {
    "url": "assets/js/52.a5993a84.js",
    "revision": "401351d1f2d5c33d475acf8b5a3e39c2"
  },
  {
    "url": "assets/js/53.c3f84616.js",
    "revision": "4287fb83887c8479fb3e841a987e5334"
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
    "url": "assets/js/6.e46ce379.js",
    "revision": "75af0def226a551dc1a1c995b2b7cef7"
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
    "url": "assets/js/64.f4f31b19.js",
    "revision": "3ee94892dc79a74725c7e00319686e64"
  },
  {
    "url": "assets/js/65.79aa3c59.js",
    "revision": "af87f43f7f633921d5cd6e33859c49d3"
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
    "url": "assets/js/76.4a5439d6.js",
    "revision": "f7da5d6c12160d1a2ff27d8af8c88636"
  },
  {
    "url": "assets/js/77.c0722deb.js",
    "revision": "3fba1c456ed8cacc2e167f5ca2616be9"
  },
  {
    "url": "assets/js/78.1a6d0d01.js",
    "revision": "1f22e7a7b7d27529f34e52300327fea8"
  },
  {
    "url": "assets/js/79.f2665b9b.js",
    "revision": "68f7b0da9d72cf6d3e4ab89bf950932e"
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
    "url": "assets/js/81.b7541691.js",
    "revision": "827b56fabaf234b3fc2316c2440a0816"
  },
  {
    "url": "assets/js/82.ba7eda58.js",
    "revision": "9a346e1ac2ae52ad8b5be967264904c2"
  },
  {
    "url": "assets/js/83.2e386f1c.js",
    "revision": "ac2b320386d695672cd2a20c6e5550db"
  },
  {
    "url": "assets/js/84.a30a01d9.js",
    "revision": "4e5cb79dce5b79335d81447ffafe38eb"
  },
  {
    "url": "assets/js/85.02c647a5.js",
    "revision": "16a7c675ccb67698933888a6a2e6cb72"
  },
  {
    "url": "assets/js/86.a2567d76.js",
    "revision": "bcd27e611ea22f3b6ad0dc267697acb9"
  },
  {
    "url": "assets/js/87.e15a07b6.js",
    "revision": "0571e7a69f71e806926ae84e5ece021c"
  },
  {
    "url": "assets/js/88.e411a154.js",
    "revision": "731058e0994c8019aaf2b00bfd9cf32f"
  },
  {
    "url": "assets/js/89.5c10daff.js",
    "revision": "f3aa13bbd65370dc637f075820a2f98d"
  },
  {
    "url": "assets/js/9.4ec7c87a.js",
    "revision": "f55be538de0a5971dd896b14c34af2a1"
  },
  {
    "url": "assets/js/90.711dba8b.js",
    "revision": "51f417328dad95ada683b9c970112678"
  },
  {
    "url": "assets/js/91.96fd0a47.js",
    "revision": "cd952ca602e4f24a51855e3ca55c0c39"
  },
  {
    "url": "assets/js/92.90162778.js",
    "revision": "619254803caa6f558f5952e6f13dec60"
  },
  {
    "url": "assets/js/93.95abf1f7.js",
    "revision": "5273b70a2ed196007f6162f670e90793"
  },
  {
    "url": "assets/js/94.00c77685.js",
    "revision": "3ae75048ecb4b6a2f9abdc03ed99ac08"
  },
  {
    "url": "assets/js/95.7e9ffb97.js",
    "revision": "7ea9fafba0086535de52023381d36ec1"
  },
  {
    "url": "assets/js/96.30e38eb5.js",
    "revision": "53ee6efcc4b1f70440e8160fbb4f8d96"
  },
  {
    "url": "assets/js/app.7d947e15.js",
    "revision": "7686d6d97494552da5e6c16721486caf"
  },
  {
    "url": "demos/Chinook/entityDemo.html",
    "revision": "2c3d996bd4cd9d4157931d8ec104484f"
  },
  {
    "url": "demos/Chinook/index.html",
    "revision": "300c33a389f3f0d73f0200cde0dbe75e"
  },
  {
    "url": "demos/eRestaurant/about/index.html",
    "revision": "7897cd3e1e0b1dddd92504ad9351d3e2"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminController.html",
    "revision": "b08436862511fa095adf7fe6798e6c13"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminSpecialEvents.html",
    "revision": "4d35dba90225275fae624cb2e2822059"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/bootstrapStyle.html",
    "revision": "9aa21b77134178e2c226edd50c0edc68"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/menu.html",
    "revision": "bfa3ff7354e9c1fa7eb185729628ebea"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/occupiedTables.html",
    "revision": "d59f625b357b2e725e0b82580e420567"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/queryString.html",
    "revision": "990bd88ecaade5b6516242fae51285ea"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/reservations.html",
    "revision": "481a3f25006a82ac108fd39a1420ec29"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/fakeDateTime.html",
    "revision": "4c775dd3f8dd322c282173237195467a"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/messageUserControl.html",
    "revision": "ed775229badc7e57d75db8fe2ad88f7a"
  },
  {
    "url": "demos/eRestaurant/businessRules/businessRuleException.html",
    "revision": "c4ccdab6bc08fd4a1f432f55ce20c54d"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingReservations.html",
    "revision": "9663d673232add691c24e891b5b1efd4"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingWalkIns.html",
    "revision": "c57ed6a034aecfbd3fe6640a30814889"
  },
  {
    "url": "demos/eRestaurant/dvcs/demo.html",
    "revision": "aadf66a46b1b47af2494596ef7e57c1b"
  },
  {
    "url": "demos/eRestaurant/entityFramework/demo/demo.html",
    "revision": "6b676539a007165f007c2ef3f27be289"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice-solution.html",
    "revision": "5b56840c1d36c9aa3d97ae73ad35c914"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice.html",
    "revision": "764cc4f0e12826f51dd855485e373fa1"
  },
  {
    "url": "demos/eRestaurant/index.html",
    "revision": "f5f622422587ad47362eb7819e305835"
  },
  {
    "url": "demos/eRestaurant/linq/extensions.html",
    "revision": "b09c77015f2d5f8a51e2ecb94cdeb389"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/occupiedTables.html",
    "revision": "3f0f8f6bdbdfe783b0f209c6ea2ef797"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/reservations.html",
    "revision": "9e6b3b94fb906dda266f6547a82bfdd6"
  },
  {
    "url": "demos/eRestaurant/linq/index.html",
    "revision": "e2b7c833e262be6d0bda638067130635"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/expressions.html",
    "revision": "82ae8d893247aebe1722a98d0c297458"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/program.html",
    "revision": "26edef92f944ab776c716febbaa897db"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/statements.html",
    "revision": "3595f10734d06c3466d3707e55ce5307"
  },
  {
    "url": "demos/eRestaurant/linq/practice.html",
    "revision": "18e90f27f726b46966fc566eab51e493"
  },
  {
    "url": "demos/eRestaurant/reports/customizing/index.html",
    "revision": "95a9de8022be10d68371fcabf10d4106"
  },
  {
    "url": "demos/eRestaurant/reports/reportViewer/index.html",
    "revision": "65a6bb7b0e6259a332a5106f5622e40a"
  },
  {
    "url": "demos/eRestaurant/security/demo.html",
    "revision": "2ee2aa2b8209a08de9fc28258922791a"
  },
  {
    "url": "demos/eRestaurant/sitemaps/demo2.html",
    "revision": "771571dcf9a3215e662b2175d7710641"
  },
  {
    "url": "demos/eRestaurant/testing/manual.html",
    "revision": "d5742e655fff8093ee82c7b08e85e3f9"
  },
  {
    "url": "demos/eRestaurant/ux/frontDesk/index.html",
    "revision": "9ba27bfcf4041594bfc8331a466cafbf"
  },
  {
    "url": "demos/index.html",
    "revision": "76e8f726395e381a236bfad4621ab8a9"
  },
  {
    "url": "demos/Northwind/CustomerOrders/Design.html",
    "revision": "441a04742e6e9de9e0db3d7bcd917305"
  },
  {
    "url": "demos/Northwind/CustomerOrders/index.html",
    "revision": "90760f095f0d746f6bf80d77281453c2"
  },
  {
    "url": "demos/Northwind/index.html",
    "revision": "d134580860ee9589f79c37d24ee9a826"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/expressions.html",
    "revision": "898ca0d874590d3e899b8e2859870110"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/program.html",
    "revision": "164afc11e0bd20e94e1f4287635e2137"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/statements.html",
    "revision": "fdc0a55bd419f8d2c1207302c8b64b6a"
  },
  {
    "url": "demos/Northwind/Security/index.html",
    "revision": "10abbb8e1afbbc9b3cf8fd9505774c9f"
  },
  {
    "url": "exercises/dvcs.html",
    "revision": "437271fca126528d581cfa5b1f5cae66"
  },
  {
    "url": "exercises/ef.html",
    "revision": "f6a969e973bd21db8d9f69868426c2dd"
  },
  {
    "url": "exercises/index.html",
    "revision": "984573ea4e1113545889d23ea89e6540"
  },
  {
    "url": "exercises/linq.html",
    "revision": "a545a4c09d20019a436d1d41b9af50c5"
  },
  {
    "url": "exercises/oltp.html",
    "revision": "e95a67555ca3f728d4e42b14480ec697"
  },
  {
    "url": "exercises/planning.html",
    "revision": "9099faf6ae4422ffafe8527ab6a45a10"
  },
  {
    "url": "exercises/reporting.html",
    "revision": "29c63eeee13b24f8e3212c83bcd9c88a"
  },
  {
    "url": "exercises/reports/install_ssdt.html",
    "revision": "d38d2adaf73a367eb58d2cf7f9aaa2e7"
  },
  {
    "url": "exercises/WorkSchedule/EntityFramework/index.html",
    "revision": "fc977344982cf44254573b0a7218ea3c"
  },
  {
    "url": "exercises/WorkSchedule/Integrated/index.html",
    "revision": "73b1ea70e581b7ac944439f68b0686c4"
  },
  {
    "url": "exercises/WorkSchedule/Linq/index.html",
    "revision": "ae8b836495822e50c9d3ba252d1cb817"
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
    "revision": "31f0a788fb6b57ff482a6a3974eb398a"
  },
  {
    "url": "logs/index.html",
    "revision": "928a6b2a1395be4523f5bd7aff5c7c6e"
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
    "revision": "335fbda7f6e50b0606dbf81825a662af"
  },
  {
    "url": "topics/aspNet/assortedWebForms.html",
    "revision": "841c540e4740348478e7155b29e03ad1"
  },
  {
    "url": "topics/aspNet/databound/detailsviewOverview.html",
    "revision": "bcc2d002bea6cd83e225cfe551a2f379"
  },
  {
    "url": "topics/aspNet/databound/gridviewCustomization.html",
    "revision": "88915dc1efbcb779387e251ca9cfc501"
  },
  {
    "url": "topics/aspNet/databound/gridviewOverview.html",
    "revision": "86d25dd496774e6ea997e57107929cfe"
  },
  {
    "url": "topics/aspNet/databound/index.html",
    "revision": "dbbe045f046a61eb7808891dd7fdd62a"
  },
  {
    "url": "topics/aspNet/databound/listviewOverview.html",
    "revision": "05670e524d18c861c69e8068d5bdae7b"
  },
  {
    "url": "topics/aspNet/databound/repeaterOverview.html",
    "revision": "c5235b91a70c89ef0689c8af554aad49"
  },
  {
    "url": "topics/aspNet/errorHandling.html",
    "revision": "e9a421523cc7cd070b5c468044268ec1"
  },
  {
    "url": "topics/aspNet/userControls.html",
    "revision": "2a91e0514effa53872177950dd53a5a2"
  },
  {
    "url": "topics/cqrs/index.html",
    "revision": "a372d4a49e79e71160e1086c60a7ae77"
  },
  {
    "url": "topics/dvcs/conflicts/index.html",
    "revision": "4bccf3eb74579cee83193aa50d4d4f11"
  },
  {
    "url": "topics/dvcs/gh4w.html",
    "revision": "4476d6e3ea2c8628b39ddef9cb4e5b99"
  },
  {
    "url": "topics/dvcs/index.html",
    "revision": "c3a934ccf1d1d8d170a481670eb2d1cd"
  },
  {
    "url": "topics/entityFramework/index.html",
    "revision": "b5a0a94d7e82f977e8ebd68e51b14286"
  },
  {
    "url": "topics/index.html",
    "revision": "0b44f687f24c846cd4a8a0fc941199e6"
  },
  {
    "url": "topics/linq/index.html",
    "revision": "578c14e270a1f20f274758d556cc96b0"
  },
  {
    "url": "topics/linq/lambda.html",
    "revision": "43d90543e4b106b6912ffc04ed6754ba"
  },
  {
    "url": "topics/reports/ssdt.html",
    "revision": "924c3293cc0d0317edb556c65e0b78c6"
  },
  {
    "url": "topics/security/aspNetIdentity.html",
    "revision": "396f692450cb4e5b098cc04164ad0ae6"
  },
  {
    "url": "topics/security/IdentityConfig.html",
    "revision": "f82c0bb73ae886b28d49afa2eeb9fe9b"
  },
  {
    "url": "topics/security/IdentityModels.html",
    "revision": "f9aff30f7296a5df93ef148962c66479"
  },
  {
    "url": "topics/security/index.html",
    "revision": "a525ec5dfba980753f0922f53277e2ab"
  },
  {
    "url": "topics/security/vs2017wap.html",
    "revision": "89619858e63314350b7b2f5883607e62"
  },
  {
    "url": "topics/sitemaps/index.html",
    "revision": "eb39267e2c6acbac3935c88ef1a0d807"
  },
  {
    "url": "topics/ux/index.html",
    "revision": "9453efee5f32c90bc631a5d833532a54"
  },
  {
    "url": "topics/ux/workflows/index.html",
    "revision": "56a9ed0716c5f53aa0e5e7aabc93576e"
  },
  {
    "url": "topics/ux/workflows/lesson-plan.html",
    "revision": "a7bc924340667522b995b3e2cc65e692"
  },
  {
    "url": "topics/ux/workflows/moreUX.html",
    "revision": "0b58d90091f425ee09a74f914a6042f3"
  },
  {
    "url": "topics/xml/index.html",
    "revision": "0046b2042867718e374678f378d56908"
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
