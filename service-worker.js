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
    "revision": "ec25b37c752a0dc34c07ad170f9a8c2a"
  },
  {
    "url": "about/bootstrapInVS2013.html",
    "revision": "f760c9b629eb6079c0419b70e89d1e79"
  },
  {
    "url": "about/index.html",
    "revision": "6ff924c1c79dd55a51151d7259306327"
  },
  {
    "url": "about/LOGs.html",
    "revision": "50d52cf5aa3c8dcabb90b4c6fcb0b9c9"
  },
  {
    "url": "about/resources.html",
    "revision": "59791982ff5251c489916a7196fbbeab"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "about/troubleshoot.html",
    "revision": "e55fcef431cc3a565d33221bd1899054"
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
    "url": "assets/js/10.8cf6e162.js",
    "revision": "0b9ba218423e857461a7f0f9b69f15ac"
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
    "url": "assets/js/13.2bc2b575.js",
    "revision": "6c8426c75dc571130353f5bfded8a60b"
  },
  {
    "url": "assets/js/14.599aa006.js",
    "revision": "989c489c58bb7d376594ae847c0e8467"
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
    "url": "assets/js/18.10c930df.js",
    "revision": "04d9cc67da73aaca65e65f61bc7aedd5"
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
    "url": "assets/js/21.a035d42b.js",
    "revision": "3b953d3bc7c6c85a1c7a86ae1a534db1"
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
    "url": "assets/js/27.005d97b7.js",
    "revision": "20e1699c1cebd8f7ca5f9201ed2a7ab6"
  },
  {
    "url": "assets/js/28.84f8b8f7.js",
    "revision": "c775012c3b7b76bcfc754ada5030edc7"
  },
  {
    "url": "assets/js/29.e6b4e1e8.js",
    "revision": "62f18a84ac683d604e2b7cf29010795a"
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
    "url": "assets/js/34.4059451c.js",
    "revision": "39018e01f1e6e7801f0fa3237b57a608"
  },
  {
    "url": "assets/js/35.e270f6c1.js",
    "revision": "3c1b71204818c5bb8c0a09a8fe84c2fe"
  },
  {
    "url": "assets/js/36.4a8e1a34.js",
    "revision": "5936c5c8e2ff6e2ef10525bdb447f39b"
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
    "url": "assets/js/47.8ac2fefa.js",
    "revision": "f5a7fdccb0dd9daab46ea8b5473591ae"
  },
  {
    "url": "assets/js/48.8c1ffab4.js",
    "revision": "1b0b0ae676e03d800b8d532a9a1a4277"
  },
  {
    "url": "assets/js/49.e88726e2.js",
    "revision": "6390ceaec601ee23a909fa1e049b1280"
  },
  {
    "url": "assets/js/5.7934de03.js",
    "revision": "44380d011c12a14e80bfa3c3b49b20c3"
  },
  {
    "url": "assets/js/50.f787b633.js",
    "revision": "0f81635b5bd3888e125e132af47fef64"
  },
  {
    "url": "assets/js/51.379e6937.js",
    "revision": "e9c33171fe20bc5864bca0bdaebe302d"
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
    "url": "assets/js/70.f2f2c45c.js",
    "revision": "ac8ae30b609d0aff653628f4dd3c6859"
  },
  {
    "url": "assets/js/71.283cdc57.js",
    "revision": "70157927b48c2734dd1166ff4e79a628"
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
    "url": "assets/js/74.32a44d28.js",
    "revision": "1f15c285b8d712db1052197a8b4aa97a"
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
    "url": "assets/js/80.b8010623.js",
    "revision": "574f51683e3bfd002b018f78ddb8c1a5"
  },
  {
    "url": "assets/js/81.ab0b7b2c.js",
    "revision": "69ac2d4813a4ca76656d3191ef1599d8"
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
    "url": "assets/js/9.fac7c971.js",
    "revision": "2e89de7039bc9ff5acdad60fad3a5d8e"
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
    "url": "assets/js/95.0ec52420.js",
    "revision": "ce440ee6ed20de87fe16628b5d2b7f6d"
  },
  {
    "url": "assets/js/96.a427a6c3.js",
    "revision": "c06de0625f2481b4173247ca3a31f5ab"
  },
  {
    "url": "assets/js/97.d4c5de8a.js",
    "revision": "7655f5f14ba02905eb0ee9ea3a2f8593"
  },
  {
    "url": "assets/js/app.ee98ab8d.js",
    "revision": "7af0071a0b4e87dd09efee1b6cb84f65"
  },
  {
    "url": "demos/Chinook/entityDemo.html",
    "revision": "046ff65a98493249a77550d1e9dbc5b1"
  },
  {
    "url": "demos/Chinook/index.html",
    "revision": "8532fd9326229ce709b609c31754bf23"
  },
  {
    "url": "demos/eRestaurant/about/index.html",
    "revision": "881ff481e2799a75924db57dfae84446"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminController.html",
    "revision": "39ad06f8742611726495b8d0e7855b8a"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminSpecialEvents.html",
    "revision": "b6992491ce68deb75c143af1d846500d"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/bootstrapStyle.html",
    "revision": "886129bda344823fb6b3eea8554aac12"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/menu.html",
    "revision": "2ce76c652b5169116db1564db70ef63f"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/occupiedTables.html",
    "revision": "4eda27943f5ee9510edb3aa6a7ff6696"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/queryString.html",
    "revision": "cb1e410e2cd42387ae8531d96633d688"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/reservations.html",
    "revision": "004b4ae7bfd1a2583bafd41ce7e80f39"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/fakeDateTime.html",
    "revision": "c87b5dca6065ddf03e0e551fda67eb76"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/messageUserControl.html",
    "revision": "302c849c046fd4561716ec0c6231192c"
  },
  {
    "url": "demos/eRestaurant/businessRules/businessRuleException.html",
    "revision": "8b9d29b57a2adb4e94cc6aa2eeaea217"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingReservations.html",
    "revision": "4e0b820609f56b66a136781e46622c1d"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingWalkIns.html",
    "revision": "e602aa4545a524a66896914eaa384d0e"
  },
  {
    "url": "demos/eRestaurant/dvcs/demo.html",
    "revision": "d312486050c46b2072bd429777a765be"
  },
  {
    "url": "demos/eRestaurant/entityFramework/demo/demo.html",
    "revision": "4c235c57bc239a6e21d3b63c70e2b4b5"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice-solution.html",
    "revision": "a7254b4befd1fd76546652d5970c917f"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice.html",
    "revision": "6bc0bd8952ec3d9a4381bddcb31f6a6f"
  },
  {
    "url": "demos/eRestaurant/index.html",
    "revision": "ee4726dcc883001b6f7ad55ffe015733"
  },
  {
    "url": "demos/eRestaurant/linq/extensions.html",
    "revision": "d001c3f373ae2f31df458b57b0ec46e4"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/occupiedTables.html",
    "revision": "fd113acde94a31fa9cd573ad05f74e46"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/reservations.html",
    "revision": "69b1deeec9cec05f7071110630f360a4"
  },
  {
    "url": "demos/eRestaurant/linq/index.html",
    "revision": "fa2666dbde23f67a1293548f82674c80"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/expressions.html",
    "revision": "8daef920add1833154a831d29e9140d6"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/program.html",
    "revision": "a18be0e9087c81fab983870595d4a84e"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/statements.html",
    "revision": "d48de57cb2405039f7e1e36a13969c09"
  },
  {
    "url": "demos/eRestaurant/linq/practice.html",
    "revision": "55621bcc7b61dd455e5a81d2392540a5"
  },
  {
    "url": "demos/eRestaurant/reports/customizing/index.html",
    "revision": "8c035ff40c1ff6e287e253d0d78b1b76"
  },
  {
    "url": "demos/eRestaurant/reports/reportViewer/index.html",
    "revision": "856954b18ccfe40cef1f791c8cde5ef6"
  },
  {
    "url": "demos/eRestaurant/security/demo.html",
    "revision": "6c292b31ca4be2ebcb59aacdfe67c503"
  },
  {
    "url": "demos/eRestaurant/sitemaps/demo2.html",
    "revision": "338e1dcd563f5c56e2a25f36f69ec165"
  },
  {
    "url": "demos/eRestaurant/testing/manual.html",
    "revision": "2a7e3addf184ccca950b5add0edcd9fd"
  },
  {
    "url": "demos/eRestaurant/ux/frontDesk/index.html",
    "revision": "0ee4f8d54d08513b950b3843ebe24721"
  },
  {
    "url": "demos/index.html",
    "revision": "9825c5c53472595da19446d32fea66b8"
  },
  {
    "url": "demos/Northwind/CustomerOrders/Design.html",
    "revision": "9d4bff82fe3b6e53a77e0634aba28466"
  },
  {
    "url": "demos/Northwind/CustomerOrders/index.html",
    "revision": "b3eeb309a1d7bfe6e86d8b3e4602aad7"
  },
  {
    "url": "demos/Northwind/index.html",
    "revision": "0687d21378993d7a70143ff164878f19"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/expressions.html",
    "revision": "a9db7028fc715ca8028743245e556256"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/program.html",
    "revision": "05bdbf38875519b6df6d47bfb0b71097"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/statements.html",
    "revision": "96218fbf516849a8ab749de6bd1bd7a3"
  },
  {
    "url": "demos/Northwind/Security/index.html",
    "revision": "111e8da7c3305989c06002fd04efbf94"
  },
  {
    "url": "exercises/dvcs.html",
    "revision": "37e113f9cadc25b33858924dd456cac4"
  },
  {
    "url": "exercises/ef.html",
    "revision": "22f60466214315e5e2f529d39c5cc8b5"
  },
  {
    "url": "exercises/index.html",
    "revision": "92218115f9a55210f83a82b147f9dbb6"
  },
  {
    "url": "exercises/linq.html",
    "revision": "2440f87b11d50d6f4a52bd107acfe864"
  },
  {
    "url": "exercises/oltp.html",
    "revision": "28378a1c93130d21c71d78d5bfafe485"
  },
  {
    "url": "exercises/planning.html",
    "revision": "f914767fe3d9226af9c88452c59ce4c3"
  },
  {
    "url": "exercises/reporting.html",
    "revision": "844a6909ebe35b2d288f2e4bde78fd63"
  },
  {
    "url": "exercises/reports/install_ssdt.html",
    "revision": "65ff9b231616c1fc5bea0cda11c5081c"
  },
  {
    "url": "exercises/WorkSchedule/EntityFramework/index.html",
    "revision": "00e0551d6bef5d852a83bef643eeaf35"
  },
  {
    "url": "exercises/WorkSchedule/ImplementationPlan/index.html",
    "revision": "886c166bb19db4a028c1b4e01a21b3bc"
  },
  {
    "url": "exercises/WorkSchedule/Integrated/index.html",
    "revision": "1e73e7963bbd8911afcaf8eb52ffcf1e"
  },
  {
    "url": "exercises/WorkSchedule/Linq/index.html",
    "revision": "556f4effa9c3a5be2b8e93ca5b023403"
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
    "revision": "0e31e2de5d04a63d48f1aab340757f3d"
  },
  {
    "url": "logs/index.html",
    "revision": "1121d02fdacfdc85d9a7c5558a833d60"
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
    "revision": "a57c6ffcb4a1003656f92a963d0ab1dd"
  },
  {
    "url": "topics/aspNet/assortedWebForms.html",
    "revision": "2d5706a9021d2cb21bd07ccd385fbd02"
  },
  {
    "url": "topics/aspNet/databound/detailsviewOverview.html",
    "revision": "bff43b5b767de02f078e754d0c7b2a61"
  },
  {
    "url": "topics/aspNet/databound/gridviewCustomization.html",
    "revision": "2256fa8bea90b294d8958d3a572fb6a6"
  },
  {
    "url": "topics/aspNet/databound/gridviewOverview.html",
    "revision": "812863e9e059a3e38e39f33b322f61a6"
  },
  {
    "url": "topics/aspNet/databound/index.html",
    "revision": "6e7aadb8c6e834870e7f57ec7cc86f35"
  },
  {
    "url": "topics/aspNet/databound/listviewOverview.html",
    "revision": "5731a20b7b242534829f049ca7ce93bd"
  },
  {
    "url": "topics/aspNet/databound/repeaterOverview.html",
    "revision": "35d84841d6f4e0ea801249f2eb70e335"
  },
  {
    "url": "topics/aspNet/errorHandling.html",
    "revision": "96bfbc740cf16ac1546ad0f297b7184a"
  },
  {
    "url": "topics/aspNet/userControls.html",
    "revision": "c1a68a154e1e07071c2c18f918c6516b"
  },
  {
    "url": "topics/cqrs/index.html",
    "revision": "99a8512d86fbf470acd12562fc3a60e8"
  },
  {
    "url": "topics/dvcs/conflicts/index.html",
    "revision": "2822d1a9c0cd5fb3d6e497c58068b2ea"
  },
  {
    "url": "topics/dvcs/gh4w.html",
    "revision": "4a3ae83a7a98919d8a393b1d75d8bee6"
  },
  {
    "url": "topics/dvcs/index.html",
    "revision": "25ff7f4bbd87b4cd0d335609fcc822fd"
  },
  {
    "url": "topics/entityFramework/index.html",
    "revision": "91bcc41f90887a625f57feccf3c3d885"
  },
  {
    "url": "topics/index.html",
    "revision": "b682e035d926f0400d278669fa6529e5"
  },
  {
    "url": "topics/linq/index.html",
    "revision": "65f578e36613deeb852a23a9128ef890"
  },
  {
    "url": "topics/linq/lambda.html",
    "revision": "df56b49c530ddbfb157b8990215556ad"
  },
  {
    "url": "topics/reports/ssdt.html",
    "revision": "11cbf44f1be5f3e62099378ad4c261ab"
  },
  {
    "url": "topics/security/aspNetIdentity.html",
    "revision": "7c97f9150a921f18b76b6c126f46961e"
  },
  {
    "url": "topics/security/IdentityConfig.html",
    "revision": "b540f36ee7657a5711d85f98a8d7086c"
  },
  {
    "url": "topics/security/IdentityModels.html",
    "revision": "b209725f0b2658571e1447e1e4efe466"
  },
  {
    "url": "topics/security/index.html",
    "revision": "b50cd6261b530ebe9b6e45362beac48b"
  },
  {
    "url": "topics/security/vs2017wap.html",
    "revision": "e72629ed8151ec2421b96fbb917b304e"
  },
  {
    "url": "topics/sitemaps/index.html",
    "revision": "b0f8bed1d973b73a16188d2232608c6b"
  },
  {
    "url": "topics/ux/index.html",
    "revision": "8792685b795171156a009fd4abf65f1f"
  },
  {
    "url": "topics/ux/workflows/index.html",
    "revision": "15224f4aea7c610772d61723e6d2f316"
  },
  {
    "url": "topics/ux/workflows/lesson-plan.html",
    "revision": "a40c88065188b1269e73efc003162c3b"
  },
  {
    "url": "topics/ux/workflows/moreUX.html",
    "revision": "deeda5c9a33bf61905614d315bbfcb0f"
  },
  {
    "url": "topics/xml/index.html",
    "revision": "37cde5d664506a3460c7092d06268eb0"
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
