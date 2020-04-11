# Documentacion Blockchain Game
- Game
- Voting
- Blocks

# Game
El controlador GAME contiene los siguientes endpoints: <br />  - POST /game/join_game. Es el endpoint donde a partir de un codigo de juego y nombre de minero  se ingresa a un juego. <br />  - GET /game . Es el endpoint donde se cargan todas las transacciones en un juego particular y se comienza el desafio. <br />  - POST /game/news_update. Es el endpint donde se consulta si hay un bloque a validar, y se obtienen sus valores de haberlo.

## GET /game?id=4&miner=436d2618-578e-4831-b152-62cc6e5322dc

### Request headers:
```json
{
  "AUTHORIZATION": "user_token",
  "Content-Type": "application/json",
  "Accept": "application/json"
}
```

### Path parameters:
```json
{
}
```

### Body Parameters:
```json
{
  "id": "4",
  "miner": "436d2618-578e-4831-b152-62cc6e5322dc"
}
```

### Response status:
200

### Response body:
```json
"{\"miner\":{\"name\":\"some_name\",\"game_id\":4,\"uuid\":\"436d2618-578e-4831-b152-62cc6e5322dc\",\"score\":0.0,\"open_voting\":false},\"blockchain\":{\"id\":4,\"lvl\":1,\"last_block_id\":4},\"current_puzzle\":[[\"antiquewhite\",\"green\"],[\"blue\",\"pink\"],[\"blue\",\"blue\"],[\"red\",\"pink\"]],\"last_block\":{\"blockchain_id\":4,\"signature\":[[\"antiquewhite\",\"green\"],[\"blue\",\"pink\"],[\"blue\",\"blue\"],[\"red\",\"pink\"]],\"block_id\":null,\"previous_block_id\":null,\"puzzle\":{}},\"transactions\":[{\"uuid\":\"918e72ba-e3a0-42be-8b9f-ea180fd44053\",\"amount\":8.56160319036853,\"fee\":0.0422982269880456,\"from\":\"Parvati Patil\",\"to\":\"Demelza Robins\",\"puzzle_number\":78,\"certified\":false,\"color\":\"yellow\"},{\"uuid\":\"90103c51-5a69-42e5-a540-c45f11e0d0ff\",\"amount\":7.61810122556002,\"fee\":0.778075541115572,\"from\":\"Grìma Wormtongue\",\"to\":\"The Bloody Baron\",\"puzzle_number\":54,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"57912347-a828-4caa-93b9-5e6bb1705a15\",\"amount\":7.04083880568016,\"fee\":0.869664398822351,\"from\":\"Rabastan Lestrange\",\"to\":\"Rolf Scamander\",\"puzzle_number\":11,\"certified\":true,\"color\":\"black\"},{\"uuid\":\"a2f4a002-395b-4ca9-ae0d-4d6fa24ac30c\",\"amount\":9.54784193972574,\"fee\":0.295454750852479,\"from\":\"Neville Longbottom\",\"to\":\"Filius Flitwick\",\"puzzle_number\":77,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"e95bb8ce-0166-45ac-a9d5-91ae63d2490e\",\"amount\":0.790660105754083,\"fee\":0.886154856377617,\"from\":\"Legolas\",\"to\":\"Arabella Figg\",\"puzzle_number\":35,\"certified\":true,\"color\":\"blue\"},{\"uuid\":\"f1d64342-63c8-47e5-a760-b6ef2dd5b90a\",\"amount\":2.14512810859685,\"fee\":0.693489447369952,\"from\":\"Cho Chang\",\"to\":\"Amos Diggory\",\"puzzle_number\":24,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"d8c4629f-3453-46d8-9efb-1ea0763ee2c2\",\"amount\":4.68038193545838,\"fee\":0.775392072379423,\"from\":\"Treebeard\",\"to\":\"Marge Dursley\",\"puzzle_number\":30,\"certified\":true,\"color\":\"gray\"},{\"uuid\":\"e8fa92d0-ffb7-415f-93db-d2630afd1638\",\"amount\":5.73617537404888,\"fee\":0.505203773500962,\"from\":\"Gilderoy Lockhart\",\"to\":\"Nicholas Flamel\",\"puzzle_number\":24,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"2d0edd5b-e864-4a3c-a425-166d21b228bf\",\"amount\":1.61501021836994,\"fee\":0.238784514967423,\"from\":\"Arwen Evenstar\",\"to\":\"Great Aunt Muriel\",\"puzzle_number\":89,\"certified\":true,\"color\":\"black\"},{\"uuid\":\"e90d6e2c-6de1-414a-b29d-446448a10026\",\"amount\":3.32653378669958,\"fee\":0.874175761706157,\"from\":\"Shadowfax\",\"to\":\"Shelob\",\"puzzle_number\":90,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"1869532c-cf27-49c4-8b96-f2374248c41b\",\"amount\":7.35779487728369,\"fee\":0.676421708364493,\"from\":\"Mrs. Norris\",\"to\":\"Treebeard\",\"puzzle_number\":90,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"f258b989-b1f3-47b2-9f9c-08089dffb0d7\",\"amount\":7.31275826872742,\"fee\":0.305127167355074,\"from\":\"Mundungus Fletcher\",\"to\":\"John Dawlish\",\"puzzle_number\":0,\"certified\":true,\"color\":\"green\"},{\"uuid\":\"c24987c0-b5f2-41e2-88e0-bb4c6e9fb6cd\",\"amount\":2.1165000587174,\"fee\":0.560469900876324,\"from\":\"Antioch Peverell\",\"to\":\"Percy Weasley\",\"puzzle_number\":88,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"b1a12922-69a3-487a-870a-58001d2ed5ee\",\"amount\":5.36066140056103,\"fee\":0.433041262136568,\"from\":\"Cuthbert Binns\",\"to\":\"Ludo Bagman\",\"puzzle_number\":77,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"a836e6df-52e7-4960-a959-9a5557c50bd7\",\"amount\":0.692367541831037,\"fee\":0.188236391950641,\"from\":\"Arwen Evenstar\",\"to\":\"Bogrod\",\"puzzle_number\":47,\"certified\":true,\"color\":\"green\"},{\"uuid\":\"e32647c4-8f38-42bf-b32c-cf0001cdbd1e\",\"amount\":6.43481124459028,\"fee\":0.227119449238767,\"from\":\"Peeves\",\"to\":\"Enid\",\"puzzle_number\":44,\"certified\":true,\"color\":\"black\"},{\"uuid\":\"2603bd8b-4b01-4242-b203-59591c3c57de\",\"amount\":6.12388063231705,\"fee\":0.390469716947582,\"from\":\"Sauron\",\"to\":\"Winky\",\"puzzle_number\":56,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"864ec441-01d6-47ab-9750-a15486f30399\",\"amount\":5.72343414558846,\"fee\":0.59697542523687,\"from\":\"Sauron\",\"to\":\"Treebeard\",\"puzzle_number\":41,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"cf4d2aa2-661d-46f9-9ffd-b08b910da27d\",\"amount\":5.24531617678905,\"fee\":0.790659421608664,\"from\":\"Albert Runcorn\",\"to\":\"Gandalf the Grey\",\"puzzle_number\":77,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"72bc432e-5616-4a34-89b1-8e20c9d04ba4\",\"amount\":0.444712643388381,\"fee\":0.568111019003591,\"from\":\"Peter Pettigrew\",\"to\":\"Gregory Goyle\",\"puzzle_number\":53,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"a759f793-579e-4d6f-bb8e-5608c6abacdf\",\"amount\":5.78286157822046,\"fee\":0.673560600046731,\"from\":\"Frodo Baggins\",\"to\":\"Dudley Dursley\",\"puzzle_number\":43,\"certified\":false,\"color\":\"yellow\"},{\"uuid\":\"9a95257d-89a7-42af-b7cf-5d3ec631cc5b\",\"amount\":0.589854339749596,\"fee\":0.149593771619489,\"from\":\"Peregrin Took\",\"to\":\"Frodo Baggins\",\"puzzle_number\":66,\"certified\":true,\"color\":\"blue\"},{\"uuid\":\"91c07273-7feb-4785-9178-a8a8bc162829\",\"amount\":5.63833992422587,\"fee\":0.672300873564285,\"from\":\"Bellatrix Lestrange\",\"to\":\"Poppy Pomfrey\",\"puzzle_number\":90,\"certified\":true,\"color\":\"gray\"},{\"uuid\":\"e8c9c7d8-f4a1-4ccb-8ae5-856976c37546\",\"amount\":4.9675409638427,\"fee\":0.609028525690141,\"from\":\"Hedwig\",\"to\":\"Gollum\",\"puzzle_number\":11,\"certified\":true,\"color\":\"pink\"},{\"uuid\":\"43998714-dab5-4455-a5be-e4731fbcf039\",\"amount\":2.17160794031311,\"fee\":0.0926793309563446,\"from\":\"Denethor\",\"to\":\"Shadowfax\",\"puzzle_number\":4,\"certified\":true,\"color\":\"gray\"},{\"uuid\":\"38d3f5d9-29f0-4433-a4f9-e7824953f78e\",\"amount\":0.153645420578855,\"fee\":0.143917701052549,\"from\":\"Elrond\",\"to\":\"Rolf Scamander\",\"puzzle_number\":10,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"2e695fce-43b4-4c40-9b07-d71b53e17476\",\"amount\":8.87619963151042,\"fee\":0.948644585347696,\"from\":\"Minerva McGonagall\",\"to\":\"Éowyn\",\"puzzle_number\":33,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"837f7453-0b67-4ad9-8cdb-7cfec2ae879a\",\"amount\":9.86483006369092,\"fee\":0.99504770536837,\"from\":\"Kingsley Shacklebolt\",\"to\":\"Nicholas Flamel\",\"puzzle_number\":4,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"2f3da26a-1e9d-4c65-a023-9955ab1032cc\",\"amount\":9.63488347459207,\"fee\":0.519013744950683,\"from\":\"Michael Corner\",\"to\":\"Susan Bones\",\"puzzle_number\":21,\"certified\":false,\"color\":\"black\"},{\"uuid\":\"043e3bdd-cc0a-4eac-a31a-54c2936ea0d7\",\"amount\":9.92277417716662,\"fee\":0.0769361662188915,\"from\":\"Hedwig\",\"to\":\"Everard\",\"puzzle_number\":85,\"certified\":true,\"color\":\"green\"},{\"uuid\":\"414f281a-fbf5-4fd9-ae28-0fce980fbbe0\",\"amount\":6.50910356847901,\"fee\":0.406287034805871,\"from\":\"Gimli\",\"to\":\"Glorfindel\",\"puzzle_number\":55,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"5e13032f-85f8-4df7-b986-331c161e6fc7\",\"amount\":8.48073376233249,\"fee\":0.458788225002975,\"from\":\"Boromir\",\"to\":\"Cassius Warrington\",\"puzzle_number\":0,\"certified\":false,\"color\":\"green\"},{\"uuid\":\"a75ba36d-b130-41db-b0c6-5ce514216dac\",\"amount\":4.36234931978233,\"fee\":0.214737154444276,\"from\":\"Lee Jordan\",\"to\":\"Saruman the White\",\"puzzle_number\":52,\"certified\":false,\"color\":\"green\"},{\"uuid\":\"ea8d3f7a-c63f-4eb5-977f-efce901b347e\",\"amount\":8.68267777836602,\"fee\":0.200934284866601,\"from\":\"Bogrod\",\"to\":\"Bilbo Baggins\",\"puzzle_number\":80,\"certified\":true,\"color\":\"green\"},{\"uuid\":\"8fba9b7f-3cf5-45e5-bc5a-a427ef86a655\",\"amount\":6.8549925408435,\"fee\":0.437443103234422,\"from\":\"Tom Bombadil\",\"to\":\"Frodo Baggins\",\"puzzle_number\":31,\"certified\":true,\"color\":\"pink\"},{\"uuid\":\"0609b734-e460-4d8b-9150-ebf0694c90ca\",\"amount\":3.34837793126901,\"fee\":0.456250919440007,\"from\":\"Boromir\",\"to\":\"Gollum\",\"puzzle_number\":71,\"certified\":true,\"color\":\"black\"},{\"uuid\":\"5cf7b940-e5cd-4bd6-8fc2-838872832a30\",\"amount\":6.92771382385859,\"fee\":0.740910056178383,\"from\":\"Marcus Belby\",\"to\":\"Albert Runcorn\",\"puzzle_number\":8,\"certified\":true,\"color\":\"gray\"},{\"uuid\":\"65031035-399c-4925-a0cf-cb9e7db412a3\",\"amount\":3.42313086650394,\"fee\":0.754414549957003,\"from\":\"Amelia Bones\",\"to\":\"Minerva McGonagall\",\"puzzle_number\":90,\"certified\":true,\"color\":\"green\"},{\"uuid\":\"a263025f-72a3-4fb1-a501-70896d5d4174\",\"amount\":3.23701312918408,\"fee\":0.476957747559457,\"from\":\"Aragorn\",\"to\":\"Cornelius Fudge\",\"puzzle_number\":44,\"certified\":true,\"color\":\"blue\"},{\"uuid\":\"20d60aca-3690-4abb-99a0-c9a00b71dfac\",\"amount\":5.05007267323652,\"fee\":0.963846147819576,\"from\":\"Sauron\",\"to\":\"Samwise Gamgee\",\"puzzle_number\":60,\"certified\":true,\"color\":\"black\"},{\"uuid\":\"b4b933a0-1b46-4914-a8d8-85b69a887bb0\",\"amount\":6.7098025788082,\"fee\":0.441322806095837,\"from\":\"Olympe Maxime\",\"to\":\"Samwise Gamgee\",\"puzzle_number\":73,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"18051cad-d072-41fd-8104-045c3f544b3d\",\"amount\":0.306987816465385,\"fee\":0.996009425455151,\"from\":\"Shelob\",\"to\":\"Tom Bombadil\",\"puzzle_number\":98,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"d7fd6549-1512-41bb-8a61-80ab73d531f3\",\"amount\":2.45582258398731,\"fee\":0.32962130822975,\"from\":\"Katie Bell\",\"to\":\"Marietta Edgecombe\",\"puzzle_number\":15,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"2e977d30-b0bb-43a5-a5ad-ec3a89b8382f\",\"amount\":6.0226279449755,\"fee\":0.454924150076261,\"from\":\"Lee Jordan\",\"to\":\"Marcus Belby\",\"puzzle_number\":51,\"certified\":false,\"color\":\"blue\"},{\"uuid\":\"039ab0c3-3507-4c4a-92e3-4fd62d94aaa7\",\"amount\":6.25393559566768,\"fee\":0.877619720269086,\"from\":\"Peregrin Took\",\"to\":\"Magorian\",\"puzzle_number\":81,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"e04ebe3a-19bf-43ec-b7db-d499bd1f9325\",\"amount\":7.75858950299245,\"fee\":0.639705942220017,\"from\":\"Sauron\",\"to\":\"Éowyn\",\"puzzle_number\":54,\"certified\":true,\"color\":\"blue\"},{\"uuid\":\"716fa500-fb82-4faf-8251-1e5490546e00\",\"amount\":4.26929083633122,\"fee\":0.691675355075762,\"from\":\"Gregory Goyle\",\"to\":\"Galadriel\",\"puzzle_number\":13,\"certified\":false,\"color\":\"pink\"},{\"uuid\":\"b7cf56c5-6ab1-4fb0-974a-87b5d8b6c646\",\"amount\":2.03563410124006,\"fee\":0.841775426095327,\"from\":\"Gabrielle Delacour\",\"to\":\"Barliman Butterbur\",\"puzzle_number\":90,\"certified\":true,\"color\":\"blue\"},{\"uuid\":\"c8c160c6-6f94-4505-a4a9-62958df4fa2d\",\"amount\":5.35869440745861,\"fee\":0.629031299223696,\"from\":\"Galadriel\",\"to\":\"Meriadoc Brandybuck\",\"puzzle_number\":87,\"certified\":true,\"color\":\"blue\"},{\"uuid\":\"f7407a8d-9cb3-4941-a416-63464544c470\",\"amount\":2.36663093046757,\"fee\":0.779762479461674,\"from\":\"Éomer\",\"to\":\"Scabbers\",\"puzzle_number\":58,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"32aa532d-8a0a-4736-bca7-7cb1783c3c26\",\"amount\":2.48123195969268,\"fee\":0.673106423170362,\"from\":\"Goyle Sr.\",\"to\":\"Septima Vector\",\"puzzle_number\":33,\"certified\":true,\"color\":\"gray\"},{\"uuid\":\"6a4b1df7-718b-4ed9-b31f-1ffa2cb16855\",\"amount\":7.12454993726438,\"fee\":0.867463845197226,\"from\":\"Saruman the White\",\"to\":\"Bilbo Baggins\",\"puzzle_number\":66,\"certified\":true,\"color\":\"gray\"},{\"uuid\":\"cb612a34-7d9c-4dd8-9ce9-7defa564afdc\",\"amount\":5.01101860457766,\"fee\":0.434536314148981,\"from\":\"Mr. Borgin\",\"to\":\"Éomer\",\"puzzle_number\":5,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"3d72efdb-c578-49a3-bc0e-49fac7118b7f\",\"amount\":8.70039724792891,\"fee\":0.445998603669048,\"from\":\"Gandalf the Grey\",\"to\":\"Denethor\",\"puzzle_number\":22,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"4331d449-025c-425c-8eac-e8e4642c16f3\",\"amount\":3.12846809870972,\"fee\":0.917945943962992,\"from\":\"Ignotus Peverell\",\"to\":\"Shadowfax\",\"puzzle_number\":38,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"c0ea0b08-1956-418c-a00a-732852035743\",\"amount\":6.17326643750086,\"fee\":0.849243137901095,\"from\":\"Éowyn\",\"to\":\"Oliver Wood\",\"puzzle_number\":60,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"abafae0d-77e4-426c-8d4f-9eacf0535d0d\",\"amount\":7.75666378963247,\"fee\":0.134060412054617,\"from\":\"Harry Potter\",\"to\":\"Scabior\",\"puzzle_number\":20,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"79a281b4-1876-41ea-922e-3dbab434581f\",\"amount\":0.117484904429834,\"fee\":0.711668768000048,\"from\":\"Ernie Macmillan\",\"to\":\"Tom Bombadil\",\"puzzle_number\":66,\"certified\":true,\"color\":\"black\"},{\"uuid\":\"3e793c47-40fd-453f-9c38-2afd26bcb29c\",\"amount\":3.98277841479534,\"fee\":0.670970322384864,\"from\":\"Saruman the White\",\"to\":\"Faramir\",\"puzzle_number\":35,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"db334257-a80e-42ea-af0d-0bf18cd4d069\",\"amount\":8.59784513011952,\"fee\":0.149003097791421,\"from\":\"Gollum\",\"to\":\"Grìma Wormtongue\",\"puzzle_number\":72,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"81aca199-b5ee-4d7d-90bf-601192d0e106\",\"amount\":0.491109617645324,\"fee\":0.070934983662667,\"from\":\"The Bloody Baron\",\"to\":\"Oliver Wood\",\"puzzle_number\":89,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"a27c0cb3-0708-4ac4-92f0-11a0af64e8e7\",\"amount\":2.96148804080872,\"fee\":0.261844374201033,\"from\":\"Ron Weasley\",\"to\":\"Nicholas Flamel\",\"puzzle_number\":76,\"certified\":true,\"color\":\"green\"},{\"uuid\":\"1c2cba07-8db3-40d7-805d-6a366dee852d\",\"amount\":2.52017287871258,\"fee\":0.238774076862296,\"from\":\"Tom Bombadil\",\"to\":\"Samwise Gamgee\",\"puzzle_number\":82,\"certified\":false,\"color\":\"red\"},{\"uuid\":\"3c34265e-cf08-4d04-8a4e-9512bf2b97e5\",\"amount\":3.64529462929253,\"fee\":0.435874405940577,\"from\":\"Cormac McLaggen\",\"to\":\"Pomona Sprout\",\"puzzle_number\":76,\"certified\":true,\"color\":\"blue\"},{\"uuid\":\"5c0147d5-b58f-4eda-bcfc-463918e2523c\",\"amount\":3.23370786194333,\"fee\":0.386615696159228,\"from\":\"Aragorn\",\"to\":\"Angelina Johnson\",\"puzzle_number\":26,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"206be437-e160-43cb-ad8b-497711d52717\",\"amount\":6.0147354001415,\"fee\":0.677544362770072,\"from\":\"Lee Jordan\",\"to\":\"Arwen Evenstar\",\"puzzle_number\":75,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"0f4a9156-4941-47f4-b5c2-c179c0eefd5e\",\"amount\":6.40709538168245,\"fee\":0.100603185279275,\"from\":\"Grìma Wormtongue\",\"to\":\"Shadowfax\",\"puzzle_number\":9,\"certified\":false,\"color\":\"red\"},{\"uuid\":\"f64af2c1-8add-4135-989c-fb79e1e1292c\",\"amount\":9.97501815470993,\"fee\":0.878285411338892,\"from\":\"Horace Slughorn\",\"to\":\"Treebeard\",\"puzzle_number\":26,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"5dfbb079-2b58-4bfd-b110-3d1619909f60\",\"amount\":7.20080242366757,\"fee\":0.616948024493556,\"from\":\"Quickbeam\",\"to\":\"Treebeard\",\"puzzle_number\":30,\"certified\":false,\"color\":\"blue\"},{\"uuid\":\"49205742-03f0-4eda-aa41-bfef06219469\",\"amount\":6.50848254385073,\"fee\":0.489515248385117,\"from\":\"Dudley Dursley\",\"to\":\"Peregrin Took\",\"puzzle_number\":81,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"13bcd125-84b8-4f2d-9510-dc27a57373be\",\"amount\":2.80756844657076,\"fee\":0.282003930993081,\"from\":\"Galadriel\",\"to\":\"Éowyn\",\"puzzle_number\":58,\"certified\":false,\"color\":\"pink\"},{\"uuid\":\"d586ee04-97d2-4200-8adb-4d29453dfe6a\",\"amount\":2.77037468462253,\"fee\":0.389104962591805,\"from\":\"Yaxley\",\"to\":\"Barty Crouch, Jr.\",\"puzzle_number\":84,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"0662fae1-9403-47c4-9f8a-d3210d0acfea\",\"amount\":6.53537254522342,\"fee\":0.761538108185118,\"from\":\"Reginald Cattermole\",\"to\":\"Harry Potter\",\"puzzle_number\":30,\"certified\":false,\"color\":\"yellow\"},{\"uuid\":\"d2b1985a-73d5-4e46-929b-d3e090b0d6d1\",\"amount\":6.16562349524121,\"fee\":0.569211466983477,\"from\":\"Florean Fortescue\",\"to\":\"Luna Lovegood\",\"puzzle_number\":55,\"certified\":false,\"color\":\"antiquewhite\"},{\"uuid\":\"37c14348-bfdd-4382-a0bd-b451d81e6a3f\",\"amount\":9.6802155377178,\"fee\":0.432360343266262,\"from\":\"Bilbo Baggins\",\"to\":\"Aberforth Dumbledore\",\"puzzle_number\":34,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"54a025a0-930f-4efe-b1a2-e7745dcd8dc4\",\"amount\":7.00754418557289,\"fee\":0.130117967872396,\"from\":\"Aragorn\",\"to\":\"Aurora Sinistra\",\"puzzle_number\":41,\"certified\":true,\"color\":\"blue\"},{\"uuid\":\"78c40ab6-49c6-4c88-961e-c905ae9ca56e\",\"amount\":4.00551100195153,\"fee\":0.578238763361057,\"from\":\"Barliman Butterbur\",\"to\":\"Théoden\",\"puzzle_number\":83,\"certified\":false,\"color\":\"orange\"},{\"uuid\":\"bf8b047d-5550-4b3b-9450-03567675d711\",\"amount\":5.17562622688308,\"fee\":0.91474293270395,\"from\":\"Oliver Wood\",\"to\":\"Fenrir Greyback\",\"puzzle_number\":73,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"6c347a2e-2011-4754-aca8-374e84d62fec\",\"amount\":3.98628168992702,\"fee\":0.443061397694432,\"from\":\"Xenophilius Lovegood\",\"to\":\"Mr. Roberts\",\"puzzle_number\":39,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"244e09b2-f329-4a16-ad7f-f237c3ea40f6\",\"amount\":2.0236361682605,\"fee\":0.426683133940488,\"from\":\"Éowyn\",\"to\":\"Gimli\",\"puzzle_number\":4,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"7d0059c9-4956-4906-9b47-1d0c4bb20ec1\",\"amount\":5.17498845775184,\"fee\":0.633737575120823,\"from\":\"Charity Burbage\",\"to\":\"James Potter\",\"puzzle_number\":71,\"certified\":false,\"color\":\"pink\"},{\"uuid\":\"fcf58216-8946-41a7-a16d-f58fd6c9ec5a\",\"amount\":7.75215557867254,\"fee\":0.351258896420534,\"from\":\"Ron Weasley\",\"to\":\"Quickbeam\",\"puzzle_number\":9,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"a96d44aa-324e-45d0-9b0f-fe5d6058f93a\",\"amount\":3.82694872560966,\"fee\":0.514785016704371,\"from\":\"Grìma Wormtongue\",\"to\":\"Dedalus Diggle\",\"puzzle_number\":30,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"3980d636-5473-41e9-aef9-9d01713a044c\",\"amount\":3.94797041638944,\"fee\":0.754109829691377,\"from\":\"Molly Weasley\",\"to\":\"Quickbeam\",\"puzzle_number\":16,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"67e049c7-2b37-44d8-9037-dfa01635c4e7\",\"amount\":9.48442409332811,\"fee\":0.966915356273107,\"from\":\"Frank Bryce\",\"to\":\"Fenrir Greyback\",\"puzzle_number\":43,\"certified\":true,\"color\":\"black\"},{\"uuid\":\"1c4ac1ac-cf70-4625-af72-20ec6c3725ba\",\"amount\":5.37463485966011,\"fee\":0.378236961379833,\"from\":\"Faramir\",\"to\":\"Bob Ogden\",\"puzzle_number\":42,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"49668e37-95a1-4e35-b21a-6dddfd0aa593\",\"amount\":9.81080052661865,\"fee\":0.184829001402182,\"from\":\"Boromir\",\"to\":\"Shelob\",\"puzzle_number\":91,\"certified\":false,\"color\":\"gray\"},{\"uuid\":\"26a4d355-4328-45d6-83e6-8e62ca4ada8c\",\"amount\":9.21889543928999,\"fee\":0.0316520508654999,\"from\":\"Samwise Gamgee\",\"to\":\"Quickbeam\",\"puzzle_number\":89,\"certified\":false,\"color\":\"orange\"},{\"uuid\":\"c822361a-64a8-4121-b977-f416a52f73c3\",\"amount\":2.81407331667242,\"fee\":0.405444728145741,\"from\":\"Beregond\",\"to\":\"Peregrin Took\",\"puzzle_number\":56,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"bf20ee7b-fbd7-48d4-88f8-61c691a949a9\",\"amount\":7.81947153340234,\"fee\":0.75528340561574,\"from\":\"Arabella Figg\",\"to\":\"Quirinus Quirrell\",\"puzzle_number\":29,\"certified\":true,\"color\":\"green\"},{\"uuid\":\"ec1414a2-673b-41a7-83b1-355f261b59e6\",\"amount\":8.66747585286638,\"fee\":0.33856636581759,\"from\":\"Bob Ogden\",\"to\":\"Griphook\",\"puzzle_number\":26,\"certified\":true,\"color\":\"pink\"},{\"uuid\":\"8828aaff-d171-4d15-9eac-ebfa7a866103\",\"amount\":0.0381236298835248,\"fee\":0.0146661190815648,\"from\":\"Roger Davies\",\"to\":\"Fred Weasley\",\"puzzle_number\":91,\"certified\":false,\"color\":\"red\"},{\"uuid\":\"bdaaac9d-2627-4417-af1d-e4b912d63c56\",\"amount\":5.67549859334485,\"fee\":0.642274614818149,\"from\":\"The Bloody Baron\",\"to\":\"Argus Filch\",\"puzzle_number\":28,\"certified\":true,\"color\":\"blue\"},{\"uuid\":\"bbea9999-6291-454a-b558-66916b3bc36b\",\"amount\":8.1573598667453,\"fee\":0.957330247629701,\"from\":\"Oliver Wood\",\"to\":\"Gregory Goyle\",\"puzzle_number\":10,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"916952a9-11a7-4284-8989-7913df3cfeda\",\"amount\":3.07988252874626,\"fee\":0.437569953105633,\"from\":\"Goyle Sr.\",\"to\":\"Hepzibah Smith\",\"puzzle_number\":4,\"certified\":true,\"color\":\"pink\"},{\"uuid\":\"eb33258d-7852-4d55-9369-2609564a9550\",\"amount\":2.18708882078118,\"fee\":0.863214215766892,\"from\":\"The Fat Friar\",\"to\":\"Oliver Wood\",\"puzzle_number\":91,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"909e5fb5-2bfb-4cbd-a9fe-ea7d3ec4fd28\",\"amount\":6.36369199038501,\"fee\":0.292093187161412,\"from\":\"Viktor Krum\",\"to\":\"Gollum\",\"puzzle_number\":93,\"certified\":false,\"color\":\"blue\"},{\"uuid\":\"86777c6d-89cf-4d53-a869-063c0cc3328d\",\"amount\":4.82818561043791,\"fee\":0.334767558353482,\"from\":\"Gimli\",\"to\":\"Elrond\",\"puzzle_number\":88,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"d2aa9143-4772-4726-96f7-ee67401a258e\",\"amount\":4.73639250545877,\"fee\":0.865228134435368,\"from\":\"Legolas\",\"to\":\"Éomer\",\"puzzle_number\":59,\"certified\":false,\"color\":\"gray\"},{\"uuid\":\"2796d045-5fe9-4b4b-a000-a9ad3951f6f6\",\"amount\":7.56117895724304,\"fee\":0.871996714053612,\"from\":\"James Potter\",\"to\":\"Dirk Cresswell\",\"puzzle_number\":18,\"certified\":false,\"color\":\"yellow\"},{\"uuid\":\"11eb4dbc-0616-4e44-9abb-518d906c906f\",\"amount\":4.77033054380589,\"fee\":0.550673303730123,\"from\":\"Treebeard\",\"to\":\"Lord Voldemort\",\"puzzle_number\":52,\"certified\":false,\"color\":\"brown\"},{\"uuid\":\"c06096bb-3391-4a3e-aada-5131c0db66ce\",\"amount\":4.9413301288453,\"fee\":0.239770908818059,\"from\":\"Shelob\",\"to\":\"Gimli\",\"puzzle_number\":63,\"certified\":false,\"color\":\"brown\"},{\"uuid\":\"9afec979-c96e-40c9-848d-27a9d6c8c45e\",\"amount\":5.03105284860879,\"fee\":0.705019652360808,\"from\":\"Argus Filch\",\"to\":\"Treebeard\",\"puzzle_number\":5,\"certified\":true,\"color\":\"pink\"},{\"uuid\":\"b148844c-f3ac-40f4-a5f7-f642aadd70ff\",\"amount\":5.74968966967744,\"fee\":0.27099847510542,\"from\":\"Goyle Sr.\",\"to\":\"Arwen Evenstar\",\"puzzle_number\":70,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"d1956790-5868-48da-a09f-df3cee4cbc53\",\"amount\":9.24686517764452,\"fee\":0.863914234466682,\"from\":\"Gimli\",\"to\":\"Narcissa Malfoy\",\"puzzle_number\":43,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"7341ee45-11b1-4f53-99e6-8a7a4c936dd8\",\"amount\":2.68357118474196,\"fee\":0.241391065770626,\"from\":\"Fenrir Greyback\",\"to\":\"Great Aunt Muriel\",\"puzzle_number\":97,\"certified\":false,\"color\":\"red\"},{\"uuid\":\"463be7d2-b53e-4e2f-8b68-f378fa1c3e2b\",\"amount\":9.30680123432109,\"fee\":0.0130585282076663,\"from\":\"Shadowfax\",\"to\":\"Gimli\",\"puzzle_number\":56,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"701ac693-394c-4d87-9155-3dcf444d8f19\",\"amount\":1.02375815917192,\"fee\":0.384597397924641,\"from\":\"Gimli\",\"to\":\"Denethor\",\"puzzle_number\":52,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"3dd79ac9-beca-4b34-b321-9519b34156e4\",\"amount\":7.8923197387066,\"fee\":0.466343472592023,\"from\":\"Théoden\",\"to\":\"Boromir\",\"puzzle_number\":57,\"certified\":true,\"color\":\"blue\"},{\"uuid\":\"84b1ee01-75fa-473a-8d7b-8b89f2fea8ed\",\"amount\":8.38496290559873,\"fee\":0.0684223839853034,\"from\":\"Cormac McLaggen\",\"to\":\"Grìma Wormtongue\",\"puzzle_number\":5,\"certified\":true,\"color\":\"black\"},{\"uuid\":\"95cdfed9-7c67-4de9-9304-57deb2a887b8\",\"amount\":4.80792283133473,\"fee\":0.752026300973506,\"from\":\"Sturgis Podmore\",\"to\":\"Cuthbert Binns\",\"puzzle_number\":35,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"0c345c6d-d67a-47c2-992d-7a738074faa8\",\"amount\":5.12398769713218,\"fee\":0.905695479658503,\"from\":\"Sauron\",\"to\":\"Hedwig\",\"puzzle_number\":29,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"c6243776-b2c7-4302-97ba-ef80b81c6d0f\",\"amount\":0.244362555829922,\"fee\":0.133885320841795,\"from\":\"Meriadoc Brandybuck\",\"to\":\"Gandalf the Grey\",\"puzzle_number\":94,\"certified\":false,\"color\":\"gray\"},{\"uuid\":\"5d8074e7-6357-4c88-8a37-d15e694c09ad\",\"amount\":9.69925249898628,\"fee\":0.987150528767528,\"from\":\"Augustus Rookwood\",\"to\":\"Peregrin Took\",\"puzzle_number\":50,\"certified\":true,\"color\":\"gray\"},{\"uuid\":\"cfaa7518-3c2a-46dc-875f-f85236e84f90\",\"amount\":2.48600205336355,\"fee\":0.488434980540052,\"from\":\"Boromir\",\"to\":\"Theodore Nott\",\"puzzle_number\":38,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"7bddb996-acbf-44f0-b02e-5eaaec82b1a7\",\"amount\":2.07652084346741,\"fee\":0.766096507261846,\"from\":\"Tom Bombadil\",\"to\":\"Newt Scamander\",\"puzzle_number\":51,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"bc1e8602-16e3-4d9f-a57c-3f1044ba924e\",\"amount\":0.172088091343793,\"fee\":0.90500370077485,\"from\":\"The Fat Friar\",\"to\":\"Arwen Evenstar\",\"puzzle_number\":15,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"26480d63-f790-47b4-8237-edb4e0df7a71\",\"amount\":3.08304022631382,\"fee\":0.220248556635923,\"from\":\"Gandalf the Grey\",\"to\":\"Peeves\",\"puzzle_number\":31,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"c2ebcd57-9a7b-4fac-8014-f2423046ccc3\",\"amount\":7.45677450762403,\"fee\":0.294300844401089,\"from\":\"Katie Bell\",\"to\":\"Glorfindel\",\"puzzle_number\":6,\"certified\":true,\"color\":\"green\"},{\"uuid\":\"ae08cc09-2863-468d-ba84-ecdb14767b01\",\"amount\":9.01952221750742,\"fee\":0.345031065939941,\"from\":\"Shadowfax\",\"to\":\"Aragog\",\"puzzle_number\":69,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"3c5072a9-abc0-4f8e-a665-fc71c70c2fb8\",\"amount\":8.65713400295702,\"fee\":0.509181446885952,\"from\":\"Sauron\",\"to\":\"Théoden\",\"puzzle_number\":34,\"certified\":false,\"color\":\"antiquewhite\"},{\"uuid\":\"0eec914e-798c-4444-b350-f29d6bace2a4\",\"amount\":7.05380491747562,\"fee\":0.455340638852877,\"from\":\"Dolores Jane Umbridge\",\"to\":\"Hannah Abbott\",\"puzzle_number\":49,\"certified\":false,\"color\":\"gray\"},{\"uuid\":\"e2f50f38-d0d9-4811-9914-f5593c5da9c2\",\"amount\":3.94500330645086,\"fee\":0.00569136559417405,\"from\":\"Winky\",\"to\":\"Quickbeam\",\"puzzle_number\":71,\"certified\":true,\"color\":\"green\"},{\"uuid\":\"97c0673c-7a61-437c-b351-835fa64dc7e5\",\"amount\":0.905220865269721,\"fee\":0.418436655652388,\"from\":\"Boromir\",\"to\":\"Samwise Gamgee\",\"puzzle_number\":70,\"certified\":false,\"color\":\"orange\"},{\"uuid\":\"34f12152-2d35-471a-8192-882601bd7cbf\",\"amount\":0.92158200199338,\"fee\":0.083583423921221,\"from\":\"Gandalf the Grey\",\"to\":\"Théoden\",\"puzzle_number\":40,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"905027a3-1460-4dc3-b2a6-7cbafc42fbc4\",\"amount\":1.34520351962034,\"fee\":0.429129279726846,\"from\":\"Augusta Longbottom\",\"to\":\"Samwise Gamgee\",\"puzzle_number\":34,\"certified\":true,\"color\":\"pink\"},{\"uuid\":\"5c985841-7ca5-44fa-b76c-d9725a3463ad\",\"amount\":4.16061096782983,\"fee\":0.384978679055798,\"from\":\"Vincent Crabbe, Sr.\",\"to\":\"Kreacher\",\"puzzle_number\":7,\"certified\":true,\"color\":\"pink\"},{\"uuid\":\"a94c906c-85d7-4cf5-bea8-979077462379\",\"amount\":1.04713903415528,\"fee\":0.726471136359677,\"from\":\"Blaise Zabini\",\"to\":\"Winky\",\"puzzle_number\":74,\"certified\":true,\"color\":\"black\"},{\"uuid\":\"ec90776c-2ed5-4a71-bc01-8b75fb59f446\",\"amount\":2.10454440194659,\"fee\":0.511090142999766,\"from\":\"Grìma Wormtongue\",\"to\":\"Grìma Wormtongue\",\"puzzle_number\":54,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"7cc229f6-7f75-4829-b0f7-e76388e65ed7\",\"amount\":1.76372344788935,\"fee\":0.160916503294598,\"from\":\"Harry Potter\",\"to\":\"Travers\",\"puzzle_number\":42,\"certified\":false,\"color\":\"blue\"},{\"uuid\":\"84c73377-904a-4c35-aabf-7f45be1e37cd\",\"amount\":1.72558872114025,\"fee\":0.454052391662667,\"from\":\"Enid\",\"to\":\"Susan Bones\",\"puzzle_number\":93,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"26ea2dff-073d-4a9d-bd9d-79d442d5e5b0\",\"amount\":7.59454009060745,\"fee\":0.848699866225193,\"from\":\"Glorfindel\",\"to\":\"Legolas\",\"puzzle_number\":70,\"certified\":true,\"color\":\"green\"},{\"uuid\":\"cb95eea4-7291-4d64-82f0-ef9629f581e7\",\"amount\":4.68693524297534,\"fee\":0.085906630965381,\"from\":\"Beregond\",\"to\":\"Gregory Goyle\",\"puzzle_number\":86,\"certified\":true,\"color\":\"blue\"},{\"uuid\":\"7b25cffb-6daa-4abf-9c50-8cdd2b297ccb\",\"amount\":7.95548227636356,\"fee\":0.493656041829141,\"from\":\"Legolas\",\"to\":\"Pigwidgeon\",\"puzzle_number\":85,\"certified\":false,\"color\":\"pink\"},{\"uuid\":\"a04741b4-6d6c-4368-bec2-90cb7bd85c3e\",\"amount\":3.19046413035823,\"fee\":0.487725811232358,\"from\":\"Faramir\",\"to\":\"Gollum\",\"puzzle_number\":96,\"certified\":true,\"color\":\"black\"},{\"uuid\":\"d75dc9e5-3aea-473b-8b13-9cae93d6c1a7\",\"amount\":8.85559941248848,\"fee\":0.0711259736186577,\"from\":\"Barliman Butterbur\",\"to\":\"Dirk Cresswell\",\"puzzle_number\":76,\"certified\":true,\"color\":\"pink\"},{\"uuid\":\"1e65584a-5148-4f27-96ff-b1373edac6ed\",\"amount\":3.42875475697308,\"fee\":0.684627962150542,\"from\":\"Kennilworthy Whisp\",\"to\":\"Ginny Weasley\",\"puzzle_number\":50,\"certified\":true,\"color\":\"green\"},{\"uuid\":\"41ef8a48-2cbb-4ef9-a61c-5dbb743a8814\",\"amount\":6.49877330557138,\"fee\":0.888270562671661,\"from\":\"Harry Potter\",\"to\":\"Luna Lovegood\",\"puzzle_number\":22,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"1c1309ab-4ab3-4adb-8cfc-2bfcf726395b\",\"amount\":4.45787648132012,\"fee\":0.369578909244532,\"from\":\"Gimli\",\"to\":\"Aragorn\",\"puzzle_number\":51,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"66e64919-79b8-4a1b-b018-c459a9203866\",\"amount\":5.20301878369222,\"fee\":0.509977492117744,\"from\":\"Bilbo Baggins\",\"to\":\"Treebeard\",\"puzzle_number\":88,\"certified\":true,\"color\":\"pink\"},{\"uuid\":\"f21b96c1-ace4-4eb0-8b84-61c27c3a7e4c\",\"amount\":3.60809217634333,\"fee\":0.0776681977730579,\"from\":\"Cormac McLaggen\",\"to\":\"Tom Bombadil\",\"puzzle_number\":28,\"certified\":false,\"color\":\"yellow\"},{\"uuid\":\"d263cd35-a5d6-480e-bec7-709bf8ea1f89\",\"amount\":1.74495036495626,\"fee\":0.455820522468054,\"from\":\"Treebeard\",\"to\":\"Fridwulfa\",\"puzzle_number\":26,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"f11ddf18-c411-4e69-aab3-4a1679da402c\",\"amount\":7.32025096511801,\"fee\":0.51372064690214,\"from\":\"Gideon Prewett\",\"to\":\"Quickbeam\",\"puzzle_number\":37,\"certified\":false,\"color\":\"brown\"},{\"uuid\":\"01a50bdd-e59c-40af-bb3d-59ade096b873\",\"amount\":4.19603339473344,\"fee\":0.763292697623559,\"from\":\"Frodo Baggins\",\"to\":\"Tom Bombadil\",\"puzzle_number\":73,\"certified\":false,\"color\":\"green\"},{\"uuid\":\"11796a56-2c85-40b6-8559-1c1b897bd8bc\",\"amount\":2.08162849730105,\"fee\":0.386659139392073,\"from\":\"Viktor Krum\",\"to\":\"Broderick Bode\",\"puzzle_number\":64,\"certified\":true,\"color\":\"green\"},{\"uuid\":\"6ca0bdbb-54df-40d1-8bbc-7b89f5ee410f\",\"amount\":8.13385953211567,\"fee\":0.447791307116917,\"from\":\"Tom Marvolo Riddle\",\"to\":\"Andromeda Tonks\",\"puzzle_number\":61,\"certified\":true,\"color\":\"green\"},{\"uuid\":\"8c29de57-53b9-4a97-a4eb-566373a1ae6d\",\"amount\":2.14515061293275,\"fee\":0.0115045444675763,\"from\":\"Irma Prince\",\"to\":\"Gollum\",\"puzzle_number\":60,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"83468353-2576-4110-bf77-2bf0e1b3193c\",\"amount\":8.14354922681627,\"fee\":0.235584530283605,\"from\":\"Padma Patil\",\"to\":\"Gollum\",\"puzzle_number\":54,\"certified\":true,\"color\":\"green\"},{\"uuid\":\"bbd8f755-0245-43c3-8c39-659376d63ff8\",\"amount\":6.93257449574939,\"fee\":0.843189742902148,\"from\":\"Griselda Marchbanks\",\"to\":\"Éomer\",\"puzzle_number\":23,\"certified\":true,\"color\":\"black\"},{\"uuid\":\"cdee071a-0c2b-442c-a9bb-f3be72dfb64a\",\"amount\":4.57732690212814,\"fee\":0.479263093311464,\"from\":\"Gandalf the Grey\",\"to\":\"Emmeline Vance\",\"puzzle_number\":34,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"174c93a6-017e-497c-b30f-448ec0f28d5f\",\"amount\":1.55253723315722,\"fee\":0.0847871941314312,\"from\":\"Frodo Baggins\",\"to\":\"The Bloody Baron\",\"puzzle_number\":29,\"certified\":true,\"color\":\"black\"},{\"uuid\":\"4c67ef1c-8fdf-452a-a42b-6728dc78554d\",\"amount\":2.98167698283991,\"fee\":0.92435735454777,\"from\":\"Éomer\",\"to\":\"Arthur Weasley\",\"puzzle_number\":64,\"certified\":true,\"color\":\"blue\"},{\"uuid\":\"cf579275-6c0f-4cbf-b4d4-fc1211898ee5\",\"amount\":0.488951762299632,\"fee\":0.752237110305841,\"from\":\"Ronan\",\"to\":\"Arwen Evenstar\",\"puzzle_number\":32,\"certified\":true,\"color\":\"gray\"},{\"uuid\":\"d08470a8-1c75-4094-af2a-29bd1944c643\",\"amount\":8.12296619690236,\"fee\":0.809960130007189,\"from\":\"Magorian\",\"to\":\"Nagini\",\"puzzle_number\":50,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"f2f4139a-3c33-482e-a460-72309e362da3\",\"amount\":1.69072514440134,\"fee\":0.431791650280633,\"from\":\"Théoden\",\"to\":\"Remus Lupin\",\"puzzle_number\":72,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"31a6b66d-edee-422e-b259-5536669e47d6\",\"amount\":8.43525301544228,\"fee\":0.700325946808769,\"from\":\"Éowyn\",\"to\":\"Shelob\",\"puzzle_number\":4,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"f1c1d65f-c65f-457b-8276-a683d8d0445e\",\"amount\":6.23025297282644,\"fee\":0.894723776492197,\"from\":\"Bathilda Bagshot\",\"to\":\"Beregond\",\"puzzle_number\":1,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"78bd8fa1-b42f-48ef-a37e-4e6cba94dead\",\"amount\":9.24898158439816,\"fee\":0.888292263515796,\"from\":\"Aberforth Dumbledore\",\"to\":\"Denethor\",\"puzzle_number\":35,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"757e1330-52ba-45c0-9e23-418e765a7683\",\"amount\":7.94738374913835,\"fee\":0.260332086886113,\"from\":\"Glorfindel\",\"to\":\"Penelope Clearwater\",\"puzzle_number\":28,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"69af88e1-7df3-4fdd-8fc9-08e5c40b3a1e\",\"amount\":1.82800024638758,\"fee\":0.763892007781876,\"from\":\"Regulus Arcturus Black\",\"to\":\"Shelob\",\"puzzle_number\":44,\"certified\":true,\"color\":\"gray\"},{\"uuid\":\"5f6bf842-8574-488f-b6b2-b2112824b0e1\",\"amount\":8.04794729321461,\"fee\":0.0676933995636348,\"from\":\"Gandalf the Grey\",\"to\":\"Morfin Gaunt\",\"puzzle_number\":35,\"certified\":true,\"color\":\"pink\"},{\"uuid\":\"fab11991-0f5c-4ff1-864d-69f6dee2e10e\",\"amount\":6.24228139873075,\"fee\":0.251496253442634,\"from\":\"Ron Weasley\",\"to\":\"Albert Runcorn\",\"puzzle_number\":33,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"e6f1f9e1-7526-4de6-a732-380a3ebcd493\",\"amount\":5.9926391911045,\"fee\":0.0201007321207212,\"from\":\"Treebeard\",\"to\":\"Armando Dippet\",\"puzzle_number\":6,\"certified\":true,\"color\":\"gray\"},{\"uuid\":\"f3a73b71-0160-4439-ac9d-95ede2b4feb4\",\"amount\":2.02751495640512,\"fee\":0.607814195080631,\"from\":\"Moaning Myrtle\",\"to\":\"Goyle Sr.\",\"puzzle_number\":67,\"certified\":true,\"color\":\"black\"},{\"uuid\":\"578863fb-0662-42c6-850d-75dc9d09c601\",\"amount\":0.304482893977717,\"fee\":0.598805243402646,\"from\":\"Denethor\",\"to\":\"Beregond\",\"puzzle_number\":93,\"certified\":true,\"color\":\"green\"},{\"uuid\":\"79c0a33a-eff4-42fc-973e-6969ecfe3151\",\"amount\":2.43862703047227,\"fee\":0.288137457611015,\"from\":\"Cuthbert Binns\",\"to\":\"Andromeda Tonks\",\"puzzle_number\":3,\"certified\":true,\"color\":\"gray\"},{\"uuid\":\"a662aedb-39c5-48d0-b177-fdedcf3d8a45\",\"amount\":8.91722785871006,\"fee\":0.0597710537451036,\"from\":\"Tom Bombadil\",\"to\":\"Argus Filch\",\"puzzle_number\":6,\"certified\":true,\"color\":\"black\"},{\"uuid\":\"a26913a5-802d-49b1-b9de-e110a8efa55a\",\"amount\":3.82068246758906,\"fee\":0.625090615223592,\"from\":\"Faramir\",\"to\":\"Trevor\",\"puzzle_number\":13,\"certified\":true,\"color\":\"green\"},{\"uuid\":\"000317f7-d122-4e45-9503-789696f77f02\",\"amount\":7.3455107680104,\"fee\":0.374321486474267,\"from\":\"Emmeline Vance\",\"to\":\"Denethor\",\"puzzle_number\":96,\"certified\":true,\"color\":\"blue\"},{\"uuid\":\"83256dc0-d43a-44e0-ad1d-ed0cac74f413\",\"amount\":0.792029097334429,\"fee\":0.998483000837293,\"from\":\"Shadowfax\",\"to\":\"Gimli\",\"puzzle_number\":77,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"8baba7f6-c284-49c1-b08e-146260665261\",\"amount\":8.24775522755829,\"fee\":0.0164898974849736,\"from\":\"Errol\",\"to\":\"Mr. Roberts\",\"puzzle_number\":69,\"certified\":false,\"color\":\"black\"},{\"uuid\":\"2884e128-bc76-4277-97ad-c224d539d71e\",\"amount\":9.27232667599874,\"fee\":0.731348956319877,\"from\":\"Mr. Borgin\",\"to\":\"The Bloody Baron\",\"puzzle_number\":70,\"certified\":true,\"color\":\"blue\"},{\"uuid\":\"0eea478b-1c4d-4b38-a7de-a4e9ae86c814\",\"amount\":7.51280738183454,\"fee\":0.727355325164424,\"from\":\"Nicholas Flamel\",\"to\":\"Peregrin Took\",\"puzzle_number\":81,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"0ba787eb-e887-4dc2-aef0-f4d345947ccb\",\"amount\":6.97433900435394,\"fee\":0.0117414906008992,\"from\":\"Rowena Ravenclaw\",\"to\":\"Bilbo Baggins\",\"puzzle_number\":29,\"certified\":true,\"color\":\"black\"},{\"uuid\":\"69198b5c-cb21-446c-8df7-1696b145977a\",\"amount\":3.12501958983842,\"fee\":0.0440054513783951,\"from\":\"Glorfindel\",\"to\":\"Gimli\",\"puzzle_number\":70,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"ed9838cd-393f-4940-92cf-e9d94f6b2ab4\",\"amount\":2.12609467781613,\"fee\":0.685810651156576,\"from\":\"Barliman Butterbur\",\"to\":\"Trevor\",\"puzzle_number\":90,\"certified\":true,\"color\":\"pink\"},{\"uuid\":\"bcc3900c-7e42-4da3-aecb-eb30fa5739df\",\"amount\":1.38405674935379,\"fee\":0.173606393071063,\"from\":\"Dennis Creevey\",\"to\":\"Gimli\",\"puzzle_number\":86,\"certified\":false,\"color\":\"brown\"},{\"uuid\":\"2bd5092c-9bb3-4c86-ab6b-98dabaf72b2e\",\"amount\":6.79935909932127,\"fee\":0.616542481909441,\"from\":\"Shadowfax\",\"to\":\"Kreacher\",\"puzzle_number\":17,\"certified\":false,\"color\":\"gray\"},{\"uuid\":\"1c249314-b4e1-4f58-8fa5-29d3f8ca4251\",\"amount\":4.97307418457414,\"fee\":0.614821188199348,\"from\":\"Aragog\",\"to\":\"Tom Bombadil\",\"puzzle_number\":78,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"4a7e0926-376f-4feb-b9b9-cf3fcad2e9e6\",\"amount\":4.24190999278392,\"fee\":0.108774364161329,\"from\":\"Great Aunt Muriel\",\"to\":\"Firenze\",\"puzzle_number\":38,\"certified\":true,\"color\":\"blue\"},{\"uuid\":\"473879e2-8229-4b1a-9967-015307b889a9\",\"amount\":7.16039383147778,\"fee\":0.281410750974464,\"from\":\"Treebeard\",\"to\":\"Emmeline Vance\",\"puzzle_number\":4,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"a7e76257-a732-4cab-8630-93348511c3f5\",\"amount\":2.8054827856934,\"fee\":0.593089384126468,\"from\":\"Samwise Gamgee\",\"to\":\"James Potter\",\"puzzle_number\":17,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"6a00bfb9-bec5-42b9-bcf5-8efe951f0deb\",\"amount\":8.93318516665741,\"fee\":0.761316656287534,\"from\":\"Shelob\",\"to\":\"Gandalf the Grey\",\"puzzle_number\":43,\"certified\":false,\"color\":\"brown\"},{\"uuid\":\"df2d3d43-d3b0-4bf4-a4d4-5c2ed5aba769\",\"amount\":1.13561493402775,\"fee\":0.153146821786602,\"from\":\"Bilbo Baggins\",\"to\":\"Alicia Spinnet\",\"puzzle_number\":53,\"certified\":false,\"color\":\"brown\"},{\"uuid\":\"b962f3c8-de5d-43db-b2f2-0415eac48812\",\"amount\":1.42700437572667,\"fee\":0.396156026741269,\"from\":\"Walden Macnair\",\"to\":\"Bilbo Baggins\",\"puzzle_number\":64,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"d3ee3b85-847a-4b00-9e4f-be97a45a84ea\",\"amount\":4.01846978031765,\"fee\":0.275147012717078,\"from\":\"Charity Burbage\",\"to\":\"Peregrin Took\",\"puzzle_number\":51,\"certified\":false,\"color\":\"gray\"},{\"uuid\":\"4b890808-4900-430a-a65c-a5ffcfbd01c6\",\"amount\":6.62023774039384,\"fee\":0.985766871246801,\"from\":\"Armando Dippet\",\"to\":\"Cormac McLaggen\",\"puzzle_number\":87,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"b76563dd-3351-4002-b8ed-55692ede7125\",\"amount\":9.02349830192652,\"fee\":0.213179822009162,\"from\":\"Théoden\",\"to\":\"Norbert\",\"puzzle_number\":95,\"certified\":true,\"color\":\"gray\"},{\"uuid\":\"3a052210-961c-4665-b186-0d573227550c\",\"amount\":8.5615618421165,\"fee\":0.788478189113765,\"from\":\"Galadriel\",\"to\":\"Peregrin Took\",\"puzzle_number\":88,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"52c3dc0c-ec2f-45ba-a000-892e0bf8295b\",\"amount\":6.40577915812209,\"fee\":0.230543762928253,\"from\":\"Blaise Zabini\",\"to\":\"Peregrin Took\",\"puzzle_number\":45,\"certified\":true,\"color\":\"gray\"},{\"uuid\":\"a544763f-927d-4eb7-97c2-19363cfe079a\",\"amount\":4.79237328162944,\"fee\":0.0492219613389759,\"from\":\"Travers\",\"to\":\"Cornelius Fudge\",\"puzzle_number\":59,\"certified\":true,\"color\":\"pink\"},{\"uuid\":\"eb9cd135-0bb5-406f-a4f0-a02060bdd095\",\"amount\":3.74164921185127,\"fee\":0.140031815783257,\"from\":\"Theodore Nott\",\"to\":\"Nearly Headless Nick\",\"puzzle_number\":2,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"505049dc-b52a-455a-bdf2-64713b4de877\",\"amount\":6.7637553496713,\"fee\":0.8699448237883,\"from\":\"Samwise Gamgee\",\"to\":\"Shelob\",\"puzzle_number\":56,\"certified\":true,\"color\":\"blue\"},{\"uuid\":\"75449485-e56f-4eee-967c-cc2390fd365f\",\"amount\":9.34787300149175,\"fee\":0.0938558978218954,\"from\":\"Parvati Patil\",\"to\":\"Samwise Gamgee\",\"puzzle_number\":34,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"1bd7690b-7c3d-41bb-b009-8767039bc7c2\",\"amount\":8.38864241047673,\"fee\":0.572825895540998,\"from\":\"Saruman the White\",\"to\":\"Dirk Cresswell\",\"puzzle_number\":59,\"certified\":false,\"color\":\"red\"},{\"uuid\":\"ef39e229-c3b1-4ed4-8251-f62111b4feca\",\"amount\":8.1281295798992,\"fee\":0.83113065695929,\"from\":\"Dudley Dursley\",\"to\":\"Rabastan Lestrange\",\"puzzle_number\":54,\"certified\":false,\"color\":\"antiquewhite\"},{\"uuid\":\"ed374306-3ffc-4ea9-be12-d9c9c0a2668c\",\"amount\":7.44697866368885,\"fee\":0.28015667892067,\"from\":\"Petunia Dursley\",\"to\":\"Scabbers\",\"puzzle_number\":53,\"certified\":false,\"color\":\"green\"},{\"uuid\":\"14f67188-fd2d-47b7-8888-76f5f5479555\",\"amount\":3.59906643782028,\"fee\":0.072756770149189,\"from\":\"Bilbo Baggins\",\"to\":\"Bob Ogden\",\"puzzle_number\":63,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"6a9389db-1725-4ef1-872a-4d0db54fb83b\",\"amount\":0.392213573380105,\"fee\":0.5611165214039,\"from\":\"Molly Weasley\",\"to\":\"Katie Bell\",\"puzzle_number\":4,\"certified\":true,\"color\":\"pink\"},{\"uuid\":\"96acfe43-e0b0-400e-9739-eea10dfe337f\",\"amount\":3.93926993532804,\"fee\":0.817952062952283,\"from\":\"Peregrin Took\",\"to\":\"Kreacher\",\"puzzle_number\":59,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"527209d7-34d0-46e7-abd3-2e1262091533\",\"amount\":1.84306529248865,\"fee\":0.354925983682388,\"from\":\"Nicholas Flamel\",\"to\":\"Arwen Evenstar\",\"puzzle_number\":95,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"3c9594ff-0ede-4f27-b344-4da24e1c339c\",\"amount\":7.64007166255321,\"fee\":0.388713119484206,\"from\":\"Arwen Evenstar\",\"to\":\"Demelza Robins\",\"puzzle_number\":21,\"certified\":true,\"color\":\"pink\"},{\"uuid\":\"97839d17-2ace-4c6d-8ae9-18167297713c\",\"amount\":6.05327546000575,\"fee\":0.426394065528346,\"from\":\"Graham Montague\",\"to\":\"Grìma Wormtongue\",\"puzzle_number\":40,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"9fb4e197-70c7-4613-9c7d-66b342ce3264\",\"amount\":1.73829863829403,\"fee\":0.754857489522827,\"from\":\"Mundungus Fletcher\",\"to\":\"Gandalf the Grey\",\"puzzle_number\":0,\"certified\":true,\"color\":\"gray\"},{\"uuid\":\"dfaa194f-b190-4049-8601-bb84118c4b41\",\"amount\":6.94504671488334,\"fee\":0.698249493719804,\"from\":\"Goyle Sr.\",\"to\":\"Dennis Creevey\",\"puzzle_number\":10,\"certified\":false,\"color\":\"yellow\"},{\"uuid\":\"884a41db-04b0-4949-8af3-51d88171ccde\",\"amount\":4.00384904822029,\"fee\":0.22275011139384,\"from\":\"Bartemius Crouch, Sr.\",\"to\":\"Susan Bones\",\"puzzle_number\":52,\"certified\":false,\"color\":\"antiquewhite\"},{\"uuid\":\"a91b15c3-8d97-4530-b471-e91aa1f8efc5\",\"amount\":7.46765177989498,\"fee\":0.985750249144109,\"from\":\"Saruman the White\",\"to\":\"Saruman the White\",\"puzzle_number\":30,\"certified\":false,\"color\":\"black\"},{\"uuid\":\"f775838c-3db8-47a6-9a48-064b5e735c33\",\"amount\":9.08000960496128,\"fee\":0.441455796818357,\"from\":\"Graham Montague\",\"to\":\"Marcus Belby\",\"puzzle_number\":9,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"49e45444-5bf2-425d-8516-b1dbc525fc69\",\"amount\":5.86316951434294,\"fee\":0.805332207386559,\"from\":\"Bogrod\",\"to\":\"Nearly Headless Nick\",\"puzzle_number\":30,\"certified\":false,\"color\":\"red\"},{\"uuid\":\"3428bb26-efeb-46a7-a249-d15ca9af19ae\",\"amount\":0.653213138534444,\"fee\":0.979455141883652,\"from\":\"Gandalf the Grey\",\"to\":\"Lavender Brown\",\"puzzle_number\":82,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"dc8b28ee-8ef6-48ce-96cd-a095d1b6fbc4\",\"amount\":2.61497907748514,\"fee\":0.367385713047636,\"from\":\"Éowyn\",\"to\":\"Quickbeam\",\"puzzle_number\":90,\"certified\":false,\"color\":\"orange\"},{\"uuid\":\"d4d9f5b2-baf0-41b2-94a8-d6e80f40cd0a\",\"amount\":7.16336718798816,\"fee\":0.528111518507717,\"from\":\"Grìma Wormtongue\",\"to\":\"Aragorn\",\"puzzle_number\":42,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"3313f8d8-4306-4934-a503-9681925b50af\",\"amount\":0.824226455818133,\"fee\":0.339960747678806,\"from\":\"Theodore Nott\",\"to\":\"Hedwig\",\"puzzle_number\":26,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"dc2b7fbe-c786-42c5-9f01-78dbf1613a6d\",\"amount\":0.741327110276867,\"fee\":0.580109149057922,\"from\":\"Bertha Jorkins\",\"to\":\"Beregond\",\"puzzle_number\":19,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"a21500da-19fb-41ed-ae30-ca0375730cf6\",\"amount\":7.6700566393619,\"fee\":0.533421069091262,\"from\":\"Helga Hufflepuff\",\"to\":\"Justin Finch-Fletchley\",\"puzzle_number\":50,\"certified\":true,\"color\":\"gray\"},{\"uuid\":\"c2e50314-d555-46f9-8970-47f6bb6912ed\",\"amount\":1.68456094970439,\"fee\":0.876052180030161,\"from\":\"Lavender Brown\",\"to\":\"Lavender Brown\",\"puzzle_number\":10,\"certified\":false,\"color\":\"green\"},{\"uuid\":\"b898eaf8-ebb3-411a-8c13-6c6431e5b403\",\"amount\":6.77055860392064,\"fee\":0.96203422714877,\"from\":\"Éomer\",\"to\":\"Neville Longbottom\",\"puzzle_number\":35,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"b1de3ad3-6f34-4f3a-9b30-4cdca6622b31\",\"amount\":8.55372976888962,\"fee\":0.529400145955315,\"from\":\"Shadowfax\",\"to\":\"Rolf Scamander\",\"puzzle_number\":33,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"e8e3486a-443b-4cc2-beb0-d7d636b2defd\",\"amount\":9.30286670949051,\"fee\":0.491852987673107,\"from\":\"Griphook\",\"to\":\"Peter Pettigrew\",\"puzzle_number\":8,\"certified\":true,\"color\":\"black\"},{\"uuid\":\"1d483a1b-9dfa-4f9e-ac18-37fd6b126d1a\",\"amount\":8.12361447242132,\"fee\":0.549524877917945,\"from\":\"Glorfindel\",\"to\":\"Arwen Evenstar\",\"puzzle_number\":88,\"certified\":false,\"color\":\"black\"},{\"uuid\":\"8002ab89-8bb5-46f9-ab16-b8e3c832210b\",\"amount\":8.5073931018387,\"fee\":0.0677860157224509,\"from\":\"Alice Longbottom\",\"to\":\"Viktor Krum\",\"puzzle_number\":48,\"certified\":true,\"color\":\"black\"},{\"uuid\":\"9f8aa14d-5eff-4187-8212-eb7c34ec489c\",\"amount\":0.236747796280871,\"fee\":0.349583581457692,\"from\":\"Théoden\",\"to\":\"Nearly Headless Nick\",\"puzzle_number\":20,\"certified\":true,\"color\":\"blue\"},{\"uuid\":\"485eb0de-538c-4e29-aff4-9c014fba61b6\",\"amount\":5.85210348059689,\"fee\":0.612825460738764,\"from\":\"Rita Skeeter\",\"to\":\"Boromir\",\"puzzle_number\":66,\"certified\":true,\"color\":\"blue\"},{\"uuid\":\"44b91582-a705-4ba5-98e2-9ac91d767e47\",\"amount\":1.21755525744352,\"fee\":0.201459691868835,\"from\":\"The Bloody Baron\",\"to\":\"Barty Crouch, Jr.\",\"puzzle_number\":82,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"0df3b90b-3970-446a-a8f3-d015f28a8f64\",\"amount\":3.38280020120859,\"fee\":0.880764718702906,\"from\":\"Aragorn\",\"to\":\"Boromir\",\"puzzle_number\":98,\"certified\":true,\"color\":\"green\"},{\"uuid\":\"40675dfe-e8bc-426b-a7b2-814b97718664\",\"amount\":5.3510448581497,\"fee\":0.836836705086088,\"from\":\"Bilbo Baggins\",\"to\":\"Poppy Pomfrey\",\"puzzle_number\":96,\"certified\":true,\"color\":\"green\"},{\"uuid\":\"864691d8-d692-4463-9699-0957bad1ce37\",\"amount\":9.05920994091002,\"fee\":0.503278147859345,\"from\":\"Katie Bell\",\"to\":\"Elphias Doge\",\"puzzle_number\":77,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"d140abe4-4d84-4b1d-a53d-e904976f0f7e\",\"amount\":7.68086417679605,\"fee\":0.378688919542937,\"from\":\"Quickbeam\",\"to\":\"Samwise Gamgee\",\"puzzle_number\":93,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"64d9258a-05f1-480c-98de-d26a72c85678\",\"amount\":6.31706125545808,\"fee\":0.0492441828883375,\"from\":\"Treebeard\",\"to\":\"Saruman the White\",\"puzzle_number\":16,\"certified\":true,\"color\":\"brown\"},{\"uuid\":\"c0d021df-b9b1-4f24-bbd6-6d4de80925c7\",\"amount\":0.990251781383326,\"fee\":0.722555228617469,\"from\":\"Cadmus Peverell\",\"to\":\"Quickbeam\",\"puzzle_number\":44,\"certified\":false,\"color\":\"antiquewhite\"},{\"uuid\":\"d0980170-0edc-4b9f-b803-f8c2d944fea9\",\"amount\":4.56325837767184,\"fee\":0.703132085811169,\"from\":\"Denethor\",\"to\":\"Susan Bones\",\"puzzle_number\":38,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"1bb2b146-0ec2-4982-b4e4-634e09a9c4a9\",\"amount\":7.59455939596865,\"fee\":0.527357023159265,\"from\":\"Shelob\",\"to\":\"Tom Bombadil\",\"puzzle_number\":59,\"certified\":true,\"color\":\"gray\"},{\"uuid\":\"f73087c3-780c-4d63-8907-8a4c419c9c19\",\"amount\":0.736223406866235,\"fee\":0.25247454536768,\"from\":\"Saruman the White\",\"to\":\"Saruman the White\",\"puzzle_number\":69,\"certified\":false,\"color\":\"blue\"},{\"uuid\":\"132dcf6e-2d54-46ba-b20e-f1793b52616b\",\"amount\":5.52234572408191,\"fee\":0.493345185463532,\"from\":\"Cho Chang\",\"to\":\"Treebeard\",\"puzzle_number\":74,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"a3850ab6-b431-4717-9184-480e8744ecea\",\"amount\":1.69510746316971,\"fee\":0.298996560238499,\"from\":\"Kingsley Shacklebolt\",\"to\":\"Rodolphus Lestrange\",\"puzzle_number\":49,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"dd7f49c5-daf7-470e-833c-1186bbcad952\",\"amount\":8.25870930248449,\"fee\":0.0139991883690462,\"from\":\"Sir Cadogan\",\"to\":\"Goyle Sr.\",\"puzzle_number\":2,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"6a953a8b-6dcc-4917-86ac-f1193254946e\",\"amount\":8.22393052932277,\"fee\":0.549613779210611,\"from\":\"Frodo Baggins\",\"to\":\"Quickbeam\",\"puzzle_number\":51,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"11ca15d6-eaf6-4d38-9630-0333504e5819\",\"amount\":3.52338835912004,\"fee\":0.625614119500138,\"from\":\"Gollum\",\"to\":\"Salazar Slytherin\",\"puzzle_number\":25,\"certified\":true,\"color\":\"red\"},{\"uuid\":\"7488a21f-4478-4603-a7a3-5dc83f7e532e\",\"amount\":4.87765532578851,\"fee\":0.168368782337987,\"from\":\"Glorfindel\",\"to\":\"Pigwidgeon\",\"puzzle_number\":33,\"certified\":false,\"color\":\"black\"},{\"uuid\":\"3605aa57-a452-4d39-958f-05f63b6163c3\",\"amount\":4.727772387248,\"fee\":0.380742648991048,\"from\":\"Arwen Evenstar\",\"to\":\"Helena Ravenclaw (The Grey Lady)\",\"puzzle_number\":14,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"0ea4122c-719f-4132-8f7a-e382e801393b\",\"amount\":2.4296924677405,\"fee\":0.0535753032158767,\"from\":\"Tom Bombadil\",\"to\":\"Astoria Greengrass\",\"puzzle_number\":28,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"3246a8c4-fc45-4c6c-a403-646d54e1ab33\",\"amount\":2.48533146595852,\"fee\":0.567324256623047,\"from\":\"Firenze\",\"to\":\"Éomer\",\"puzzle_number\":2,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"4c006cf5-3682-4cb7-9d9d-87d7712881ec\",\"amount\":7.92556679561595,\"fee\":0.970846896573527,\"from\":\"Griselda Marchbanks\",\"to\":\"Éomer\",\"puzzle_number\":86,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"39586366-03c0-4330-aa5e-2d64499be044\",\"amount\":2.88437305438807,\"fee\":0.0734951346394855,\"from\":\"Alice Longbottom\",\"to\":\"Alicia Spinnet\",\"puzzle_number\":23,\"certified\":true,\"color\":\"yellow\"},{\"uuid\":\"c06fe38d-9638-4b42-9118-5d32a26dd41b\",\"amount\":2.88531338881311,\"fee\":0.451893042990083,\"from\":\"Fridwulfa\",\"to\":\"Gimli\",\"puzzle_number\":79,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"df1a1f92-b8c9-4f71-8bd7-704f1cfd41c8\",\"amount\":1.2447917641458,\"fee\":0.478849415340654,\"from\":\"Bilbo Baggins\",\"to\":\"Antonin Dolohov\",\"puzzle_number\":83,\"certified\":false,\"color\":\"black\"},{\"uuid\":\"f7a2e796-771f-4d44-b201-0a15b3c1c3c9\",\"amount\":6.0997164386881,\"fee\":0.65472406584814,\"from\":\"Yaxley\",\"to\":\"Remus Lupin\",\"puzzle_number\":27,\"certified\":true,\"color\":\"orange\"},{\"uuid\":\"e70c4c64-5009-4116-9625-c16569ae8f19\",\"amount\":0.135046868306792,\"fee\":0.692493005911635,\"from\":\"Shelob\",\"to\":\"Cedric Diggory\",\"puzzle_number\":49,\"certified\":true,\"color\":\"antiquewhite\"},{\"uuid\":\"d460b339-0217-4634-9e66-4d2f9ba14f53\",\"amount\":8.37427964144204,\"fee\":0.207603725511207,\"from\":\"Rolf Scamander\",\"to\":\"Blaise Zabini\",\"puzzle_number\":88,\"certified\":true,\"color\":\"gray\"},{\"uuid\":\"cd3d3dfd-12c2-4056-a93d-e5823b9665cb\",\"amount\":6.32364412584831,\"fee\":0.694813485704839,\"from\":\"Shadowfax\",\"to\":\"Treebeard\",\"puzzle_number\":61,\"certified\":true,\"color\":\"orange\"}]}"
```

## POST /game/news_update

### Request headers:
```json
{
  "AUTHORIZATION": "user_token",
  "Content-Type": "application/json",
  "Accept": "application/json"
}
```

### Path parameters:
```json
{
}
```

### Body Parameters:
```json
{
  "blockchain": {
    "id": "7"
  },
  "miner": {
    "uuid": "0511fed5-ff97-42e0-afaf-af3843dbfeae"
  }
}
```

### Response status:
200

### Response body:
```json
"{\"open_voting\":false}"
```

## POST /game/news_update

### Request headers:
```json
{
  "AUTHORIZATION": "user_token",
  "Content-Type": "application/json",
  "Accept": "application/json"
}
```

### Path parameters:
```json
{
}
```

### Body Parameters:
```json
{
  "blockchain": {
    "id": "12"
  },
  "miner": {
    "uuid": "f657c38f-e47e-49be-b386-5139d0f8950c"
  }
}
```

### Response status:
200

### Response body:
```json
"{\"open_voting\":true,\"block_to_validate\":{\"signature\":[18,15,0],\"puzzle\":[[10,20,12,18],[15,15,15,15],[0,0,0,0]],\"voting_id\":6}}"
```

## POST /game/join_game

### Request headers:
```json
{
  "AUTHORIZATION": "user_token",
  "Content-Type": "application/json",
  "Accept": "application/json"
}
```

### Path parameters:
```json
{
}
```

### Body Parameters:
```json
{
  "code": "1",
  "name": "MinerName"
}
```

### Response status:
200

### Response body:
```json
"{\"id\":17,\"miner\":\"2e90aa76-caa1-4906-af7e-8a60058c2dd3\"}"
```

## POST /game/join_game

### Request headers:
```json
{
  "AUTHORIZATION": "user_token",
  "Content-Type": "application/json",
  "Accept": "application/json"
}
```

### Path parameters:
```json
{
}
```

### Body Parameters:
```json
{
  "code": "1",
  "name": "MinerName"
}
```

### Response status:
200

### Response body:
```json
"{\"id\":20,\"miner\":\"984d7154-86a0-4b0f-a3a3-65755460fa21\"}"
```

# Voting
El controlador VOTING contiene los siguientes endpoints: <br />  - POST /voting/vote. Es el endpoint se emite un voto sobre la valides de un bloque

## POST /voting/7/vote

### Request headers:
```json
{
  "AUTHORIZATION": "user_token",
  "Content-Type": "application/json",
  "Accept": "application/json"
}
```

### Path parameters:
```json
{
  "id": "7"
}
```

### Body Parameters:
```json
{
  "blockchain": {
    "id": "21"
  },
  "commit": "ACEPTAR",
  "miner": {
    "score": "-34.0",
    "uuid": "0f52dfe6-facc-4a0e-9e23-502d095f9ac5"
  },
  "id": "7"
}
```

### Response status:
200

### Response body:
```json
"{\"id\":21,\"miner\":\"0f52dfe6-facc-4a0e-9e23-502d095f9ac5\"}"
```

## POST /voting/11/vote

### Request headers:
```json
{
  "AUTHORIZATION": "user_token",
  "Content-Type": "application/json",
  "Accept": "application/json"
}
```

### Path parameters:
```json
{
  "id": "11"
}
```

### Body Parameters:
```json
{
  "blockchain": {
    "id": "25"
  },
  "commit": "ACEPTAR",
  "miner": {
    "score": "14.0",
    "uuid": "f99eeea2-ca00-4322-99fa-2ede39b9e19d"
  },
  "id": "11"
}
```

### Response status:
200

### Response body:
```json
"{\"id\":25,\"miner\":\"f99eeea2-ca00-4322-99fa-2ede39b9e19d\"}"
```

# Blocks


## POST /blocks/add

### Request headers:
```json
{
  "AUTHORIZATION": "user_token",
  "Content-Type": "application/json",
  "Accept": "application/json"
}
```

### Path parameters:
```json
{
}
```

### Body Parameters:
```json
{
  "blockchain": {
    "id": "28"
  },
  "miner": {
    "score": "-5.123",
    "uuid": "353af73e-1165-40c6-aeaa-609f5f1fed44"
  },
  "row-0": {
    "column-0": "ff8c6cb2-b223-40f3-b062-9d38bf864513",
    "column-1": "c975b6bc-5e53-4f3b-b2c7-a17a79229b9f",
    "column-2": "a090736a-c85f-4a89-8a5b-1fb3e3a5ca28",
    "column-3": "00323940-273c-4ddb-9107-32a079130d27"
  },
  "row-1": {
    "column-0": "07d7ba70-8b7c-4197-9ec9-5c11960eae75",
    "column-1": "e8cd13e1-903e-4cfd-9227-a4cce54470f4",
    "column-2": "85fe3c9f-c2fa-4b6e-bfde-6d1101684cb2",
    "column-3": "3b9cf2cf-2b11-48cd-a89b-dea5a03c592c"
  },
  "row-2": {
    "column-0": "4300ee36-780d-4b34-b8b9-a03af0a79d4b",
    "column-1": "1443dced-66d4-4771-ae69-08e12e5a8ff5",
    "column-2": "fc69ca19-f387-4a82-bb79-408c11f977b5",
    "column-3": "a828894e-cf6e-4034-8afc-38dd7a6fc509"
  },
  "row-3": {
    "column-0": "11111111-1111-1111-1111-111111111111",
    "column-1": "22222222-2222-2222-2222-222222222222",
    "column-2": "33333333-3333-3333-3333-333333333333",
    "column-3": "44444444-4444-4444-4444-444444444444"
  }
}
```

### Response status:
409

### Response body:
```json
{
}
```

## POST /blocks/add

### Request headers:
```json
{
  "AUTHORIZATION": "user_token",
  "Content-Type": "application/json",
  "Accept": "application/json"
}
```

### Path parameters:
```json
{
}
```

### Body Parameters:
```json
{
  "blockchain": {
    "id": "40"
  },
  "miner": {
    "score": "-5.123",
    "uuid": "3feb2f35-b1e2-47d1-b53c-7681c5c6d748"
  },
  "row-0": {
    "column-0": "ff8c6cb2-b223-40f3-b062-9d38bf864513",
    "column-1": "c975b6bc-5e53-4f3b-b2c7-a17a79229b9f",
    "column-2": "a090736a-c85f-4a89-8a5b-1fb3e3a5ca28",
    "column-3": "00323940-273c-4ddb-9107-32a079130d27"
  },
  "row-1": {
    "column-0": "07d7ba70-8b7c-4197-9ec9-5c11960eae75",
    "column-1": "e8cd13e1-903e-4cfd-9227-a4cce54470f4",
    "column-2": "85fe3c9f-c2fa-4b6e-bfde-6d1101684cb2",
    "column-3": "3b9cf2cf-2b11-48cd-a89b-dea5a03c592c"
  },
  "row-2": {
    "column-0": "4300ee36-780d-4b34-b8b9-a03af0a79d4b",
    "column-1": "",
    "column-2": "fc69ca19-f387-4a82-bb79-408c11f977b5",
    "column-3": "a828894e-cf6e-4034-8afc-38dd7a6fc509"
  },
  "row-3": {
    "column-0": "4300ee36-780d-4b34-b8b9-a03af0a79d4b",
    "column-1": "4300ee36-780d-4b34-b8b9-a03af0a79d4b",
    "column-2": "fc69ca19-f387-4a82-bb79-408c11f977b5",
    "column-3": "a828894e-cf6e-4034-8afc-38dd7a6fc509"
  }
}
```

### Response status:
400

### Response body:
```json
{
}
```

