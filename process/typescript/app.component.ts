import {Component} from 'angular2/core';

import {Artist} from './artist';
import {Artists} from './artists';
import {ArtistItemComponent} from './artist-item.component';
import {ArtistDetailsComponent} from './artist-details.component';
import {SearchPipe} from './search-pipe';

@Component({
  selector: 'my-app',
  templateUrl: 'partials/app.html',
  directives: [ArtistItemComponent, ArtistDetailsComponent],
  pipes: [SearchPipe],
  styleUrls: ['css/app.css']
})

export class AppComponent {
  artists = ARTIST;
  currentArtist: Artist;

  showArtist(item) {
    this.currentArtist = item;
  }
}

var ARTIST:Artist[]=[
  {
        "name": "David Bowie",
        "listeners": "3169093",
        "mbid": "5441c29d-3602-4898-b1a1-b77fa23b8e50",
        "reknown": "https://www.last.fm/music/David+Bowie",
        "streamable": "0",
        "shortname":"https://lastfm-img2.akamaized.net/i/u/34s/937d62bb145040b9b709319c1e680037.png"
      },
      {
        "name": "Coldplay",
        "listeners": "5181661",
        "mbid": "cc197bad-dc9c-440d-a5b5-d52ba2e14234",
        "reknown": "https://www.last.fm/music/Coldplay",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/3aa0fd17bc58e2a125f8008520415053.png"
      },
      {
        "name": "Radiohead",
        "listeners": "4555552",
        "mbid": "a74b1b7f-71a5-4011-9441-d0b5e4122711",
        "reknown": "https://www.last.fm/music/Radiohead",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/a276a56ab39b41f68ce338cee2f6a275.png"
      },
      {
        "name": "Queen",
        "listeners": "3759541",
        "mbid": "420ca290-76c5-41af-999e-564d7c71f1a7",
        "reknown": "https://www.last.fm/music/Queen",
        "streamable": "0",
        "shortname":"https://lastfm-img2.akamaized.net/i/u/34s/bd3b4dad5ca04c5da7fa22f897bc1cd0.png"
      },
      {
        "name": "Muse",
        "listeners": "3948757",
        "mbid": "fd857293-5ab8-40de-b29e-55a69d4e4d0f",
        "reknown": "https://www.last.fm/music/Muse",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/2cf19f323f4c704a8a2a234a0e72988e.png"
      },
      {
        "name": "Daft Punk",
        "listeners": "3627287",
        "mbid": "056e4f3e-d505-4dad-8ec1-d04f521cbb56",
        "reknown": "https://www.last.fm/music/Daft+Punk",
        "streamable": "0",
        "shortname":"https://lastfm-img2.akamaized.net/i/u/34s/b3c2718ca7d34aa483fb0083bfcca385.png"
      },
      {
        "name": "Sia",
        "listeners": "1909221",
        "mbid": "2f548675-008d-4332-876c-108b0c7ab9c5",
        "reknown": "https://www.last.fm/music/Sia",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/c13bdd89bcdae646e000079fad0f5e12.png"
      },
      {
        "name": "The Beatles",
        "listeners": "3458515",
        "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
        "reknown": "https://www.last.fm/music/The+Beatles",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/967fc12db67f430eb82a170b6a8c817d.png"
      },
      {
        "name": "Adele",
        "listeners": "2696235",
        "mbid": "cc2c9c3c-b7bc-4b8b-84d8-4fbd8779e493",
        "reknown": "https://www.last.fm/music/Adele",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/38a1293084be7ee4f3b83651870a848b.png"
      },
      {
        "name": "The Cure",
        "listeners": "2788712",
        "mbid": "69ee3720-a7cb-4402-b48d-a02c366f2bcf",
        "reknown": "https://www.last.fm/music/The+Cure",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/a126a88f45e54abfca14d6150f6d694c.png"
      },
      {
        "name": "Tame Impala",
        "listeners": "933214",
        "mbid": "63aa26c3-d59b-4da4-84ac-716b54f1ef4d",
        "reknown": "https://www.last.fm/music/Tame+Impala",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/12a2bbc58ad344fab891686d6eb88889.png"
      },
      {
        "name": "Arctic Monkeys",
        "listeners": "3298389",
        "mbid": "ada7a83c-e3e1-40f1-93f9-3e73dbc9298a",
        "reknown": "https://www.last.fm/music/Arctic+Monkeys",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/77f91517993b4b3acbeacd164b1019ca.png"
     },
      {
        "name": "Red Hot Chili Peppers",
        "listeners": "4434734",
        "mbid": "8bfac288-ccc5-448d-9573-c33ea2aa5c30",
        "reknown": "https://www.last.fm/music/Red+Hot+Chili+Peppers",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/57c1df2d82a8440d8614022e2531352c.png"
      },
      {
        "name": "Major Lazer",
        "listeners": "1042066",
        "mbid": "75be165a-ad83-4d12-bd28-f589a15c479f",
        "reknown": "https://www.last.fm/music/Major+Lazer",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/1222f54bbd97905370069fe5974b8483.png"
      },
      {
        "name": "Blur",
        "listeners": "2740184",
        "mbid": "ba853904-ae25-4ebb-89d6-c44cfbd71bd2",
        "reknown": "https://www.last.fm/music/Blur",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/4fd4a7e4030b4a4294437f0f6406c812.png"
      },
      {
        "name": "The xx",
        "listeners": "1787632",
        "mbid": "c5c2ea1c-4bde-4f4d-bd0b-47b200bf99d6",
        "reknown": "https://www.last.fm/music/The+xx",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/d18444295f3226485a01a7c1d61e2166.png"
      },
      {
        "name": "The Weeknd",
        "listeners": "1013895",
        "mbid": "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        "reknown": "https://www.last.fm/music/The+Weeknd",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/c6a194e29ede895a1892b31c63e25547.png"
      },
      {
        "name": "Nirvana",
        "listeners": "4091522",
        "mbid": "9282c8b4-ca0b-4c6b-b7e3-4f7762dfc4d6",
        "reknown": "https://www.last.fm/music/Nirvana",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/fd2f367c86894440881dc7543d15b973.png"
      },
      {
        "name": "Ed Sheeran",
        "listeners": "1363694",
        "mbid": "b8a7c51f-362c-4dcb-a259-bc6e0095f0a6",
        "reknown": "https://www.last.fm/music/Ed+Sheeran",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/fa36962445080a3357cd1585fd2cb474.png"
      },
      {
        "name": "Pink Floyd",
        "listeners": "2900850",
        "mbid": "83d91898-7763-47d7-b03b-b92132375c47",
        "reknown": "https://www.last.fm/music/Pink+Floyd",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/fab3548530834c9eb07cda263683f2ed.png"
       },
      {
        "name": "Bob Dylan",
        "listeners": "2536610",
        "mbid": "72c536dc-7137-4477-a521-567eeb840fa8",
        "reknown": "https://www.last.fm/music/Bob+Dylan",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/bff3da016b47466482119682b5bbd08b.png"
       },
      {
        "name": "Rihanna",
        "listeners": "4332104",
        "mbid": "db36a76f-4cdf-43ac-8cd0-5e48092d2bae",
        "reknown": "https://www.last.fm/music/Rihanna",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/b9900d21d71143002e6f0c9201ff7c47.png"
       },
      {
        "name": "Calvin Harris",
        "listeners": "1946923",
        "mbid": "8dd98bdc-80ec-4e93-8509-2f46bafc09a7",
        "reknown": "https://www.last.fm/music/Calvin+Harris",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/bb48d7e1401bbdf0d5f999f5abded34e.png"
      },
      {
        "name": "Arcade Fire",
        "listeners": "2433249",
        "mbid": "52074ba6-e495-4ef3-9bb4-0703888a9f68",
        "reknown": "https://www.last.fm/music/Arcade+Fire",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/9e180659aad142c883c5458c7ec25751.png"
     },
      {
        "name": "The Strokes",
        "listeners": "3128081",
        "mbid": "f181961b-20f7-459e-89de-920ef03c7ed0",
        "reknown": "https://www.last.fm/music/The+Strokes",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/1c4a3012b8294053be6c97ecfa2a8586.png"
     },
      {
        "name": "Lana Del Rey",
        "listeners": "1666729",
        "mbid": "b7539c32-53e7-4908-bda3-81449c367da6",
        "reknown": "https://www.last.fm/music/Lana+Del+Rey",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/451e68c78c6f77db1f1994b1b8e0074d.png"
      },
      {
        "name": "The Black Keys",
        "listeners": "2042646",
        "mbid": "d15721d8-56b4-453d-b506-fc915b14cba2",
        "reknown": "https://www.last.fm/music/The+Black+Keys",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/6cecd86c45894f17cfc3961b57d85620.png"
      },
      {
        "name": "M83",
        "listeners": "1786396",
        "mbid": "6d7b7cd4-254b-4c25-83f6-dd20f98ceacd",
        "reknown": "https://www.last.fm/music/M83",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/f34521fed11744dd96cb63e490a1d7dd.png"
      },
      {
        "name": "R.E.M.",
        "listeners": "2755505",
        "mbid": "ea4dfa26-f633-4da6-a52a-f49ea4897b58",
        "reknown": "https://www.last.fm/music/R.E.M.",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/13a34280bcd941d79554e8971dc2b391.png"
       },
      {
        "name": "U2",
        "listeners": "3351695",
        "mbid": "a3cb23fc-acd3-4ce0-8f36-1e5aa6a18432",
        "reknown": "https://www.last.fm/music/U2",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/521f52d1ea68c31b03b4179f4d0958c2.png"
      },
      {
        "name": "Drake",
        "listeners": "3099111",
        "mbid": "b49b81cc-d5b7-4bdd-aadb-385df8de69a6",
        "reknown": "https://www.last.fm/music/Drake",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/a4e9ed3a058c13e60f849d72e0ae802b.png"
      },
      {
        "name": "Depeche Mode",
        "listeners": "2558293",
        "mbid": "8538e728-ca0b-4321-b7e5-cff6565dd4c0",
        "reknown": "https://www.last.fm/music/Depeche+Mode",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/7dcf507341c74d92a9a8fe5f0a68e27d.png"
       },
      {
        "name": "Foals",
        "listeners": "1336337",
        "mbid": "6a65d878-fcd0-42cf-aff9-ca1d636a8bcc",
        "reknown": "https://www.last.fm/music/Foals",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/fcbf0ac660bb04b1c32ec6f89614941d.png"
       },
      {
        "name": "Led Zeppelin",
        "listeners": "2754127",
        "mbid": "d6e0e274-8e19-44ce-b5b2-52c12f8a674a",
        "reknown": "https://www.last.fm/music/Led+Zeppelin",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/4537f53f18e4402199824302645cbafa.png"
      },
      {
        "name": "The Smiths",
        "listeners": "2164555",
        "mbid": "40f5d9e4-2de7-4f2d-ad41-e31a9a9fea27",
        "reknown": "https://www.last.fm/music/The+Smiths",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/956d05a586042e9345ad649b0233d8b6.png"
       },
      {
        "name": "Foo Fighters",
        "listeners": "3865083",
        "mbid": "67f66c07-6e61-4026-ade5-7e782fad3a5d",
        "reknown": "https://www.last.fm/music/Foo+Fighters",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/f690f6f06fad4a51bd6df6f55f11bfe8.png"
       },
      {
        "name": "Michael Jackson",
        "listeners": "3336480",
        "mbid": "f27ec8db-af05-4f36-916e-3d57f91ecf5e",
        "reknown": "https://www.last.fm/music/Michael+Jackson",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/3acae594caba4bf7b5f06eb1df6417ac.png"
       },
      {
        "name": "Florence + the Machine",
        "listeners": "2260336",
        "mbid": "5fee3020-513b-48c2-b1f7-4681b01db0c6",
        "reknown": "https://www.last.fm/music/Florence+%252B+the+Machine",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/ddd4e2e9710d1524e145003ed9ae83fa.png"
       },
      {
        "name": "Kings of Leon",
        "listeners": "3311321",
        "mbid": "6ffb8ea9-2370-44d8-b678-e9237bbd347b",
        "reknown": "https://www.last.fm/music/Kings+of+Leon",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/e042e06b1b10b42b87245e869afa7692.png"
       },
      {
        "name": "David Guetta",
        "listeners": "2576267",
        "mbid": "302bd7b9-d012-4360-897a-93b00c855680",
        "reknown": "https://www.last.fm/music/David+Guetta",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/c154f7ef8dcbcb0cc453ae4002453089.png"
     },
      {
        "name": "Oasis",
        "listeners": "3428579",
        "mbid": "ecf9f3a3-35e9-4c58-acaa-e707fba45060",
        "reknown": "https://www.last.fm/music/Oasis",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/e1277c9063dc42aec206ff628d31c773.png"
     },
      {
        "name": "The Killers",
        "listeners": "4242939",
        "mbid": "95e1ead9-4d31-4808-a7ac-32c3614c116b",
        "reknown": "https://www.last.fm/music/The+Killers",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/26d5ba9edaedf723f0ec6ef2f99878c5.png"
     },
      {
        "name": "Pixies",
        "listeners": "2192714",
        "mbid": "b6b2bb8d-54a9-491f-9607-7b546023b433",
        "reknown": "https://www.last.fm/music/Pixies",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/84c35e2e9d18436cafe6209b0c3aaa7e.png"
      },
      {
        "name": "Bon Iver",
        "listeners": "1860777",
        "mbid": "437a0e49-c6ae-42f6-a6c1-84f25ed366bc",
        "reknown": "https://www.last.fm/music/Bon+Iver",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/6a0c7844e3bc477e9788cdad44e6063c.png"
      },
      {
        "name": "New Order",
        "listeners": "1684016",
        "mbid": "f1106b17-dcbb-45f6-b938-199ccfab50cc",
        "reknown": "https://www.last.fm/music/New+Order",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/8369b21a2af5c2b59199af2e02b1c276.png"
      },
      {
        "name": "Beck",
        "listeners": "2793881",
        "mbid": "a8baaa41-50f1-4f63-979e-717c14979dfb",
        "reknown": "https://www.last.fm/music/Beck",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/49ee6c342dff4445a588de258b685cc2.png"
       },
      {
        "name": "Imagine Dragons",
        "listeners": "1388326",
        "mbid": "012151a8-0f9a-44c9-997f-ebd68b5389f9",
        "reknown": "https://www.last.fm/music/Imagine+Dragons",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/862d075a16e165c85422b12c3b9c7720.png"
      },
      {
        "name": "Metallica",
        "listeners": "2748686",
        "mbid": "65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab",
        "reknown": "https://www.last.fm/music/Metallica",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/3ba92f2809224ac7919dba3c2cfeafa1.png"
       },
      {
        "name": "The White Stripes",
        "listeners": "2802868",
        "mbid": "11ae9fbb-f3d7-4a47-936f-4c0a04d3b3b5",
        "reknown": "https://www.last.fm/music/The+White+Stripes",
        "streamable": "0",
        "shortname": "https://lastfm-img2.akamaized.net/i/u/34s/f8c104d13cf84397888bfc153649af7c.png"
     }
]

// var ARTISTS: Artist[] = [
//   {
//     "name":"Barot Bellingham",
//     "shortname":"Barot_Bellingham",
//     "reknown":"Royal Academy of Painting and Sculpture",
//     "bio":"Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
//   }, {
//     "name":"Jonathan G. Ferrar II",
//     "shortname":"Jonathan_Ferrar",
//     "reknown":"Artist to Watch in 2012",
//     "bio":"The Artist to Watch in 2012 by the London Review, Johnathan has already sold one of the highest priced-commissions paid to an art student, ever on record. The piece, entitled Gratitude Resort, a work in oil and mixed media, was sold for $750,000 and Jonathan donated all the proceeds to Art for Peace, an organization that provides college art scholarships for creative children in developing nations"
//   }, {
//     "name":"Hillary Hewitt Goldwynn-Post",
//     "shortname":"Hillary_Goldwynn",
//     "reknown":"New York University",
//     "bio":"Hillary is a sophomore art sculpture student at New York University, and has already won all the major international prizes for new sculptors, including the Divinity Circle, the International Sculptor's Medal, and the Academy of Paris Award. Hillary's CAC exhibit features 25 abstract watercolor paintings that contain only water shortnames including waves, deep sea, and river."
//   }, {
//     "name":"Hassum Harrod",
//     "shortname":"Hassum_Harrod",
//     "reknown":"Art College in New Dehli",
//     "bio":"The Art College in New Dehli has sponsored Hassum on scholarship for his entire undergraduate career at the university, seeing great promise in his contemporary paintings of landscapes - that use equal parts muted and vibrant tones, and are almost a contradiction in art. Hassum will be speaking on \"The use and absence of color in modern art\" during Thursday's agenda."
//   }, {
//     "name":"Jennifer Jerome",
//     "shortname":"Jennifer_Jerome",
//     "reknown":"New Orleans, LA",
//     "bio":"A native of New Orleans, much of Jennifer's work has centered around abstract shortnames that depict flooding and rebuilding, having grown up as a teenager in the post-flood years. Despite the sadness of devastation and lives lost, Jennifer's work also depicts the hope and togetherness of a community that has persevered. Jennifer's exhibit will be discussed during Tuesday's Water in Art theme."
//   }, {
//     "name":"LaVonne L. LaRue",
//     "shortname":"LaVonne_LaRue",
//     "reknown":"Chicago, IL",
//     "bio":"LaVonne's giant-sized paintings all around Chicago tell the story of love, nature, and conservation - themes that are central to her heart. LaVonne will share her love and skill of graffiti art on Monday's schedule, as she starts the painting of a 20-foot high wall in the Rousseau Room of Hotel Contempo in front of a standing-room only audience in Art in Unexpected Places."
//   }, {
//     "name":"Constance Olivia Smith",
//     "shortname":"Constance_Smith",
//     "reknown":"Fullerton-Brighton-Norwell Award",
//     "bio":"Constance received the Fullerton-Brighton-Norwell Award for Modern Art for her mixed-media shortname of a tree of life, with jewel-adorned branches depicting the arms of humanity, and precious gemstone-decorated leaves representing the spouting buds of togetherness. The daughter of a New York jeweler, Constance has been salvaging the discarded remnants of her father's jewelry-making since she was five years old, and won the New York State Fair grand prize at the age of 8 years old for a gem-adorned painting of the Manhattan Bridge."
//   }, {
//     "name":"Riley Rudolph Rewington",
//     "shortname":"Riley_Rewington",
//     "reknown":"Roux Academy of Art, Media, and Design",
//     "bio":"A first-year student at the Roux Academy of Art, Media, and Design, Riley is already changing the face of modern art at the university. Riley's exquisite abstract pieces have no intention of ever being understood, but instead beg the viewer to dream, create, pretend, and envision with their mind's eye. Riley will be speaking on the \"Art of Abstract\" during Thursday's schedule"
//   }, {
//     "name":"Xhou Ta",
//     "shortname":"Xhou_Ta",
//     "reknown":"China International Art University",
//     "bio":"A senior at the China International Art University, Xhou has become well-known for his miniature sculptures, often the size of a rice granule, that are displayed by rear projection of microscope shortnames on canvas. Xhou will discuss the art and science behind his incredibly detailed works of art."
//   }
// ]
