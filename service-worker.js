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
    "revision": "71bafeba48ab46a5c29aa878bb42d850"
  },
  {
    "url": "about/bootstrapInVS2013.html",
    "revision": "34894c7d42d41ed6ae090431702bad12"
  },
  {
    "url": "about/index.html",
    "revision": "260f8f2b606f6b09e7f3225be453b26e"
  },
  {
    "url": "about/LOGs.html",
    "revision": "23136364f4d7792874a00df5bc5e0cf5"
  },
  {
    "url": "about/resources.html",
    "revision": "95020a11e5971479eb6cc18a2bc70fe4"
  },
  {
    "url": "about/slides-installing-sql-server.html",
    "revision": "980c74a1282630315753f6e5a0ed9206"
  },
  {
    "url": "about/troubleshoot.html",
    "revision": "11d4fd52ca32c0f4a6d16ad50b0cc18b"
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
    "url": "assets/js/16.d22cd21c.js",
    "revision": "10833e3255ff206ebe17b5b1cb9b401e"
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
    "url": "assets/js/37.cb9b5283.js",
    "revision": "30947e304f8da4178b9ae163ad5a2907"
  },
  {
    "url": "assets/js/38.def95715.js",
    "revision": "960cef98e2830cf59bef550632bc0293"
  },
  {
    "url": "assets/js/39.1eaf93f0.js",
    "revision": "bbd9b6f971605214e4002fcdd94d7c2b"
  },
  {
    "url": "assets/js/4.cb1f899d.js",
    "revision": "bb253e0945fb08feda2fcbcbe6d26e9f"
  },
  {
    "url": "assets/js/40.d773c981.js",
    "revision": "43b6258d2362b0996b5c521704c85bbc"
  },
  {
    "url": "assets/js/41.bf2f0280.js",
    "revision": "85795ec123f2731621919ec04bff2ddc"
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
    "url": "assets/js/5.dcdb0e7e.js",
    "revision": "e4af28a76f3849768b2a80604a66ea18"
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
    "url": "assets/js/6.a5abac4f.js",
    "revision": "0ad6dda5dd574e6a8d6991c0764e4beb"
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
    "url": "assets/js/63.ad338986.js",
    "revision": "51565dfcc45fc7bce77fd823bb397751"
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
    "url": "assets/js/79.b4316c2b.js",
    "revision": "8622648069715c812f7f1ed1b8eddba6"
  },
  {
    "url": "assets/js/8.7dac20bd.js",
    "revision": "bb42577edc5751c038f5d93b1a47ac6f"
  },
  {
    "url": "assets/js/80.612de71d.js",
    "revision": "e77499463dbc486220725ea2849bd4c7"
  },
  {
    "url": "assets/js/81.081d0eb2.js",
    "revision": "2a52a970b10ddcfd5f6fe1ee4d11e08d"
  },
  {
    "url": "assets/js/82.bf2f1979.js",
    "revision": "392cad01bfff2543cfd072d45c2a7f67"
  },
  {
    "url": "assets/js/83.5d97881c.js",
    "revision": "a06ecfd18f1981e28db5e0a02f49ca43"
  },
  {
    "url": "assets/js/84.3997ee55.js",
    "revision": "258d1ad0f67d065f151ade609a71da4b"
  },
  {
    "url": "assets/js/85.cc3ad64e.js",
    "revision": "d7f436d01b5150e5bc206090a535932c"
  },
  {
    "url": "assets/js/86.ad482596.js",
    "revision": "38a831e917dc1543cf21d899313bcaf2"
  },
  {
    "url": "assets/js/87.4cfef610.js",
    "revision": "4183d7a7c0f742b44c696107f06969f6"
  },
  {
    "url": "assets/js/88.ba76521e.js",
    "revision": "54ee6d0b9fd6451fe3733cc9327f14b1"
  },
  {
    "url": "assets/js/89.499d353e.js",
    "revision": "531447691702b8427c653c5e3ae1864c"
  },
  {
    "url": "assets/js/9.d58cca13.js",
    "revision": "0d1499e9b952e0d86784f447c4b3721d"
  },
  {
    "url": "assets/js/90.e4f4c0ae.js",
    "revision": "26ada70d4a1bc2dcecdda6436dcf76f0"
  },
  {
    "url": "assets/js/91.a3589e17.js",
    "revision": "f03db112327c4d766a236d71adaddcc5"
  },
  {
    "url": "assets/js/app.631ae700.js",
    "revision": "2e6c147ef2bf9e115c8a5cc941ef2256"
  },
  {
    "url": "demos/Chinook/entityDemo.html",
    "revision": "f5f5e20ea7a2282ccc98d734ebd4de5b"
  },
  {
    "url": "demos/Chinook/index.html",
    "revision": "5027267fb7d495651d58eb82302df9c7"
  },
  {
    "url": "demos/eRestaurant/about/index.html",
    "revision": "287e0fc7026aea2718a8bcf3d40d2ecd"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminController.html",
    "revision": "935e73e01daa60c22e75c005d9d42c26"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/adminSpecialEvents.html",
    "revision": "b0b5cc42c43871baf2bd414223535a17"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/bootstrapStyle.html",
    "revision": "2091405c98d289896024e9c4f7feb93f"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/menu.html",
    "revision": "3a1a24a9d2b31afff9ad442bf556f4ba"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/occupiedTables.html",
    "revision": "9d92e4eb372e2e8c11074327a02ac44b"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/queryString.html",
    "revision": "acb52a21c1598d4a50e6da8c32b6a7cb"
  },
  {
    "url": "demos/eRestaurant/aspNet/frontDesk/reservations.html",
    "revision": "40847b1feccd602d0a38f7db51ae68cd"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/fakeDateTime.html",
    "revision": "5ecc0cbd02b64a78e04382b6e93b0d94"
  },
  {
    "url": "demos/eRestaurant/aspNet/userControls/messageUserControl.html",
    "revision": "ff1a893faa43eb04919f23780279395b"
  },
  {
    "url": "demos/eRestaurant/businessRules/businessRuleException.html",
    "revision": "d3d76d02b046e80d3823c5d888f00568"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingReservations.html",
    "revision": "271213a91c30a6bf1582ee133be384ca"
  },
  {
    "url": "demos/eRestaurant/businessRules/frontDesk/seatingWalkIns.html",
    "revision": "146fce9e4ffce3812f0d68a7cb1474bd"
  },
  {
    "url": "demos/eRestaurant/dvcs/demo.html",
    "revision": "5a2b89c46b2566ab86125a689e1fbfdf"
  },
  {
    "url": "demos/eRestaurant/entityFramework/demo/demo.html",
    "revision": "f1a5530a4c31f2a0298c89b3311b474a"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice-solution.html",
    "revision": "b8af9dd96da6c72a8738d6c5f2f72891"
  },
  {
    "url": "demos/eRestaurant/entityFramework/practice/practice.html",
    "revision": "ad15be784b3acc6105e6e91c299b2aec"
  },
  {
    "url": "demos/eRestaurant/index.html",
    "revision": "899c4bcd541454298293353fc3e7f45d"
  },
  {
    "url": "demos/eRestaurant/linq/extensions.html",
    "revision": "fe1a7e1b1e256c4317cde10321673c07"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/occupiedTables.html",
    "revision": "679f5c754a0e28262d29f81274f8b0b5"
  },
  {
    "url": "demos/eRestaurant/linq/frontDesk/reservations.html",
    "revision": "2240a5bcc554b0ca5ca68721d6310fde"
  },
  {
    "url": "demos/eRestaurant/linq/index.html",
    "revision": "90fed2282ff707a5264b992a7d0aa340"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/expressions.html",
    "revision": "9ebd37b50e615b248112d062dabd9277"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/program.html",
    "revision": "5e6f22a5df3183d94efe74f300f7bdf6"
  },
  {
    "url": "demos/eRestaurant/linq/LinqPad/statements.html",
    "revision": "079b39ed42ea51094d77bbb7f43815e5"
  },
  {
    "url": "demos/eRestaurant/linq/practice.html",
    "revision": "cd520a0e38c8616635dbca0c256ac09e"
  },
  {
    "url": "demos/eRestaurant/reports/customizing/index.html",
    "revision": "40f7e6180a50a48d7d0262c34c35a81d"
  },
  {
    "url": "demos/eRestaurant/reports/reportViewer/index.html",
    "revision": "9f18b7ad7bbbffe86c0d4d7c9a74f03c"
  },
  {
    "url": "demos/eRestaurant/security/demo.html",
    "revision": "1320a986a8e13596c49ccaa689eadf16"
  },
  {
    "url": "demos/eRestaurant/sitemaps/demo2.html",
    "revision": "7bd88175cf364b5ea8c4c059a8abb174"
  },
  {
    "url": "demos/eRestaurant/testing/manual.html",
    "revision": "ff7f11ac0c53cdbace2d0caecebd7f4f"
  },
  {
    "url": "demos/eRestaurant/ux/frontDesk/index.html",
    "revision": "3b0d1026f03cb68f0ea3f9bf56e74085"
  },
  {
    "url": "demos/index.html",
    "revision": "422b49f2782194baa0aad7ac9a820a40"
  },
  {
    "url": "demos/Northwind/CustomerOrders/Design.html",
    "revision": "46b3a9ee266f2fed427399875c07e167"
  },
  {
    "url": "demos/Northwind/CustomerOrders/index.html",
    "revision": "11ac0639267a226cac264d4558fe9e80"
  },
  {
    "url": "demos/Northwind/index.html",
    "revision": "1b6ef57017df496c9ac5704760ffed5d"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/expressions.html",
    "revision": "0d6ff20910e7c2ec6e86102546d871e7"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/program.html",
    "revision": "4d5b68fa18646908ba0d26e0383ad0d8"
  },
  {
    "url": "demos/Northwind/linq/LinqPad/statements.html",
    "revision": "69fc4b1e00fd5947c16a2052c051432e"
  },
  {
    "url": "demos/Northwind/Security/index.html",
    "revision": "5e247aa04d64d2af53119c5840f3b4ce"
  },
  {
    "url": "exercises/dvcs.html",
    "revision": "7ccd4b46a44e397ae95760e4a1285509"
  },
  {
    "url": "exercises/ef.html",
    "revision": "1e7bb957ea2bce43b8284e2f9902865c"
  },
  {
    "url": "exercises/index.html",
    "revision": "4ea54d772974aa1222a507ebc308b29f"
  },
  {
    "url": "exercises/linq.html",
    "revision": "60d5eef09944a29d48213b611188489c"
  },
  {
    "url": "exercises/oltp.html",
    "revision": "1c6d97729cb1192c19f7eca9bd3aa9c7"
  },
  {
    "url": "exercises/reporting.html",
    "revision": "5688fab8e2e056c8d442e07d8ddda22a"
  },
  {
    "url": "exercises/reports/install_ssdt.html",
    "revision": "d6d2a5df7e68a42525d05bc535068382"
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
    "revision": "37a1c06e83b885d89cf481b33c1ec0fc"
  },
  {
    "url": "logs/index.html",
    "revision": "8f805468fd53ae8a5a4815b358ba44ad"
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
    "revision": "b00f83cb33ab37ab6b0db70ccf7797b1"
  },
  {
    "url": "topics/aspNet/assortedWebForms.html",
    "revision": "128277cb7a39dd913686a08fcc5ce9b4"
  },
  {
    "url": "topics/aspNet/databound/detailsviewOverview.html",
    "revision": "f31fccb3521f1cded61b56cfd00a378b"
  },
  {
    "url": "topics/aspNet/databound/gridviewCustomization.html",
    "revision": "1530e7679f9110cc8ea470a0436865bb"
  },
  {
    "url": "topics/aspNet/databound/gridviewOverview.html",
    "revision": "a52f463322fb8d43fc716d5dfcd05af2"
  },
  {
    "url": "topics/aspNet/databound/index.html",
    "revision": "fa3ab1c0140b4684539aa54a48ccfd42"
  },
  {
    "url": "topics/aspNet/databound/listviewOverview.html",
    "revision": "46c36eeed5fd22d693962256bbd15cef"
  },
  {
    "url": "topics/aspNet/databound/repeaterOverview.html",
    "revision": "69a7d34d850a2be7ba63d55464ba9da4"
  },
  {
    "url": "topics/aspNet/errorHandling.html",
    "revision": "7f51781ff0de74f768831d1731643df0"
  },
  {
    "url": "topics/aspNet/userControls.html",
    "revision": "6b78ec4231f8ad093646536e3179d36f"
  },
  {
    "url": "topics/cqrs/index.html",
    "revision": "70cd06b9a47b2f71d1ab11ed05de4ede"
  },
  {
    "url": "topics/dvcs/conflicts/index.html",
    "revision": "d676476e4ca6ec64c48e7210ba195edd"
  },
  {
    "url": "topics/dvcs/gh4w.html",
    "revision": "9caffff17ecee6fd6e36ad1a6fd48246"
  },
  {
    "url": "topics/dvcs/index.html",
    "revision": "6ffcc379bd45c3d49a7bae78da62f3d1"
  },
  {
    "url": "topics/entityFramework/index.html",
    "revision": "37a411cb3a894fefa3949b9f32b89dc5"
  },
  {
    "url": "topics/index.html",
    "revision": "652df1d25dc15ca10d2379feabd049bb"
  },
  {
    "url": "topics/linq/index.html",
    "revision": "f85387eb3d3a71f2ee43f22d6ad0cd94"
  },
  {
    "url": "topics/linq/lambda.html",
    "revision": "a42ea959a75d3f0d5dcece010e9f7047"
  },
  {
    "url": "topics/reports/ssdt.html",
    "revision": "5191889164cd4e2ceb5d987d8c7523cc"
  },
  {
    "url": "topics/security/aspNetIdentity.html",
    "revision": "e854d0c1d6d596c0c33ed9d86b8a1f8b"
  },
  {
    "url": "topics/security/IdentityConfig.html",
    "revision": "d1db6df2cc9e394487fe1081bd005c18"
  },
  {
    "url": "topics/security/IdentityModels.html",
    "revision": "3208fad7ddbb10952eca02e962b5e695"
  },
  {
    "url": "topics/security/index.html",
    "revision": "051c2159520ee698aef73521b9222621"
  },
  {
    "url": "topics/security/vs2017wap.html",
    "revision": "c3fff5bd5aa11a898bdeab0886ca1bfb"
  },
  {
    "url": "topics/sitemaps/index.html",
    "revision": "26294884eca0b0dfed11e100d09936e3"
  },
  {
    "url": "topics/ux/index.html",
    "revision": "d730904459f4926e2da9d89ffff7a6f4"
  },
  {
    "url": "topics/ux/workflows/index.html",
    "revision": "6b71ef4c7a160d2c98a3dac209f1108b"
  },
  {
    "url": "topics/ux/workflows/lesson-plan.html",
    "revision": "97e767ae91ff634bb06df4a9f06abe41"
  },
  {
    "url": "topics/ux/workflows/moreUX.html",
    "revision": "ec4be8653c5ba0c39c641c215426bf55"
  },
  {
    "url": "topics/xml/index.html",
    "revision": "6e6f4bc20024d886bbb6decee2983ed1"
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
