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
    "revision": "f0c975b405e794443ec381b0a12356fd"
  },
  {
    "url": "about/bootstrapInVS2013.html",
    "revision": "043d95d585ee5528a551c39453fb0f61"
  },
  {
    "url": "about/index.html",
    "revision": "6b11b53f48974d283bf82ae94c9644e9"
  },
  {
    "url": "about/LOGs.html",
    "revision": "9ad28dc9c3a392973948b0ff0526f7bd"
  },
  {
    "url": "about/resources.html",
    "revision": "17f3855866e6a861f7f8f7b9b53008cb"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "about/troubleshoot.html",
    "revision": "e5b50a0df26c437275e0bcc08d07188d"
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
    "url": "assets/img/EmployeeRegistration.069005b8.png",
    "revision": "069005b847b940ca08a87af6fbb870e3"
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
    "url": "assets/js/10.a031cb34.js",
    "revision": "54bd70d25eca040d0836a41ecc15407f"
  },
  {
    "url": "assets/js/11.0f3182cb.js",
    "revision": "7893b450f7ab95ab13675269591ea0c2"
  },
  {
    "url": "assets/js/12.03cbb7ab.js",
    "revision": "6c8adf2af9d607888e5be896bc5d0467"
  },
  {
    "url": "assets/js/13.c53d87fc.js",
    "revision": "4e1ad321ffe557a7e3ce85e044683a71"
  },
  {
    "url": "assets/js/14.371e6939.js",
    "revision": "aa923f29fdaec6bf9468d9901431a6fd"
  },
  {
    "url": "assets/js/15.2687e6dd.js",
    "revision": "06a867000eea3260c9c6c14e2aa389dc"
  },
  {
    "url": "assets/js/16.f51e571e.js",
    "revision": "6c917b91472a631d41bcab980baf6dee"
  },
  {
    "url": "assets/js/17.3aa248c7.js",
    "revision": "0d8f80c7c88c2da842d4a9c04412ade1"
  },
  {
    "url": "assets/js/18.66062dc3.js",
    "revision": "7b08048ba48abc70d3007931bf71ae8b"
  },
  {
    "url": "assets/js/19.02050936.js",
    "revision": "7382ad715101d93cfbcc064017bfbc70"
  },
  {
    "url": "assets/js/2.c12f21cf.js",
    "revision": "be71d7d4f1b05f0f4418a07815788abe"
  },
  {
    "url": "assets/js/20.73109232.js",
    "revision": "fac0f23d27f4beaa5590359ff2691537"
  },
  {
    "url": "assets/js/21.c33e265c.js",
    "revision": "c98f8ac3fc29447cbc1eaff9abd6a350"
  },
  {
    "url": "assets/js/22.4b7ba10c.js",
    "revision": "70942c7be226a8cad9599e326e343284"
  },
  {
    "url": "assets/js/23.b352d5a8.js",
    "revision": "9dd059aaffdb4d87c1894a37fd293b3f"
  },
  {
    "url": "assets/js/24.af6c066c.js",
    "revision": "640c52d1ec28a1e840a9c21ae822d2a9"
  },
  {
    "url": "assets/js/25.bdb71f7f.js",
    "revision": "4ab00ce5354911aa63a949f845324465"
  },
  {
    "url": "assets/js/26.8ba463d5.js",
    "revision": "21aadfbf9b03ee43015e4cf901f7cef8"
  },
  {
    "url": "assets/js/27.93c0e38a.js",
    "revision": "4e23a4139cad82c6c98ab21ca2dc79cf"
  },
  {
    "url": "assets/js/28.84f8b8f7.js",
    "revision": "c775012c3b7b76bcfc754ada5030edc7"
  },
  {
    "url": "assets/js/29.e679cc45.js",
    "revision": "fe14624ada202a97c4c208c5d2edd0be"
  },
  {
    "url": "assets/js/3.41f06792.js",
    "revision": "abb64763df3abe0c26e93310b19ef1d6"
  },
  {
    "url": "assets/js/30.6955286a.js",
    "revision": "a291cd0f1bab1a8b2d63ec714e1d2dbb"
  },
  {
    "url": "assets/js/31.e1757e47.js",
    "revision": "f1e735c4e38d5a404bb7979fd35ff7e1"
  },
  {
    "url": "assets/js/32.24b500ca.js",
    "revision": "c1f5f456a76776b21248af201a478dcf"
  },
  {
    "url": "assets/js/33.ab94a6ba.js",
    "revision": "61c55e56b92cc53f443d92e442b9bfc6"
  },
  {
    "url": "assets/js/34.6d6bf95d.js",
    "revision": "1d2b06aa4418dddc5530338b2f585600"
  },
  {
    "url": "assets/js/35.e270f6c1.js",
    "revision": "3c1b71204818c5bb8c0a09a8fe84c2fe"
  },
  {
    "url": "assets/js/36.48a948be.js",
    "revision": "92762d56b8ea719fa1cd44f90134be7b"
  },
  {
    "url": "assets/js/37.c3b49be6.js",
    "revision": "649da68ae594c02a09cc4d004e60b86c"
  },
  {
    "url": "assets/js/38.ad05f205.js",
    "revision": "f988881c55edadbd01c3a157d0dcab99"
  },
  {
    "url": "assets/js/39.750eea52.js",
    "revision": "efe93463e33852eb3b412fb538567196"
  },
  {
    "url": "assets/js/4.4dbd7af9.js",
    "revision": "9faa6300ec28a6fbc56b5db5f8411de5"
  },
  {
    "url": "assets/js/40.15924321.js",
    "revision": "2de771672cecaca2c62b6ec69406d5b6"
  },
  {
    "url": "assets/js/41.ba8c0096.js",
    "revision": "a410d06e051879d059e7ad9b82e0df75"
  },
  {
    "url": "assets/js/42.71d94bf5.js",
    "revision": "bdcbc19259d4d156996366942c0dba5f"
  },
  {
    "url": "assets/js/43.ac281642.js",
    "revision": "a9b785ff408125434bfcac8557afb00a"
  },
  {
    "url": "assets/js/44.bff743d3.js",
    "revision": "98221d29b7d34b4cecf54248de3e0ac9"
  },
  {
    "url": "assets/js/45.ebabb807.js",
    "revision": "803d97f4ff36fb2b19fd18b2b8ec05dc"
  },
  {
    "url": "assets/js/46.6796a8a4.js",
    "revision": "8113340722fbabd4c5a231ed2554492f"
  },
  {
    "url": "assets/js/47.990d979f.js",
    "revision": "d7d16e84c6696193783e765a4134c99b"
  },
  {
    "url": "assets/js/48.4d636b50.js",
    "revision": "1329fe00d3bffbb2d926dfe4232c6e31"
  },
  {
    "url": "assets/js/49.e88726e2.js",
    "revision": "6390ceaec601ee23a909fa1e049b1280"
  },
  {
    "url": "assets/js/5.2d65a119.js",
    "revision": "948121e34f1ba7dcc2fdccca2e9f9091"
  },
  {
    "url": "assets/js/50.f787b633.js",
    "revision": "0f81635b5bd3888e125e132af47fef64"
  },
  {
    "url": "assets/js/51.847635bc.js",
    "revision": "a6bb78cb240c3327c515a88f05eceb77"
  },
  {
    "url": "assets/js/52.9d9ee7b4.js",
    "revision": "1b20c1ee9f95cb284193f1d704a13ece"
  },
  {
    "url": "assets/js/53.6b86d40a.js",
    "revision": "85664ff828658a18565d0312ff477ff0"
  },
  {
    "url": "assets/js/54.90ef4358.js",
    "revision": "b22514ecdd961b228f72072d1b0ab685"
  },
  {
    "url": "assets/js/55.4e702855.js",
    "revision": "b78dda52c47397fecd3bc73aaf6a0292"
  },
  {
    "url": "assets/js/56.53354fc0.js",
    "revision": "ab8237bcd36c38debd37b4d091b627b6"
  },
  {
    "url": "assets/js/57.20ac69cc.js",
    "revision": "8a54d103a2e29ab75d4e4c77cfdd3849"
  },
  {
    "url": "assets/js/58.af21a52f.js",
    "revision": "acecc6300c4255f5875ec72c1345b79b"
  },
  {
    "url": "assets/js/59.ab0626bc.js",
    "revision": "0916dcf622403e174feb2a50fc2465c8"
  },
  {
    "url": "assets/js/6.ff340999.js",
    "revision": "7c14807299b5d6d831d3785f4d5d8280"
  },
  {
    "url": "assets/js/60.04d28701.js",
    "revision": "7ba2bb7d623ac67e06f08c15d0ad73db"
  },
  {
    "url": "assets/js/61.ee8e0b96.js",
    "revision": "901d17d8abfb0e0080493dbbc61b300a"
  },
  {
    "url": "assets/js/62.07bcfe14.js",
    "revision": "f7c0140eaa6b74e78785641e8d43c634"
  },
  {
    "url": "assets/js/63.4c157bb5.js",
    "revision": "91be64ddb3b95a94e470f2cfc3643824"
  },
  {
    "url": "assets/js/64.05dd43cb.js",
    "revision": "5655822f6d8933067b673a9b43252486"
  },
  {
    "url": "assets/js/65.2fa846d8.js",
    "revision": "69f1827ec009c82305c9776d4ee16bda"
  },
  {
    "url": "assets/js/66.ceb50e85.js",
    "revision": "e0a8c50c5259925b00c27a2743765262"
  },
  {
    "url": "assets/js/67.5b2e4c30.js",
    "revision": "a96d5b9b13698b6256beeea8b90bb984"
  },
  {
    "url": "assets/js/68.4b99b15f.js",
    "revision": "fae37c1f94907a8c42926866ae0eb824"
  },
  {
    "url": "assets/js/69.1305c118.js",
    "revision": "0a1ca7698758bf87ef04487cfcc9cf14"
  },
  {
    "url": "assets/js/7.0a301f76.js",
    "revision": "1fde00044cfeb372333e67e069c1c363"
  },
  {
    "url": "assets/js/70.e70f4f26.js",
    "revision": "59c4586d3ad1afccfb601324a2964179"
  },
  {
    "url": "assets/js/71.2314f7f6.js",
    "revision": "adc96c473812a1c5bf34a14c480246c4"
  },
  {
    "url": "assets/js/72.b48451cb.js",
    "revision": "cdb3592ade32f76fe0825c3ed6ce768c"
  },
  {
    "url": "assets/js/73.e756aa97.js",
    "revision": "b6683a93de52f5835fccb539d0875190"
  },
  {
    "url": "assets/js/74.fdeeb340.js",
    "revision": "3fea35294a9afa5bed410f6b0d19dad2"
  },
  {
    "url": "assets/js/75.30c42a04.js",
    "revision": "f85548a2eb5544dc2a357002294ed9f6"
  },
  {
    "url": "assets/js/76.ea6b49b1.js",
    "revision": "a5320e5456fc784bc22d5f5637905ee7"
  },
  {
    "url": "assets/js/77.07fe08b4.js",
    "revision": "d514757cf6537587db61440ca08bc154"
  },
  {
    "url": "assets/js/78.db621e99.js",
    "revision": "3c1e734158d1adb8e5cce77873301b5e"
  },
  {
    "url": "assets/js/79.d807334d.js",
    "revision": "d5a29247951f02a72101ac0161fcd277"
  },
  {
    "url": "assets/js/8.7c50e178.js",
    "revision": "94caa1848181f92926e35578aa948156"
  },
  {
    "url": "assets/js/80.10a9f743.js",
    "revision": "c67aba645f2aa85f12e63a13fd0a3784"
  },
  {
    "url": "assets/js/81.3f121c21.js",
    "revision": "341f200159c41ddba2098388b6bd1f5c"
  },
  {
    "url": "assets/js/82.0e2bb75d.js",
    "revision": "5b416d31acfceca20b031b6955301a08"
  },
  {
    "url": "assets/js/83.b6266c85.js",
    "revision": "80513bc6c7264f4f71b98cca9d817315"
  },
  {
    "url": "assets/js/84.fc9b7e02.js",
    "revision": "152987fcf13b652fec5f5838852fb079"
  },
  {
    "url": "assets/js/85.4fdc567d.js",
    "revision": "5e3860387c7e31e2d07f5b5e5de10291"
  },
  {
    "url": "assets/js/86.009a5d22.js",
    "revision": "86f08bbb7c3d8a4dbc5e40965edf9384"
  },
  {
    "url": "assets/js/87.842a1491.js",
    "revision": "7a3edba4d24a18548e35486274b76314"
  },
  {
    "url": "assets/js/88.44ecced1.js",
    "revision": "e5e38d77da6c5ac898938b93cca25dba"
  },
  {
    "url": "assets/js/89.ac642a75.js",
    "revision": "0e73c150d4ca6c4055f5f8f0f57e0077"
  },
  {
    "url": "assets/js/9.0a5dd4f4.js",
    "revision": "d2d01a8faab45fad955940353b1c60a9"
  },
  {
    "url": "assets/js/90.aed762f7.js",
    "revision": "fe0ec8ac8c404b70d4506e602ddc6659"
  },
  {
    "url": "assets/js/91.aac20ea9.js",
    "revision": "bf61e6bb1cf10eb7d3ecf2bd676f1145"
  },
  {
    "url": "assets/js/92.8dfa7ce3.js",
    "revision": "a580794351225a3279ef4ad36ef4246f"
  },
  {
    "url": "assets/js/93.0ca6672f.js",
    "revision": "6149be3accf0169c704927ee23f6b531"
  },
  {
    "url": "assets/js/94.3166ced8.js",
    "revision": "8967f3aa0393f386442416da627e700c"
  },
  {
    "url": "assets/js/95.fb24fae5.js",
    "revision": "d3807d2b98ed3c6b2c7fc9c7ddab0e17"
  },
  {
    "url": "assets/js/96.7e78d553.js",
    "revision": "c331f7bf1f958c1236f555d52c3c5708"
  },
  {
    "url": "assets/js/97.d4c5de8a.js",
    "revision": "7655f5f14ba02905eb0ee9ea3a2f8593"
  },
  {
    "url": "assets/js/app.d9faaf5f.js",
    "revision": "28e254342667f5912038ab4662915d33"
  },
  {
    "url": "demos/Chinook/entityDemo.html",
    "revision": "d745800dd0766192b3e2ac599f1e95f6"
  },
  {
    "url": "demos/Chinook/index.html",
    "revision": "f5a085479e12b1546f543a8ca861f055"
  },
  {
    "url": "demos/eRestaurant/about/index.html",
    "revision": "2f49ba2583774fe20090d087935870d0"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminController.html",
    "revision": "8729b9c8b6ad5f4eb32a01706771732c"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminSpecialEvents.html",
    "revision": "09588c1645cd67b51e6fb59715459910"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/bootstrapStyle.html",
    "revision": "eb1de70971a833b821b23f0e14ec9fbe"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/menu.html",
    "revision": "1839815bf0c01ee20aef5a06ed744085"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/occupiedTables.html",
    "revision": "9b0b6c6a225588bfc3bd994b33230a19"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/queryString.html",
    "revision": "cc60e839f6b89402f88dfd19608cc811"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/reservations.html",
    "revision": "b19d79e6f27dc5a12192fa93fcb5d7d6"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/fakeDateTime.html",
    "revision": "ed52a1ee1b9b4f8726005a66607d5276"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/messageUserControl.html",
    "revision": "83eef59d2a8866236329e440bec726dd"
  },
  {
    "url": "demos/eRestaurant/businessRules/businessRuleException.html",
    "revision": "3a67721cd4e2322ec2a54cc8d92af421"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingReservations.html",
    "revision": "e3099fa3ed6782300a0084cf9b540f51"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingWalkIns.html",
    "revision": "d51fe44a45036977e835c45878aa4b06"
  },
  {
    "url": "demos/eRestaurant/dvcs/demo.html",
    "revision": "5b872d284a129acd9baf76a2ef9cd0ff"
  },
  {
    "url": "demos/eRestaurant/entityFramework/demo/demo.html",
    "revision": "63a160d0f9344f0211ee80c56b74631b"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice-solution.html",
    "revision": "d5656ed47778fd5a491b448a6fe3bfed"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice.html",
    "revision": "3ab48c44e854b7930f6f579e9047251a"
  },
  {
    "url": "demos/eRestaurant/index.html",
    "revision": "09e87137ff74c993c3fb4823c9c65c24"
  },
  {
    "url": "demos/eRestaurant/linq/extensions.html",
    "revision": "bc2a643cf8d1815d6bf7367efbcedea0"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/occupiedTables.html",
    "revision": "1bf86fc2669afb4a766c3b1db66c2d07"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/reservations.html",
    "revision": "87cb66643cffd52e415fbe70c82078ff"
  },
  {
    "url": "demos/eRestaurant/linq/index.html",
    "revision": "1bfafb505cc05ccf251df99518a1a868"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/expressions.html",
    "revision": "2db722d0ccbf759276135595b9d58adf"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/program.html",
    "revision": "e3e2625be55b64b2fae815fc2018451e"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/statements.html",
    "revision": "236d07db40133c7efadf4c389910bbd1"
  },
  {
    "url": "demos/eRestaurant/linq/practice.html",
    "revision": "f3c6eb599cbd43b7ec3274207b8384a7"
  },
  {
    "url": "demos/eRestaurant/reports/customizing/index.html",
    "revision": "327972406ac16de31cd67fff72a5f066"
  },
  {
    "url": "demos/eRestaurant/reports/reportViewer/index.html",
    "revision": "3b2224dc8add9ac67a47ea3201effab0"
  },
  {
    "url": "demos/eRestaurant/security/demo.html",
    "revision": "21cbb939db9f0b40af442e4920c730ed"
  },
  {
    "url": "demos/eRestaurant/sitemaps/demo2.html",
    "revision": "6bad5691e675a52078d7fc19613a2b5b"
  },
  {
    "url": "demos/eRestaurant/testing/manual.html",
    "revision": "9bbd25fb40b1a0e31b74d641e00585ad"
  },
  {
    "url": "demos/eRestaurant/ux/frontDesk/index.html",
    "revision": "e6dbd4ccb9d200f6f67ef7f921b20404"
  },
  {
    "url": "demos/index.html",
    "revision": "5c426d811bfd4ccc5cf5ed7eedfe262d"
  },
  {
    "url": "demos/Northwind/CustomerOrders/Design.html",
    "revision": "5fbf0f57f3592802f3d3cb9039c99a65"
  },
  {
    "url": "demos/Northwind/CustomerOrders/index.html",
    "revision": "8d63bc72c5142f8b4d7df82ff00e15d5"
  },
  {
    "url": "demos/Northwind/index.html",
    "revision": "462ba50b9f97d9e60b744eaf575f0d51"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/expressions.html",
    "revision": "0158fd62b6036325e7208c00aa86d899"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/program.html",
    "revision": "eec7740d256b2657f660617c30463a0b"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/statements.html",
    "revision": "2cc57770a1b262ef34946a508567f8ab"
  },
  {
    "url": "demos/Northwind/Security/index.html",
    "revision": "ee42169739982243c793eed8c409a559"
  },
  {
    "url": "exercises/dvcs.html",
    "revision": "eb5bf43e1fb2f5033bd3d18965ab5656"
  },
  {
    "url": "exercises/ef.html",
    "revision": "8c2ac1c0befbafe37ac540fb88e115bb"
  },
  {
    "url": "exercises/index.html",
    "revision": "05a4d0be1fa1652a8a7bee93f23864b7"
  },
  {
    "url": "exercises/linq.html",
    "revision": "b9160e9e2746b6aac8d521293289d064"
  },
  {
    "url": "exercises/oltp.html",
    "revision": "9b65b5efa2f04b50f85c70f2f425134e"
  },
  {
    "url": "exercises/planning.html",
    "revision": "8122c67f0184b7d2a509b78b68db5e64"
  },
  {
    "url": "exercises/reporting.html",
    "revision": "c20e8b8ec3c993a6b26632b45aba041f"
  },
  {
    "url": "exercises/reports/install_ssdt.html",
    "revision": "c414954c379294060ea94bf5c1f41bc5"
  },
  {
    "url": "exercises/WorkSchedule/EntityFramework/index.html",
    "revision": "160d26260eb2b19461fd4e0b555de14c"
  },
  {
    "url": "exercises/WorkSchedule/ImplementationPlan/index.html",
    "revision": "4711819b1f807b5d778c0053a5d38c54"
  },
  {
    "url": "exercises/WorkSchedule/Integrated/index.html",
    "revision": "3631bb27d83df48698c990ae77d4d191"
  },
  {
    "url": "exercises/WorkSchedule/Linq/index.html",
    "revision": "0db7b6a738b587be09b217900998f31b"
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
    "revision": "d99be15ee9171c8f9934eba185c9bff2"
  },
  {
    "url": "logs/index.html",
    "revision": "6bddda32f23af7495a0e01f4bbfe915f"
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
    "revision": "6f37d2a6ed525943511745da52752a09"
  },
  {
    "url": "topics/aspNet/assortedWebForms.html",
    "revision": "657bd37bf56633f87d8623e424c5a7ad"
  },
  {
    "url": "topics/aspNet/databound/detailsviewOverview.html",
    "revision": "76d1f66051f7e60a6f6e880c9da37095"
  },
  {
    "url": "topics/aspNet/databound/gridviewCustomization.html",
    "revision": "31f99f1a1cafe932ca86728258be11f5"
  },
  {
    "url": "topics/aspNet/databound/gridviewOverview.html",
    "revision": "7d33b52285c920cbb592b07b428eb5b4"
  },
  {
    "url": "topics/aspNet/databound/index.html",
    "revision": "249c78204373fe1c564650d8420cc989"
  },
  {
    "url": "topics/aspNet/databound/listviewOverview.html",
    "revision": "6c4348ae74fc0402245791ed4d535aaa"
  },
  {
    "url": "topics/aspNet/databound/repeaterOverview.html",
    "revision": "40afada1f690a17006ea7b2ea84676fc"
  },
  {
    "url": "topics/aspNet/errorHandling.html",
    "revision": "1ee2533dff2bcf2bcb13fa6d79b10eb3"
  },
  {
    "url": "topics/aspNet/userControls.html",
    "revision": "abfdec90d2d1ba3b13960a82ee1cb77b"
  },
  {
    "url": "topics/cqrs/index.html",
    "revision": "42429f387fb74b8d722154d12eaeb8a7"
  },
  {
    "url": "topics/dvcs/conflicts/index.html",
    "revision": "7991cfb394576a172f829b6324ef095b"
  },
  {
    "url": "topics/dvcs/gh4w.html",
    "revision": "6849e6e060a1e846c8c2698bd970b0ab"
  },
  {
    "url": "topics/dvcs/index.html",
    "revision": "899b17dcd0a26ac6bb644eec010b63da"
  },
  {
    "url": "topics/entityFramework/index.html",
    "revision": "81116009c9d884522ba37214fe0489cf"
  },
  {
    "url": "topics/index.html",
    "revision": "1c78788abb575a7139ca8a9737863d23"
  },
  {
    "url": "topics/linq/index.html",
    "revision": "38e8f191dbd2424dde316702b6f6da6a"
  },
  {
    "url": "topics/linq/lambda.html",
    "revision": "e4c2f8c63acb4b7a4ebb7ac3510bd84c"
  },
  {
    "url": "topics/reports/ssdt.html",
    "revision": "af8008c4926bdfe8c8b2405151b8cdfc"
  },
  {
    "url": "topics/security/aspNetIdentity.html",
    "revision": "bb38518124a8905972aec00ed2e9eb23"
  },
  {
    "url": "topics/security/IdentityConfig.html",
    "revision": "db019e855db0fdd242326cf4baa939bc"
  },
  {
    "url": "topics/security/IdentityModels.html",
    "revision": "4e09f9e86e984fa10426a95475c99997"
  },
  {
    "url": "topics/security/index.html",
    "revision": "794ee6a85e7d032a9f9a78656779ecac"
  },
  {
    "url": "topics/security/vs2017wap.html",
    "revision": "d012a2ff83bad34eece0924f63412976"
  },
  {
    "url": "topics/sitemaps/index.html",
    "revision": "5e4c563dae8c38cc4b6c8bbd003a1a61"
  },
  {
    "url": "topics/ux/index.html",
    "revision": "291fcf9dfa379c06a2ab372989544c23"
  },
  {
    "url": "topics/ux/workflows/index.html",
    "revision": "e2ef69f4064060fe85d7d3363a5e41a5"
  },
  {
    "url": "topics/ux/workflows/lesson-plan.html",
    "revision": "22b3648f8063c266cdfd373652a650cb"
  },
  {
    "url": "topics/ux/workflows/moreUX.html",
    "revision": "e971dfa14d96254ddd4c32b2e235bdaf"
  },
  {
    "url": "topics/xml/index.html",
    "revision": "541159c3d974f49bd613980cee0b0369"
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
