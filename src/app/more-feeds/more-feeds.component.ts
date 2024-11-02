import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NewsSmallComponent } from "../components/news-small/news-small.component";
import { ApiService } from '../services/api.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-more-feeds',
  standalone: true,
  imports: [CommonModule, NewsSmallComponent,],
  templateUrl: './more-feeds.component.html',
})
export class MoreFeedsComponent implements OnInit {
  displayCarouselBy: number = 6;
  selectedFeedSections = ['arts', 'business', 'food', 'movies', 'science', 'sports', 'technology'];
  test_object1 = [
      {
          "status": "OK",
          "copyright": "Copyright (c) 2024 The New York Times Company.  All Rights Reserved.",
          "num_results": 20,
          "results": [
              {
                  "slug_name": "02comedy-roundup",
                  "section": "Arts",
                  "subsection": "Television",
                  "title": "3 Terrific Specials to Distract You From the News",
                  "abstract": "Tom Papa, James Adomian and Emily Catalano take very different, very funny approaches in their new hours.",
                  "uri": "nyt://article/3c717581-5d85-5ea3-be79-25cf6f4951c4",
                  "url": "https://www.nytimes.com/2024/11/02/arts/television/tom-papa-comedy-special.html",
                  "byline": "By Jason Zinoman",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-02T05:03:24-04:00",
                  "created_date": "2024-11-02T05:03:24-04:00",
                  "published_date": "2024-11-02T05:03:24-04:00",
                  "first_published_date": "2024-11-02T05:03:24-04:00",
                  "material_type_facet": "News",
                  "kicker": "On Comedy",
                  "subheadline": "",
                  "des_facet": [
                      "Comedy and Humor"
                  ],
                  "org_facet": [
                      "Netflix Inc",
                      "YouTube.com"
                  ],
                  "per_facet": [
                      "James Adomian",
                      "Tom Papa",
                      "Emily Catalano"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/arts/02COMEDY-ROUNDUP/02COMEDY-ROUNDUP-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "In “Home Free” on Netflix, Tom Papa opens with an unexpectedly sunny take on being an empty-nester.",
                          "copyright": "Netflix"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/arts/02COMEDY-ROUNDUP/02COMEDY-ROUNDUP-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "In “Home Free” on Netflix, Tom Papa opens with an unexpectedly sunny take on being an empty-nester.",
                          "copyright": "Netflix"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/arts/02COMEDY-ROUNDUP/02COMEDY-ROUNDUP-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "In “Home Free” on Netflix, Tom Papa opens with an unexpectedly sunny take on being an empty-nester.",
                          "copyright": "Netflix"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/arts/02COMEDY-ROUNDUP/02COMEDY-ROUNDUP-articleInline.jpg",
                          "format": "Normal",
                          "height": 129,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "In “Home Free” on Netflix, Tom Papa opens with an unexpectedly sunny take on being an empty-nester.",
                          "copyright": "Netflix"
                      }
                  ]
              },
              {
                  "slug_name": "02archie-moore",
                  "section": "Arts",
                  "subsection": "Art & Design",
                  "title": "It Started With a Family Tree. It Became ‘a Memorial to Everything.’",
                  "abstract": "A search for his origins led Archie Moore to the farthest corners of Australia’s history and the Golden Lion prize at the Venice Biennale.",
                  "uri": "nyt://article/00603561-a0a0-5bab-a43c-3f17d2192e27",
                  "url": "https://www.nytimes.com/2024/11/02/arts/design/archie-moore-venice-biennale.html",
                  "byline": "By Aruna D’Souza",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-02T05:01:52-04:00",
                  "created_date": "2024-11-02T05:01:52-04:00",
                  "published_date": "2024-11-02T05:01:52-04:00",
                  "first_published_date": "2024-11-02T05:01:52-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Art",
                      "Indigenous Australians",
                      "Venice Biennale"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Moore, Archie (1970- )"
                  ],
                  "geo_facet": [
                      "Queensland (Australia)",
                      "Australia"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/multimedia/03archie-moore-01-kvlc/03archie-moore-01-kvlc-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Archie Moore’s “Kith and Kin” at the Australian Pavilion of the 2024 Venice Biennale.",
                          "copyright": "Matteo de Mayda for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/multimedia/03archie-moore-01-kvlc/03archie-moore-01-kvlc-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Archie Moore’s “Kith and Kin” at the Australian Pavilion of the 2024 Venice Biennale.",
                          "copyright": "Matteo de Mayda for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/multimedia/03archie-moore-01-kvlc/03archie-moore-01-kvlc-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Archie Moore’s “Kith and Kin” at the Australian Pavilion of the 2024 Venice Biennale.",
                          "copyright": "Matteo de Mayda for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/multimedia/03archie-moore-01-kvlc/03archie-moore-01-kvlc-articleInline.jpg",
                          "format": "Normal",
                          "height": 142,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Archie Moore’s “Kith and Kin” at the Australian Pavilion of the 2024 Venice Biennale.",
                          "copyright": "Matteo de Mayda for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "10MY-10-COVEY",
                  "section": "Arts",
                  "subsection": "Television",
                  "title": "Wendi McLendon-Covey Is No Longer a Brunch Person",
                  "abstract": "“I don’t know how to have one mimosa,” said the actress, one of the stars of the new sitcom “St. Denis Medical.” Now she’s a fan of “dunch.”",
                  "uri": "nyt://article/7325f6dc-1d25-5a5c-9658-014f488c4aa7",
                  "url": "https://www.nytimes.com/2024/11/02/arts/television/wendi-mclendon-covey-st-denis-medical.html",
                  "byline": "By Leigh-Ann Jackson",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-02T05:01:50-04:00",
                  "created_date": "2024-11-02T05:01:50-04:00",
                  "published_date": "2024-11-02T05:01:50-04:00",
                  "first_published_date": "2024-11-02T05:01:50-04:00",
                  "material_type_facet": "News",
                  "kicker": "My Ten",
                  "subheadline": "",
                  "des_facet": [
                      "Television",
                      "Content Type: Personal Profile"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "McLendon-Covey, Wendi"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/10/arts/10Myten-Holden/10Myten-Holden-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Wendi McLendon-Covey plays a plucky hospital executive in “St. Denis Medical” who puts a positive spin on budget crises and bed shortages. ",
                          "copyright": "Mark Von Holden/Invision, via Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/10/arts/10Myten-Holden/10Myten-Holden-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Wendi McLendon-Covey plays a plucky hospital executive in “St. Denis Medical” who puts a positive spin on budget crises and bed shortages. ",
                          "copyright": "Mark Von Holden/Invision, via Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/10/arts/10Myten-Holden/10Myten-Holden-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Wendi McLendon-Covey plays a plucky hospital executive in “St. Denis Medical” who puts a positive spin on budget crises and bed shortages. ",
                          "copyright": "Mark Von Holden/Invision, via Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/10/arts/10Myten-Holden/10Myten-Holden-articleInline.jpg",
                          "format": "Normal",
                          "height": 116,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Wendi McLendon-Covey plays a plucky hospital executive in “St. Denis Medical” who puts a positive spin on budget crises and bed shortages. ",
                          "copyright": "Mark Von Holden/Invision, via Associated Press"
                      }
                  ]
              },
              {
                  "slug_name": "02parks-notebook",
                  "section": "Arts",
                  "subsection": "Art & Design",
                  "title": "Four Must-See Parks Opening in Fall Herald a New Golden Age",
                  "abstract": "Decades of planning and restoration come to fruition at Seattle’s Waterfront Park, a new Central Park rink and pool, the grounds of Olana, and Longwood Gardens in Pennsylvania.",
                  "uri": "nyt://article/f62447e7-d3a7-5618-8dad-fa9d7104ae89",
                  "url": "https://www.nytimes.com/2024/11/02/arts/design/parks-longwood-harlem-meer-olana-seattle.html",
                  "byline": "By James S. Russell",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-02T05:01:06-04:00",
                  "created_date": "2024-11-02T05:01:06-04:00",
                  "published_date": "2024-11-02T05:01:06-04:00",
                  "first_published_date": "2024-11-02T05:01:06-04:00",
                  "material_type_facet": "News",
                  "kicker": "Design Notebook",
                  "subheadline": "",
                  "des_facet": [
                      "Parks and Other Recreation Areas",
                      "Gardens and Gardening",
                      "Architecture"
                  ],
                  "org_facet": [
                      "Central Park Conservancy",
                      "Longwood Gardens",
                      "Seattle Aquarium"
                  ],
                  "per_facet": [
                      "Manfredi, Michael",
                      "Olmsted, Frederick Law",
                      "Weiss, Marion"
                  ],
                  "geo_facet": [
                      "Brandywine Valley (Pa)",
                      "Central Park (Manhattan, NY)",
                      "Seattle (Wash)"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02parks-notebooe-01-qhlj/02parks-notebooe-01-qhlj-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Although the house built by Frederic Church and its stunning Hudson Valley views are the main draw at Olana, many of the 250 acres on the grounds around it have now been restored.",
                          "copyright": "Nick Hubbard"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02parks-notebooe-01-qhlj/02parks-notebooe-01-qhlj-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Although the house built by Frederic Church and its stunning Hudson Valley views are the main draw at Olana, many of the 250 acres on the grounds around it have now been restored.",
                          "copyright": "Nick Hubbard"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02parks-notebooe-01-qhlj/02parks-notebooe-01-qhlj-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Although the house built by Frederic Church and its stunning Hudson Valley views are the main draw at Olana, many of the 250 acres on the grounds around it have now been restored.",
                          "copyright": "Nick Hubbard"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02parks-notebooe-01-qhlj/02parks-notebooe-01-qhlj-articleInline.jpg",
                          "format": "Normal",
                          "height": 142,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Although the house built by Frederic Church and its stunning Hudson Valley views are the main draw at Olana, many of the 250 acres on the grounds around it have now been restored.",
                          "copyright": "Nick Hubbard"
                      }
                  ]
              },
              {
                  "slug_name": "01sheeran-appeal",
                  "section": "Arts",
                  "subsection": "Music",
                  "title": "Ed Sheeran Prevails in Copyright Appeal Over ‘Let’s Get It On’",
                  "abstract": "A three-judge panel affirmed that Sheeran’s “Thinking Out Loud” did not illegally borrow from Marvin Gaye’s song.",
                  "uri": "nyt://article/5f2abde9-3e22-503a-bfc0-0087dc379aa5",
                  "url": "https://www.nytimes.com/2024/11/01/arts/music/ed-sheeran-lets-get-it-on-copyright-appeal.html",
                  "byline": "By Ben Sisario",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T16:55:06-04:00",
                  "created_date": "2024-11-01T16:55:06-04:00",
                  "published_date": "2024-11-01T16:55:06-04:00",
                  "first_published_date": "2024-11-01T16:55:06-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Copyrights and Copyright Violations",
                      "Pop and Rock Music",
                      "Decisions and Verdicts",
                      "Suits and Litigation (Civil)",
                      "Appeals Courts (US)"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Gaye, Marvin",
                      "Sheeran, Ed",
                      "Townsend, Ed"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01sheeran-appeal-whkb/01sheeran-appeal-whkb-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A federal appeals court affirmed a lower court’s ruling that the songwriting copyright in “Let’s Get It On” was limited to the skeletal sheet music deposited with the U.S. Copyright Office.",
                          "copyright": "Brendan Mcdermid/Reuters"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01sheeran-appeal-whkb/01sheeran-appeal-whkb-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A federal appeals court affirmed a lower court’s ruling that the songwriting copyright in “Let’s Get It On” was limited to the skeletal sheet music deposited with the U.S. Copyright Office.",
                          "copyright": "Brendan Mcdermid/Reuters"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01sheeran-appeal-whkb/01sheeran-appeal-whkb-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A federal appeals court affirmed a lower court’s ruling that the songwriting copyright in “Let’s Get It On” was limited to the skeletal sheet music deposited with the U.S. Copyright Office.",
                          "copyright": "Brendan Mcdermid/Reuters"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01sheeran-appeal-whkb/01sheeran-appeal-whkb-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A federal appeals court affirmed a lower court’s ruling that the songwriting copyright in “Let’s Get It On” was limited to the skeletal sheet music deposited with the U.S. Copyright Office.",
                          "copyright": "Brendan Mcdermid/Reuters"
                      }
                  ]
              },
              {
                  "slug_name": "01playlist",
                  "section": "Arts",
                  "subsection": "Music",
                  "title": "Anitta Mesmerizes the Weeknd, and 8 More New Songs",
                  "abstract": "Hear tracks from Ethel Cain, the Black Keys featuring Beck, Ilham and others.",
                  "uri": "nyt://article/4708c03f-9390-5bf4-8f00-0a3804ed50a8",
                  "url": "https://www.nytimes.com/2024/11/01/arts/music/playlist-weeknd-anitta-ethel-cain.html",
                  "byline": "By Jon Pareles",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T13:28:25-04:00",
                  "created_date": "2024-11-01T13:28:25-04:00",
                  "published_date": "2024-11-01T13:28:25-04:00",
                  "first_published_date": "2024-11-01T13:28:25-04:00",
                  "material_type_facet": "News",
                  "kicker": "The Playlist",
                  "subheadline": "",
                  "des_facet": [
                      "Latin Music",
                      "Pop and Rock Music",
                      "Rhythm and Blues (Music)"
                  ],
                  "org_facet": [
                      "Black Keys (Music Group)",
                      "Five Elements (Music Group)",
                      "Rawayana"
                  ],
                  "per_facet": [
                      "Anitta (Singer)",
                      "Beck",
                      "Cain, Ethel (1998- )",
                      "Coleman, Steve",
                      "Elfman, Danny",
                      "Garcia, Kany (1982- )",
                      "Hebden, Kieran (Four Tet)",
                      "Lil Yachty (Rapper)",
                      "Skrillex",
                      "Champion",
                      "Naisha",
                      "Ilham",
                      "Lola Young"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01playlist-bthq/01playlist-bthq-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Anitta’s feature stands out on the Weeknd’s new track, “São Paulo.”",
                          "copyright": "Sebastiao Moreira/EPA, via Shutterstock"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01playlist-bthq/01playlist-bthq-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Anitta’s feature stands out on the Weeknd’s new track, “São Paulo.”",
                          "copyright": "Sebastiao Moreira/EPA, via Shutterstock"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01playlist-bthq/01playlist-bthq-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Anitta’s feature stands out on the Weeknd’s new track, “São Paulo.”",
                          "copyright": "Sebastiao Moreira/EPA, via Shutterstock"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01playlist-bthq/01playlist-bthq-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Anitta’s feature stands out on the Weeknd’s new track, “São Paulo.”",
                          "copyright": "Sebastiao Moreira/EPA, via Shutterstock"
                      }
                  ]
              },
              {
                  "slug_name": "01streaming-new",
                  "section": "Arts",
                  "subsection": "Television",
                  "title": "The Best Movies and TV Shows Coming to Disney+, Amazon, Apple TV+ and More in November",
                  "abstract": "“Cruel Intentions,” “Music by John Williams” and “Dune: The Prophecy” arrive, along with “Bad Sisters” Season 2.",
                  "uri": "nyt://article/bb3a35be-947b-536a-9e76-7f1be1b9d899",
                  "url": "https://www.nytimes.com/2024/11/01/arts/television/november-streaming-movies-shows.html",
                  "byline": "By Noel Murray",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T12:07:30-04:00",
                  "created_date": "2024-11-01T11:13:17-04:00",
                  "published_date": "2024-11-01T11:13:17-04:00",
                  "first_published_date": "2024-11-01T11:13:17-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Television",
                      "Movies",
                      "Documentary Films and Programs"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01streaming-new-cruel-kflm/01streaming-new-cruel-kflm-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Seated, from left, Sarah Catherine Hook and Zac Burgess in “Cruel Intentions.”",
                          "copyright": "Prime Video"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01streaming-new-cruel-kflm/01streaming-new-cruel-kflm-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Seated, from left, Sarah Catherine Hook and Zac Burgess in “Cruel Intentions.”",
                          "copyright": "Prime Video"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01streaming-new-cruel-kflm/01streaming-new-cruel-kflm-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Seated, from left, Sarah Catherine Hook and Zac Burgess in “Cruel Intentions.”",
                          "copyright": "Prime Video"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01streaming-new-cruel-kflm/01streaming-new-cruel-kflm-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Seated, from left, Sarah Catherine Hook and Zac Burgess in “Cruel Intentions.”",
                          "copyright": "Prime Video"
                      }
                  ]
              },
              {
                  "slug_name": "01popcast",
                  "section": "Arts",
                  "subsection": "Music",
                  "title": "Yeat’s Chart Topper and Rage Rap’s New Wave",
                  "abstract": "A conversation about the mysterious rapper’s rise and the impact of hip-hop’s splintering.",
                  "uri": "nyt://article/547a1af3-3610-58bf-8523-5b121a3387e1",
                  "url": "https://www.nytimes.com/2024/11/01/arts/music/popcast-yeat.html",
                  "byline": "",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T10:52:47-04:00",
                  "created_date": "2024-11-01T10:52:47-04:00",
                  "published_date": "2024-11-01T10:52:47-04:00",
                  "first_published_date": "2024-11-01T10:52:47-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "audio-neutral-informative",
                      "Rap and Hip-Hop"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Yeat (2000- )",
                      "Playboi Carti (Rapper)"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/arts/31popcast/31popcast-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Pascal Le Segretain/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/arts/31popcast/31popcast-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Pascal Le Segretain/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/arts/31popcast/31popcast-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Pascal Le Segretain/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/arts/31popcast/31popcast-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Pascal Le Segretain/Getty Images"
                      }
                  ]
              },
              {
                  "slug_name": "10robert-smith",
                  "section": "Arts",
                  "subsection": "Music",
                  "title": "How Robert Smith of the Cure Became Rock’s Most Dogged Activist",
                  "abstract": "With his band’s first new album in 16 years out Friday, post-punk’s dark prince discusses enduring on his own terms and clashing with the most powerful company in live music.",
                  "uri": "nyt://article/9852747f-8d6b-5ee8-87b9-2a910f51b06d",
                  "url": "https://www.nytimes.com/2024/11/01/arts/music/robert-smith-cure-songs-of-a-lost-world-ticketmaster.html",
                  "byline": "By Ben Sisario and Charlie Gates",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T05:05:27-04:00",
                  "created_date": "2024-11-01T05:05:27-04:00",
                  "published_date": "2024-11-01T05:05:27-04:00",
                  "first_published_date": "2024-11-01T05:05:27-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Pop and Rock Music",
                      "Content Type: Personal Profile",
                      "Box Office Sales"
                  ],
                  "org_facet": [
                      "Cure, The (Music Group)",
                      "Live Nation Entertainment Inc",
                      "Ticketmaster"
                  ],
                  "per_facet": [
                      "Smith, Robert James (1959- )"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/10/multimedia/10ROBERT-SMITH-02-zpvm/10ROBERT-SMITH-02-zpvm-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/10/multimedia/10ROBERT-SMITH-02-zpvm/10ROBERT-SMITH-02-zpvm-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/10/multimedia/10ROBERT-SMITH-02-zpvm/10ROBERT-SMITH-02-zpvm-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/10/multimedia/10ROBERT-SMITH-02-zpvm/10ROBERT-SMITH-02-zpvm-articleInline.jpg",
                          "format": "Normal",
                          "height": 238,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      }
                  ]
              },
              {
                  "slug_name": "01kaws-collector",
                  "section": "Arts",
                  "subsection": "Art & Design",
                  "title": "KAWS, the Collector, Says, ‘I Don’t Feel Like Anything Is Mine.’",
                  "abstract": "Some collectors treat artworks like poker chips and flip work by young artists. That’s not Brian Donnelly. Now his finds star in a show.",
                  "uri": "nyt://article/b20fb569-39b1-5c17-894f-5192c0b2c583",
                  "url": "https://www.nytimes.com/2024/11/01/arts/design/kaws-artist-collector-drawing-center.html",
                  "byline": "By Travis Diehl",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T08:07:14-04:00",
                  "created_date": "2024-11-01T05:04:40-04:00",
                  "published_date": "2024-11-01T05:04:40-04:00",
                  "first_published_date": "2024-11-01T05:04:40-04:00",
                  "material_type_facet": "News",
                  "kicker": "Critic’s Notebook",
                  "subheadline": "",
                  "des_facet": [
                      "Art",
                      "Collectors and Collections",
                      "Content Type: Personal Profile"
                  ],
                  "org_facet": [
                      "Drawing Center (Manhattan, NY)"
                  ],
                  "per_facet": [
                      "KAWS (1974- )"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/00kaws-collector-01-zmwk/00kaws-collector-01-zmwk-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Brian Donnelly, a.k.a. KAWS, at the Drawing Center in SoHo, which is showing “The Way I See It: Selections from the KAWS Collection,” which features artworks from his own collection. ",
                          "copyright": "Lila Barth for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/00kaws-collector-01-zmwk/00kaws-collector-01-zmwk-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Brian Donnelly, a.k.a. KAWS, at the Drawing Center in SoHo, which is showing “The Way I See It: Selections from the KAWS Collection,” which features artworks from his own collection. ",
                          "copyright": "Lila Barth for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/00kaws-collector-01-zmwk/00kaws-collector-01-zmwk-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Brian Donnelly, a.k.a. KAWS, at the Drawing Center in SoHo, which is showing “The Way I See It: Selections from the KAWS Collection,” which features artworks from his own collection. ",
                          "copyright": "Lila Barth for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/00kaws-collector-01-zmwk/00kaws-collector-01-zmwk-articleInline.jpg",
                          "format": "Normal",
                          "height": 152,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Brian Donnelly, a.k.a. KAWS, at the Drawing Center in SoHo, which is showing “The Way I See It: Selections from the KAWS Collection,” which features artworks from his own collection. ",
                          "copyright": "Lila Barth for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "01xp-mariahcarey",
                  "section": "Arts",
                  "subsection": "Music",
                  "title": "‘It’s Time!’ Mariah Carey Reflects on 30 Years as Queen of Christmas",
                  "abstract": "Getting her usual early start on the holiday, the powerhouse vocalist and songwriter looks back on the phenomenon she created.",
                  "uri": "nyt://article/309b55d2-0ed5-51bf-b7e1-004b7172e25c",
                  "url": "https://www.nytimes.com/2024/11/01/arts/music/mariah-carey-christmas.html",
                  "byline": "By Melina Delkic",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T11:00:00-04:00",
                  "created_date": "2024-11-01T05:01:08-04:00",
                  "published_date": "2024-11-01T05:01:08-04:00",
                  "first_published_date": "2024-11-01T05:01:08-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Christmas",
                      "Music"
                  ],
                  "org_facet": [
                      "Berklee College of Music",
                      "Billboard (Magazine)",
                      "TikTok (ByteDance)"
                  ],
                  "per_facet": [
                      "Carey, Mariah",
                      "Buble, Michael",
                      "Spector, Phil",
                      "Love, Darlene"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01xp-mariahcarey-mcgp/01xp-mariahcarey-mcgp-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The “Merry Christmas” album was released in 1994. Thirty years later, it’s essentially synonymous with Christmas.",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01xp-mariahcarey-mcgp/01xp-mariahcarey-mcgp-mediumThreeByTwo210-v2.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The “Merry Christmas” album was released in 1994. Thirty years later, it’s essentially synonymous with Christmas.",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01xp-mariahcarey-mcgp/01xp-mariahcarey-mcgp-mediumThreeByTwo440-v2.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The “Merry Christmas” album was released in 1994. Thirty years later, it’s essentially synonymous with Christmas.",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01xp-mariahcarey-mcgp/01xp-mariahcarey-mcgp-articleInline.jpg",
                          "format": "Normal",
                          "height": 187,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The “Merry Christmas” album was released in 1994. Thirty years later, it’s essentially synonymous with Christmas.",
                          "copyright": ""
                      }
                  ]
              },
              {
                  "slug_name": "01latenight",
                  "section": "Arts",
                  "subsection": "Television",
                  "title": "Jimmy Kimmel Trashes Trump’s ‘Cosplay Garbage Man’",
                  "abstract": "Kimmel said that when Trump delivered a speech while wearing an orange safety vest, it was “like a 4-year-old who wants to wear his costume to school.”",
                  "uri": "nyt://article/4d1c9b87-6755-5810-9cf5-72d445de68ed",
                  "url": "https://www.nytimes.com/2024/11/01/arts/television/jimmy-kimmel-trump-garbage-man.html",
                  "byline": "By Trish Bendix",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T02:34:28-04:00",
                  "created_date": "2024-11-01T02:34:28-04:00",
                  "published_date": "2024-11-01T02:34:28-04:00",
                  "first_published_date": "2024-11-01T02:34:28-04:00",
                  "material_type_facet": "News",
                  "kicker": "Best of Late Night",
                  "subheadline": "",
                  "des_facet": [
                      "Television"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Kimmel, Jimmy",
                      "Fallon, Jimmy",
                      "Colbert, Stephen",
                      "Chieng, Ronny (Comedian)",
                      "Meyers, Seth"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/arts/01latenight/01latenight-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jimmy Kimmel said former President Donald Trump’s garbage man look “will come in handy when he’s on the side of the highway picking up trash with the other inmates.”",
                          "copyright": "ABC"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/arts/01latenight/01latenight-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jimmy Kimmel said former President Donald Trump’s garbage man look “will come in handy when he’s on the side of the highway picking up trash with the other inmates.”",
                          "copyright": "ABC"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/arts/01latenight/01latenight-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jimmy Kimmel said former President Donald Trump’s garbage man look “will come in handy when he’s on the side of the highway picking up trash with the other inmates.”",
                          "copyright": "ABC"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/arts/01latenight/01latenight-articleInline.jpg",
                          "format": "Normal",
                          "height": 107,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jimmy Kimmel said former President Donald Trump’s garbage man look “will come in handy when he’s on the side of the highway picking up trash with the other inmates.”",
                          "copyright": "ABC"
                      }
                  ]
              },
              {
                  "slug_name": "c01chopin-find",
                  "section": "Arts",
                  "subsection": "Music",
                  "title": "聆听近200年后首度现世的肖邦圆舞曲",
                  "abstract": "今年春天，曼哈顿摩根博物馆内发现了一篇乐谱，经过专家鉴定，这是浪漫主义“钢琴诗人”肖邦创作的的圆舞曲，此前从未为人所知。钢琴家郎朗演奏了这首乐曲。",
                  "uri": "nyt://article/393f0561-8407-5466-b24f-fb945a3e70df",
                  "url": "https://www.nytimes.com/zh-hans/2024/10/31/arts/music/chopin-waltz-discovery.html",
                  "byline": "By Javier C. Hernández",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T22:38:14-04:00",
                  "created_date": "2024-10-31T22:28:16-04:00",
                  "published_date": "2024-10-31T22:28:16-04:00",
                  "first_published_date": "2024-10-31T22:28:16-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Classical Music",
                      "Manuscripts",
                      "Libraries and Librarians",
                      "Collectors and Collections"
                  ],
                  "org_facet": [
                      "Morgan Library & Museum"
                  ],
                  "per_facet": [
                      "Chopin, Frederic",
                      "Lang Lang",
                      "Whiton, A Sherrill Jr"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/chopin-find-ch-31211-cover/chopin-find-ch-31211-cover-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Video by Mohamed Sadek for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/chopin-find-ch-31211-cover/chopin-find-ch-31211-cover-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Video by Mohamed Sadek for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/chopin-find-ch-31211-cover/chopin-find-ch-31211-cover-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Video by Mohamed Sadek for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/chopin-find-ch-31211-cover/chopin-find-ch-31211-cover-articleInline.jpg",
                          "format": "Normal",
                          "height": 107,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Video by Mohamed Sadek for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "chopin-find-ch-full",
                  "section": "Arts",
                  "subsection": "Music",
                  "title": "",
                  "abstract": "郎朗在曼哈顿施坦威音乐厅演奏肖邦圆舞曲全曲。",
                  "uri": "nyt://video/d2cdb9cd-2586-541d-b694-ec5588b28278",
                  "url": "https://www.nytimes.com/video/embedded/arts/music/100000009795269/chopin-find-ch-full.html",
                  "byline": "",
                  "item_type": "Video",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T22:28:14-04:00",
                  "created_date": "2024-10-31T22:28:14-04:00",
                  "published_date": "2024-10-31T22:28:14-04:00",
                  "first_published_date": "2024-10-31T22:28:14-04:00",
                  "material_type_facet": "Video",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/chopin-find-ch-1235-cover/chopin-find-ch-1235-cover-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Video by Mohamed Sadek for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/chopin-find-ch-1235-cover/chopin-find-ch-1235-cover-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Video by Mohamed Sadek for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/chopin-find-ch-1235-cover/chopin-find-ch-1235-cover-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Video by Mohamed Sadek for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/chopin-find-ch-1235-cover/chopin-find-ch-1235-cover-articleInline.jpg",
                          "format": "Normal",
                          "height": 111,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Video by Mohamed Sadek for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "chopin-find-ch-top",
                  "section": "Arts",
                  "subsection": "Music",
                  "title": "",
                  "abstract": "阅读下文可观看全曲演奏视频。",
                  "uri": "nyt://video/195e526b-5625-555b-9b1b-214fea49b455",
                  "url": "https://www.nytimes.com/video/embedded/arts/music/100000009795264/chopin-find-ch-top.html",
                  "byline": "",
                  "item_type": "Video",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T22:28:14-04:00",
                  "created_date": "2024-10-31T22:28:14-04:00",
                  "published_date": "2024-10-31T22:28:14-04:00",
                  "first_published_date": "2024-10-31T22:28:14-04:00",
                  "material_type_facet": "Video",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/chopin-find-ch-31211-cover/chopin-find-ch-31211-cover-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Video by Mohamed Sadek for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/chopin-find-ch-31211-cover/chopin-find-ch-31211-cover-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Video by Mohamed Sadek for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/chopin-find-ch-31211-cover/chopin-find-ch-31211-cover-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Video by Mohamed Sadek for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/chopin-find-ch-31211-cover/chopin-find-ch-31211-cover-articleInline.jpg",
                          "format": "Normal",
                          "height": 107,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Video by Mohamed Sadek for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "31looting",
                  "section": "Arts",
                  "subsection": "Art & Design",
                  "title": "Investigators Say a High-Profile Dealer Trafficked 2,000 Looted Artifacts",
                  "abstract": "In an arrest warrant for Edoardo Almagià, a Princeton-educated antiquities dealer, the Manhattan district attorney’s office detailed what it described as decades of illicit transactions.",
                  "uri": "nyt://article/e5c54ea3-e8aa-5739-9c5a-3ca272150efc",
                  "url": "https://www.nytimes.com/2024/10/31/arts/design/looted-artifacts-charges-edoardo-almagia.html",
                  "byline": "By Colin Moynihan",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T17:28:38-04:00",
                  "created_date": "2024-10-31T19:02:08-04:00",
                  "published_date": "2024-10-31T19:02:08-04:00",
                  "first_published_date": "2024-10-31T19:02:08-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Arts and Antiquities Looting",
                      "Archaeology and Anthropology",
                      "Museums"
                  ],
                  "org_facet": [
                      "Interpol (International Criminal Police Organization)",
                      "Princeton University Art Museum",
                      "Cleveland Museum of Art",
                      "Getty, J Paul, Museum",
                      "Fordham Museum of Greek, Etruscan and Roman Art",
                      "Museum of Fine Arts (Boston)"
                  ],
                  "per_facet": [
                      "Almagia, Edoardo"
                  ],
                  "geo_facet": [
                      "Manhattan (NYC)",
                      "Italy"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2021/12/15/arts/31LOOTING_archive-1/15antiquities-da-2-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Among the items the Manhattan district attorney’s office has seized as part of its investigation of Edoardo Almagià was this pithos from the seventh century B.C., which was taken from the Getty Museum in 2021.",
                          "copyright": "via Manhattan District Attorney's Office"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2021/12/15/arts/31LOOTING_archive-1/15antiquities-da-2-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Among the items the Manhattan district attorney’s office has seized as part of its investigation of Edoardo Almagià was this pithos from the seventh century B.C., which was taken from the Getty Museum in 2021.",
                          "copyright": "via Manhattan District Attorney's Office"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2021/12/15/arts/31LOOTING_archive-1/15antiquities-da-2-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Among the items the Manhattan district attorney’s office has seized as part of its investigation of Edoardo Almagià was this pithos from the seventh century B.C., which was taken from the Getty Museum in 2021.",
                          "copyright": "via Manhattan District Attorney's Office"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2021/12/15/arts/31LOOTING_archive-1/merlin_199312302_8e2cd8a5-2767-491e-9ed8-0a7c20c0c0f8-articleInline.jpg",
                          "format": "Normal",
                          "height": 253,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Among the items the Manhattan district attorney’s office has seized as part of its investigation of Edoardo Almagià was this pithos from the seventh century B.C., which was taken from the Getty Museum in 2021.",
                          "copyright": "via Manhattan District Attorney's Office"
                      }
                  ]
              },
              {
                  "slug_name": "31PEN-NOSSEL",
                  "section": "Arts",
                  "subsection": "",
                  "title": "PEN America Leader to Leave Embattled Organization",
                  "abstract": "Suzanne Nossel, who has led the free expression group since 2013, is leaving after a year of intense criticism of its response to the war in Gaza.",
                  "uri": "nyt://article/8a958245-4e95-533e-ac42-533241f841df",
                  "url": "https://www.nytimes.com/2024/10/31/arts/pen-america-suzanne-nossel.html",
                  "byline": "By Jennifer Schuessler",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T17:24:51-04:00",
                  "created_date": "2024-10-31T16:56:05-04:00",
                  "published_date": "2024-10-31T16:56:05-04:00",
                  "first_published_date": "2024-10-31T16:56:05-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Israel-Gaza War (2023- )",
                      "Freedom of Speech and Expression",
                      "Writing and Writers",
                      "Appointments and Executive Changes",
                      "Human Rights and Human Rights Violations"
                  ],
                  "org_facet": [
                      "PEN American Center",
                      "Freedom House"
                  ],
                  "per_facet": [
                      "Nossel, Suzanne"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31PEN-NOSSEL-fjlm/31PEN-NOSSEL-fjlm-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Under the leadership of Suzanne Nossel, PEN America expanded its focus beyond the literary world, starting initiatives relating to free speech on campus, online harassment, book bans and the spread of laws restricting teaching of controversial subjects.",
                          "copyright": "Rebecca Smeyne for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31PEN-NOSSEL-fjlm/31PEN-NOSSEL-fjlm-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Under the leadership of Suzanne Nossel, PEN America expanded its focus beyond the literary world, starting initiatives relating to free speech on campus, online harassment, book bans and the spread of laws restricting teaching of controversial subjects.",
                          "copyright": "Rebecca Smeyne for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31PEN-NOSSEL-fjlm/31PEN-NOSSEL-fjlm-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Under the leadership of Suzanne Nossel, PEN America expanded its focus beyond the literary world, starting initiatives relating to free speech on campus, online harassment, book bans and the spread of laws restricting teaching of controversial subjects.",
                          "copyright": "Rebecca Smeyne for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31PEN-NOSSEL-fjlm/31PEN-NOSSEL-fjlm-articleInline.jpg",
                          "format": "Normal",
                          "height": 285,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Under the leadership of Suzanne Nossel, PEN America expanded its focus beyond the literary world, starting initiatives relating to free speech on campus, online harassment, book bans and the spread of laws restricting teaching of controversial subjects.",
                          "copyright": "Rebecca Smeyne for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "31young-thug",
                  "section": "Arts",
                  "subsection": "Music",
                  "title": "Young Thug Released After Guilty Plea in Lengthy YSL Case",
                  "abstract": "The star Atlanta rapper admitted to six counts, including participating in criminal street gang activity, ending his role in the longest trial in Georgia history.",
                  "uri": "nyt://article/95ba6695-0afe-5923-9c46-72ca0030ec20",
                  "url": "https://www.nytimes.com/2024/10/31/arts/music/young-thug-guilty-plea-ysl-young-slime-life-trial.html",
                  "byline": "By Joe Coscarelli",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T20:28:03-04:00",
                  "created_date": "2024-10-31T16:51:34-04:00",
                  "published_date": "2024-10-31T16:51:34-04:00",
                  "first_published_date": "2024-10-31T16:51:34-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Rap and Hip-Hop",
                      "Gangs",
                      "Racketeering and Racketeers",
                      "Drug Abuse and Traffic"
                  ],
                  "org_facet": [
                      "Young Slime Life (YSL)"
                  ],
                  "per_facet": [
                      "Williams, Jeffery Lamar (Young Thug)"
                  ],
                  "geo_facet": [
                      "Atlanta (Ga)"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/arts/31young-thug-top/31young-thug-top-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Young Thug, born Jeffery Williams, was arrested more than 900 days ago on charges that he led a violent street gang in Atlanta. He was sentenced to time served, plus at least 15 years of probation.",
                          "copyright": "Arvin Temkar/Atlanta Journal-Constitution, via Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/arts/31young-thug-top/31young-thug-top-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Young Thug, born Jeffery Williams, was arrested more than 900 days ago on charges that he led a violent street gang in Atlanta. He was sentenced to time served, plus at least 15 years of probation.",
                          "copyright": "Arvin Temkar/Atlanta Journal-Constitution, via Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/arts/31young-thug-top/31young-thug-top-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Young Thug, born Jeffery Williams, was arrested more than 900 days ago on charges that he led a violent street gang in Atlanta. He was sentenced to time served, plus at least 15 years of probation.",
                          "copyright": "Arvin Temkar/Atlanta Journal-Constitution, via Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/arts/31young-thug-top/31young-thug-top-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Young Thug, born Jeffery Williams, was arrested more than 900 days ago on charges that he led a violent street gang in Atlanta. He was sentenced to time served, plus at least 15 years of probation.",
                          "copyright": "Arvin Temkar/Atlanta Journal-Constitution, via Associated Press"
                      }
                  ]
              },
              {
                  "slug_name": "31Watching-Web",
                  "section": "Arts",
                  "subsection": "Television",
                  "title": "‘Culte’ Is a Fascinating Romp Through the Dawn of French Reality TV",
                  "abstract": "A new docudrama recounts the conflicts and controversy surrounding “Loft Story,” a French twist on “Big Brother” that divided critics and generations.",
                  "uri": "nyt://article/49e39059-0a24-5525-a4b8-584e6782d268",
                  "url": "https://www.nytimes.com/2024/10/31/arts/television/culte-amazon-prime-video-loft-story.html",
                  "byline": "By Margaret Lyons",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T14:16:11-04:00",
                  "created_date": "2024-10-31T14:16:11-04:00",
                  "published_date": "2024-10-31T14:16:11-04:00",
                  "first_published_date": "2024-10-31T14:16:11-04:00",
                  "material_type_facet": "News",
                  "kicker": "The Watching Newsletter",
                  "subheadline": "",
                  "des_facet": [
                      "Television"
                  ],
                  "org_facet": [
                      "Amazon.com Inc"
                  ],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/arts/31Watching-Culte/31Watching-Culte-thumbStandard.png",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Anaïde Rozam stars as a reality TV creator in the French series “Culte.”",
                          "copyright": "Amazon"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/arts/31Watching-Culte/31Watching-Culte-mediumThreeByTwo210.png",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Anaïde Rozam stars as a reality TV creator in the French series “Culte.”",
                          "copyright": "Amazon"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/arts/31Watching-Culte/31Watching-Culte-mediumThreeByTwo440.png",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Anaïde Rozam stars as a reality TV creator in the French series “Culte.”",
                          "copyright": "Amazon"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/arts/31Watching-Culte/31Watching-Culte-articleInline.png",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Anaïde Rozam stars as a reality TV creator in the French series “Culte.”",
                          "copyright": "Amazon"
                      }
                  ]
              },
              {
                  "slug_name": "31stillhere-review",
                  "section": "Arts",
                  "subsection": "Dance",
                  "title": "Review: After 30 Years, a Controversial Dance Is Just a Dance",
                  "abstract": "At the Brooklyn Academy of Music, Bill T. Jones’s “Still/Here” returns, free of the AIDS-era context in which it premiered.",
                  "uri": "nyt://article/69a3346c-6112-54af-b6f3-3173be8e48bb",
                  "url": "https://www.nytimes.com/2024/10/31/arts/dance/bill-t-jones-still-here-review.html",
                  "byline": "By Brian Seibert",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T12:42:31-04:00",
                  "created_date": "2024-10-31T12:42:31-04:00",
                  "published_date": "2024-10-31T12:42:31-04:00",
                  "first_published_date": "2024-10-31T12:42:31-04:00",
                  "material_type_facet": "Review",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Dancing"
                  ],
                  "org_facet": [
                      "Academy of Music",
                      "Bill T Jones/Arnie Zane Dance Co"
                  ],
                  "per_facet": [
                      "Croce, Arlene",
                      "Jones, Bill T"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/31stillhere-review-wmkv/31stillhere-review-wmkv-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Bill T. Jones’s “Still/Here” has returned, with half of its cast too young to have been alive when the work was made.",
                          "copyright": "Nir Arieli"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/31stillhere-review-wmkv/31stillhere-review-wmkv-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Bill T. Jones’s “Still/Here” has returned, with half of its cast too young to have been alive when the work was made.",
                          "copyright": "Nir Arieli"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/31stillhere-review-wmkv/31stillhere-review-wmkv-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Bill T. Jones’s “Still/Here” has returned, with half of its cast too young to have been alive when the work was made.",
                          "copyright": "Nir Arieli"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/31stillhere-review-wmkv/31stillhere-review-wmkv-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Bill T. Jones’s “Still/Here” has returned, with half of its cast too young to have been alive when the work was made.",
                          "copyright": "Nir Arieli"
                      }
                  ]
              }
          ]
      },
      {
          "status": "OK",
          "copyright": "Copyright (c) 2024 The New York Times Company.  All Rights Reserved.",
          "num_results": 20,
          "results": [
              {
                  "slug_name": "02retiring-medicare",
                  "section": "Business",
                  "subsection": "",
                  "title": "It’s Time to Shop for Medicare, and 2025 Brings Big Changes",
                  "abstract": "A bumper crop of revisions, including a stronger drug benefit, means the plan you enrolled in for 2024 may not be the best fit next year.",
                  "uri": "nyt://article/183ba669-cc95-59fa-a79b-947111da3d24",
                  "url": "https://www.nytimes.com/2024/11/02/business/medicare-drugs-open-enrollment.html",
                  "byline": "By Mark Miller",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-02T05:02:29-04:00",
                  "created_date": "2024-11-02T05:02:29-04:00",
                  "published_date": "2024-11-02T05:02:29-04:00",
                  "first_published_date": "2024-11-02T05:02:29-04:00",
                  "material_type_facet": "News",
                  "kicker": "retiring",
                  "subheadline": "",
                  "des_facet": [
                      "Medicare",
                      "Health Insurance and Managed Care",
                      "Drugs (Pharmaceuticals)",
                      "Inflation Reduction Act of 2022",
                      "Personal Finances",
                      "Content Type: Service",
                      "Medicare Advantage",
                      "Insurance",
                      "Retirement",
                      "Elderly"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [
                      "United States"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/business/30retiring-medicare-illo/30retiring-medicare-illo-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Davide Bonazzi"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/business/30retiring-medicare-illo/30retiring-medicare-illo-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Davide Bonazzi"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/business/30retiring-medicare-illo/30retiring-medicare-illo-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Davide Bonazzi"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/business/30retiring-medicare-illo/30retiring-medicare-illo-articleInline.jpg",
                          "format": "Normal",
                          "height": 138,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Davide Bonazzi"
                      }
                  ]
              },
              {
                  "slug_name": "02hen-mazzig",
                  "section": "Business",
                  "subsection": "Media",
                  "title": "A Whisperer to the Stars on the Middle East Conflict",
                  "abstract": "Many in Hollywood have struggled to navigate how to talk about their support for Israel on social media. Some of them have turned to Hen Mazzig for advice.",
                  "uri": "nyt://article/7694588a-4b3f-579d-97da-3dd4b4d0b535",
                  "url": "https://www.nytimes.com/2024/11/02/business/media/hen-mazzig-hollywood-israel-gaza.html",
                  "byline": "By Nicole Sperling",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-02T05:00:41-04:00",
                  "created_date": "2024-11-02T05:00:41-04:00",
                  "published_date": "2024-11-02T05:00:41-04:00",
                  "first_published_date": "2024-11-02T05:00:41-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Israel-Gaza War (2023- )",
                      "Social Media",
                      "Celebrities",
                      "Content Type: Personal Profile",
                      "Actors and Actresses"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Hen Mazzig"
                  ],
                  "geo_facet": [
                      "Hollywood (Calif)"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/24/multimedia/HENMAZZIG-01-fblm/HENMAZZIG-01-fblm-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Hen Mazzig is a founder of an organization created in 2019 to reach younger people who didn’t trust traditional news media and instead found most of their information through influencers.",
                          "copyright": "Chona Kasinger for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/24/multimedia/HENMAZZIG-01-fblm/HENMAZZIG-01-fblm-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Hen Mazzig is a founder of an organization created in 2019 to reach younger people who didn’t trust traditional news media and instead found most of their information through influencers.",
                          "copyright": "Chona Kasinger for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/24/multimedia/HENMAZZIG-01-fblm/HENMAZZIG-01-fblm-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Hen Mazzig is a founder of an organization created in 2019 to reach younger people who didn’t trust traditional news media and instead found most of their information through influencers.",
                          "copyright": "Chona Kasinger for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/24/multimedia/HENMAZZIG-01-fblm/HENMAZZIG-01-fblm-articleInline.jpg",
                          "format": "Normal",
                          "height": 285,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Hen Mazzig is a founder of an organization created in 2019 to reach younger people who didn’t trust traditional news media and instead found most of their information through influencers.",
                          "copyright": "Chona Kasinger for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "02corneroffice-koplovitz",
                  "section": "Business",
                  "subsection": "",
                  "title": "Kay Koplovitz Wants to See More Entrepreneurs Who Look Like Her",
                  "abstract": "Once the most powerful woman in television, the founder of Springboard has spent the past 20 years identifying and funding female-led start-ups.",
                  "uri": "nyt://article/1f0b6e3f-791c-5cea-a872-71a9e1f039c5",
                  "url": "https://www.nytimes.com/2024/11/02/business/kay-koplovitz-springboard-usa-networks.html",
                  "byline": "By Sarah Kessler",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-02T05:00:06-04:00",
                  "created_date": "2024-11-02T05:00:06-04:00",
                  "published_date": "2024-11-02T05:00:06-04:00",
                  "first_published_date": "2024-11-02T05:00:06-04:00",
                  "material_type_facet": "News",
                  "kicker": "corner office",
                  "subheadline": "",
                  "des_facet": [
                      "Venture Capital",
                      "Entrepreneurship",
                      "Women and Girls",
                      "Start-ups",
                      "Executives and Management (Theory)"
                  ],
                  "org_facet": [
                      "USA Network"
                  ],
                  "per_facet": [
                      "Koplovitz, Kay"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/21/multimedia/00Corneroffice-kay-koplovitz-qzlg/00Corneroffice-kay-koplovitz-qzlg-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Guerin Blask for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/21/multimedia/00Corneroffice-kay-koplovitz-qzlg/00Corneroffice-kay-koplovitz-qzlg-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Guerin Blask for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/21/multimedia/00Corneroffice-kay-koplovitz-qzlg/00Corneroffice-kay-koplovitz-qzlg-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Guerin Blask for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/21/multimedia/00Corneroffice-kay-koplovitz-qzlg/00Corneroffice-kay-koplovitz-qzlg-articleInline.jpg",
                          "format": "Normal",
                          "height": 237,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Guerin Blask for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "01post-hewitt",
                  "section": "Business",
                  "subsection": "Media",
                  "title": "Hugh Hewitt, Conservative Columnist, Quits The Washington Post",
                  "abstract": "His decision came hours after he abruptly stormed off a broadcast of a live online Post talk show.",
                  "uri": "nyt://article/b952c28f-dec1-57e4-8428-836c9168d281",
                  "url": "https://www.nytimes.com/2024/11/01/business/media/hugh-hewitt-washington-post-jonathan-capehart.html",
                  "byline": "By Michael M. Grynbaum",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T15:59:13-04:00",
                  "created_date": "2024-11-01T15:59:13-04:00",
                  "published_date": "2024-11-01T15:59:13-04:00",
                  "first_published_date": "2024-11-01T15:59:13-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Presidential Election of 2024",
                      "Newspapers",
                      "United States Politics and Government",
                      "News and News Media"
                  ],
                  "org_facet": [
                      "Washington Post"
                  ],
                  "per_facet": [
                      "Hewitt, Hugh"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01post-hewitt1-vkfz/01post-hewitt1-vkfz-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Hugh Hewitt speaking at the National Religious Broadcasters convention in Nashville in February.",
                          "copyright": "George Walker Iv/Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01post-hewitt1-vkfz/01post-hewitt1-vkfz-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Hugh Hewitt speaking at the National Religious Broadcasters convention in Nashville in February.",
                          "copyright": "George Walker Iv/Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01post-hewitt1-vkfz/01post-hewitt1-vkfz-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Hugh Hewitt speaking at the National Religious Broadcasters convention in Nashville in February.",
                          "copyright": "George Walker Iv/Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01post-hewitt1-vkfz/01post-hewitt1-vkfz-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Hugh Hewitt speaking at the National Religious Broadcasters convention in Nashville in February.",
                          "copyright": "George Walker Iv/Associated Press"
                      }
                  ]
              },
              {
                  "slug_name": "01jobs-report-pinned-CLONE",
                  "section": "Business",
                  "subsection": "",
                  "title": "The report was clouded by strikes and storms.",
                  "abstract": "",
                  "uri": "nyt://article/32d6b3f3-adbe-5da9-bf04-41321da7b47e",
                  "url": "https://www.nytimes.com/live/2024/11/01/business/jobs-report-october-economy-election/the-report-was-clouded-by-strikes-and-storms",
                  "byline": "By Lydia DePillis",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T13:02:17-04:00",
                  "created_date": "2024-11-01T13:02:17-04:00",
                  "published_date": "2024-11-01T13:02:17-04:00",
                  "first_published_date": "2024-11-01T13:02:17-04:00",
                  "material_type_facet": "Live Blog Post",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": []
              },
              {
                  "slug_name": "01katsumata",
                  "section": "Business",
                  "subsection": "",
                  "title": "Tsunehisa Katsumata, Top Executive in Power Plant Meltdown, Dies at 84",
                  "abstract": "He was sued and prosecuted for his actions as chairman of the Japanese power company that ran the Fukushima nuclear facility when it failed in a 2011 earthquake and tsunami.",
                  "uri": "nyt://article/2a362c95-aade-524f-9872-f2105d810e85",
                  "url": "https://www.nytimes.com/2024/11/01/business/tsunehisa-katsumata-dead.html",
                  "byline": "By River Akira Davis",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T12:35:11-04:00",
                  "created_date": "2024-11-01T12:35:11-04:00",
                  "published_date": "2024-11-01T12:35:11-04:00",
                  "first_published_date": "2024-11-01T12:35:11-04:00",
                  "material_type_facet": "Obituary (Obit)",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Deaths (Obituaries)",
                      "Japan Earthquake and Tsunami (2011)",
                      "Electric Light and Power",
                      "Nuclear Energy"
                  ],
                  "org_facet": [
                      "Fukushima Daiichi Nuclear Power Plant (Japan)",
                      "Tokyo Electric Power Co"
                  ],
                  "per_facet": [
                      "Katsumata, Tsunehisa"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/01katsumata-wkmj-print1/01katsumata-wkmj-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Tsunehisa Katsumata, who was chairman of the Tokyo Electric Power Company, at a news conference in March 2011 after the failure of the Fukushima Daiichi nuclear power plant.",
                          "copyright": "Franck Robichon/European Pressphoto Agency"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/01katsumata-wkmj-print1/01katsumata-wkmj-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Tsunehisa Katsumata, who was chairman of the Tokyo Electric Power Company, at a news conference in March 2011 after the failure of the Fukushima Daiichi nuclear power plant.",
                          "copyright": "Franck Robichon/European Pressphoto Agency"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/01katsumata-wkmj-print1/01katsumata-wkmj-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Tsunehisa Katsumata, who was chairman of the Tokyo Electric Power Company, at a news conference in March 2011 after the failure of the Fukushima Daiichi nuclear power plant.",
                          "copyright": "Franck Robichon/European Pressphoto Agency"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/01katsumata-wkmj-print1/01katsumata-wkmj-articleInline.jpg",
                          "format": "Normal",
                          "height": 126,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Tsunehisa Katsumata, who was chairman of the Tokyo Electric Power Company, at a news conference in March 2011 after the failure of the Fukushima Daiichi nuclear power plant.",
                          "copyright": "Franck Robichon/European Pressphoto Agency"
                      }
                  ]
              },
              {
                  "slug_name": "01barter-politics",
                  "section": "Business",
                  "subsection": "",
                  "title": "They Barter and Trade to Survive. How Will They Vote?",
                  "abstract": "Many rural Americans engage in cashless barter systems to get food and firewood for heating and cooking. They value self-sufficiency, making them wary of government intervention.",
                  "uri": "nyt://article/99ef8054-d054-5bee-9323-a8b31b3c9dc8",
                  "url": "https://www.nytimes.com/2024/11/01/business/harris-trump-rural-voters.html",
                  "byline": "By Jana Meisenholder",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T11:09:58-04:00",
                  "created_date": "2024-11-01T11:09:58-04:00",
                  "published_date": "2024-11-01T11:09:58-04:00",
                  "first_published_date": "2024-11-01T11:09:58-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Personal Finances",
                      "Presidential Election of 2024",
                      "Rural Areas",
                      "Barter",
                      "Medicine and Health",
                      "Health Insurance and Managed Care",
                      "United States Economy",
                      "Economic Conditions and Trends"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Harris, Kamala D",
                      "Trump, Donald J"
                  ],
                  "geo_facet": [
                      "Ohio",
                      "Bergholz (Ohio)"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/BARTER-POLITICS-01-qjlg/BARTER-POLITICS-01-qjlg-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Miki Shiverick on her farm in Bergholz, Ohio. Ms. Shiverick barters within her rural community for much of what she needs.",
                          "copyright": "Rebecca Kiger for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/BARTER-POLITICS-01-qjlg/BARTER-POLITICS-01-qjlg-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Miki Shiverick on her farm in Bergholz, Ohio. Ms. Shiverick barters within her rural community for much of what she needs.",
                          "copyright": "Rebecca Kiger for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/BARTER-POLITICS-01-qjlg/BARTER-POLITICS-01-qjlg-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Miki Shiverick on her farm in Bergholz, Ohio. Ms. Shiverick barters within her rural community for much of what she needs.",
                          "copyright": "Rebecca Kiger for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/BARTER-POLITICS-01-qjlg/BARTER-POLITICS-01-qjlg-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Miki Shiverick on her farm in Bergholz, Ohio. Ms. Shiverick barters within her rural community for much of what she needs.",
                          "copyright": "Rebecca Kiger for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "01jobs-report-politics",
                  "section": "Business",
                  "subsection": "",
                  "title": "Weak Jobs Report Provides Political Fodder Ahead of Election Day",
                  "abstract": "Republicans and Democrats used the latest jobs numbers to bolster their arguments about who would be better at managing the economy.",
                  "uri": "nyt://article/2183e374-49e8-5a22-9e40-ad2f1443a500",
                  "url": "https://www.nytimes.com/2024/11/01/business/harris-trump-jobs-report-election.html",
                  "byline": "By Alan Rappeport",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T11:41:21-04:00",
                  "created_date": "2024-11-01T10:17:43-04:00",
                  "published_date": "2024-11-01T10:17:43-04:00",
                  "first_published_date": "2024-11-01T10:17:43-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "United States Politics and Government",
                      "Labor and Jobs",
                      "United States Economy",
                      "Presidential Election of 2024"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01jobs-report-politics-01-mtlj/01jobs-report-politics-01-mtlj-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The October jobs report is providing talking points for supporters of Vice President Kamala Harris and former President Donald J. Trump.",
                          "copyright": "Erin Schaff/The New York Times; Kenny Holston/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01jobs-report-politics-01-mtlj/01jobs-report-politics-01-mtlj-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The October jobs report is providing talking points for supporters of Vice President Kamala Harris and former President Donald J. Trump.",
                          "copyright": "Erin Schaff/The New York Times; Kenny Holston/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01jobs-report-politics-01-mtlj/01jobs-report-politics-01-mtlj-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The October jobs report is providing talking points for supporters of Vice President Kamala Harris and former President Donald J. Trump.",
                          "copyright": "Erin Schaff/The New York Times; Kenny Holston/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01jobs-report-politics-01-mtlj/01jobs-report-politics-01-mtlj-articleInline.jpg",
                          "format": "Normal",
                          "height": 143,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The October jobs report is providing talking points for supporters of Vice President Kamala Harris and former President Donald J. Trump.",
                          "copyright": "Erin Schaff/The New York Times; Kenny Holston/The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "01jobs-report-fed",
                  "section": "Business",
                  "subsection": "",
                  "title": "Muddled Jobs Data May Do Little to Alter Immediate Fed Rate Path",
                  "abstract": "Officials at the Federal Reserve are widely expected to cut rates by a quarter point next week.",
                  "uri": "nyt://article/b0699850-2fae-5f19-902a-cb8920f76e4c",
                  "url": "https://www.nytimes.com/2024/11/01/business/jobs-fed-interest-rates.html",
                  "byline": "By Jeanna Smialek",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T09:13:47-04:00",
                  "created_date": "2024-11-01T09:13:47-04:00",
                  "published_date": "2024-11-01T09:13:47-04:00",
                  "first_published_date": "2024-11-01T09:13:47-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Interest Rates",
                      "Labor and Jobs",
                      "Inflation (Economics)"
                  ],
                  "org_facet": [
                      "Federal Reserve System"
                  ],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01jobs-report-fed-01-lthm/01jobs-report-fed-01-lthm-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Hiring stalled out in October, but that happened as two hurricanes hit the country, substantially affecting hiring in some industries.",
                          "copyright": "Paul Ratje for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01jobs-report-fed-01-lthm/01jobs-report-fed-01-lthm-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Hiring stalled out in October, but that happened as two hurricanes hit the country, substantially affecting hiring in some industries.",
                          "copyright": "Paul Ratje for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01jobs-report-fed-01-lthm/01jobs-report-fed-01-lthm-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Hiring stalled out in October, but that happened as two hurricanes hit the country, substantially affecting hiring in some industries.",
                          "copyright": "Paul Ratje for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01jobs-report-fed-01-lthm/01jobs-report-fed-01-lthm-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Hiring stalled out in October, but that happened as two hurricanes hit the country, substantially affecting hiring in some industries.",
                          "copyright": "Paul Ratje for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "01strategies",
                  "section": "Business",
                  "subsection": "",
                  "title": "The Market Is Fairly Upbeat. Is It the Calm Before a Storm?",
                  "abstract": "Stocks have risen this year despite uncertainties and outright hostilities in U.S. politics and around the world. But bonds and other markets show signs of concern, our columnist says.",
                  "uri": "nyt://article/cbcce2f4-c09e-5c59-8eea-41606bb847dc",
                  "url": "https://www.nytimes.com/2024/11/01/business/election-stocks-bonds-deficit.html",
                  "byline": "By Jeff Sommer",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T09:00:12-04:00",
                  "created_date": "2024-11-01T09:00:12-04:00",
                  "published_date": "2024-11-01T09:00:12-04:00",
                  "first_published_date": "2024-11-01T09:00:12-04:00",
                  "material_type_facet": "News",
                  "kicker": "Strategies",
                  "subheadline": "",
                  "des_facet": [
                      "Presidential Election of 2024",
                      "Stocks and Bonds",
                      "Standard & Poor's 500-Stock Index",
                      "United States Politics and Government",
                      "Dow Jones Stock Average",
                      "Federal Budget (US)",
                      "Content Type: Service",
                      "Personal Finances"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/business/03Strategies/03Strategies-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Rob Dobi"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/business/03Strategies/03Strategies-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Rob Dobi"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/business/03Strategies/03Strategies-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Rob Dobi"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/business/03Strategies/03Strategies-articleInline.jpg",
                          "format": "Normal",
                          "height": 123,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Rob Dobi"
                      }
                  ]
              },
              {
                  "slug_name": "01db-newsletter-web",
                  "section": "Business",
                  "subsection": "DealBook",
                  "title": "Why Businesses Worry About R.F.K. Jr.",
                  "abstract": "The Kennedy scion has long been a skeptic of vaccines, pesticides and more. Corporate leaders worry he may gain policy power if Donald Trump wins.",
                  "uri": "nyt://article/5c31c71c-0598-5ede-9664-9d0c554f65f1",
                  "url": "https://www.nytimes.com/2024/11/01/business/dealbook/rfk-trump-health-food-policy.html",
                  "byline": "By Andrew Ross Sorkin, Ravi Mattu, Bernhard Warner, Sarah Kessler, Michael J. de la Merced and Lauren Hirsch",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T08:01:31-04:00",
                  "created_date": "2024-11-01T08:01:31-04:00",
                  "published_date": "2024-11-01T08:01:31-04:00",
                  "first_published_date": "2024-11-01T08:01:31-04:00",
                  "material_type_facet": "News",
                  "kicker": "DealBook Newsletter",
                  "subheadline": "",
                  "des_facet": [
                      "internal-storyline-no",
                      "Vaccination and Immunization",
                      "Agriculture and Farming"
                  ],
                  "org_facet": [
                      "Health and Human Services Department"
                  ],
                  "per_facet": [
                      "Kennedy, Robert F Jr",
                      "Trump, Donald J",
                      "Lutnick, Howard W"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01db-newsletter-rfkjr-tclg/01db-newsletter-rfkjr-tclg-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Robert F. Kennedy Jr. could wield significant influence over health and food policy if Donald Trump wins.",
                          "copyright": "Hiroko Masuike/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01db-newsletter-rfkjr-tclg/01db-newsletter-rfkjr-tclg-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Robert F. Kennedy Jr. could wield significant influence over health and food policy if Donald Trump wins.",
                          "copyright": "Hiroko Masuike/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01db-newsletter-rfkjr-tclg/01db-newsletter-rfkjr-tclg-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Robert F. Kennedy Jr. could wield significant influence over health and food policy if Donald Trump wins.",
                          "copyright": "Hiroko Masuike/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01db-newsletter-rfkjr-tclg/01db-newsletter-rfkjr-tclg-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Robert F. Kennedy Jr. could wield significant influence over health and food policy if Donald Trump wins.",
                          "copyright": "Hiroko Masuike/The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "01jobs-report-gdp-VERSION",
                  "section": "Business",
                  "subsection": "",
                  "title": "Consumer spending continues to drive economic growth.",
                  "abstract": "",
                  "uri": "nyt://article/d2994ea4-dfe1-51e8-853b-46d4060f6ac1",
                  "url": "https://www.nytimes.com/live/2024/11/01/business/jobs-report-october-economy-election/consumer-spending-continues-to-drive-economic-growth",
                  "byline": "By Ben Casselman",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T08:33:00-04:00",
                  "created_date": "2024-11-01T07:00:24-04:00",
                  "published_date": "2024-11-01T07:00:24-04:00",
                  "first_published_date": "2024-11-01T07:00:24-04:00",
                  "material_type_facet": "Live Blog Post",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": []
              },
              {
                  "slug_name": "01jobs-report-fed",
                  "section": "Business",
                  "subsection": "",
                  "title": "Jobs Data Come as the Fed Stares Down a Complex Moment",
                  "abstract": "Growth has been resilient, but inflation is cooling. The combination makes it hard to guess how much policymakers will lower rates.",
                  "uri": "nyt://article/a5f0ac87-6f08-5c75-a80a-f7bfd459d55b",
                  "url": "https://www.nytimes.com/2024/11/01/business/jobs-federal-reserve-interest-rates.html",
                  "byline": "By Jeanna Smialek",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T06:35:30-04:00",
                  "created_date": "2024-11-01T06:35:30-04:00",
                  "published_date": "2024-11-01T06:35:30-04:00",
                  "first_published_date": "2024-11-01T06:35:30-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Interest Rates",
                      "Inflation (Economics)",
                      "United States Economy"
                  ],
                  "org_facet": [
                      "Federal Reserve System"
                  ],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01jobs-report-fed-01-pmwv/01jobs-report-fed-01-pmwv-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jerome Powell, the Federal Reserve chair. Fed officials cut interest rates in September for the first time in four years.",
                          "copyright": "Pete Marovich for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01jobs-report-fed-01-pmwv/01jobs-report-fed-01-pmwv-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jerome Powell, the Federal Reserve chair. Fed officials cut interest rates in September for the first time in four years.",
                          "copyright": "Pete Marovich for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01jobs-report-fed-01-pmwv/01jobs-report-fed-01-pmwv-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jerome Powell, the Federal Reserve chair. Fed officials cut interest rates in September for the first time in four years.",
                          "copyright": "Pete Marovich for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01jobs-report-fed-01-pmwv/01jobs-report-fed-01-pmwv-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jerome Powell, the Federal Reserve chair. Fed officials cut interest rates in September for the first time in four years.",
                          "copyright": "Pete Marovich for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "01jobs-report-election",
                  "section": "Business",
                  "subsection": "",
                  "title": "Election Uncertainty Looms Over Hiring",
                  "abstract": "Some employers say they have been wary to expand until the outcome of the presidential election is known.",
                  "uri": "nyt://article/4a0d4256-f5fc-52e9-8f8c-6f58d608ab8b",
                  "url": "https://www.nytimes.com/2024/11/01/business/election-uncertainty-jobs-economy.html",
                  "byline": "By Danielle Kaye",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T05:53:19-04:00",
                  "created_date": "2024-11-01T05:53:19-04:00",
                  "published_date": "2024-11-01T05:53:19-04:00",
                  "first_published_date": "2024-11-01T05:53:19-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Hiring and Promotion",
                      "Labor and Jobs",
                      "United States Economy"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/09/05/multimedia/01jobs-report-election-jtwl/JOBS-BLOG-01-jtwl-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A dip in business activity tied to election uncertainty could have made companies less eager to hire.",
                          "copyright": "Scott McIntyre for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/09/05/multimedia/01jobs-report-election-jtwl/JOBS-BLOG-01-jtwl-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A dip in business activity tied to election uncertainty could have made companies less eager to hire.",
                          "copyright": "Scott McIntyre for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/09/05/multimedia/01jobs-report-election-jtwl/JOBS-BLOG-01-jtwl-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A dip in business activity tied to election uncertainty could have made companies less eager to hire.",
                          "copyright": "Scott McIntyre for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/09/05/multimedia/01jobs-report-election-jtwl/JOBS-BLOG-01-jtwl-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A dip in business activity tied to election uncertainty could have made companies less eager to hire.",
                          "copyright": "Scott McIntyre for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "01jobs",
                  "section": "Business",
                  "subsection": "Economy",
                  "title": "Storms and Strikes Take a Toll on Pre-election Jobs Report",
                  "abstract": "U.S. payrolls grew by only 12,000 in October, a figure that left markets placid but fueled political contention. Unemployment remained 4.1 percent.",
                  "uri": "nyt://article/734acf71-3683-50b4-ae98-ed88f5900ecc",
                  "url": "https://www.nytimes.com/2024/11/01/business/economy/jobs-report-october.html",
                  "byline": "By Lydia DePillis",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T14:14:46-04:00",
                  "created_date": "2024-11-01T05:53:19-04:00",
                  "published_date": "2024-11-01T05:53:19-04:00",
                  "first_published_date": "2024-11-01T05:53:19-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Labor and Jobs",
                      "Layoffs and Job Reductions",
                      "Hurricanes and Tropical Storms",
                      "Strikes",
                      "United States Economy",
                      "Unemployment",
                      "Hiring and Promotion",
                      "Inflation (Economics)",
                      "Interest Rates"
                  ],
                  "org_facet": [
                      "Labor Department (US)"
                  ],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/2024-10-31-jobs-monthly-growth-index/2024-10-31-jobs-monthly-growth-index-thumbStandard-v4.png",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Karl Russell"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/2024-10-31-jobs-monthly-growth-index/2024-10-31-jobs-monthly-growth-index-mediumThreeByTwo210-v4.png",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Karl Russell"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/2024-10-31-jobs-monthly-growth-index/2024-10-31-jobs-monthly-growth-index-mediumThreeByTwo440-v4.png",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Karl Russell"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/2024-10-31-jobs-monthly-growth-index/2024-10-31-jobs-monthly-growth-index-articleInline-v4.png",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Karl Russell"
                      }
                  ]
              },
              {
                  "slug_name": "01china-shock",
                  "section": "Business",
                  "subsection": "Economy",
                  "title": "Why There’s Hope for U.S. Factory Towns Laid Low by the ‘China Shock’",
                  "abstract": "Communities that suffered the worst of plant closings in recent decades are now gaining an outsize share of fresh investment and new jobs.",
                  "uri": "nyt://article/0838f786-8fc5-5111-8e03-e33acef83fd8",
                  "url": "https://www.nytimes.com/2024/11/01/business/economy/china-us-trade-tariffs.html",
                  "byline": "By Peter S. Goodman",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T05:40:44-04:00",
                  "created_date": "2024-11-01T05:03:09-04:00",
                  "published_date": "2024-11-01T05:03:09-04:00",
                  "first_published_date": "2024-11-01T05:03:09-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Factories and Manufacturing",
                      "International Trade and World Market",
                      "United States Economy",
                      "Electric and Hybrid Vehicles",
                      "Presidential Election of 2024",
                      "Economic Conditions and Trends"
                  ],
                  "org_facet": [
                      "Brookings Institution"
                  ],
                  "per_facet": [],
                  "geo_facet": [
                      "China",
                      "United States"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/00CHINA-SHOCK-01-zfjk/00CHINA-SHOCK-01-zfjk-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Wolfspeed, a company that makes raw materials for computer chips used in electric vehicles, is building a plant in Siler City, N.C.",
                          "copyright": "Sebastian Siadecki for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/00CHINA-SHOCK-01-zfjk/00CHINA-SHOCK-01-zfjk-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Wolfspeed, a company that makes raw materials for computer chips used in electric vehicles, is building a plant in Siler City, N.C.",
                          "copyright": "Sebastian Siadecki for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/00CHINA-SHOCK-01-zfjk/00CHINA-SHOCK-01-zfjk-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Wolfspeed, a company that makes raw materials for computer chips used in electric vehicles, is building a plant in Siler City, N.C.",
                          "copyright": "Sebastian Siadecki for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/00CHINA-SHOCK-01-zfjk/00CHINA-SHOCK-01-zfjk-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Wolfspeed, a company that makes raw materials for computer chips used in electric vehicles, is building a plant in Siler City, N.C.",
                          "copyright": "Sebastian Siadecki for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "01dc-working-class-econ",
                  "section": "Business",
                  "subsection": "Economy",
                  "title": "Working-Class Voters Are Pivotal. Both Candidates Are Vying for Their Support.",
                  "abstract": "Kamala Harris’s plans offer a bigger boost for the working class, but Donald Trump seems to be convincing voters.",
                  "uri": "nyt://article/38be62a1-f9c6-5de6-95f1-d8238d97d192",
                  "url": "https://www.nytimes.com/2024/11/01/business/economy/harris-economy-working-class-voters.html",
                  "byline": "By Jeanna Smialek",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T17:08:30-04:00",
                  "created_date": "2024-11-01T05:02:34-04:00",
                  "published_date": "2024-11-01T05:02:34-04:00",
                  "first_published_date": "2024-11-01T05:02:34-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Presidential Election of 2024",
                      "Income Inequality",
                      "United States Politics and Government",
                      "United States Economy",
                      "Polls and Public Opinion",
                      "Organized Labor",
                      "Federal Budget (US)",
                      "International Trade and World Market"
                  ],
                  "org_facet": [
                      "Democratic Party",
                      "International Brotherhood of Teamsters",
                      "Republican Party"
                  ],
                  "per_facet": [
                      "Harris, Kamala D",
                      "Trump, Donald J"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/DC-WORKINGClassEcon-07-wgbt/DC-WORKINGClassEcon-07-wgbt-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A voting site in Iowa in 2023. After decades of economic backsliding, many working-class voters are eager to hear that significant changes are coming.",
                          "copyright": "Jordan Gale for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/DC-WORKINGClassEcon-07-wgbt/DC-WORKINGClassEcon-06-wgbt-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A voting site in Iowa in 2023. After decades of economic backsliding, many working-class voters are eager to hear that significant changes are coming.",
                          "copyright": "Jordan Gale for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/DC-WORKINGClassEcon-07-wgbt/DC-WORKINGClassEcon-06-wgbt-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A voting site in Iowa in 2023. After decades of economic backsliding, many working-class voters are eager to hear that significant changes are coming.",
                          "copyright": "Jordan Gale for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/DC-WORKINGClassEcon-07-wgbt/DC-WORKINGClassEcon-06-wgbt-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A voting site in Iowa in 2023. After decades of economic backsliding, many working-class voters are eager to hear that significant changes are coming.",
                          "copyright": "Jordan Gale for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "01shoptalk-reference-price",
                  "section": "Business",
                  "subsection": "",
                  "title": "When the Price of Your Burrito Clashes With Your ‘Reference Price’",
                  "abstract": "The term refers to what we have internalized as the fair price for a product or service. It’s often out of sync with what things now actually cost.",
                  "uri": "nyt://article/c937a99e-0da9-5364-97ac-a9312dea8ada",
                  "url": "https://www.nytimes.com/2024/11/01/business/inflation-reference-price-food.html",
                  "byline": "By Talmon Joseph Smith",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T09:52:04-04:00",
                  "created_date": "2024-11-01T05:00:50-04:00",
                  "published_date": "2024-11-01T05:00:50-04:00",
                  "first_published_date": "2024-11-01T05:00:50-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Prices (Fares, Fees and Rates)",
                      "United States Economy",
                      "Inflation (Economics)",
                      "Economics (Theory and Philosophy)",
                      "Consumer Behavior",
                      "Restaurants"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Thaler, Richard H"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/business/01shoptalk-reference-price-illo/01shoptalk-reference-price-illo-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Cristina Spanò"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/business/01shoptalk-reference-price-illo/01shoptalk-reference-price-illo-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Cristina Spanò"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/business/01shoptalk-reference-price-illo/01shoptalk-reference-price-illo-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Cristina Spanò"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/business/01shoptalk-reference-price-illo/01shoptalk-reference-price-illo-articleInline.jpg",
                          "format": "Normal",
                          "height": 191,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Cristina Spanò"
                      }
                  ]
              },
              {
                  "slug_name": "31anti-dei",
                  "section": "Business",
                  "subsection": "",
                  "title": "The Anti-D.E.I. Agitator That Big Companies Fear Most",
                  "abstract": "From his home in Tennessee, the social media rabble-rouser Robby Starbuck is waging war on “woke” policies at places like Lowe’s and Ford. His timing is impeccable.",
                  "uri": "nyt://article/04ff5548-da36-5232-bed9-e67ca31b18c2",
                  "url": "https://www.nytimes.com/2024/11/01/business/dei-robby-starbuck.html",
                  "byline": "By David Segal",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T17:32:37-04:00",
                  "created_date": "2024-11-01T05:00:50-04:00",
                  "published_date": "2024-11-01T05:00:50-04:00",
                  "first_published_date": "2024-11-01T05:00:50-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "audio-neutral-informative",
                      "audio-neutral-immersive"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/multimedia/31ANTI-DEI-01-tcwg/31ANTI-DEI-01-tcwg-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Robby Starbuck in his home studio outside of Nashville.",
                          "copyright": "Eric Ryan Anderson for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/multimedia/31ANTI-DEI-01-tcwg/31ANTI-DEI-01-tcwg-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Robby Starbuck in his home studio outside of Nashville.",
                          "copyright": "Eric Ryan Anderson for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/multimedia/31ANTI-DEI-01-tcwg/31ANTI-DEI-01-tcwg-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Robby Starbuck in his home studio outside of Nashville.",
                          "copyright": "Eric Ryan Anderson for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/03/multimedia/31ANTI-DEI-01-tcwg/31ANTI-DEI-01-tcwg-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Robby Starbuck in his home studio outside of Nashville.",
                          "copyright": "Eric Ryan Anderson for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "01california-racing",
                  "section": "Business",
                  "subsection": "",
                  "title": "Breeders’ Cup Arrives in California, Where Horse Racing Is Struggling",
                  "abstract": "The state looms large in the sport’s history, and its tracks are stunning. But horse racing in California is going broke.",
                  "uri": "nyt://article/c500f53a-9ba4-5522-b2ab-8621f4cb401f",
                  "url": "https://www.nytimes.com/2024/11/01/business/breeders-cup-horse-racing-gambling.html",
                  "byline": "By Joe Drape",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T03:00:26-04:00",
                  "created_date": "2024-11-01T03:00:26-04:00",
                  "published_date": "2024-11-01T03:00:26-04:00",
                  "first_published_date": "2024-11-01T03:00:26-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Horse Racing",
                      "Breeders' Cup (Horse Races)",
                      "Gambling",
                      "Animal Abuse, Rights and Welfare"
                  ],
                  "org_facet": [
                      "California Horse Racing Board",
                      "Del Mar Racetrack",
                      "Santa Anita Park (Calif)",
                      "Jockey Club, The"
                  ],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01california-racing-hp-btlv/01california-racing-hp-btlv-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Alex Welsh for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01california-racing-hp-btlv/01california-racing-hp-btlv-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Alex Welsh for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01california-racing-hp-btlv/01california-racing-hp-btlv-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Alex Welsh for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01california-racing-hp-btlv/01california-racing-hp-btlv-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Alex Welsh for The New York Times"
                      }
                  ]
              }
          ]
      },
      {
          "status": "OK",
          "copyright": "Copyright (c) 2024 The New York Times Company.  All Rights Reserved.",
          "num_results": 20,
          "results": [
              {
                  "slug_name": "02ONTHEJOB-SANITATION",
                  "section": "Food",
                  "subsection": "",
                  "title": "What Happens to All Your Compost? Meet the Person Who Handles It.",
                  "abstract": "For the latest episode of “On the Job,” Priya Krishna spent a night picking up compost with Paul Campbell, who removes thousands of pounds of food waste from New York businesses.",
                  "uri": "nyt://article/56a1b557-5c4a-5d3e-8289-144faa4c19d2",
                  "url": "https://www.nytimes.com/2024/11/02/dining/composting-nyc-sanitation.html",
                  "byline": "By Priya Krishna",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-02T05:02:03-04:00",
                  "created_date": "2024-11-02T05:02:03-04:00",
                  "published_date": "2024-11-02T05:02:03-04:00",
                  "first_published_date": "2024-11-02T05:02:03-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Waste Materials and Disposal",
                      "Compost"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/dining/02OTJ-compost-2/01OTJ-compost-2-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Paul Campbell estimates he collects 12 tons of compost a night. ",
                          "copyright": "Amanda Choy/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/dining/02OTJ-compost-2/01OTJ-compost-2-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Paul Campbell estimates he collects 12 tons of compost a night. ",
                          "copyright": "Amanda Choy/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/dining/02OTJ-compost-2/01OTJ-compost-2-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Paul Campbell estimates he collects 12 tons of compost a night. ",
                          "copyright": "Amanda Choy/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/dining/02OTJ-compost-2/01OTJ-compost-2-articleInline.jpg",
                          "format": "Normal",
                          "height": 107,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Paul Campbell estimates he collects 12 tons of compost a night. ",
                          "copyright": "Amanda Choy/The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "01COOKING-BOILED-EGGS",
                  "section": "Food",
                  "subsection": "",
                  "title": "How Long Does It Take to Boil an Egg?",
                  "abstract": "It depends. Here’s a guide to getting the eggs you’re craving.",
                  "uri": "nyt://article/28f21928-d503-5f13-9153-0435a4a01e47",
                  "url": "https://cooking.nytimes.com/article/how-long-to-boil-eggs",
                  "byline": "By Genevieve Ko",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T17:28:17-04:00",
                  "created_date": "2024-11-01T17:28:17-04:00",
                  "published_date": "2024-11-01T17:28:17-04:00",
                  "first_published_date": "2024-11-01T17:28:17-04:00",
                  "material_type_facet": "NYT Cooking",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Eggs",
                      "Recipes",
                      "Cooking and Cookbooks",
                      "Content Type: Service"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/COOKING-BOILED-EGGS-fqpv/COOKING-BOILED-EGGS-fqpv-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Sang An for The New York Times. Food Stylist: Simon Andrews. Prop Stylist: Paige Hicks."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/COOKING-BOILED-EGGS-fqpv/COOKING-BOILED-EGGS-fqpv-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Sang An for The New York Times. Food Stylist: Simon Andrews. Prop Stylist: Paige Hicks."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/COOKING-BOILED-EGGS-fqpv/COOKING-BOILED-EGGS-fqpv-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Sang An for The New York Times. Food Stylist: Simon Andrews. Prop Stylist: Paige Hicks."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/COOKING-BOILED-EGGS-fqpv/COOKING-BOILED-EGGS-fqpv-articleInline.jpg",
                          "format": "Normal",
                          "height": 285,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Sang An for The New York Times. Food Stylist: Simon Andrews. Prop Stylist: Paige Hicks."
                      }
                  ]
              },
              {
                  "slug_name": "01tanis",
                  "section": "Food",
                  "subsection": "",
                  "title": "This 3-Course Vegetarian Dinner Is Ready to Party",
                  "abstract": "This gorgeous David Tanis spread stars a sweet-tart radicchio salad, and a cheesy polenta bake with herby mushrooms.",
                  "uri": "nyt://article/0f52e789-a449-572e-bb9b-b78bbf300e83",
                  "url": "https://www.nytimes.com/2024/11/01/dining/3-course-vegetarian-dinner-party-menu.html",
                  "byline": "By David Tanis",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T12:09:23-04:00",
                  "created_date": "2024-11-01T12:09:23-04:00",
                  "published_date": "2024-11-01T12:09:23-04:00",
                  "first_published_date": "2024-11-01T12:09:23-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Cooking and Cookbooks",
                      "Farmers' Markets",
                      "Vegetarianism",
                      "Parties (Social)"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/06/multimedia/01TANIS-spread-gjbc/01TANIS-spread-gjbc-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "With a main that’s largely prepared ahead, this menu lets the host relax.",
                          "copyright": "Christopher Testani for The New York Times. Food Stylist: Simon Andrews."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/06/multimedia/01TANIS-spread-gjbc/01TANIS-spread-gjbc-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "With a main that’s largely prepared ahead, this menu lets the host relax.",
                          "copyright": "Christopher Testani for The New York Times. Food Stylist: Simon Andrews."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/06/multimedia/01TANIS-spread-gjbc/01TANIS-spread-gjbc-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "With a main that’s largely prepared ahead, this menu lets the host relax.",
                          "copyright": "Christopher Testani for The New York Times. Food Stylist: Simon Andrews."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/06/multimedia/01TANIS-spread-gjbc/01TANIS-spread-gjbc-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "With a main that’s largely prepared ahead, this menu lets the host relax.",
                          "copyright": "Christopher Testani for The New York Times. Food Stylist: Simon Andrews."
                      }
                  ]
              },
              {
                  "slug_name": "01pour",
                  "section": "Food",
                  "subsection": "Wine, Beer & Cocktails",
                  "title": "How a Tiny Vineyard Along an Interstate May Reshape the Wine Industry",
                  "abstract": "With eight rows of vines in San Francisco and a vision of inclusivity, Christopher Renfro and Project Two Eighty are training the next generation of winemakers.",
                  "uri": "nyt://article/143f3f43-4568-50e4-80ae-a24410d4e77c",
                  "url": "https://www.nytimes.com/2024/11/01/dining/drinks/project-two-eighty-san-francisco-wine-industry.html",
                  "byline": "By Eric Asimov",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T05:04:02-04:00",
                  "created_date": "2024-11-01T05:04:02-04:00",
                  "published_date": "2024-11-01T05:04:02-04:00",
                  "first_published_date": "2024-11-01T05:04:02-04:00",
                  "material_type_facet": "News",
                  "kicker": "The Pour",
                  "subheadline": "",
                  "des_facet": [
                      "Wines",
                      "Agriculture and Farming",
                      "Black People",
                      "Content Type: Personal Profile"
                  ],
                  "org_facet": [
                      "Two Eighty Project (Nonprofit)"
                  ],
                  "per_facet": [
                      "Renfro, Christopher (1982- )"
                  ],
                  "geo_facet": [
                      "Bernal Heights (San Francisco, Calif)",
                      "San Francisco (Calif)",
                      "California"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01pour-5-03-cgfq/01pour-5-03-cgfq-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Ms. Manzana and Mr. Renfro at Alemany Farm.",
                          "copyright": "Carolyn Fong for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01pour-5-03-cgfq/01pour-5-03-cgfq-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Ms. Manzana and Mr. Renfro at Alemany Farm.",
                          "copyright": "Carolyn Fong for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01pour-5-03-cgfq/01pour-5-03-cgfq-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Ms. Manzana and Mr. Renfro at Alemany Farm.",
                          "copyright": "Carolyn Fong for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01pour-5-03-cgfq/01pour-5-03-cgfq-articleInline.jpg",
                          "format": "Normal",
                          "height": 285,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Ms. Manzana and Mr. Renfro at Alemany Farm.",
                          "copyright": "Carolyn Fong for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "01kwame",
                  "section": "Food",
                  "subsection": "",
                  "title": "Kwame Onwuachi Is a Whole New Kind of Celebrity Chef",
                  "abstract": "With a raft of endorsement deals, star appearances and a new restaurant in Washington, he’s won fame and clout that stretch far beyond the kitchen.",
                  "uri": "nyt://article/8e85f751-2dbd-52ea-a10e-9ff1d9c84aed",
                  "url": "https://www.nytimes.com/2024/11/01/dining/kwame-onwuachi.html",
                  "byline": "By Pete Wells",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T05:03:59-04:00",
                  "created_date": "2024-11-01T05:03:59-04:00",
                  "published_date": "2024-11-01T05:03:59-04:00",
                  "first_published_date": "2024-11-01T05:03:59-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Chefs",
                      "Restaurants",
                      "Content Type: Personal Profile",
                      "Celebrities",
                      "Black People"
                  ],
                  "org_facet": [
                      "Tatiana by Kwame Onwuachi (Manhattan, NY, Restaurant)",
                      "Dogon (Washington, DC, Restaurant)"
                  ],
                  "per_facet": [
                      "Onwuachi, Kwame"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31kwame-05-qjbp/31kwame-05-qjbp-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Mr. Onwuachi’s menus trace the global paths of the African diaspora.",
                          "copyright": "Scott Suchman for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31kwame-05-qjbp/31kwame-05-qjbp-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Mr. Onwuachi’s menus trace the global paths of the African diaspora.",
                          "copyright": "Scott Suchman for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31kwame-05-qjbp/31kwame-05-qjbp-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Mr. Onwuachi’s menus trace the global paths of the African diaspora.",
                          "copyright": "Scott Suchman for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31kwame-05-qjbp/31kwame-05-qjbp-articleInline.jpg",
                          "format": "Normal",
                          "height": 285,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Mr. Onwuachi’s menus trace the global paths of the African diaspora.",
                          "copyright": "Scott Suchman for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "31wte-pizza-WEB",
                  "section": "Food",
                  "subsection": "",
                  "title": "New York Pizzas to Add to Your Must-Eat List",
                  "abstract": "The old-school pizzerias at the top of their game.",
                  "uri": "nyt://article/c2467cd4-6573-579e-8689-965a32f48a1a",
                  "url": "https://www.nytimes.com/2024/10/31/dining/new-york-pizzas-to-add-to-your-must-eat-list.html",
                  "byline": "By Nikita Richardson",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T16:00:02-04:00",
                  "created_date": "2024-10-31T16:00:02-04:00",
                  "published_date": "2024-10-31T16:00:02-04:00",
                  "first_published_date": "2024-10-31T16:00:02-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Restaurants"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [
                      "New York City"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/06/multimedia/06wte-pizza-Lucia-jtfv/31wte-pizza-Lucia-jtfv-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Heather Willensky for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/06/multimedia/06wte-pizza-Lucia-jtfv/31wte-pizza-Lucia-jtfv-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Heather Willensky for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/06/multimedia/06wte-pizza-Lucia-jtfv/31wte-pizza-Lucia-jtfv-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Heather Willensky for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/06/multimedia/06wte-pizza-Lucia-jtfv/31wte-pizza-Lucia-jtfv-articleInline.jpg",
                          "format": "Normal",
                          "height": 285,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Heather Willensky for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "31CONTRAMAR-FISH",
                  "section": "Food",
                  "subsection": "",
                  "title": "What’s Red and Green and Served All Over?",
                  "abstract": "Since the Mexico City restaurant Contramar turned a classic fish dish into a go-to entree, versions have popped up from Milwaukee to Greece.",
                  "uri": "nyt://article/0f86a4db-099e-57c1-83af-5c796e8fe4e6",
                  "url": "https://www.nytimes.com/2024/10/31/dining/mexico-city-contramar-fish-dish.html",
                  "byline": "By Priya Krishna",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T15:21:08-04:00",
                  "created_date": "2024-10-31T15:21:08-04:00",
                  "published_date": "2024-10-31T15:21:08-04:00",
                  "first_published_date": "2024-10-31T15:21:08-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Chefs",
                      "Seafood",
                      "Restaurants",
                      "Mexican Food (Cuisine)"
                  ],
                  "org_facet": [
                      "Contramar (Mexico City, Mexico, Restaurant)"
                  ],
                  "per_facet": [
                      "Camara, Gabriela"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31CONTRAMAR-FISH-5-qmkt/31CONTRAMAR-FISH-5-qmkt-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Contramar’s chef, Gabriela Cámara, updated the classic coastal Mexican dish by painting half the fish with a red adobo and half with parsley sauce.",
                          "copyright": "Benedicte Desrus for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31CONTRAMAR-FISH-5-qmkt/31CONTRAMAR-FISH-5-qmkt-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Contramar’s chef, Gabriela Cámara, updated the classic coastal Mexican dish by painting half the fish with a red adobo and half with parsley sauce.",
                          "copyright": "Benedicte Desrus for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31CONTRAMAR-FISH-5-qmkt/31CONTRAMAR-FISH-5-qmkt-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Contramar’s chef, Gabriela Cámara, updated the classic coastal Mexican dish by painting half the fish with a red adobo and half with parsley sauce.",
                          "copyright": "Benedicte Desrus for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31CONTRAMAR-FISH-5-qmkt/31CONTRAMAR-FISH-5-qmkt-articleInline.jpg",
                          "format": "Normal",
                          "height": 285,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Contramar’s chef, Gabriela Cámara, updated the classic coastal Mexican dish by painting half the fish with a red adobo and half with parsley sauce.",
                          "copyright": "Benedicte Desrus for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "31theveggie-WEB",
                  "section": "Food",
                  "subsection": "",
                  "title": "Delicious Costumes for Your Vegetables",
                  "abstract": "Dress up your cabbage as chicken Parm, or your tofu as zippy lemon-pepper wings.",
                  "uri": "nyt://article/70578d58-71df-52d7-89db-7e843cac4c16",
                  "url": "https://www.nytimes.com/2024/10/31/dining/lemon-pepper-tofu-vegetarian-recipes.html",
                  "byline": "By Tanya Sichynsky",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T13:00:15-04:00",
                  "created_date": "2024-10-31T13:00:15-04:00",
                  "published_date": "2024-10-31T13:00:15-04:00",
                  "first_published_date": "2024-10-31T13:00:15-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Cooking and Cookbooks",
                      "Content Type: Service",
                      "Recipes"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/09/04/multimedia/AS-Lemon-Pepper-Tofu-Snap-Peasrex-gzqh-copy/AS-Lemon-Pepper-Tofu-Snap-Peasrex-gzqh-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Ali Slagle’s lemon-pepper tofu and snap peas.",
                          "copyright": "Julia Gartland for The New York Times. Food Stylist: Samantha Seneviratne."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/09/04/multimedia/AS-Lemon-Pepper-Tofu-Snap-Peasrex-gzqh-copy/AS-Lemon-Pepper-Tofu-Snap-Peasrex-gzqh-mediumThreeByTwo210-v2.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Ali Slagle’s lemon-pepper tofu and snap peas.",
                          "copyright": "Julia Gartland for The New York Times. Food Stylist: Samantha Seneviratne."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/09/04/multimedia/AS-Lemon-Pepper-Tofu-Snap-Peasrex-gzqh-copy/AS-Lemon-Pepper-Tofu-Snap-Peasrex-gzqh-mediumThreeByTwo440-v2.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Ali Slagle’s lemon-pepper tofu and snap peas.",
                          "copyright": "Julia Gartland for The New York Times. Food Stylist: Samantha Seneviratne."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/09/04/multimedia/AS-Lemon-Pepper-Tofu-Snap-Peasrex-gzqh-copy/AS-Lemon-Pepper-Tofu-Snap-Peasrex-gzqh-articleInline-v2.jpg",
                          "format": "Normal",
                          "height": 121,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Ali Slagle’s lemon-pepper tofu and snap peas.",
                          "copyright": "Julia Gartland for The New York Times. Food Stylist: Samantha Seneviratne."
                      }
                  ]
              },
              {
                  "slug_name": "31cookletter-WEB",
                  "section": "Food",
                  "subsection": "",
                  "title": "The Pierre Franey Turkey Chili",
                  "abstract": "Five stars, over 17,000 ratings, one hour, perfect chili.",
                  "uri": "nyt://article/01bb7c7b-3f60-57c0-95bb-58b0eeb8bd87",
                  "url": "https://www.nytimes.com/2024/10/31/dining/the-pierre-franey-turkey-chili.html",
                  "byline": "By Mia Leimkuhler",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T11:00:04-04:00",
                  "created_date": "2024-10-31T11:00:04-04:00",
                  "published_date": "2024-10-31T11:00:04-04:00",
                  "first_published_date": "2024-10-31T11:00:04-04:00",
                  "material_type_facet": "Letter",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Cooking and Cookbooks",
                      "Content Type: Service"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2023/01/29/multimedia/29souprex-chili-qfjz-copy/29souprex-chili-qfjz-copy-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Armando Rafael for The New York Times. Food Stylist: Simon Andrews. Prop Stylist: Paige Hicks."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2023/01/29/multimedia/29souprex-chili-qfjz-copy/29souprex-chili-qfjz-copy-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Armando Rafael for The New York Times. Food Stylist: Simon Andrews. Prop Stylist: Paige Hicks."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2023/01/29/multimedia/29souprex-chili-qfjz-copy/29souprex-chili-qfjz-copy-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Armando Rafael for The New York Times. Food Stylist: Simon Andrews. Prop Stylist: Paige Hicks."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2023/01/29/multimedia/29souprex-chili-qfjz-copy/29souprex-chili-qfjz-copy-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Armando Rafael for The New York Times. Food Stylist: Simon Andrews. Prop Stylist: Paige Hicks."
                      }
                  ]
              },
              {
                  "slug_name": "31ADHD",
                  "section": "Food",
                  "subsection": "",
                  "title": "Cooking With A.D.H.D. Can Be Overwhelming. These Cooks Are Finding Ways to Thrive.",
                  "abstract": "The disorder, which affects executive function, can cause distinct challenges in the kitchen, leaving many to develop their own accommodations.",
                  "uri": "nyt://article/3bee9a2a-0e85-556b-96cc-32d3644fe9c7",
                  "url": "https://www.nytimes.com/2024/10/31/dining/adhd-cooking.html",
                  "byline": "By Korsha Wilson",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T05:02:25-04:00",
                  "created_date": "2024-10-31T05:02:25-04:00",
                  "published_date": "2024-10-31T05:02:25-04:00",
                  "first_published_date": "2024-10-31T05:02:25-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Disabilities",
                      "Attention Deficit Hyperactivity Disorder",
                      "Cooking and Cookbooks",
                      "Brain"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/29ADHD-01-zwlp/29ADHD-01-zwlp-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "For Linda Yi, recording recipes in a creative way, instead of relying on memory, became central to helping her in the kitchen.",
                          "copyright": "Nico Schinco for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/29ADHD-01-zwlp/29ADHD-01-zwlp-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "For Linda Yi, recording recipes in a creative way, instead of relying on memory, became central to helping her in the kitchen.",
                          "copyright": "Nico Schinco for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/29ADHD-01-zwlp/29ADHD-01-zwlp-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "For Linda Yi, recording recipes in a creative way, instead of relying on memory, became central to helping her in the kitchen.",
                          "copyright": "Nico Schinco for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/29ADHD-01-zwlp/29ADHD-01-zwlp-articleInline.jpg",
                          "format": "Normal",
                          "height": 136,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "For Linda Yi, recording recipes in a creative way, instead of relying on memory, became central to helping her in the kitchen.",
                          "copyright": "Nico Schinco for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "30cookletter-WEB",
                  "section": "Food",
                  "subsection": "",
                  "title": "Beautiful Badam Burfi Bark for Diwali",
                  "abstract": "And for Halloween: sheet pan chicken and cheesy broccoli to fuel your trick-or-treaters.",
                  "uri": "nyt://article/257ac3b8-3ebf-51ad-880b-5ec87f0488f8",
                  "url": "https://www.nytimes.com/2024/10/30/dining/diwali-badam-burfi-bark.html",
                  "byline": "By Melissa Clark",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-30T16:57:26-04:00",
                  "created_date": "2024-10-30T11:00:09-04:00",
                  "published_date": "2024-10-30T11:00:09-04:00",
                  "first_published_date": "2024-10-30T11:00:09-04:00",
                  "material_type_facet": "Letter",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Cooking and Cookbooks",
                      "Content Type: Service"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/23/multimedia/DIWALI-SWEETSREX2-badam-burfi-bark-gbvq-copy/DIWALI-SWEETSREX2-badam-burfi-bark-gbvq-thumbStandard-v2.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Hetal Vasavada’s badam burfi bark, adapted by Priya Krishna.",
                          "copyright": "Armando Rafael for The New York Times. Food Stylist: Samantha Seneviratne."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/23/multimedia/DIWALI-SWEETSREX2-badam-burfi-bark-gbvq-copy/DIWALI-SWEETSREX2-badam-burfi-bark-gbvq-mediumThreeByTwo210-v2.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Hetal Vasavada’s badam burfi bark, adapted by Priya Krishna.",
                          "copyright": "Armando Rafael for The New York Times. Food Stylist: Samantha Seneviratne."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/23/multimedia/DIWALI-SWEETSREX2-badam-burfi-bark-gbvq-copy/DIWALI-SWEETSREX2-badam-burfi-bark-gbvq-mediumThreeByTwo440-v2.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Hetal Vasavada’s badam burfi bark, adapted by Priya Krishna.",
                          "copyright": "Armando Rafael for The New York Times. Food Stylist: Samantha Seneviratne."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/23/multimedia/DIWALI-SWEETSREX2-badam-burfi-bark-gbvq-copy/DIWALI-SWEETSREX2-badam-burfi-bark-gbvq-articleInline-v2.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Hetal Vasavada’s badam burfi bark, adapted by Priya Krishna.",
                          "copyright": "Armando Rafael for The New York Times. Food Stylist: Samantha Seneviratne."
                      }
                  ]
              },
              {
                  "slug_name": "29Off",
                  "section": "Food",
                  "subsection": "",
                  "title": "Regional Indian Flavors in the Flatiron District",
                  "abstract": "The great New York outdoors inspires a new Brooklyn restaurant, New England seafood at Smithereens and more restaurant news.",
                  "uri": "nyt://article/439e2276-4fc3-5d22-870c-1f1b6f3dae32",
                  "url": "https://www.nytimes.com/2024/10/29/dining/passerine-restaurant-opening-flatiron.html",
                  "byline": "By Florence Fabricant",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-29T14:42:36-04:00",
                  "created_date": "2024-10-29T14:42:36-04:00",
                  "published_date": "2024-10-29T14:42:36-04:00",
                  "first_published_date": "2024-10-29T14:42:36-04:00",
                  "material_type_facet": "News",
                  "kicker": "Off the Menu",
                  "subheadline": "",
                  "des_facet": [
                      "Restaurants"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [
                      "New York City"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/dining/30Off-Passerine/29Off-Passerine-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The chicken kofta at Passerine includes shaved truffle.",
                          "copyright": "via Passerine"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/dining/30Off-Passerine/29Off-Passerine-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The chicken kofta at Passerine includes shaved truffle.",
                          "copyright": "via Passerine"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/dining/30Off-Passerine/29Off-Passerine-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The chicken kofta at Passerine includes shaved truffle.",
                          "copyright": "via Passerine"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/dining/30Off-Passerine/29Off-Passerine-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The chicken kofta at Passerine includes shaved truffle.",
                          "copyright": "via Passerine"
                      }
                  ]
              },
              {
                  "slug_name": "29weeknight-web",
                  "section": "Food",
                  "subsection": "",
                  "title": "Gnocchi’s Crispy — Let’s Eat",
                  "abstract": "“I’m always impressed with simple recipes that taste this good.”",
                  "uri": "nyt://article/f742e372-0237-5800-9a11-72b86f155d03",
                  "url": "https://www.nytimes.com/2024/10/29/dining/gnocchis-crispy-lets-eat.html",
                  "byline": "By Ali Slagle",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-29T11:00:02-04:00",
                  "created_date": "2024-10-29T11:00:02-04:00",
                  "published_date": "2024-10-29T11:00:02-04:00",
                  "first_published_date": "2024-10-29T11:00:02-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Cooking and Cookbooks",
                      "Content Type: Service",
                      "Recipes"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/16/multimedia/AS-Sheet-pan-gnocchi-with-sausage-and-broccolirex-ljvf-copy-nl/AS-Sheet-pan-gnocchi-with-sausage-and-broccolirex-ljvf-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Kerri Brewer for The New York Times. Food Stylist: Barrett Washburne."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/16/multimedia/AS-Sheet-pan-gnocchi-with-sausage-and-broccolirex-ljvf-copy-nl/AS-Sheet-pan-gnocchi-with-sausage-and-broccolirex-ljvf-mediumThreeByTwo210-v2.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Kerri Brewer for The New York Times. Food Stylist: Barrett Washburne."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/16/multimedia/AS-Sheet-pan-gnocchi-with-sausage-and-broccolirex-ljvf-copy-nl/AS-Sheet-pan-gnocchi-with-sausage-and-broccolirex-ljvf-mediumThreeByTwo440-v2.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Kerri Brewer for The New York Times. Food Stylist: Barrett Washburne."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/16/multimedia/AS-Sheet-pan-gnocchi-with-sausage-and-broccolirex-ljvf-copy-nl/AS-Sheet-pan-gnocchi-with-sausage-and-broccolirex-ljvf-articleInline-v2.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Kerri Brewer for The New York Times. Food Stylist: Barrett Washburne."
                      }
                  ]
              },
              {
                  "slug_name": "29best-pizza",
                  "section": "Food",
                  "subsection": "",
                  "title": "The 25 Best Pizza Places in New York Right Now",
                  "abstract": "Some of the city’s most famous pies didn’t make the list, while some unexpected spots delivered superlative examples of the form.",
                  "uri": "nyt://article/82d2fd1c-9487-5d6e-a2cf-19e2c8741e18",
                  "url": "https://www.nytimes.com/article/best-nyc-pizza-pizzeria.html",
                  "byline": "By Sara Bonisteel, Priya Krishna, Nikita Richardson, Korsha Wilson and Heather Willensky For The New York Times",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-29T12:12:18-04:00",
                  "created_date": "2024-10-29T05:02:22-04:00",
                  "published_date": "2024-10-29T05:02:22-04:00",
                  "first_published_date": "2024-10-29T05:02:22-04:00",
                  "material_type_facet": "News",
                  "kicker": "Where to Eat",
                  "subheadline": "",
                  "des_facet": [
                      "Pizza",
                      "Restaurants",
                      "Content Type: Service"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [
                      "New York City"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/29best-pizza26-pwfv/29best-pizza26-pwfv-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/29best-pizza26-pwfv/29best-pizza26-pwfv-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/29best-pizza26-pwfv/29best-pizza26-pwfv-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/29best-pizza26-pwfv/29best-pizza26-pwfv-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      }
                  ]
              },
              {
                  "slug_name": "28KO-ELECTION-COOKIE",
                  "section": "Food",
                  "subsection": "",
                  "title": "A Cookie Designed for Election Day Baking",
                  "abstract": "Rich with browned butter pecans and chewy with oats, these foolproof cookies are the perfect thing to make — and eat — while results roll in.",
                  "uri": "nyt://article/f7efa6d7-0132-594f-9b95-73b5f5119b1f",
                  "url": "https://www.nytimes.com/2024/10/28/dining/chewy-brown-butter-cookies-election-day.html",
                  "byline": "By Genevieve Ko",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T12:53:09-04:00",
                  "created_date": "2024-10-28T16:19:09-04:00",
                  "published_date": "2024-10-28T16:19:09-04:00",
                  "first_published_date": "2024-10-28T16:19:09-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Cookies",
                      "Cooking and Cookbooks"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28KO-Election-Cookie1-ctfq/28KO-Election-Cookie1-ctfq-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Johnny Miller for The New York Times. Food Stylist: Vivian Lui."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28KO-Election-Cookie1-ctfq/28KO-Election-Cookie1-ctfq-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Johnny Miller for The New York Times. Food Stylist: Vivian Lui."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28KO-Election-Cookie1-ctfq/28KO-Election-Cookie1-ctfq-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Johnny Miller for The New York Times. Food Stylist: Vivian Lui."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28KO-Election-Cookie1-ctfq/28KO-Election-Cookie1-ctfq-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Johnny Miller for The New York Times. Food Stylist: Vivian Lui."
                      }
                  ]
              },
              {
                  "slug_name": "28cookletter-web-1",
                  "section": "Food",
                  "subsection": "",
                  "title": "This Three-Ingredient Fish Dish Is Minimalist Magic",
                  "abstract": "Eric Kim’s scallion-oil fish turns olive oil, alliums and white fish fillets into a simple, luscious dinner.",
                  "uri": "nyt://article/1c86ee28-c41c-5c9b-8bc3-8c89729ca2b5",
                  "url": "https://www.nytimes.com/2024/10/28/dining/three-ingredient-fish-recipe.html",
                  "byline": "By Melissa Clark",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-28T11:00:13-04:00",
                  "created_date": "2024-10-28T11:00:13-04:00",
                  "published_date": "2024-10-28T11:00:13-04:00",
                  "first_published_date": "2024-10-28T11:00:13-04:00",
                  "material_type_facet": "Letter",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Cooking and Cookbooks",
                      "Content Type: Service"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/18/multimedia/ek-scallion-oil-fishrex-vzqf-copy-nl/ek-scallion-oil-fishrex-vzqf-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Eric Kim’s scallion-oil fish.",
                          "copyright": "Linda Xiao for The New York Times. Food Stylist: Monica Pierini."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/18/multimedia/ek-scallion-oil-fishrex-vzqf-copy-nl/ek-scallion-oil-fishrex-vzqf-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Eric Kim’s scallion-oil fish.",
                          "copyright": "Linda Xiao for The New York Times. Food Stylist: Monica Pierini."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/18/multimedia/ek-scallion-oil-fishrex-vzqf-copy-nl/ek-scallion-oil-fishrex-vzqf-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Eric Kim’s scallion-oil fish.",
                          "copyright": "Linda Xiao for The New York Times. Food Stylist: Monica Pierini."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/18/multimedia/ek-scallion-oil-fishrex-vzqf-copy-nl/ek-scallion-oil-fishrex-vzqf-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Eric Kim’s scallion-oil fish.",
                          "copyright": "Linda Xiao for The New York Times. Food Stylist: Monica Pierini."
                      }
                  ]
              },
              {
                  "slug_name": "27cookletter-web",
                  "section": "Food",
                  "subsection": "",
                  "title": "This 41-Year-Old Chicken Is Still Going Strong",
                  "abstract": "Craig Claiborne’s smothered chicken is a New York Times Cooking classic, simple to make and ready for improvisations.",
                  "uri": "nyt://article/e614d872-ee15-5a82-a3e7-22baf16fb61a",
                  "url": "https://www.nytimes.com/2024/10/27/dining/smothered-chicken-recipe.html",
                  "byline": "By Sam Sifton",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-27T11:00:03-04:00",
                  "created_date": "2024-10-27T11:00:03-04:00",
                  "published_date": "2024-10-27T11:00:03-04:00",
                  "first_published_date": "2024-10-27T11:00:03-04:00",
                  "material_type_facet": "Letter",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Cooking and Cookbooks",
                      "Content Type: Service"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/07/05/multimedia/Smothered-Chickenrex2-lpgb-copy-nl/Smothered-Chickenrex2-lpgb-thumbStandard-v2.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Craig Claiborne and Pierre Franey’s smothered chicken, adapted by Sam Sifton.",
                          "copyright": "Christopher Testani for The New York Times. Food Stylist: Simon Andrews."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/07/05/multimedia/Smothered-Chickenrex2-lpgb-copy-nl/Smothered-Chickenrex2-lpgb-mediumThreeByTwo210-v2.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Craig Claiborne and Pierre Franey’s smothered chicken, adapted by Sam Sifton.",
                          "copyright": "Christopher Testani for The New York Times. Food Stylist: Simon Andrews."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/07/05/multimedia/Smothered-Chickenrex2-lpgb-copy-nl/Smothered-Chickenrex2-lpgb-mediumThreeByTwo440-v2.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Craig Claiborne and Pierre Franey’s smothered chicken, adapted by Sam Sifton.",
                          "copyright": "Christopher Testani for The New York Times. Food Stylist: Simon Andrews."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/07/05/multimedia/Smothered-Chickenrex2-lpgb-copy-nl/Smothered-Chickenrex2-lpgb-articleInline-v2.jpg",
                          "format": "Normal",
                          "height": 122,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Craig Claiborne and Pierre Franey’s smothered chicken, adapted by Sam Sifton.",
                          "copyright": "Christopher Testani for The New York Times. Food Stylist: Simon Andrews."
                      }
                  ]
              },
              {
                  "slug_name": "26cookletter-web",
                  "section": "Food",
                  "subsection": "",
                  "title": "Peanut Butter Walks Into a Chocolate Cookie Bar",
                  "abstract": "And the result is a rich, fudgy-centered treat that’s somewhere between a cookie and a brownie.",
                  "uri": "nyt://article/ae241252-8f00-5556-b7e4-478cd3dae50a",
                  "url": "https://www.nytimes.com/2024/10/26/dining/peanut-butter-walks-into-a-chocolate-cookie-bar.html",
                  "byline": "By Mia Leimkuhler",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-26T11:00:02-04:00",
                  "created_date": "2024-10-26T11:00:02-04:00",
                  "published_date": "2024-10-26T11:00:02-04:00",
                  "first_published_date": "2024-10-26T11:00:02-04:00",
                  "material_type_facet": "Letter",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Cooking and Cookbooks",
                      "Content Type: Service"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/17/multimedia/MK-chocolate-peanut-butter-barsrex-vkcz-copy-nl/MK-chocolate-peanut-butter-barsrex-vkcz-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Melissa Knific’s chocolate peanut butter bars.",
                          "copyright": "Linda Xiao for The New York Times. Food Stylist: Monica Pierini."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/17/multimedia/MK-chocolate-peanut-butter-barsrex-vkcz-copy-nl/MK-chocolate-peanut-butter-barsrex-vkcz-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Melissa Knific’s chocolate peanut butter bars.",
                          "copyright": "Linda Xiao for The New York Times. Food Stylist: Monica Pierini."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/17/multimedia/MK-chocolate-peanut-butter-barsrex-vkcz-copy-nl/MK-chocolate-peanut-butter-barsrex-vkcz-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Melissa Knific’s chocolate peanut butter bars.",
                          "copyright": "Linda Xiao for The New York Times. Food Stylist: Monica Pierini."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/17/multimedia/MK-chocolate-peanut-butter-barsrex-vkcz-copy-nl/MK-chocolate-peanut-butter-barsrex-vkcz-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Melissa Knific’s chocolate peanut butter bars.",
                          "copyright": "Linda Xiao for The New York Times. Food Stylist: Monica Pierini."
                      }
                  ]
              },
              {
                  "slug_name": "25DIWALI-SWEETS",
                  "section": "Food",
                  "subsection": "",
                  "title": "Mithai Sheds Its Too-Sweet Reputation",
                  "abstract": "Younger South Asian cooks are riffing on these classics, turning them into cookies, pies and ice cream, and (gasp!) adding salt.",
                  "uri": "nyt://article/9bd33c9c-e6a2-5ea5-b833-2935c06c71d0",
                  "url": "https://www.nytimes.com/2024/10/25/dining/diwali-sweets-mithai.html",
                  "byline": "By Priya Krishna",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-25T15:38:16-04:00",
                  "created_date": "2024-10-25T12:00:07-04:00",
                  "published_date": "2024-10-25T12:00:07-04:00",
                  "first_published_date": "2024-10-25T12:00:07-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Diwali (Hindu Festival)",
                      "Cooking and Cookbooks",
                      "Indian Food (Cuisine)"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30DIWALI-SWEETS-01-vlzk/25DIWALI-SWEETS-01-vlzk-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Melted ice cream forms the base of this peda, a fudgy, milky South Asian sweet traditionally made with caramelized milk solids.",
                          "copyright": "Armando Rafael for The New York Times. Food Stylist: Samantha Seneviratne."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30DIWALI-SWEETS-01-vlzk/25DIWALI-SWEETS-01-vlzk-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Melted ice cream forms the base of this peda, a fudgy, milky South Asian sweet traditionally made with caramelized milk solids.",
                          "copyright": "Armando Rafael for The New York Times. Food Stylist: Samantha Seneviratne."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30DIWALI-SWEETS-01-vlzk/25DIWALI-SWEETS-01-vlzk-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Melted ice cream forms the base of this peda, a fudgy, milky South Asian sweet traditionally made with caramelized milk solids.",
                          "copyright": "Armando Rafael for The New York Times. Food Stylist: Samantha Seneviratne."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30DIWALI-SWEETS-01-vlzk/25DIWALI-SWEETS-01-vlzk-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Melted ice cream forms the base of this peda, a fudgy, milky South Asian sweet traditionally made with caramelized milk solids.",
                          "copyright": "Armando Rafael for The New York Times. Food Stylist: Samantha Seneviratne."
                      }
                  ]
              },
              {
                  "slug_name": "25cookletter-WEB",
                  "section": "Food",
                  "subsection": "",
                  "title": "You Don’t Have to Deep-Fry Your Wings",
                  "abstract": "Use Eric Kim’s new recipe for Atlanta-style oven-fried hot wings, sharp and fiery, salty and crisp.",
                  "uri": "nyt://article/e253193d-5b33-57aa-a16e-4b590ed0e4b2",
                  "url": "https://www.nytimes.com/2024/10/25/dining/you-dont-have-to-deep-fry-your-wings.html",
                  "byline": "By Sam Sifton",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-25T11:00:04-04:00",
                  "created_date": "2024-10-25T11:00:04-04:00",
                  "published_date": "2024-10-25T11:00:04-04:00",
                  "first_published_date": "2024-10-25T11:00:04-04:00",
                  "material_type_facet": "Letter",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Cooking and Cookbooks",
                      "Content Type: Service"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/09/27/multimedia/15ATLANTA-WINGSrex-kpfg-copy/15ATLANTA-WINGSrex-kpfg-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Eric Kim’s oven-fried hot wings.",
                          "copyright": "Mark Weinberg for The New York Times. Food Stylist: Monica Pierini."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/09/27/multimedia/15ATLANTA-WINGSrex-kpfg-copy/15ATLANTA-WINGSrex-kpfg-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Eric Kim’s oven-fried hot wings.",
                          "copyright": "Mark Weinberg for The New York Times. Food Stylist: Monica Pierini."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/09/27/multimedia/15ATLANTA-WINGSrex-kpfg-copy/15ATLANTA-WINGSrex-kpfg-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Eric Kim’s oven-fried hot wings.",
                          "copyright": "Mark Weinberg for The New York Times. Food Stylist: Monica Pierini."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/09/27/multimedia/15ATLANTA-WINGSrex-kpfg-copy/15ATLANTA-WINGSrex-kpfg-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Eric Kim’s oven-fried hot wings.",
                          "copyright": "Mark Weinberg for The New York Times. Food Stylist: Monica Pierini."
                      }
                  ]
              }
          ]
      },
      {
          "status": "OK",
          "copyright": "Copyright (c) 2024 The New York Times Company.  All Rights Reserved.",
          "num_results": 20,
          "results": [
              {
                  "slug_name": "01netflix-leaving",
                  "section": "Movies",
                  "subsection": "",
                  "title": "Stream These 9 Titles Before They Leave Netflix This Month",
                  "abstract": "A slew of great movies and TV shows are leaving Netflix for U.S. subscribers in November. Here’s a roundup of the best.",
                  "uri": "nyt://article/89f33b59-b512-53ef-bf62-be3dece07a38",
                  "url": "https://www.nytimes.com/2024/11/01/movies/leaving-netflix-november.html",
                  "byline": "By Jason Bailey",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T14:50:53-04:00",
                  "created_date": "2024-11-01T14:27:01-04:00",
                  "published_date": "2024-11-01T14:27:01-04:00",
                  "first_published_date": "2024-11-01T14:27:01-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Movies",
                      "Television"
                  ],
                  "org_facet": [
                      "Netflix Inc"
                  ],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01netflix-leaving-sausage-party-gvqb/01netflix-leaving-sausage-party-gvqb-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Kristen Wiig and Seth Rogen voice Brenda the bun and Frank the frankfurter in a scene from “Sausage Party.”",
                          "copyright": "Columbia Pictures/Sony Pictures "
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01netflix-leaving-sausage-party-gvqb/01netflix-leaving-sausage-party-gvqb-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Kristen Wiig and Seth Rogen voice Brenda the bun and Frank the frankfurter in a scene from “Sausage Party.”",
                          "copyright": "Columbia Pictures/Sony Pictures "
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01netflix-leaving-sausage-party-gvqb/01netflix-leaving-sausage-party-gvqb-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Kristen Wiig and Seth Rogen voice Brenda the bun and Frank the frankfurter in a scene from “Sausage Party.”",
                          "copyright": "Columbia Pictures/Sony Pictures "
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01netflix-leaving-sausage-party-gvqb/01netflix-leaving-sausage-party-gvqb-articleInline.jpg",
                          "format": "Normal",
                          "height": 103,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Kristen Wiig and Seth Rogen voice Brenda the bun and Frank the frankfurter in a scene from “Sausage Party.”",
                          "copyright": "Columbia Pictures/Sony Pictures "
                      }
                  ]
              },
              {
                  "slug_name": "01blitz-anatomy",
                  "section": "Movies",
                  "subsection": "",
                  "title": "Watch a Nightclub Scene in ‘Blitz’",
                  "abstract": "The writer and director Steve McQueen discusses a sequence set in the Café de Paris in London.",
                  "uri": "nyt://article/05e72d18-bb80-55b9-8628-56249931c51d",
                  "url": "https://www.nytimes.com/2024/11/01/movies/blitz-clip-steve-mcqueen.html",
                  "byline": "By Mekado Murphy",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T13:18:19-04:00",
                  "created_date": "2024-11-01T13:18:19-04:00",
                  "published_date": "2024-11-01T13:18:19-04:00",
                  "first_published_date": "2024-11-01T13:18:19-04:00",
                  "material_type_facet": "News",
                  "kicker": "Anatomy of a Scene",
                  "subheadline": "",
                  "des_facet": [
                      "Movies"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "McQueen, Steve (Filmmaker)",
                      "Celeste (Singer) (1994- )",
                      "Heffernan, Elliott",
                      "Ronan, Saoirse"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/blitz-anatomy-cfth/blitz-anatomy-cfth-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Saoirse Ronan and Elliott Heffernan in “Blitz.”",
                          "copyright": "Apple TV+ "
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/blitz-anatomy-cfth/blitz-anatomy-cfth-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Saoirse Ronan and Elliott Heffernan in “Blitz.”",
                          "copyright": "Apple TV+ "
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/blitz-anatomy-cfth/blitz-anatomy-cfth-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Saoirse Ronan and Elliott Heffernan in “Blitz.”",
                          "copyright": "Apple TV+ "
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/blitz-anatomy-cfth/blitz-anatomy-cfth-articleInline.jpg",
                          "format": "Normal",
                          "height": 107,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Saoirse Ronan and Elliott Heffernan in “Blitz.”",
                          "copyright": "Apple TV+ "
                      }
                  ]
              },
              {
                  "slug_name": "blitz-anatomy",
                  "section": "Movies",
                  "subsection": "",
                  "title": "‘Blitz’ | Anatomy of a Scene",
                  "abstract": "The writer and director Steve McQueen narrates a sequence from his film set in London during World War II.",
                  "uri": "nyt://video/fb418315-267f-59ad-a0d2-33eddc9bbc99",
                  "url": "https://www.nytimes.com/video/movies/100000009795193/blitz-scene.html",
                  "byline": "By Mekado Murphy",
                  "item_type": "Video",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T13:28:22-04:00",
                  "created_date": "2024-11-01T13:13:26-04:00",
                  "published_date": "2024-11-01T13:13:26-04:00",
                  "first_published_date": "2024-11-01T13:13:26-04:00",
                  "material_type_facet": "Video",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Movies"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "McQueen, Steve (Filmmaker)"
                  ],
                  "geo_facet": [],
                  "related_urls": [
                      {
                          "suggested_link_text": "Watch a Nightclub Scene in ‘Blitz’",
                          "url": "https://www.nytimes.com/2024/11/01/movies/blitz-clip-steve-mcqueen.html"
                      },
                      {
                          "suggested_link_text": "‘Blitz’ Review: Love in the Ruins",
                          "url": "https://www.nytimes.com/2024/10/31/movies/blitz-review.html"
                      }
                  ],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/blitz-anatomy-cfth/blitz-anatomy-cfth-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Saoirse Ronan and Elliott Heffernan in “Blitz.”",
                          "copyright": "Apple TV+ "
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/blitz-anatomy-cfth/blitz-anatomy-cfth-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Saoirse Ronan and Elliott Heffernan in “Blitz.”",
                          "copyright": "Apple TV+ "
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/blitz-anatomy-cfth/blitz-anatomy-cfth-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Saoirse Ronan and Elliott Heffernan in “Blitz.”",
                          "copyright": "Apple TV+ "
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/blitz-anatomy-cfth/blitz-anatomy-cfth-articleInline.jpg",
                          "format": "Normal",
                          "height": 107,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Saoirse Ronan and Elliott Heffernan in “Blitz.”",
                          "copyright": "Apple TV+ "
                      }
                  ]
              },
              {
                  "slug_name": "01streaming-action",
                  "section": "Movies",
                  "subsection": "",
                  "title": "Five Action Movies to Stream Now",
                  "abstract": "This month’s picks include female assassins, a quirky French thief and crooked cops.",
                  "uri": "nyt://article/4851bc9c-01a6-5eab-86d6-52868c4c3441",
                  "url": "https://www.nytimes.com/2024/11/01/movies/five-action-movies-to-stream-now.html",
                  "byline": "By Robert Daniels",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T12:18:18-04:00",
                  "created_date": "2024-11-01T11:00:24-04:00",
                  "published_date": "2024-11-01T11:00:24-04:00",
                  "first_published_date": "2024-11-01T11:00:24-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Movies"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/arts/doninique1/doninique1-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Oksana Orlan in “Dominique.”",
                          "copyright": "Lionsgate"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/arts/doninique1/doninique1-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Oksana Orlan in “Dominique.”",
                          "copyright": "Lionsgate"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/arts/doninique1/doninique1-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Oksana Orlan in “Dominique.”",
                          "copyright": "Lionsgate"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/arts/doninique1/doninique1-articleInline.jpg",
                          "format": "Normal",
                          "height": 107,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Oksana Orlan in “Dominique.”",
                          "copyright": "Lionsgate"
                      }
                  ]
              },
              {
                  "slug_name": "01hanks-wright",
                  "section": "Movies",
                  "subsection": "",
                  "title": "Tom Hanks and Robin Wright Open a New Box",
                  "abstract": "The “Forrest Gump” stars were game to reunite with Robert Zemeckis for the technical experiment of “Here.” De-aging? A static camera? They weren’t fazed.",
                  "uri": "nyt://article/61ebb675-40be-51f2-a6a8-d910851027a0",
                  "url": "https://www.nytimes.com/2024/11/01/movies/tom-hanks-robin-wright-here-forrest-gump.html",
                  "byline": "By Melena Ryzik",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T11:00:19-04:00",
                  "created_date": "2024-11-01T11:00:19-04:00",
                  "published_date": "2024-11-01T11:00:19-04:00",
                  "first_published_date": "2024-11-01T11:00:19-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Movies",
                      "Actors and Actresses"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Hanks, Tom",
                      "Wright, Robin",
                      "Zemeckis, Robert"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/01hanks-wright-01-cbjp/01hanks-wright-01-cbjp-thumbStandard-v2.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Robin Wright and Tom Hanks were intrigued by Robert Zemeckis’s ideas for “Here”: As Hanks put it, “I’ll follow Bob into hell if he’s got an idea, and see where it will lead us.”",
                          "copyright": "Erik Carter for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/01hanks-wright-01-cbjp/01hanks-wright-01-cbjp-mediumThreeByTwo210-v2.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Robin Wright and Tom Hanks were intrigued by Robert Zemeckis’s ideas for “Here”: As Hanks put it, “I’ll follow Bob into hell if he’s got an idea, and see where it will lead us.”",
                          "copyright": "Erik Carter for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/01hanks-wright-01-cbjp/01hanks-wright-01-cbjp-mediumThreeByTwo440-v2.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Robin Wright and Tom Hanks were intrigued by Robert Zemeckis’s ideas for “Here”: As Hanks put it, “I’ll follow Bob into hell if he’s got an idea, and see where it will lead us.”",
                          "copyright": "Erik Carter for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/01hanks-wright-01-cbjp/01hanks-wright-01-cbjp-articleInline.jpg",
                          "format": "Normal",
                          "height": 238,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Robin Wright and Tom Hanks were intrigued by Robert Zemeckis’s ideas for “Here”: As Hanks put it, “I’ll follow Bob into hell if he’s got an idea, and see where it will lead us.”",
                          "copyright": "Erik Carter for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "01review-roundup",
                  "section": "Movies",
                  "subsection": "",
                  "title": "8 New Movies Our Critics Are Talking About This Week",
                  "abstract": "Whether you’re a casual moviegoer or an avid buff, our reviewers think these films are worth knowing about.",
                  "uri": "nyt://article/965a8dc4-abde-5298-a159-18a03b17597e",
                  "url": "https://www.nytimes.com/2024/11/01/movies/new-movies-this-week-critics.html",
                  "byline": "By The New York Times",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T05:04:50-04:00",
                  "created_date": "2024-11-01T05:04:50-04:00",
                  "published_date": "2024-11-01T05:04:50-04:00",
                  "first_published_date": "2024-11-01T05:04:50-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Movies"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Eastwood, Clint",
                      "Eisenberg, Jesse",
                      "Kightlinger, Andrew Boodhoo",
                      "Lester, Yassir",
                      "Moland, Hans Petter",
                      "Peterson, Hannah L",
                      "Zemeckis, Robert"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31realpain-review-gjpk/31realpain-review-gjpk-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jesse Eisenberg, left, and Kieran Culkin play cousins in “A Real Pain.”",
                          "copyright": "Searchlight Pictures"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31realpain-review-gjpk/31realpain-review-gjpk-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jesse Eisenberg, left, and Kieran Culkin play cousins in “A Real Pain.”",
                          "copyright": "Searchlight Pictures"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31realpain-review-gjpk/31realpain-review-gjpk-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jesse Eisenberg, left, and Kieran Culkin play cousins in “A Real Pain.”",
                          "copyright": "Searchlight Pictures"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31realpain-review-gjpk/31realpain-review-gjpk-articleInline.jpg",
                          "format": "Normal",
                          "height": 102,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jesse Eisenberg, left, and Kieran Culkin play cousins in “A Real Pain.”",
                          "copyright": "Searchlight Pictures"
                      }
                  ]
              },
              {
                  "slug_name": "01vandross-notebook",
                  "section": "Movies",
                  "subsection": "",
                  "title": "Luther Vandross and the Sound That Could Fill Hearts, or Break Them",
                  "abstract": "He was hounded by a fat-phobic press, but as Dawn Porter’s new documentary shows, he was a transformational presence from the start.",
                  "uri": "nyt://article/a70861fb-09f3-5d07-bad1-4ed5e6a3631a",
                  "url": "https://www.nytimes.com/2024/11/01/movies/luther-vandross-never-too-much-documentary.html",
                  "byline": "By J Wortham",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T15:17:38-04:00",
                  "created_date": "2024-11-01T05:04:17-04:00",
                  "published_date": "2024-11-01T05:04:17-04:00",
                  "first_published_date": "2024-11-01T05:04:17-04:00",
                  "material_type_facet": "News",
                  "kicker": "Critic’s Notebook",
                  "subheadline": "",
                  "des_facet": [
                      "Content Type: Personal Profile",
                      "Documentary Films and Programs",
                      "Rhythm and Blues (Music)"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Vandross, Luther",
                      "Porter, Dawn"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/01VANDROSS-NOTEBOOK-gwkt/01VANDROSS-NOTEBOOK-gwkt-thumbStandard-v2.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Luther Vandross is the subject of a new documentary that puts the emphasis on his live performances as it chronicles his life.",
                          "copyright": "Alberto Tolot, via Sony Music"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/01VANDROSS-NOTEBOOK-gwkt/01VANDROSS-NOTEBOOK-gwkt-mediumThreeByTwo210-v2.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Luther Vandross is the subject of a new documentary that puts the emphasis on his live performances as it chronicles his life.",
                          "copyright": "Alberto Tolot, via Sony Music"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/01VANDROSS-NOTEBOOK-gwkt/01VANDROSS-NOTEBOOK-gwkt-mediumThreeByTwo440-v2.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Luther Vandross is the subject of a new documentary that puts the emphasis on his live performances as it chronicles his life.",
                          "copyright": "Alberto Tolot, via Sony Music"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/01VANDROSS-NOTEBOOK-gwkt/01VANDROSS-NOTEBOOK-gwkt-articleInline.jpg",
                          "format": "Normal",
                          "height": 236,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Luther Vandross is the subject of a new documentary that puts the emphasis on his live performances as it chronicles his life.",
                          "copyright": "Alberto Tolot, via Sony Music"
                      }
                  ]
              },
              {
                  "slug_name": "01johnwilliams-takeaways",
                  "section": "Movies",
                  "subsection": "",
                  "title": "4 Surprising Things We Learned From the John Williams Documentary",
                  "abstract": "A new Disney+ film about the prolific film composer chronicles his life and career, with a focus on his famous music for movies including “Jaws” and “Star Wars.”",
                  "uri": "nyt://article/f71a2525-5e3e-56c4-8309-b4283c4a78a8",
                  "url": "https://www.nytimes.com/2024/11/01/movies/john-williams-documentary.html",
                  "byline": "By Annie Aguiar",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T11:03:23-04:00",
                  "created_date": "2024-11-01T05:03:29-04:00",
                  "published_date": "2024-11-01T05:03:29-04:00",
                  "first_published_date": "2024-11-01T05:03:29-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Documentary Films and Programs",
                      "Movies",
                      "Music",
                      "Jazz",
                      "Content Type: Personal Profile"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Williams, John (1932- )",
                      "Bouzereau, Laurent",
                      "Lucas, George",
                      "Spielberg, Steven"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01johnwilliams-takeaways-vlzg/01johnwilliams-takeaways-vlzg-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The composer John Williams is the subject of the documentary “Music by John Williams.”",
                          "copyright": "Travers Jacobs, via Disney"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01johnwilliams-takeaways-vlzg/01johnwilliams-takeaways-vlzg-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The composer John Williams is the subject of the documentary “Music by John Williams.”",
                          "copyright": "Travers Jacobs, via Disney"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01johnwilliams-takeaways-vlzg/01johnwilliams-takeaways-vlzg-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The composer John Williams is the subject of the documentary “Music by John Williams.”",
                          "copyright": "Travers Jacobs, via Disney"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01johnwilliams-takeaways-vlzg/01johnwilliams-takeaways-vlzg-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The composer John Williams is the subject of the documentary “Music by John Williams.”",
                          "copyright": "Travers Jacobs, via Disney"
                      }
                  ]
              },
              {
                  "slug_name": "01doc-col",
                  "section": "Movies",
                  "subsection": "",
                  "title": "A Prickly Martha Stewart Makes for a Bracing Netflix Portrait",
                  "abstract": "“Martha,” from R.J. Cutler, argues that she was ahead of her time. But though she sits for a lengthy interview, this isn’t hagiography.",
                  "uri": "nyt://article/0363e5dd-43f7-5415-959d-91ea111a41e7",
                  "url": "https://www.nytimes.com/2024/11/01/movies/martha-netflix-documentary.html",
                  "byline": "By Alissa Wilkinson",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T05:02:13-04:00",
                  "created_date": "2024-11-01T05:02:14-04:00",
                  "published_date": "2024-11-01T05:02:14-04:00",
                  "first_published_date": "2024-11-01T05:02:14-04:00",
                  "material_type_facet": "Review",
                  "kicker": "Documentary Lens",
                  "subheadline": "",
                  "des_facet": [
                      "Documentary Films and Programs",
                      "Content Type: Personal Profile",
                      "Women and Girls"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Stewart, Martha",
                      "Cutler, R J"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01doc-col-twbf/01doc-col-twbf-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "In “Martha,” the title subject’s candor provides some startling moments.",
                          "copyright": "Netflix"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01doc-col-twbf/01doc-col-twbf-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "In “Martha,” the title subject’s candor provides some startling moments.",
                          "copyright": "Netflix"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01doc-col-twbf/01doc-col-twbf-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "In “Martha,” the title subject’s candor provides some startling moments.",
                          "copyright": "Netflix"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01doc-col-twbf/01doc-col-twbf-articleInline.jpg",
                          "format": "Normal",
                          "height": 107,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "In “Martha,” the title subject’s candor provides some startling moments.",
                          "copyright": "Netflix"
                      }
                  ]
              },
              {
                  "slug_name": "01apprentice-explainer",
                  "section": "Movies",
                  "subsection": "",
                  "title": "What to Know About ‘The Apprentice,’ the Controversial Donald Trump Biopic",
                  "abstract": "The film, now available on demand, followed a thorny path to distribution — including the threat of a lawsuit by its subject.",
                  "uri": "nyt://article/ee9a573f-0cbb-56ec-9343-e64333fe5cbf",
                  "url": "https://www.nytimes.com/2024/11/01/movies/the-apprentice-trump-cohn.html",
                  "byline": "By Sarah Bahr",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T05:00:39-04:00",
                  "created_date": "2024-11-01T05:00:39-04:00",
                  "published_date": "2024-11-01T05:00:39-04:00",
                  "first_published_date": "2024-11-01T05:00:39-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "United States Politics and Government",
                      "Suits and Litigation (Civil)",
                      "Libel and Slander",
                      "Real Estate (Commercial)"
                  ],
                  "org_facet": [
                      "Briarcliff Entertainment",
                      "Grand Central Terminal (Manhattan, NY)",
                      "Hyatt Hotels Corp"
                  ],
                  "per_facet": [
                      "Trump, Donald J",
                      "Abbasi, Ali (Film Director)",
                      "Bakalova, Maria",
                      "Cohn, Roy Marcus",
                      "D'Antonio, Michael",
                      "Hurt, Harry III",
                      "Ortenberg, Tom (1960- )",
                      "Trump, Ivana",
                      "Strong, Jeremy (1978- )",
                      "Stan, Sebastian"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/10/multimedia/10apprentice-review-mbgp/10apprentice-review-mbgp-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jeremy Strong, left, as Roy Cohn and Sebastian Stan as Donald J. Trump in “The Apprentice,” directed by Ali Abbasi.",
                          "copyright": "Pief Weyman/Briarcliff Entertainment & Rich Spirit"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/10/multimedia/10apprentice-review-mbgp/10apprentice-review-mbgp-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jeremy Strong, left, as Roy Cohn and Sebastian Stan as Donald J. Trump in “The Apprentice,” directed by Ali Abbasi.",
                          "copyright": "Pief Weyman/Briarcliff Entertainment & Rich Spirit"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/10/multimedia/10apprentice-review-mbgp/10apprentice-review-mbgp-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jeremy Strong, left, as Roy Cohn and Sebastian Stan as Donald J. Trump in “The Apprentice,” directed by Ali Abbasi.",
                          "copyright": "Pief Weyman/Briarcliff Entertainment & Rich Spirit"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/10/multimedia/10apprentice-review-mbgp/10apprentice-review-mbgp-articleInline.jpg",
                          "format": "Normal",
                          "height": 107,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jeremy Strong, left, as Roy Cohn and Sebastian Stan as Donald J. Trump in “The Apprentice,” directed by Ali Abbasi.",
                          "copyright": "Pief Weyman/Briarcliff Entertainment & Rich Spirit"
                      }
                  ]
              },
              {
                  "slug_name": "31juror-review",
                  "section": "Movies",
                  "subsection": "",
                  "title": "‘Juror #2’ Review: Clint Eastwood Hands Down a Tough Verdict",
                  "abstract": "In his latest (and perhaps last) movie as a director, Eastwood casts a skeptical eye at the criminal justice system in a mystery starring Nicholas Hoult.",
                  "uri": "nyt://article/b3226ef5-3bd9-5813-aab6-26c23a4413b2",
                  "url": "https://www.nytimes.com/2024/10/31/movies/juror-2-review-clint-eastwood.html",
                  "byline": "By Manohla Dargis",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T14:14:12-04:00",
                  "created_date": "2024-10-31T13:29:21-04:00",
                  "published_date": "2024-10-31T13:29:21-04:00",
                  "first_published_date": "2024-10-31T13:29:21-04:00",
                  "material_type_facet": "Review",
                  "kicker": "Critic’s Pick",
                  "subheadline": "",
                  "des_facet": [
                      "Movies"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Eastwood, Clint",
                      "Hoult, Nicholas",
                      "Messina, Chris",
                      "Simmons, J K",
                      "Collette, Toni",
                      "Basso, Gabriel (1994- )"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31juror-review-hqtw/31juror-review-hqtw-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Nicholas Hoult, second from left, plays at once a freaked-out juror, potential culprit and dogged detective in Clint Eastwood’s “Juror No. 2.”",
                          "copyright": "Claire Folger/Warner Bros."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31juror-review-hqtw/31juror-review-hqtw-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Nicholas Hoult, second from left, plays at once a freaked-out juror, potential culprit and dogged detective in Clint Eastwood’s “Juror No. 2.”",
                          "copyright": "Claire Folger/Warner Bros."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31juror-review-hqtw/31juror-review-hqtw-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Nicholas Hoult, second from left, plays at once a freaked-out juror, potential culprit and dogged detective in Clint Eastwood’s “Juror No. 2.”",
                          "copyright": "Claire Folger/Warner Bros."
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31juror-review-hqtw/31juror-review-hqtw-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Nicholas Hoult, second from left, plays at once a freaked-out juror, potential culprit and dogged detective in Clint Eastwood’s “Juror No. 2.”",
                          "copyright": "Claire Folger/Warner Bros."
                      }
                  ]
              },
              {
                  "slug_name": "31graduates-review",
                  "section": "Movies",
                  "subsection": "",
                  "title": "‘The Graduates’ Review: How to Move On",
                  "abstract": "In this delicate drama set in Utah, three individuals deal with survivor’s guilt a year after a school shooting takes the life of a loved one.",
                  "uri": "nyt://article/84c05c68-c71e-55f5-94fa-55539a8f33ae",
                  "url": "https://www.nytimes.com/2024/10/31/movies/the-graduates-review.html",
                  "byline": "By Beatrice Loayza",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T12:28:00-04:00",
                  "created_date": "2024-10-31T12:28:00-04:00",
                  "published_date": "2024-10-31T12:28:00-04:00",
                  "first_published_date": "2024-10-31T12:28:00-04:00",
                  "material_type_facet": "Review",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Movies"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Peterson, Hannah L"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/graduates1-qwvf/graduates1-qwvf-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Mina Sundwall and Alex Hibbert, right, in “The Graduates.”",
                          "copyright": "Carolina Costa/The Future of Film is Female"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/graduates1-qwvf/graduates1-qwvf-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Mina Sundwall and Alex Hibbert, right, in “The Graduates.”",
                          "copyright": "Carolina Costa/The Future of Film is Female"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/graduates1-qwvf/graduates1-qwvf-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Mina Sundwall and Alex Hibbert, right, in “The Graduates.”",
                          "copyright": "Carolina Costa/The Future of Film is Female"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/graduates1-qwvf/graduates1-qwvf-articleInline.jpg",
                          "format": "Normal",
                          "height": 107,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Mina Sundwall and Alex Hibbert, right, in “The Graduates.”",
                          "copyright": "Carolina Costa/The Future of Film is Female"
                      }
                  ]
              },
              {
                  "slug_name": "memoir-of-a-snail-adam-elliot",
                  "section": "Movies",
                  "subsection": "",
                  "title": "One Frame, Thousands of Snails",
                  "abstract": "This image, from the animated feature about a woman who hoards snail-related items, includes a bevy of tiny, handcrafted artifacts.",
                  "uri": "nyt://interactive/a3562c82-f837-5a40-8091-dc401203e0ae",
                  "url": "https://www.nytimes.com/interactive/2024/10/31/movies/memoir-of-a-snail-adam-elliot.html",
                  "byline": "By Carlos Aguilar",
                  "item_type": "Interactive",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T09:29:58-04:00",
                  "created_date": "2024-10-31T11:10:02-04:00",
                  "published_date": "2024-10-31T11:10:02-04:00",
                  "first_published_date": "2024-10-31T11:10:02-04:00",
                  "material_type_facet": "Interactive Feature",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Movies",
                      "vis-design"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Elliot, Adam (1972- )"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/arts/memoir-snail-static/memoir-snail-static-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "IFC films"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/arts/memoir-snail-static/memoir-snail-static-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "IFC films"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/arts/memoir-snail-static/memoir-snail-static-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "IFC films"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/arts/memoir-snail-static/memoir-snail-static-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "IFC films"
                      }
                  ]
              },
              {
                  "slug_name": "31blitz-review",
                  "section": "Movies",
                  "subsection": "",
                  "title": "‘Blitz’ Review: Love in the Ruins",
                  "abstract": "Steve McQueen’s World War II drama may appear conventional on the surface, but don’t miss what it’s really doing.",
                  "uri": "nyt://article/f07a9434-9390-5a27-a7c1-fa73683a4048",
                  "url": "https://www.nytimes.com/2024/10/31/movies/blitz-review.html",
                  "byline": "By Alissa Wilkinson",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T13:32:30-04:00",
                  "created_date": "2024-10-31T09:35:31-04:00",
                  "published_date": "2024-10-31T09:35:31-04:00",
                  "first_published_date": "2024-10-31T09:35:31-04:00",
                  "material_type_facet": "Review",
                  "kicker": "Critic’s Pick",
                  "subheadline": "",
                  "des_facet": [
                      "Movies"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "McQueen, Steve (Filmmaker)",
                      "Ronan, Saoirse",
                      "Heffernan, Elliott"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/blitz1-bhjg/blitz1-bhjg-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Saoirse Ronan, center, with Elliott Heffernan, left, in “Blitz.”",
                          "copyright": "Parisa Taghizadeh/Apple TV+ "
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/blitz1-bhjg/blitz1-bhjg-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Saoirse Ronan, center, with Elliott Heffernan, left, in “Blitz.”",
                          "copyright": "Parisa Taghizadeh/Apple TV+ "
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/blitz1-bhjg/blitz1-bhjg-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Saoirse Ronan, center, with Elliott Heffernan, left, in “Blitz.”",
                          "copyright": "Parisa Taghizadeh/Apple TV+ "
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/blitz1-bhjg/blitz1-bhjg-articleInline.jpg",
                          "format": "Normal",
                          "height": 107,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Saoirse Ronan, center, with Elliott Heffernan, left, in “Blitz.”",
                          "copyright": "Parisa Taghizadeh/Apple TV+ "
                      }
                  ]
              },
              {
                  "slug_name": "31gutter-review",
                  "section": "Movies",
                  "subsection": "",
                  "title": "‘The Gutter’ Review: A Phenom Is Born",
                  "abstract": "This bowling comedy, co-directed by the standup comedian Yassir Lester and his brother Isaiah, has absurdity to spare.",
                  "uri": "nyt://article/cac84791-4313-5bb0-a837-544384d6dc36",
                  "url": "https://www.nytimes.com/2024/10/31/movies/the-gutter-review.html",
                  "byline": "By Glenn Kenny",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T07:00:14-04:00",
                  "created_date": "2024-10-31T07:00:14-04:00",
                  "published_date": "2024-10-31T07:00:14-04:00",
                  "first_published_date": "2024-10-31T07:00:14-04:00",
                  "material_type_facet": "Review",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Movies"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Lester, Yassir",
                      "Lester, Isaiah (Film Director)"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31gutter-review-qmkh/31gutter-review-qmkh-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Shameik Moore, center, and Susan Sarandon, front right, in “The Gutter.”",
                          "copyright": "Magnolia Pictures  "
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31gutter-review-qmkh/31gutter-review-qmkh-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Shameik Moore, center, and Susan Sarandon, front right, in “The Gutter.”",
                          "copyright": "Magnolia Pictures  "
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31gutter-review-qmkh/31gutter-review-qmkh-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Shameik Moore, center, and Susan Sarandon, front right, in “The Gutter.”",
                          "copyright": "Magnolia Pictures  "
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31gutter-review-qmkh/31gutter-review-qmkh-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Shameik Moore, center, and Susan Sarandon, front right, in “The Gutter.”",
                          "copyright": "Magnolia Pictures  "
                      }
                  ]
              },
              {
                  "slug_name": "31chasingamy-review",
                  "section": "Movies",
                  "subsection": "",
                  "title": "‘Chasing Chasing Amy’ Review: A Fan’s Favorite",
                  "abstract": "Sav Rodgers sets out to define the legacy of Kevin Smith’s “Chasing Amy” in this documentary, which is elevated by one instructive interview.",
                  "uri": "nyt://article/88ed9334-5fd9-5c60-820c-963da96b9e9c",
                  "url": "https://www.nytimes.com/2024/10/31/movies/chasing-chasing-amy-review.html",
                  "byline": "By Natalia Winkelman",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T07:00:08-04:00",
                  "created_date": "2024-10-31T07:00:08-04:00",
                  "published_date": "2024-10-31T07:00:08-04:00",
                  "first_published_date": "2024-10-31T07:00:08-04:00",
                  "material_type_facet": "Review",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Documentary Films and Programs",
                      "Movies"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Smith, Kevin (1970- )",
                      "Adams, Joey Lauren",
                      "Rodgers, Sav"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/chasing1-czjg/chasing1-czjg-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Sav Rodgers in the documentary “Chasing Chasing Amy.”",
                          "copyright": "Level 33"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/chasing1-czjg/chasing1-czjg-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Sav Rodgers in the documentary “Chasing Chasing Amy.”",
                          "copyright": "Level 33"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/chasing1-czjg/chasing1-czjg-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Sav Rodgers in the documentary “Chasing Chasing Amy.”",
                          "copyright": "Level 33"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/chasing1-czjg/chasing1-czjg-articleInline.jpg",
                          "format": "Normal",
                          "height": 107,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Sav Rodgers in the documentary “Chasing Chasing Amy.”",
                          "copyright": "Level 33"
                      }
                  ]
              },
              {
                  "slug_name": "31absolution-review",
                  "section": "Movies",
                  "subsection": "",
                  "title": "‘Absolution’ Review: Brain Drain",
                  "abstract": "Liam Neeson plays a regretful gangster with a serious medical condition in this drab, downbeat action movie.",
                  "uri": "nyt://article/60f2841e-7bc1-504d-8209-91a70ae58fa9",
                  "url": "https://www.nytimes.com/2024/10/31/movies/absolution-review.html",
                  "byline": "By Jeannette Catsoulis",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T07:00:07-04:00",
                  "created_date": "2024-10-31T07:00:07-04:00",
                  "published_date": "2024-10-31T07:00:07-04:00",
                  "first_published_date": "2024-10-31T07:00:07-04:00",
                  "material_type_facet": "Review",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Movies"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Neeson, Liam",
                      "Moland, Hans Petter"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/absolution1-vqmf/absolution1-vqmf-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Liam Neeson in “Absolution.”",
                          "copyright": "Samuel Goldwyn Films"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/absolution1-vqmf/absolution1-vqmf-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Liam Neeson in “Absolution.”",
                          "copyright": "Samuel Goldwyn Films"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/absolution1-vqmf/absolution1-vqmf-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Liam Neeson in “Absolution.”",
                          "copyright": "Samuel Goldwyn Films"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/absolution1-vqmf/absolution1-vqmf-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Liam Neeson in “Absolution.”",
                          "copyright": "Samuel Goldwyn Films"
                      }
                  ]
              },
              {
                  "slug_name": "31youth-review",
                  "section": "Movies",
                  "subsection": "",
                  "title": "‘Youth (Hard Times)’ Review: Working Till They Drop",
                  "abstract": "In Wang Bing’s riveting new documentary about Chinese garment workers, a generation asks: What good is money when you have no rights?",
                  "uri": "nyt://article/7568e098-7e71-543a-8378-f04582fc6ef3",
                  "url": "https://www.nytimes.com/2024/10/31/movies/youth-hard-times-review-working-till-they-drop.html",
                  "byline": "By Nicolas Rapold",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T05:03:09-04:00",
                  "created_date": "2024-10-31T05:03:09-04:00",
                  "published_date": "2024-10-31T05:03:09-04:00",
                  "first_published_date": "2024-10-31T05:03:09-04:00",
                  "material_type_facet": "Review",
                  "kicker": "Critic’s Pick",
                  "subheadline": "",
                  "des_facet": [
                      "Documentary Films and Programs",
                      "Fashion and Apparel",
                      "Labor and Jobs"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Wang Bing"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31youth-review-tvbj/31youth-review-tvbj-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Wang Bing’s second entry in his “Youth” trilogy depicts the migrants who trek to Huzhou City, China.",
                          "copyright": "Icarus Films"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31youth-review-tvbj/31youth-review-tvbj-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Wang Bing’s second entry in his “Youth” trilogy depicts the migrants who trek to Huzhou City, China.",
                          "copyright": "Icarus Films"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31youth-review-tvbj/31youth-review-tvbj-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Wang Bing’s second entry in his “Youth” trilogy depicts the migrants who trek to Huzhou City, China.",
                          "copyright": "Icarus Films"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31youth-review-tvbj/31youth-review-tvbj-articleInline.jpg",
                          "format": "Normal",
                          "height": 107,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Wang Bing’s second entry in his “Youth” trilogy depicts the migrants who trek to Huzhou City, China.",
                          "copyright": "Icarus Films"
                      }
                  ]
              },
              {
                  "slug_name": "31soundtrack-review",
                  "section": "Movies",
                  "subsection": "",
                  "title": "‘Soundtrack to a Coup d’Etat’ Review: What Lies Beneath",
                  "abstract": "A passionate and propulsive documentary about the assassination of Patrice Lumumba spins its web in many directions.",
                  "uri": "nyt://article/10932d66-d70a-5205-9564-558e1262976e",
                  "url": "https://www.nytimes.com/2024/10/31/movies/soundtrack-to-a-coup-detat-review.html",
                  "byline": "By Alissa Wilkinson",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T05:03:09-04:00",
                  "created_date": "2024-10-31T05:03:09-04:00",
                  "published_date": "2024-10-31T05:03:09-04:00",
                  "first_published_date": "2024-10-31T05:03:09-04:00",
                  "material_type_facet": "Review",
                  "kicker": "Critic’s Pick",
                  "subheadline": "",
                  "des_facet": [
                      "Documentary Films and Programs",
                      "Assassinations and Attempted Assassinations",
                      "Coups D'Etat and Attempted Coups D'Etat",
                      "United States International Relations",
                      "Jazz"
                  ],
                  "org_facet": [
                      "Central Intelligence Agency"
                  ],
                  "per_facet": [
                      "Grimonprez, Johan",
                      "Lumumba, Patrice"
                  ],
                  "geo_facet": [
                      "Congo, Democratic Republic of (Congo-Kinshasa)"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/arts/soundtrack2/soundrack2-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Patrice Lumumba in the documentary “Soundtrack to a Coup d’Etat.”",
                          "copyright": "Kino Lorber"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/arts/soundtrack2/soundrack2-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Patrice Lumumba in the documentary “Soundtrack to a Coup d’Etat.”",
                          "copyright": "Kino Lorber"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/arts/soundtrack2/soundrack2-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Patrice Lumumba in the documentary “Soundtrack to a Coup d’Etat.”",
                          "copyright": "Kino Lorber"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/arts/soundtrack2/soundrack2-articleInline.jpg",
                          "format": "Normal",
                          "height": 123,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Patrice Lumumba in the documentary “Soundtrack to a Coup d’Etat.”",
                          "copyright": "Kino Lorber"
                      }
                  ]
              },
              {
                  "slug_name": "31realpain-review",
                  "section": "Movies",
                  "subsection": "",
                  "title": "‘A Real Pain’ Review: Mourning as an Act of Survival",
                  "abstract": "Jesse Eisenberg directs and stars in a melancholic yet funny exploration of Jewish loss and belonging, with an outstanding Kieran Culkin.",
                  "uri": "nyt://article/59c6a35a-e3a6-5651-a7f2-ec42161a90d7",
                  "url": "https://www.nytimes.com/2024/10/31/movies/a-real-pain-review-jesse-eisenberg.html",
                  "byline": "By Manohla Dargis",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T05:03:00-04:00",
                  "created_date": "2024-10-31T05:03:00-04:00",
                  "published_date": "2024-10-31T05:03:00-04:00",
                  "first_published_date": "2024-10-31T05:03:00-04:00",
                  "material_type_facet": "Review",
                  "kicker": "Critic’s Pick",
                  "subheadline": "",
                  "des_facet": [
                      "Movies"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Culkin, Kieran",
                      "Eisenberg, Jesse",
                      "Grey, Jennifer",
                      "Sharpe, Will (1986- )",
                      "Oreskes, Daniel Robert"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31realpain-review-gjpk/31realpain-review-gjpk-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jesse Eisenberg, left, and Kieran Culkin play cousins in “A Real Pain.”",
                          "copyright": "Searchlight Pictures"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31realpain-review-gjpk/31realpain-review-gjpk-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jesse Eisenberg, left, and Kieran Culkin play cousins in “A Real Pain.”",
                          "copyright": "Searchlight Pictures"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31realpain-review-gjpk/31realpain-review-gjpk-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jesse Eisenberg, left, and Kieran Culkin play cousins in “A Real Pain.”",
                          "copyright": "Searchlight Pictures"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31realpain-review-gjpk/31realpain-review-gjpk-articleInline.jpg",
                          "format": "Normal",
                          "height": 102,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jesse Eisenberg, left, and Kieran Culkin play cousins in “A Real Pain.”",
                          "copyright": "Searchlight Pictures"
                      }
                  ]
              }
          ]
      },
      {
          "status": "OK",
          "copyright": "Copyright (c) 2024 The New York Times Company.  All Rights Reserved.",
          "num_results": 20,
          "results": [
              {
                  "slug_name": "02sci-smelly-museums",
                  "section": "Science",
                  "subsection": "",
                  "title": "Exhale Through the Gift Shop",
                  "abstract": "Museums are adding scents as another tool for communicating information about science and other subjects in their exhibits.",
                  "uri": "nyt://article/2140129f-ea8d-542c-aebe-c5e3eff68f33",
                  "url": "https://www.nytimes.com/2024/11/02/science/scent-exhibits-museum.html",
                  "byline": "By Becky Ferreira",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-02T05:05:51-04:00",
                  "created_date": "2024-11-02T05:05:51-04:00",
                  "published_date": "2024-11-02T05:05:51-04:00",
                  "first_published_date": "2024-11-02T05:05:51-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Smells and Odors",
                      "Smell (Olfaction)",
                      "Museums",
                      "Perfumes and Fragrances",
                      "Science and Technology",
                      "your-feed-science"
                  ],
                  "org_facet": [
                      "Corning Museum of Glass"
                  ],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02sci-smelly-museums-scent-ktmz/02sci-smelly-museums-scent-ktmz-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Experiencing 18th century nutmeg at the “Sensorium,” an exhibit of scents, glass and perfumery at the Corning Museum of Glass in Corning, N.Y.",
                          "copyright": "Heather Ainsworth for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02sci-smelly-museums-scent-ktmz/02sci-smelly-museums-scent-ktmz-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Experiencing 18th century nutmeg at the “Sensorium,” an exhibit of scents, glass and perfumery at the Corning Museum of Glass in Corning, N.Y.",
                          "copyright": "Heather Ainsworth for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02sci-smelly-museums-scent-ktmz/02sci-smelly-museums-scent-ktmz-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Experiencing 18th century nutmeg at the “Sensorium,” an exhibit of scents, glass and perfumery at the Corning Museum of Glass in Corning, N.Y.",
                          "copyright": "Heather Ainsworth for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02sci-smelly-museums-scent-ktmz/02sci-smelly-museums-scent-ktmz-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Experiencing 18th century nutmeg at the “Sensorium,” an exhibit of scents, glass and perfumery at the Corning Museum of Glass in Corning, N.Y.",
                          "copyright": "Heather Ainsworth for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "01shipwreck",
                  "section": "Science",
                  "subsection": "",
                  "title": "Diving to Drink a 19th-Century Shipwreck’s Treasure",
                  "abstract": "A team recently dived deep beneath Lake Huron hoping to harvest grain that may one day be distilled into whiskey with a flavor forgotten to history.",
                  "uri": "nyt://article/da910635-c6eb-5bbf-b0ea-346796620104",
                  "url": "https://www.nytimes.com/2024/11/01/science/shipwreck-lake-huron-rye-seeds-whiskey.html",
                  "byline": "By Cara Giaimo",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T11:09:12-04:00",
                  "created_date": "2024-11-01T11:09:12-04:00",
                  "published_date": "2024-11-01T11:09:12-04:00",
                  "first_published_date": "2024-11-01T11:09:12-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Shipwrecks (Historic)",
                      "Whiskey",
                      "Grain",
                      "your-feed-science"
                  ],
                  "org_facet": [
                      "Michigan State University"
                  ],
                  "per_facet": [],
                  "geo_facet": [
                      "Lake Huron",
                      "Great Lakes",
                      "Michigan"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/autossell/01shipwreck-vid/01shipwreck-vid-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Dusty Klifman"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/autossell/01shipwreck-vid/01shipwreck-vid-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Dusty Klifman"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/autossell/01shipwreck-vid/01shipwreck-vid-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Dusty Klifman"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/autossell/01shipwreck-vid/01shipwreck-vid-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Dusty Klifman"
                      }
                  ]
              },
              {
                  "slug_name": "01SCI-AXIONS",
                  "section": "Science",
                  "subsection": "",
                  "title": "Can Axions Save the Universe?",
                  "abstract": "The hunt for dark matter is shifting from particles to waves named after a laundry detergent.",
                  "uri": "nyt://article/7fd3df05-d342-5677-93ec-e1bc92af6499",
                  "url": "https://www.nytimes.com/2024/11/01/science/astrophysics-cosmology-axions.html",
                  "byline": "By Dennis Overbye and Katrina Miller",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T09:26:22-04:00",
                  "created_date": "2024-11-01T05:00:13-04:00",
                  "published_date": "2024-11-01T05:00:13-04:00",
                  "first_published_date": "2024-11-01T05:00:13-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Space and Astronomy",
                      "Physics",
                      "Dark Matter (Astronomy)",
                      "Black Holes (Space)",
                      "Telescopes and Observatories",
                      "Dark Energy (Astronomy)",
                      "Stars and Galaxies",
                      "Large Hadron Collider",
                      "Gravitation and Gravity",
                      "your-feed-science"
                  ],
                  "org_facet": [
                      "CERN"
                  ],
                  "per_facet": [
                      "Weinberg, Steven"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/05/science/05sci-AXION-02/05sci-AXION-02-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "John P. Dessereau"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/05/science/05sci-AXION-02/05sci-AXION-02-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "John P. Dessereau"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/05/science/05sci-AXION-02/05sci-AXION-02-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "John P. Dessereau"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/05/science/05sci-AXION-02/05sci-AXION-02-articleInline.jpg",
                          "format": "Normal",
                          "height": 190,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "John P. Dessereau"
                      }
                  ]
              },
              {
                  "slug_name": "30OUTTHERE-BLACKHOLES",
                  "section": "Science",
                  "subsection": "Space & Cosmos",
                  "title": "Two Black Holes Are Giving the Cosmos a Fright",
                  "abstract": "The ghosts of stars are up to their usual mischief.",
                  "uri": "nyt://article/801409c1-9f65-5f24-9d8c-7d0d8e0cad24",
                  "url": "https://www.nytimes.com/2024/10/30/science/space/astronomy-black-holes.html",
                  "byline": "By Dennis Overbye",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-30T17:21:41-04:00",
                  "created_date": "2024-10-30T17:00:14-04:00",
                  "published_date": "2024-10-30T17:00:14-04:00",
                  "first_published_date": "2024-10-30T17:00:14-04:00",
                  "material_type_facet": "News",
                  "kicker": "Out There",
                  "subheadline": "",
                  "des_facet": [
                      "Space and Astronomy",
                      "Black Holes (Space)",
                      "Gravitation and Gravity",
                      "X-Rays",
                      "Stars and Galaxies",
                      "Telescopes and Observatories",
                      "your-feed-science"
                  ],
                  "org_facet": [
                      "Nature (Journal)"
                  ],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/autossell/OUTTHERE-BLACKHOLES/OUTTHERE-BLACKHOLES-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Andrew Beardmore (Univ. of Leicester) and NASA/Swift"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/autossell/OUTTHERE-BLACKHOLES/OUTTHERE-BLACKHOLES-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Andrew Beardmore (Univ. of Leicester) and NASA/Swift"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/autossell/OUTTHERE-BLACKHOLES/OUTTHERE-BLACKHOLES-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Andrew Beardmore (Univ. of Leicester) and NASA/Swift"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/autossell/OUTTHERE-BLACKHOLES/OUTTHERE-BLACKHOLES-articleInline.jpg",
                          "format": "Normal",
                          "height": 190,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Andrew Beardmore (Univ. of Leicester) and NASA/Swift"
                      }
                  ]
              },
              {
                  "slug_name": "30tb-giant-tadpole",
                  "section": "Science",
                  "subsection": "",
                  "title": "Fossil Reveals Oldest Known Tadpole That Grew to the Size of a Hot Dog",
                  "abstract": "A 161 million-year-old fossil, linked to a line of extinct frog-like amphibians, is the oldest tadpole ever found.",
                  "uri": "nyt://article/4df073f4-1596-5562-aa78-07ec712dc7be",
                  "url": "https://www.nytimes.com/2024/10/30/science/oldest-tadpole-fossil-giant.html",
                  "byline": "By Asher Elbein",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-30T11:00:05-04:00",
                  "created_date": "2024-10-30T11:00:05-04:00",
                  "published_date": "2024-10-30T11:00:05-04:00",
                  "first_published_date": "2024-10-30T11:00:05-04:00",
                  "material_type_facet": "News",
                  "kicker": "Trilobites",
                  "subheadline": "",
                  "des_facet": [
                      "Frogs",
                      "Fossils",
                      "Paleontology",
                      "Reproduction (Biological)",
                      "Research",
                      "your-feed-science"
                  ],
                  "org_facet": [
                      "Nature (Journal)"
                  ],
                  "per_facet": [],
                  "geo_facet": [
                      "Argentina"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30tb-giant-tadpole-02-kcwz/30tb-giant-tadpole-02-kcwz-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Gabriel Lío"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30tb-giant-tadpole-02-kcwz/30tb-giant-tadpole-02-kcwz-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Gabriel Lío"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30tb-giant-tadpole-02-kcwz/30tb-giant-tadpole-02-kcwz-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Gabriel Lío"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30tb-giant-tadpole-02-kcwz/30tb-giant-tadpole-02-kcwz-articleInline.jpg",
                          "format": "Normal",
                          "height": 122,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "Gabriel Lío"
                      }
                  ]
              },
              {
                  "slug_name": "30HARRIS-SPACE",
                  "section": "Science",
                  "subsection": "",
                  "title": "Instead of Going Boldly on Space, Harris Has Taken a Steady Approach",
                  "abstract": "As chair of the White House’s National Space Council, the vice president largely emphasized continuity with policies set by the Trump administration.",
                  "uri": "nyt://article/7e2423ce-73f8-5f26-9233-ae2e4d698e86",
                  "url": "https://www.nytimes.com/2024/10/30/science/kamala-harris-space-nasa-moon.html",
                  "byline": "By Kenneth Chang and Katrina Miller",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-30T09:49:23-04:00",
                  "created_date": "2024-10-30T09:49:23-04:00",
                  "published_date": "2024-10-30T09:49:23-04:00",
                  "first_published_date": "2024-10-30T09:49:23-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Space and Astronomy",
                      "United States Politics and Government",
                      "Vice Presidents and Vice Presidency (US)",
                      "United States International Relations"
                  ],
                  "org_facet": [
                      "National Space Council",
                      "National Aeronautics and Space Administration"
                  ],
                  "per_facet": [
                      "Harris, Kamala D",
                      "Pence, Mike",
                      "Trump, Donald J",
                      "Biden, Joseph R Jr"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/00HARRIS-SPACE-01-vpzm/00HARRIS-SPACE-01-vpzm-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Vice President Kamala Harris during a visit to the Goddard Space Flight Center in Greenbelt, Md., in 2021.",
                          "copyright": "Pool photo by Ting Shen"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/00HARRIS-SPACE-01-vpzm/00HARRIS-SPACE-01-vpzm-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Vice President Kamala Harris during a visit to the Goddard Space Flight Center in Greenbelt, Md., in 2021.",
                          "copyright": "Pool photo by Ting Shen"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/00HARRIS-SPACE-01-vpzm/00HARRIS-SPACE-01-vpzm-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Vice President Kamala Harris during a visit to the Goddard Space Flight Center in Greenbelt, Md., in 2021.",
                          "copyright": "Pool photo by Ting Shen"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/00HARRIS-SPACE-01-vpzm/00HARRIS-SPACE-01-vpzm-articleInline.jpg",
                          "format": "Normal",
                          "height": 115,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Vice President Kamala Harris during a visit to the Goddard Space Flight Center in Greenbelt, Md., in 2021.",
                          "copyright": "Pool photo by Ting Shen"
                      }
                  ]
              },
              {
                  "slug_name": "30sci-continents",
                  "section": "Science",
                  "subsection": "",
                  "title": "How Many Continents Are There? You May Not Like the Answers.",
                  "abstract": "Recent earth science developments suggest that how we count our planet’s largest land masses is less clear than we learned in school.",
                  "uri": "nyt://article/95dd04b2-3bfc-547b-8b09-33dbdb850698",
                  "url": "https://www.nytimes.com/2024/10/30/science/earth-continents-geology-research.html",
                  "byline": "By Matt Kaplan",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-30T05:03:00-04:00",
                  "created_date": "2024-10-30T05:03:00-04:00",
                  "published_date": "2024-10-30T05:03:00-04:00",
                  "first_published_date": "2024-10-30T05:03:00-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Geology",
                      "Research",
                      "Oceans and Seas",
                      "Earth",
                      "your-feed-science"
                  ],
                  "org_facet": [
                      "Geology (Journal)"
                  ],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/03/10/science/00sci-continents-vid1-image/00sci-continents-vid1-image-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/03/10/science/00sci-continents-vid1-image/00sci-continents-vid1-image-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/03/10/science/00sci-continents-vid1-image/00sci-continents-vid1-image-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/03/10/science/00sci-continents-vid1-image/00sci-continents-vid1-image-articleInline.jpg",
                          "format": "Normal",
                          "height": 190,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      }
                  ]
              },
              {
                  "slug_name": "30plague",
                  "section": "Science",
                  "subsection": "",
                  "title": "Was Stone Age Scandinavia Struck by Plague?",
                  "abstract": "New research by geneticists hints at the deadly work of Yersinia pestis 5,000 years ago.",
                  "uri": "nyt://article/942636da-791f-577f-9f12-75c258a4e7e9",
                  "url": "https://www.nytimes.com/2024/10/30/science/archaeology-scandinavia-plague.html",
                  "byline": "By Franz Lidz",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T18:17:00-04:00",
                  "created_date": "2024-10-30T03:00:20-04:00",
                  "published_date": "2024-10-30T03:00:20-04:00",
                  "first_published_date": "2024-10-30T03:00:20-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Epidemics",
                      "Bubonic Plague",
                      "Plague",
                      "Disease Rates",
                      "Bacteria",
                      "Genetics and Heredity",
                      "Archaeology and Anthropology",
                      "Rats",
                      "Fleas",
                      "your-feed-science",
                      "your-feed-health",
                      "your-feed-animals"
                  ],
                  "org_facet": [
                      "Nature (Journal)"
                  ],
                  "per_facet": [],
                  "geo_facet": [
                      "Great Britain",
                      "Europe",
                      "Scandinavia"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30plague-01-lfzj/30plague-01-lfzj-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A 1939 photograph of excavations of the Neolithic burial site Stroby in Denmark.",
                          "copyright": "The National Museum of Denmark"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30plague-01-lfzj/30plague-01-lfzj-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A 1939 photograph of excavations of the Neolithic burial site Stroby in Denmark.",
                          "copyright": "The National Museum of Denmark"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30plague-01-lfzj/30plague-01-lfzj-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A 1939 photograph of excavations of the Neolithic burial site Stroby in Denmark.",
                          "copyright": "The National Museum of Denmark"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30plague-01-lfzj/30plague-01-lfzj-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A 1939 photograph of excavations of the Neolithic burial site Stroby in Denmark.",
                          "copyright": "The National Museum of Denmark"
                      }
                  ]
              },
              {
                  "slug_name": "30GREENTB",
                  "section": "Science",
                  "subsection": "",
                  "title": "Can John Green Make You Care About Tuberculosis?",
                  "abstract": "With a forthcoming nonfiction book and an online army of Nerdfighters, the young-adult author aims to eliminate an entirely curable global scourge.",
                  "uri": "nyt://article/6a7701e1-8497-56c5-941a-b60f7bb87839",
                  "url": "https://www.nytimes.com/2024/10/30/science/john-green-tuberculosis-nerdfighters.html",
                  "byline": "By Maddie Bender",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-30T01:00:09-04:00",
                  "created_date": "2024-10-30T01:00:10-04:00",
                  "published_date": "2024-10-30T01:00:10-04:00",
                  "first_published_date": "2024-10-30T01:00:10-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Tuberculosis",
                      "Books and Literature",
                      "Drugs (Pharmaceuticals)",
                      "Social Media",
                      "Writing and Writers",
                      "Medicine and Health",
                      "Disease Rates",
                      "Tests (Medical)",
                      "your-feed-health",
                      "your-feed-science"
                  ],
                  "org_facet": [
                      "Johnson & Johnson",
                      "Partners in Health"
                  ],
                  "per_facet": [
                      "Green, John (1977- )"
                  ],
                  "geo_facet": [
                      "Africa",
                      "India",
                      "Sierra Leone"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/00SCI-GREENTB-02-tvwp/00SCI-GREENTB-02-tvwp-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "John Green, the best selling author and YouTuber, wants to bridge an “empathy gap” for tuberculosis, which disproportionately affects people in sub-Saharan Africa, Eastern Europe and Asia.",
                          "copyright": "Lee Klafczynski for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/00SCI-GREENTB-02-tvwp/00SCI-GREENTB-02-tvwp-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "John Green, the best selling author and YouTuber, wants to bridge an “empathy gap” for tuberculosis, which disproportionately affects people in sub-Saharan Africa, Eastern Europe and Asia.",
                          "copyright": "Lee Klafczynski for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/00SCI-GREENTB-02-tvwp/00SCI-GREENTB-02-tvwp-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "John Green, the best selling author and YouTuber, wants to bridge an “empathy gap” for tuberculosis, which disproportionately affects people in sub-Saharan Africa, Eastern Europe and Asia.",
                          "copyright": "Lee Klafczynski for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/00SCI-GREENTB-02-tvwp/00SCI-GREENTB-02-tvwp-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "John Green, the best selling author and YouTuber, wants to bridge an “empathy gap” for tuberculosis, which disproportionately affects people in sub-Saharan Africa, Eastern Europe and Asia.",
                          "copyright": "Lee Klafczynski for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "29tb-tiny-frog",
                  "section": "Science",
                  "subsection": "",
                  "title": "This Toad Is So Tiny That They Call It a Flea",
                  "abstract": "A “toadlet” in Brazil is the second-smallest vertebrate known to exist on the planet.",
                  "uri": "nyt://article/c96b3b9a-6c5c-57ec-bbed-d450937bf68c",
                  "url": "https://www.nytimes.com/2024/10/29/science/tiny-frog-toad-brazil.html",
                  "byline": "By Sofia Quaglia",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-29T10:48:47-04:00",
                  "created_date": "2024-10-29T10:48:47-04:00",
                  "published_date": "2024-10-29T10:48:47-04:00",
                  "first_published_date": "2024-10-29T10:48:47-04:00",
                  "material_type_facet": "News",
                  "kicker": "Trilobites",
                  "subheadline": "",
                  "des_facet": [
                      "Frogs",
                      "DNA (Deoxyribonucleic Acid)",
                      "Conservation of Resources",
                      "Research",
                      "your-feed-science",
                      "your-feed-animals"
                  ],
                  "org_facet": [
                      "PeerJ (Journal)"
                  ],
                  "per_facet": [],
                  "geo_facet": [
                      "Brazil"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/29tb-tiny-frog-02-ztfq/29tb-tiny-frog-02-ztfq-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Brachycephalus dacnis, the second-smallest species of vertebrate on the planet, was discovered in southeastern Brazil and measures less than 0.7 centimeters long.",
                          "copyright": "Lucas Botelho"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/29tb-tiny-frog-02-ztfq/29tb-tiny-frog-02-ztfq-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Brachycephalus dacnis, the second-smallest species of vertebrate on the planet, was discovered in southeastern Brazil and measures less than 0.7 centimeters long.",
                          "copyright": "Lucas Botelho"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/29tb-tiny-frog-02-ztfq/29tb-tiny-frog-02-ztfq-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Brachycephalus dacnis, the second-smallest species of vertebrate on the planet, was discovered in southeastern Brazil and measures less than 0.7 centimeters long.",
                          "copyright": "Lucas Botelho"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/29tb-tiny-frog-02-ztfq/29tb-tiny-frog-02-ztfq-articleInline.jpg",
                          "format": "Normal",
                          "height": 125,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Brachycephalus dacnis, the second-smallest species of vertebrate on the planet, was discovered in southeastern Brazil and measures less than 0.7 centimeters long.",
                          "copyright": "Lucas Botelho"
                      }
                  ]
              },
              {
                  "slug_name": "29SCI-CONVERSATION-ANIMALDEATH",
                  "section": "Science",
                  "subsection": "",
                  "title": "What Ants and Orcas Can Teach Us About Death",
                  "abstract": "A philosopher journeys into the world of comparative thanatology, which explores how animals of all kinds respond to death and dying.",
                  "uri": "nyt://article/b390a13e-9bb7-5b89-a5de-0ef3abe59aa2",
                  "url": "https://www.nytimes.com/2024/10/29/science/animals-death-monso.html",
                  "byline": "By Emily Anthes",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-30T09:43:56-04:00",
                  "created_date": "2024-10-29T03:00:15-04:00",
                  "published_date": "2024-10-29T03:00:15-04:00",
                  "first_published_date": "2024-10-29T03:00:15-04:00",
                  "material_type_facet": "News",
                  "kicker": "A Conversation With",
                  "subheadline": "",
                  "des_facet": [
                      "Death and Dying",
                      "Animals",
                      "Emotions",
                      "Grief (Emotion)",
                      "Philosophy",
                      "your-feed-science",
                      "your-feed-animals",
                      "Whales and Whaling",
                      "Animal Behavior",
                      "Content Type: Personal Profile"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/28SCI-CONVERSATION-ANIMALDEATH-bpfm/28SCI-CONVERSATION-ANIMALDEATH-bpfm-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Susana Monsó, a philosopher of animal minds at the National Distance Education University in Madrid. “I’ve always been interested in those capacities that are understood to be uniquely human,” she said. “Death was a natural topic to pick up.”",
                          "copyright": "Gianfranco Tripodo for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/28SCI-CONVERSATION-ANIMALDEATH-bpfm/28SCI-CONVERSATION-ANIMALDEATH-bpfm-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Susana Monsó, a philosopher of animal minds at the National Distance Education University in Madrid. “I’ve always been interested in those capacities that are understood to be uniquely human,” she said. “Death was a natural topic to pick up.”",
                          "copyright": "Gianfranco Tripodo for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/28SCI-CONVERSATION-ANIMALDEATH-bpfm/28SCI-CONVERSATION-ANIMALDEATH-bpfm-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Susana Monsó, a philosopher of animal minds at the National Distance Education University in Madrid. “I’ve always been interested in those capacities that are understood to be uniquely human,” she said. “Death was a natural topic to pick up.”",
                          "copyright": "Gianfranco Tripodo for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/28SCI-CONVERSATION-ANIMALDEATH-bpfm/28SCI-CONVERSATION-ANIMALDEATH-bpfm-articleInline.jpg",
                          "format": "Normal",
                          "height": 126,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Susana Monsó, a philosopher of animal minds at the National Distance Education University in Madrid. “I’ve always been interested in those capacities that are understood to be uniquely human,” she said. “Death was a natural topic to pick up.”",
                          "copyright": "Gianfranco Tripodo for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "28shyamala",
                  "section": "Science",
                  "subsection": "",
                  "title": "The Rebellious Scientist Who Made Kamala Harris",
                  "abstract": "The presidential candidate’s mother, Shyamala Gopalan Harris, was a breast cancer researcher whose egalitarian politics often bucked a patriarchal lab culture.",
                  "uri": "nyt://article/4eaa11f8-617e-563b-8d58-6a42f1b1bfe1",
                  "url": "https://www.nytimes.com/2024/10/28/science/shyamala-gopalan-kamala-harris-mother.html",
                  "byline": "By Benjamin Mueller",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-28T16:51:43-04:00",
                  "created_date": "2024-10-28T11:18:13-04:00",
                  "published_date": "2024-10-28T11:18:13-04:00",
                  "first_published_date": "2024-10-28T11:18:13-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Breast Cancer",
                      "Laboratories and Scientific Equipment",
                      "Race and Ethnicity",
                      "Research",
                      "Biology and Biochemistry",
                      "Minorities",
                      "Immigration and Emigration",
                      "Women and Girls",
                      "Discrimination",
                      "Politics and Government",
                      "Colleges and Universities",
                      "Black People",
                      "Content Type: Personal Profile",
                      "Presidential Election of 2024",
                      "your-feed-science",
                      "Science and Technology",
                      "internal-paywall-exempt-elections-app"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Gopalan, Shyamala",
                      "Harris, Kamala D"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28shyamala-kamala-phbv/28shyamala-kamala-phbv-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Kamala Harris with her mother, Shyamala Gopalan Harris, in 2007, during a Chinese New Year Parade.",
                          "copyright": "Kamala Harris campaign, via Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28shyamala-kamala-phbv/28shyamala-kamala-phbv-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Kamala Harris with her mother, Shyamala Gopalan Harris, in 2007, during a Chinese New Year Parade.",
                          "copyright": "Kamala Harris campaign, via Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28shyamala-kamala-phbv/28shyamala-kamala-phbv-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Kamala Harris with her mother, Shyamala Gopalan Harris, in 2007, during a Chinese New Year Parade.",
                          "copyright": "Kamala Harris campaign, via Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28shyamala-kamala-phbv/28shyamala-kamala-phbv-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Kamala Harris with her mother, Shyamala Gopalan Harris, in 2007, during a Chinese New Year Parade.",
                          "copyright": "Kamala Harris campaign, via Associated Press"
                      }
                  ]
              },
              {
                  "slug_name": "28sci-crow-grudges",
                  "section": "Science",
                  "subsection": "",
                  "title": "If You Think You Can Hold a Grudge, Consider the Crow",
                  "abstract": "The brainy birds carry big chips on their shoulders, scientists say. And some people who become subjects of their ire may be victims of mistaken identity.",
                  "uri": "nyt://article/c0a0f857-ecb6-52d0-962d-b9803e401ca2",
                  "url": "https://www.nytimes.com/2024/10/28/science/crows-grudges-revenge.html",
                  "byline": "By Thomas Fuller and Alana Paterson",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-29T21:11:31-04:00",
                  "created_date": "2024-10-28T05:02:26-04:00",
                  "published_date": "2024-10-28T05:02:26-04:00",
                  "first_published_date": "2024-10-28T05:02:26-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Crows (Birds)",
                      "Animal Attacks",
                      "Animal Behavior",
                      "Memory",
                      "Research",
                      "audio-neutral-informative"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [
                      "Vancouver (British Columbia)",
                      "Seattle (Wash)"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/29sci-crow-grudges-promo1/29sci-crow-grudges-promo1-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Dr. Marzluff believes a crow can hold a grudge for 17 years.",
                          "copyright": "Alana Paterson for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/29sci-crow-grudges-promo1/29sci-crow-grudges-promo1-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Dr. Marzluff believes a crow can hold a grudge for 17 years.",
                          "copyright": "Alana Paterson for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/29sci-crow-grudges-promo1/29sci-crow-grudges-promo1-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Dr. Marzluff believes a crow can hold a grudge for 17 years.",
                          "copyright": "Alana Paterson for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/29sci-crow-grudges-promo1/29sci-crow-grudges-promo1-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Dr. Marzluff believes a crow can hold a grudge for 17 years.",
                          "copyright": "Alana Paterson for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "27sci-coronagraph",
                  "section": "Science",
                  "subsection": "",
                  "title": "First Images of the Sun’s Flares Released From a New Space Telescope",
                  "abstract": "Forecasters will soon be able to use the instrument, a coronagraph, to better monitor the effects of solar storms.",
                  "uri": "nyt://article/ebeffafb-e7e8-54c6-ac19-5cf87adbbb2f",
                  "url": "https://www.nytimes.com/2024/10/27/science/solar-flare-telescope-sun.html",
                  "byline": "By Katrina Miller",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-27T05:03:45-04:00",
                  "created_date": "2024-10-27T05:03:46-04:00",
                  "published_date": "2024-10-27T05:03:46-04:00",
                  "first_published_date": "2024-10-27T05:03:46-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Sun",
                      "Telescopes and Observatories",
                      "Aurora Borealis",
                      "Space and Astronomy",
                      "Research"
                  ],
                  "org_facet": [
                      "National Oceanic and Atmospheric Administration"
                  ],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/26/autossell/26sci-coronagraph/26sci-coronagraph-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "NOAA/NASA/GOES-19/CCOR-1"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/26/autossell/26sci-coronagraph/26sci-coronagraph-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "NOAA/NASA/GOES-19/CCOR-1"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/26/autossell/26sci-coronagraph/26sci-coronagraph-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "NOAA/NASA/GOES-19/CCOR-1"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/26/autossell/26sci-coronagraph/26sci-coronagraph-articleInline.jpg",
                          "format": "Normal",
                          "height": 190,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "NOAA/NASA/GOES-19/CCOR-1"
                      }
                  ]
              },
              {
                  "slug_name": "26SCI-ANIMAL-SKELETONS",
                  "section": "Science",
                  "subsection": "",
                  "title": "A Skeleton Bank of Understudied Species",
                  "abstract": "With a new database of medical images, zoo and wildlife vets can finally see what healthy uncommon animals, from rhinos and tamarins to pangolins and sea stars, should look like on the inside.",
                  "uri": "nyt://article/5951e1ea-1c4b-569c-a7eb-a936fb317387",
                  "url": "https://www.nytimes.com/2024/10/26/science/animals-skeletons-wildlife.html",
                  "byline": "By Emily Anthes",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-26T05:03:17-04:00",
                  "created_date": "2024-10-26T05:03:17-04:00",
                  "published_date": "2024-10-26T05:03:17-04:00",
                  "first_published_date": "2024-10-26T05:03:17-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "your-feed-science",
                      "your-feed-animals",
                      "Fish and Other Marine Life",
                      "Rhinoceroses",
                      "Endangered and Extinct Species",
                      "Zoos",
                      "Animals",
                      "Computerized Axial Tomography (CAT Scans)",
                      "Skeletons",
                      "Veterinary Medicine",
                      "Stingrays"
                  ],
                  "org_facet": [
                      "Brookfield Zoo",
                      "Ohio State University"
                  ],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/21/multimedia/00ANIMAL-SKELETONS-01-tgpq/00ANIMAL-SKELETONS-01-tgpq-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A green moray eel.",
                          "copyright": "Disney’s Animals, Science, and Environment"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/21/multimedia/00ANIMAL-SKELETONS-01-tgpq/00ANIMAL-SKELETONS-01-tgpq-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A green moray eel.",
                          "copyright": "Disney’s Animals, Science, and Environment"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/21/multimedia/00ANIMAL-SKELETONS-01-tgpq/00ANIMAL-SKELETONS-01-tgpq-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A green moray eel.",
                          "copyright": "Disney’s Animals, Science, and Environment"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/21/multimedia/00ANIMAL-SKELETONS-01-tgpq/00ANIMAL-SKELETONS-01-tgpq-articleInline.jpg",
                          "format": "Normal",
                          "height": 164,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "A green moray eel.",
                          "copyright": "Disney’s Animals, Science, and Environment"
                      }
                  ]
              },
              {
                  "slug_name": "25cooper",
                  "section": "Science",
                  "subsection": "",
                  "title": "Leon Cooper Dies at 94; Nobelist Unlocked Secrets of Superconductivity",
                  "abstract": "He shared the 1972 physics prize for showing how some materials could convey electricity without resistance. He also did pioneering research in neuroscience.",
                  "uri": "nyt://article/5e117a07-d6a2-5d7b-bed5-0fd9c300a54a",
                  "url": "https://www.nytimes.com/2024/10/25/science/leon-cooper-dead.html",
                  "byline": "By Dylan Loeb McClain",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-28T21:01:22-04:00",
                  "created_date": "2024-10-25T16:25:28-04:00",
                  "published_date": "2024-10-25T16:25:28-04:00",
                  "first_published_date": "2024-10-25T16:25:28-04:00",
                  "material_type_facet": "Obituary (Obit)",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Deaths (Obituaries)",
                      "Superconductors",
                      "Physics",
                      "Research",
                      "Nobel Prizes"
                  ],
                  "org_facet": [
                      "Brown University",
                      "University of Illinois, Urbana-Champaign"
                  ],
                  "per_facet": [
                      "Cooper, Leon N"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/27/multimedia/25cooper1-fmch-print1/25cooper1-fmch-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The physicist Leon N. Cooper in 1972, after it was announced that he and two colleagues had been awarded the Nobel Prize in Physics.",
                          "copyright": "Bettmann/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/27/multimedia/25cooper1-fmch-print1/25cooper1-fmch-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The physicist Leon N. Cooper in 1972, after it was announced that he and two colleagues had been awarded the Nobel Prize in Physics.",
                          "copyright": "Bettmann/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/27/multimedia/25cooper1-fmch-print1/25cooper1-fmch-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The physicist Leon N. Cooper in 1972, after it was announced that he and two colleagues had been awarded the Nobel Prize in Physics.",
                          "copyright": "Bettmann/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/27/multimedia/25cooper1-fmch-print1/25cooper1-fmch-articleInline.jpg",
                          "format": "Normal",
                          "height": 146,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The physicist Leon N. Cooper in 1972, after it was announced that he and two colleagues had been awarded the Nobel Prize in Physics.",
                          "copyright": "Bettmann/Getty Images"
                      }
                  ]
              },
              {
                  "slug_name": "25astronaut",
                  "section": "Science",
                  "subsection": "",
                  "title": "NASA Astronaut Leaves Hospital After ‘Medical Issue’ That Followed Return From Space",
                  "abstract": "Three NASA astronauts and a fourth from the Russian space agency returned to Earth from the International Space Station on Friday morning in a SpaceX capsule.",
                  "uri": "nyt://article/c9aefddb-396a-5900-9903-9cd380d6f913",
                  "url": "https://www.nytimes.com/2024/10/25/science/nasa-spacex-astronaut-hospital.html",
                  "byline": "By Kenneth Chang",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-26T14:50:57-04:00",
                  "created_date": "2024-10-25T15:47:23-04:00",
                  "published_date": "2024-10-25T15:47:23-04:00",
                  "first_published_date": "2024-10-25T15:47:23-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "International Space Station",
                      "Space and Astronomy",
                      "Private Spaceflight",
                      "Rocket Science and Propulsion"
                  ],
                  "org_facet": [
                      "National Aeronautics and Space Administration",
                      "Space Exploration Technologies Corp"
                  ],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25astronaut-lbtg/25astronaut-lbtg-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Support teams worked to extract the crew from the SpaceX Dragon Endeavour spacecraft shortly after splashdown in the Gulf of Mexico on Friday.",
                          "copyright": "Joel Kowsky/NASA, via Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25astronaut-lbtg/25astronaut-lbtg-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Support teams worked to extract the crew from the SpaceX Dragon Endeavour spacecraft shortly after splashdown in the Gulf of Mexico on Friday.",
                          "copyright": "Joel Kowsky/NASA, via Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25astronaut-lbtg/25astronaut-lbtg-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Support teams worked to extract the crew from the SpaceX Dragon Endeavour spacecraft shortly after splashdown in the Gulf of Mexico on Friday.",
                          "copyright": "Joel Kowsky/NASA, via Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25astronaut-lbtg/25astronaut-lbtg-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Support teams worked to extract the crew from the SpaceX Dragon Endeavour spacecraft shortly after splashdown in the Gulf of Mexico on Friday.",
                          "copyright": "Joel Kowsky/NASA, via Getty Images"
                      }
                  ]
              },
              {
                  "slug_name": "25tb-airwar",
                  "section": "Science",
                  "subsection": "",
                  "title": "The Early Bird Got the Cicada, Then an Evolutionary Air War Started",
                  "abstract": "Fossils reveal that prehistoric cicadas’ wings evolved to help them evade hungry predators with feathers and beaks, scientists say.",
                  "uri": "nyt://article/f5f6a0cf-df32-54a2-8189-e69ea3572fb2",
                  "url": "https://www.nytimes.com/2024/10/25/science/cicadas-fossils-bird-evolution.html",
                  "byline": "By Jack Tamisiea",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-25T14:00:08-04:00",
                  "created_date": "2024-10-25T14:00:08-04:00",
                  "published_date": "2024-10-25T14:00:08-04:00",
                  "first_published_date": "2024-10-25T14:00:08-04:00",
                  "material_type_facet": "News",
                  "kicker": "Trilobites",
                  "subheadline": "",
                  "des_facet": [
                      "Cicadas (Insects)",
                      "Fossils",
                      "Paleontology",
                      "Evolution (Biology)",
                      "Birds",
                      "Research",
                      "your-feed-science"
                  ],
                  "org_facet": [
                      "Science Advances (Journal)"
                  ],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25tb-airwar-01-vkqt/25tb-airwar-01-vkqt-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "An artist’s concept of an Early Cretaceous cicada chased by Longipteryx chaoyangensis, an early bird.",
                          "copyright": "Xu et al., Sci. Adv. 10, eadr2201 (2024)"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25tb-airwar-01-vkqt/25tb-airwar-01-vkqt-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "An artist’s concept of an Early Cretaceous cicada chased by Longipteryx chaoyangensis, an early bird.",
                          "copyright": "Xu et al., Sci. Adv. 10, eadr2201 (2024)"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25tb-airwar-01-vkqt/25tb-airwar-01-vkqt-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "An artist’s concept of an Early Cretaceous cicada chased by Longipteryx chaoyangensis, an early bird.",
                          "copyright": "Xu et al., Sci. Adv. 10, eadr2201 (2024)"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25tb-airwar-01-vkqt/25tb-airwar-01-vkqt-articleInline.jpg",
                          "format": "Normal",
                          "height": 109,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "An artist’s concept of an Early Cretaceous cicada chased by Longipteryx chaoyangensis, an early bird.",
                          "copyright": "Xu et al., Sci. Adv. 10, eadr2201 (2024)"
                      }
                  ]
              },
              {
                  "slug_name": "25SCI-WELLMAN",
                  "section": "Science",
                  "subsection": "",
                  "title": "That 800-Year-Old Corpse in the Well? Early Biological Warfare.",
                  "abstract": "Archaeologists in Norway have confirmed that an ancient set of human remains known as the Well Man were intended to make the locals unwell.",
                  "uri": "nyt://article/18b78f6d-fc45-5649-b054-80737953765f",
                  "url": "https://www.nytimes.com/2024/10/25/science/archaeology-norway-sverresborg.html",
                  "byline": "By Franz Lidz",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-26T15:53:37-04:00",
                  "created_date": "2024-10-25T11:00:08-04:00",
                  "published_date": "2024-10-25T11:00:08-04:00",
                  "first_published_date": "2024-10-25T11:00:08-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "your-feed-science",
                      "DNA (Deoxyribonucleic Acid)",
                      "Biological and Chemical Warfare",
                      "Carbon Dating",
                      "Genetics and Heredity",
                      "Palaces and Castles"
                  ],
                  "org_facet": [
                      "DeCode Genetics",
                      "iScience (Journal)",
                      "Norwegian University of Science and Technology"
                  ],
                  "per_facet": [],
                  "geo_facet": [
                      "Trondheim (Norway)"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/25SCI-WELLMAN-01-mhwv/25SCI-WELLMAN-01-mhwv-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The Well Man was little more than a myth until 1938, when archaeologists excavated an abandoned well in the ruins of Sverresborg, outside Trondheim in central Norway.",
                          "copyright": "Norwegian Institute for Cultural Heritage Research"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/25SCI-WELLMAN-01-mhwv/25SCI-WELLMAN-01-mhwv-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The Well Man was little more than a myth until 1938, when archaeologists excavated an abandoned well in the ruins of Sverresborg, outside Trondheim in central Norway.",
                          "copyright": "Norwegian Institute for Cultural Heritage Research"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/25SCI-WELLMAN-01-mhwv/25SCI-WELLMAN-01-mhwv-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The Well Man was little more than a myth until 1938, when archaeologists excavated an abandoned well in the ruins of Sverresborg, outside Trondheim in central Norway.",
                          "copyright": "Norwegian Institute for Cultural Heritage Research"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/25SCI-WELLMAN-01-mhwv/25SCI-WELLMAN-01-mhwv-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The Well Man was little more than a myth until 1938, when archaeologists excavated an abandoned well in the ruins of Sverresborg, outside Trondheim in central Norway.",
                          "copyright": "Norwegian Institute for Cultural Heritage Research"
                      }
                  ]
              },
              {
                  "slug_name": "24zimbardo",
                  "section": "Science",
                  "subsection": "",
                  "title": "Philip Zimbardo, 91, Whose Stanford Prison Experiment Studied Evil, Dies",
                  "abstract": "His provocative research made him a popular figure on campus. But his exploration of how good people can turn evil raised ethical questions.",
                  "uri": "nyt://article/0ae4e91a-d7ec-5b30-8311-c8c2eef71cd1",
                  "url": "https://www.nytimes.com/2024/10/24/science/philip-zimbardo-dead.html",
                  "byline": "By Michael S. Rosenwald",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T14:19:02-04:00",
                  "created_date": "2024-10-24T17:46:30-04:00",
                  "published_date": "2024-10-24T17:46:30-04:00",
                  "first_published_date": "2024-10-24T17:46:30-04:00",
                  "material_type_facet": "Obituary (Obit)",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Deaths (Obituaries)",
                      "Psychology and Psychologists",
                      "Ethics (Personal)",
                      "Research",
                      "Prisons and Prisoners",
                      "Colleges and Universities"
                  ],
                  "org_facet": [
                      "Stanford University"
                  ],
                  "per_facet": [
                      "Zimbardo, Philip G"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/26/multimedia/24zimbardo3-cbjz-print1/24zimbardo3-cbjz-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The psychologist Philip G. Zimbardo in 1971, the year he conducted the Stanford Prison Experiment. Seeking a novel way to study how situations can transform behavior, he set up a prison in the basement of Stanford University’s psychology building.",
                          "copyright": "Duke Downey/San Francisco Chronicle, via Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/26/multimedia/24zimbardo3-cbjz-print1/24zimbardo3-cbjz-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The psychologist Philip G. Zimbardo in 1971, the year he conducted the Stanford Prison Experiment. Seeking a novel way to study how situations can transform behavior, he set up a prison in the basement of Stanford University’s psychology building.",
                          "copyright": "Duke Downey/San Francisco Chronicle, via Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/26/multimedia/24zimbardo3-cbjz-print1/24zimbardo3-cbjz-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The psychologist Philip G. Zimbardo in 1971, the year he conducted the Stanford Prison Experiment. Seeking a novel way to study how situations can transform behavior, he set up a prison in the basement of Stanford University’s psychology building.",
                          "copyright": "Duke Downey/San Francisco Chronicle, via Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/26/multimedia/24zimbardo3-cbjz-print1/24zimbardo3-cbjz-articleInline.jpg",
                          "format": "Normal",
                          "height": 151,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The psychologist Philip G. Zimbardo in 1971, the year he conducted the Stanford Prison Experiment. Seeking a novel way to study how situations can transform behavior, he set up a prison in the basement of Stanford University’s psychology building.",
                          "copyright": "Duke Downey/San Francisco Chronicle, via Getty Images"
                      }
                  ]
              }
          ]
      },
      {
          "status": "OK",
          "copyright": "Copyright (c) 2024 The New York Times Company.  All Rights Reserved.",
          "num_results": 20,
          "results": [
              {
                  "slug_name": "02sp-wta-saudi-inyt",
                  "section": "Sports",
                  "subsection": "Tennis",
                  "title": "The Controversy Over Playing the WTA Finals in Saudi Arabia",
                  "abstract": "In a country that is often criticized over its treatment of women, the tennis world debates the pros and cons of holding the elite women’s tournament there.",
                  "uri": "nyt://article/150aa86d-1739-5544-a60b-5c4b609b6c3b",
                  "url": "https://www.nytimes.com/2024/11/01/sports/tennis/wta-finals-saudi-arabia.html",
                  "byline": "By Cindy Shmerler",
                  "item_type": "Article",
                  "source": "International New York Times",
                  "updated_date": "2024-11-01T08:19:38-04:00",
                  "created_date": "2024-11-01T08:19:38-04:00",
                  "published_date": "2024-11-01T08:19:38-04:00",
                  "first_published_date": "2024-11-01T08:19:38-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Tennis",
                      "Women's Rights"
                  ],
                  "org_facet": [
                      "Women's Tennis Assn",
                      "Public Investment Fund (Saudi Arabia)"
                  ],
                  "per_facet": [
                      "Murray, Judy (1959- )"
                  ],
                  "geo_facet": [
                      "Saudi Arabia",
                      "Riyadh (Saudi Arabia)"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02sp-wta-saudi-inyt-01-vwqt/02sp-wta-saudi-inyt-01-vwqt-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The WTA Finals begin on Saturday in Riyadh, Saudi Arabia, which will be the site of the event for three years.",
                          "copyright": "Tamir Kalifa for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02sp-wta-saudi-inyt-01-vwqt/02sp-wta-saudi-inyt-01-vwqt-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The WTA Finals begin on Saturday in Riyadh, Saudi Arabia, which will be the site of the event for three years.",
                          "copyright": "Tamir Kalifa for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02sp-wta-saudi-inyt-01-vwqt/02sp-wta-saudi-inyt-01-vwqt-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The WTA Finals begin on Saturday in Riyadh, Saudi Arabia, which will be the site of the event for three years.",
                          "copyright": "Tamir Kalifa for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02sp-wta-saudi-inyt-01-vwqt/02sp-wta-saudi-inyt-01-vwqt-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The WTA Finals begin on Saturday in Riyadh, Saudi Arabia, which will be the site of the event for three years.",
                          "copyright": "Tamir Kalifa for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "02sp-wta-paolini-inyt",
                  "section": "Sports",
                  "subsection": "Tennis",
                  "title": "The High-Energy Jasmine Paolini Has Broken Through",
                  "abstract": "The player from Italy reached the finals this year at the French Open and Wimbledon. Now she has qualified for the WTA Finals for the first time.",
                  "uri": "nyt://article/d0b98543-9ec2-5d7f-a416-a7a4bb7a1322",
                  "url": "https://www.nytimes.com/2024/11/01/sports/tennis/wta-finals-jasmine-paolini.html",
                  "byline": "By Cindy Shmerler",
                  "item_type": "Article",
                  "source": "International New York Times",
                  "updated_date": "2024-11-01T08:19:11-04:00",
                  "created_date": "2024-11-01T08:19:11-04:00",
                  "published_date": "2024-11-01T08:19:11-04:00",
                  "first_published_date": "2024-11-01T08:19:11-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Tennis",
                      "Content Type: Personal Profile"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Paolini, Jasmine (1996- )",
                      "Errani, Sara"
                  ],
                  "geo_facet": [
                      "Italy"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02sp-wta-paolini-inyt-01-jbkl/02sp-wta-paolini-inyt-01-jbkl-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jasmine Paolini, ranked No. 4, will play in the WTA Finals for the first time in her career.",
                          "copyright": "Wang Zhao/Agence France-Presse — Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02sp-wta-paolini-inyt-01-jbkl/02sp-wta-paolini-inyt-01-jbkl-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jasmine Paolini, ranked No. 4, will play in the WTA Finals for the first time in her career.",
                          "copyright": "Wang Zhao/Agence France-Presse — Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02sp-wta-paolini-inyt-01-jbkl/02sp-wta-paolini-inyt-01-jbkl-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jasmine Paolini, ranked No. 4, will play in the WTA Finals for the first time in her career.",
                          "copyright": "Wang Zhao/Agence France-Presse — Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02sp-wta-paolini-inyt-01-jbkl/02sp-wta-paolini-inyt-01-jbkl-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jasmine Paolini, ranked No. 4, will play in the WTA Finals for the first time in her career.",
                          "copyright": "Wang Zhao/Agence France-Presse — Getty Images"
                      }
                  ]
              },
              {
                  "slug_name": "02sp-wta-tiebreaker-inyt",
                  "section": "Sports",
                  "subsection": "Tennis",
                  "title": "The Importance of Those High-Pressure Tiebreakers in Tennis",
                  "abstract": "Experts say that players need to take their time to succeed. “The athlete who rushes during a tiebreak gets into trouble,” Pam Shriver says.",
                  "uri": "nyt://article/c0c5262b-8137-5556-b1c9-0af650c268d8",
                  "url": "https://www.nytimes.com/2024/11/01/sports/tennis/tiebreakers-tennis-matches.html",
                  "byline": "By Stuart Miller",
                  "item_type": "Article",
                  "source": "International New York Times",
                  "updated_date": "2024-11-01T08:18:45-04:00",
                  "created_date": "2024-11-01T08:18:45-04:00",
                  "published_date": "2024-11-01T08:18:45-04:00",
                  "first_published_date": "2024-11-01T08:18:45-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Tennis"
                  ],
                  "org_facet": [
                      "Women's Tennis Assn"
                  ],
                  "per_facet": [
                      "Shriver, Pam"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02sp-wta-tiebreaker-inyt-bjpg/02sp-wta-tiebreaker-inyt-bjpg-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The No. 1-ranked Aryna Sabalenka said players could prepare for tiebreakers. “I play a lot of tiebreaks with my hitting partner, who puts me under pressure so I can work on getting through the difficult points,” she said.",
                          "copyright": "Julia Nikhinson/Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02sp-wta-tiebreaker-inyt-bjpg/02sp-wta-tiebreaker-inyt-bjpg-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The No. 1-ranked Aryna Sabalenka said players could prepare for tiebreakers. “I play a lot of tiebreaks with my hitting partner, who puts me under pressure so I can work on getting through the difficult points,” she said.",
                          "copyright": "Julia Nikhinson/Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02sp-wta-tiebreaker-inyt-bjpg/02sp-wta-tiebreaker-inyt-bjpg-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The No. 1-ranked Aryna Sabalenka said players could prepare for tiebreakers. “I play a lot of tiebreaks with my hitting partner, who puts me under pressure so I can work on getting through the difficult points,” she said.",
                          "copyright": "Julia Nikhinson/Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/02/multimedia/02sp-wta-tiebreaker-inyt-bjpg/02sp-wta-tiebreaker-inyt-bjpg-articleInline.jpg",
                          "format": "Normal",
                          "height": 148,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The No. 1-ranked Aryna Sabalenka said players could prepare for tiebreakers. “I play a lot of tiebreaks with my hitting partner, who puts me under pressure so I can work on getting through the difficult points,” she said.",
                          "copyright": "Julia Nikhinson/Associated Press"
                      }
                  ]
              },
              {
                  "slug_name": "31marathon-mental-game",
                  "section": "Sports",
                  "subsection": "",
                  "title": "This Is Your Brain on 26.2 Miles",
                  "abstract": "Running a marathon can take the mind on its own strange and sometimes unpredictable journey.",
                  "uri": "nyt://article/e582afb5-9a15-50f8-8dc3-25fdc7e30afe",
                  "url": "https://www.nytimes.com/2024/10/31/sports/nyc-marathon-mental-game.html",
                  "byline": "By Jeré Longman, Talya Minsberg and Ping Zhu",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T09:08:23-04:00",
                  "created_date": "2024-10-31T03:00:34-04:00",
                  "published_date": "2024-10-31T03:00:34-04:00",
                  "first_published_date": "2024-10-31T03:00:34-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "New York City Marathon"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [
                      "New York City"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/nyregion/31-marathon-mental-game-cover/31-marathon-mental-game-cover-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/nyregion/31-marathon-mental-game-cover/31-marathon-mental-game-cover-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/nyregion/31-marathon-mental-game-cover/31-marathon-mental-game-cover-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/nyregion/31-marathon-mental-game-cover/31-marathon-mental-game-cover-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      }
                  ]
              },
              {
                  "slug_name": "30may",
                  "section": "Sports",
                  "subsection": "Baseball",
                  "title": "Rudy May, a Stingy Master of the Curveball, Dies at 80",
                  "abstract": "He overcame a dip in velocity to find pitching success with four teams, including the Yankees and Orioles, and had a dominant season in 1980.",
                  "uri": "nyt://article/fe5906dd-c3d6-50bb-97a4-123f094c53ea",
                  "url": "https://www.nytimes.com/2024/10/30/sports/baseball/rudy-may-dead.html",
                  "byline": "By Alex Williams",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-30T16:13:08-04:00",
                  "created_date": "2024-10-30T11:54:07-04:00",
                  "published_date": "2024-10-30T11:54:07-04:00",
                  "first_published_date": "2024-10-30T11:54:07-04:00",
                  "material_type_facet": "Obituary (Obit)",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Baseball",
                      "Deaths (Obituaries)"
                  ],
                  "org_facet": [
                      "New York Yankees",
                      "Baltimore Orioles"
                  ],
                  "per_facet": [
                      "May, Rudy (1944-2024)"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/obituaries/29May-print1/29May-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Rudy May pitching at Yankee Stadium in about 1981. He appeared in three games in that year’s World Series, in which New York lost to the Los Angeles Dodgers in six games.",
                          "copyright": "Focus on Sport/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/obituaries/29May-print1/29May-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Rudy May pitching at Yankee Stadium in about 1981. He appeared in three games in that year’s World Series, in which New York lost to the Los Angeles Dodgers in six games.",
                          "copyright": "Focus on Sport/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/obituaries/29May-print1/29May-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Rudy May pitching at Yankee Stadium in about 1981. He appeared in three games in that year’s World Series, in which New York lost to the Los Angeles Dodgers in six games.",
                          "copyright": "Focus on Sport/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/obituaries/29May-print1/29May-articleInline.jpg",
                          "format": "Normal",
                          "height": 128,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Rudy May pitching at Yankee Stadium in about 1981. He appeared in three games in that year’s World Series, in which New York lost to the Los Angeles Dodgers in six games.",
                          "copyright": "Focus on Sport/Getty Images"
                      }
                  ]
              },
              {
                  "slug_name": "28sp-masters-dimitrov-inyt",
                  "section": "Sports",
                  "subsection": "Tennis",
                  "title": "Grigor Dimitrov Has a Renaissance",
                  "abstract": "The tennis player turned pro in 2008 and is now back in the top 10 as he prepares for the Rolex Paris Masters.",
                  "uri": "nyt://article/9d0269bd-3db7-5b8d-90c2-73a34aab49b2",
                  "url": "https://www.nytimes.com/2024/10/26/sports/tennis/grigor-dimitrov-has-a-renaissance.html",
                  "byline": "By Cindy Shmerler",
                  "item_type": "Article",
                  "source": "International New York Times",
                  "updated_date": "2024-10-26T05:03:22-04:00",
                  "created_date": "2024-10-26T05:03:22-04:00",
                  "published_date": "2024-10-26T05:03:22-04:00",
                  "first_published_date": "2024-10-26T05:03:22-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Tennis",
                      "Content Type: Personal Profile"
                  ],
                  "org_facet": [
                      "Assn of Tennis Professionals"
                  ],
                  "per_facet": [
                      "Dimitrov, Grigor"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28sp-masters-dimitrov-inyt-01-wvhf/28sp-masters-dimitrov-inyt-01-wvhf-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Grigor Dimitrov playing in the Shanghai Masters earlier this month.",
                          "copyright": "Tingshu Wang/Reuters"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28sp-masters-dimitrov-inyt-01-wvhf/28sp-masters-dimitrov-inyt-01-wvhf-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Grigor Dimitrov playing in the Shanghai Masters earlier this month.",
                          "copyright": "Tingshu Wang/Reuters"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28sp-masters-dimitrov-inyt-01-wvhf/28sp-masters-dimitrov-inyt-01-wvhf-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Grigor Dimitrov playing in the Shanghai Masters earlier this month.",
                          "copyright": "Tingshu Wang/Reuters"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28sp-masters-dimitrov-inyt-01-wvhf/28sp-masters-dimitrov-inyt-01-wvhf-articleInline.jpg",
                          "format": "Normal",
                          "height": 126,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Grigor Dimitrov playing in the Shanghai Masters earlier this month.",
                          "copyright": "Tingshu Wang/Reuters"
                      }
                  ]
              },
              {
                  "slug_name": "28sp-masters-bounce-inyt",
                  "section": "Sports",
                  "subsection": "Tennis",
                  "title": "Not All Tennis Balls Are the Same",
                  "abstract": "Players must adjust to the differences, and that has led to complaints about consistency. The ATP is trying to solve the problem.",
                  "uri": "nyt://article/2eeb93c4-aaa3-506c-909f-62d212bee512",
                  "url": "https://www.nytimes.com/2024/10/26/sports/tennis/tennis-balls-atp-wta.html",
                  "byline": "By Stuart Miller",
                  "item_type": "Article",
                  "source": "International New York Times",
                  "updated_date": "2024-10-26T05:02:50-04:00",
                  "created_date": "2024-10-26T05:02:50-04:00",
                  "published_date": "2024-10-26T05:02:50-04:00",
                  "first_published_date": "2024-10-26T05:02:50-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Tennis",
                      "Sporting Goods and Equipment"
                  ],
                  "org_facet": [
                      "Assn of Tennis Professionals"
                  ],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28sp-masters-bounce-inyt-mvpj/28sp-masters-bounce-inyt-mvpj-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Players often see different brands of tennis balls during tournaments, which could affect their performance.",
                          "copyright": "Aurelien Morissard/Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28sp-masters-bounce-inyt-mvpj/28sp-masters-bounce-inyt-mvpj-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Players often see different brands of tennis balls during tournaments, which could affect their performance.",
                          "copyright": "Aurelien Morissard/Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28sp-masters-bounce-inyt-mvpj/28sp-masters-bounce-inyt-mvpj-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Players often see different brands of tennis balls during tournaments, which could affect their performance.",
                          "copyright": "Aurelien Morissard/Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28sp-masters-bounce-inyt-mvpj/28sp-masters-bounce-inyt-mvpj-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Players often see different brands of tennis balls during tournaments, which could affect their performance.",
                          "copyright": "Aurelien Morissard/Associated Press"
                      }
                  ]
              },
              {
                  "slug_name": "28sp-masters-directors-inyt",
                  "section": "Sports",
                  "subsection": "Tennis",
                  "title": "Playing Tennis Is Tough. So Is Being the Director of a Tournament.",
                  "abstract": "Former players often run big events, and they have to deal with such requests as better food and accommodations. “As tournament director you know that not everyone is going to be happy,” one said.",
                  "uri": "nyt://article/37d26759-1bb8-5cc9-8cba-d27f4c2a7256",
                  "url": "https://www.nytimes.com/2024/10/26/sports/tennis/tennis-tournament-director.html",
                  "byline": "By Cindy Shmerler",
                  "item_type": "Article",
                  "source": "International New York Times",
                  "updated_date": "2024-10-26T05:02:50-04:00",
                  "created_date": "2024-10-26T05:02:50-04:00",
                  "published_date": "2024-10-26T05:02:50-04:00",
                  "first_published_date": "2024-10-26T05:02:50-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Tennis"
                  ],
                  "org_facet": [
                      "Assn of Tennis Professionals"
                  ],
                  "per_facet": [],
                  "geo_facet": [
                      "Paris (France)"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28sp-masters-directors-inyt-jkpg/28sp-masters-directors-inyt-jkpg-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Amélie Mauresmo, right, the French Open tournament director, congratulates Iga Swiatek after winning the event in June.",
                          "copyright": "Tim Goode/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28sp-masters-directors-inyt-jkpg/28sp-masters-directors-inyt-jkpg-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Amélie Mauresmo, right, the French Open tournament director, congratulates Iga Swiatek after winning the event in June.",
                          "copyright": "Tim Goode/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28sp-masters-directors-inyt-jkpg/28sp-masters-directors-inyt-jkpg-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Amélie Mauresmo, right, the French Open tournament director, congratulates Iga Swiatek after winning the event in June.",
                          "copyright": "Tim Goode/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28sp-masters-directors-inyt-jkpg/28sp-masters-directors-inyt-jkpg-articleInline.jpg",
                          "format": "Normal",
                          "height": 124,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Amélie Mauresmo, right, the French Open tournament director, congratulates Iga Swiatek after winning the event in June.",
                          "copyright": "Tim Goode/Getty Images"
                      }
                  ]
              },
              {
                  "slug_name": "24mcgee",
                  "section": "Sports",
                  "subsection": "",
                  "title": "Patti McGee, Skateboarding’s First Female Champion, Dies at 79",
                  "abstract": "She was on the cover of Life magazine and performed for Johnny Carson. She was, her daughter said, “a badass and a goody two-shoes at the same time.”",
                  "uri": "nyt://article/d0a7c434-58f9-5a3b-a59c-326bbc7562e8",
                  "url": "https://www.nytimes.com/2024/10/24/sports/patti-mcgee-dead.html",
                  "byline": "By Richard Sandomir",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-26T13:35:58-04:00",
                  "created_date": "2024-10-24T17:10:33-04:00",
                  "published_date": "2024-10-24T17:10:33-04:00",
                  "first_published_date": "2024-10-24T17:10:33-04:00",
                  "material_type_facet": "Obituary (Obit)",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Deaths (Obituaries)",
                      "Skateboarding",
                      "Women and Girls"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "McGee, Patti (1945-2024)"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/27/multimedia/24mcgee1-pcmb-print1/24mcgee1-pcmb-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Patti McGee in an undated photo. Skateboarding is “like riding a surfboard on the sidewalk,” she once said. “Or skiing down a slope without snow. It’s excitement. It’s kicks. It’s fun.”",
                          "copyright": "Bill Eppridge/The LIFE Picture Collection/Shutterstock"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/27/multimedia/24mcgee1-pcmb-print1/24mcgee1-pcmb-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Patti McGee in an undated photo. Skateboarding is “like riding a surfboard on the sidewalk,” she once said. “Or skiing down a slope without snow. It’s excitement. It’s kicks. It’s fun.”",
                          "copyright": "Bill Eppridge/The LIFE Picture Collection/Shutterstock"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/27/multimedia/24mcgee1-pcmb-print1/24mcgee1-pcmb-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Patti McGee in an undated photo. Skateboarding is “like riding a surfboard on the sidewalk,” she once said. “Or skiing down a slope without snow. It’s excitement. It’s kicks. It’s fun.”",
                          "copyright": "Bill Eppridge/The LIFE Picture Collection/Shutterstock"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/27/multimedia/24mcgee1-pcmb-print1/24mcgee1-pcmb-articleInline.jpg",
                          "format": "Normal",
                          "height": 285,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Patti McGee in an undated photo. Skateboarding is “like riding a surfboard on the sidewalk,” she once said. “Or skiing down a slope without snow. It’s excitement. It’s kicks. It’s fun.”",
                          "copyright": "Bill Eppridge/The LIFE Picture Collection/Shutterstock"
                      }
                  ]
              },
              {
                  "slug_name": "25sp-mexican-altitude-inyt",
                  "section": "Sports",
                  "subsection": "Auto Racing",
                  "title": "In Mexico City, F1 Teams Must Cope With the Altitude",
                  "abstract": "The thinner air affects the cars in many ways, including the performance of the turbo engines, brakes and tires. “It’s like driving in the wet,” the driver Lance Stroll of Aston Martin said.",
                  "uri": "nyt://article/9737def4-0ff4-5df2-b706-0760e065f0fe",
                  "url": "https://www.nytimes.com/2024/10/24/sports/autoracing/f1-mexico-city-altitude.html",
                  "byline": "By Alex Kalinauckas",
                  "item_type": "Article",
                  "source": "International New York Times",
                  "updated_date": "2024-10-24T13:57:17-04:00",
                  "created_date": "2024-10-24T13:57:17-04:00",
                  "published_date": "2024-10-24T13:57:17-04:00",
                  "first_published_date": "2024-10-24T13:57:17-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Automobile Racing"
                  ],
                  "org_facet": [
                      "Formula One"
                  ],
                  "per_facet": [],
                  "geo_facet": [
                      "Mexico City (Mexico)"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25sp-mexican-altitude-inyt-lwgv/25sp-mexican-altitude-inyt-lwgv-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Oscar Piastri racing in the Mexico City Grand Prix in 2023. ",
                          "copyright": "Hoch Zwei/picture-alliance/dpa/Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25sp-mexican-altitude-inyt-lwgv/25sp-mexican-altitude-inyt-lwgv-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Oscar Piastri racing in the Mexico City Grand Prix in 2023. ",
                          "copyright": "Hoch Zwei/picture-alliance/dpa/Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25sp-mexican-altitude-inyt-lwgv/25sp-mexican-altitude-inyt-lwgv-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Oscar Piastri racing in the Mexico City Grand Prix in 2023. ",
                          "copyright": "Hoch Zwei/picture-alliance/dpa/Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25sp-mexican-altitude-inyt-lwgv/25sp-mexican-altitude-inyt-lwgv-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Oscar Piastri racing in the Mexico City Grand Prix in 2023. ",
                          "copyright": "Hoch Zwei/picture-alliance/dpa/Associated Press"
                      }
                  ]
              },
              {
                  "slug_name": "25sp-mexican-perez-inyt",
                  "section": "Sports",
                  "subsection": "Auto Racing",
                  "title": "As Sergio Pérez Struggles, Questions Follow",
                  "abstract": "He started the season strong, but his results have been mostly poor since. His team, Red Bull, has fallen to second place.",
                  "uri": "nyt://article/81276bbd-588b-5515-90f4-273fe2a1b69d",
                  "url": "https://www.nytimes.com/2024/10/24/sports/autoracing/sergio-perez-red-bull.html",
                  "byline": "By Ian Parkes",
                  "item_type": "Article",
                  "source": "International New York Times",
                  "updated_date": "2024-10-24T13:54:18-04:00",
                  "created_date": "2024-10-24T13:54:18-04:00",
                  "published_date": "2024-10-24T13:54:18-04:00",
                  "first_published_date": "2024-10-24T13:54:18-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Automobile Racing",
                      "Automobiles",
                      "Content Type: Personal Profile"
                  ],
                  "org_facet": [
                      "Formula One",
                      "McLaren Racing",
                      "Red Bull Racing Ltd"
                  ],
                  "per_facet": [
                      "Perez, Sergio (1990- )"
                  ],
                  "geo_facet": [
                      "Mexico"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25sp-mexican-perez-inyt-01-fcgm/25sp-mexican-perez-inyt-01-fcgm-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "After starting the season with four finishes on the podium for Red Bull in the first five Grands Prix, Sergio Pérez placed fourth in Miami and eighth in the Emilia-Romagna Grand Prix before crashing in Monaco.",
                          "copyright": "Mark Thompson/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25sp-mexican-perez-inyt-01-fcgm/25sp-mexican-perez-inyt-01-fcgm-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "After starting the season with four finishes on the podium for Red Bull in the first five Grands Prix, Sergio Pérez placed fourth in Miami and eighth in the Emilia-Romagna Grand Prix before crashing in Monaco.",
                          "copyright": "Mark Thompson/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25sp-mexican-perez-inyt-01-fcgm/25sp-mexican-perez-inyt-01-fcgm-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "After starting the season with four finishes on the podium for Red Bull in the first five Grands Prix, Sergio Pérez placed fourth in Miami and eighth in the Emilia-Romagna Grand Prix before crashing in Monaco.",
                          "copyright": "Mark Thompson/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25sp-mexican-perez-inyt-01-fcgm/25sp-mexican-perez-inyt-01-fcgm-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "After starting the season with four finishes on the podium for Red Bull in the first five Grands Prix, Sergio Pérez placed fourth in Miami and eighth in the Emilia-Romagna Grand Prix before crashing in Monaco.",
                          "copyright": "Mark Thompson/Getty Images"
                      }
                  ]
              },
              {
                  "slug_name": "25sp-mexican-colapinto-inyt",
                  "section": "Sports",
                  "subsection": "Auto Racing",
                  "title": "Franco Colapinto Makes an Impression, but He May Not Have a Seat for 2025",
                  "abstract": "He replaced Logan Sargeant after he was dropped by Williams, but Carlos Sainz will move to the team for next year.",
                  "uri": "nyt://article/8ba70c70-79ba-5f4e-a708-d8e68afacf10",
                  "url": "https://www.nytimes.com/2024/10/24/sports/autoracing/f1-franco-colapinto-williams.html",
                  "byline": "By Ian Parkes",
                  "item_type": "Article",
                  "source": "International New York Times",
                  "updated_date": "2024-10-24T13:50:06-04:00",
                  "created_date": "2024-10-24T13:50:06-04:00",
                  "published_date": "2024-10-24T13:50:06-04:00",
                  "first_published_date": "2024-10-24T13:50:06-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Automobile Racing"
                  ],
                  "org_facet": [
                      "Formula One",
                      "WilliamsF1"
                  ],
                  "per_facet": [
                      "Sargeant, Logan",
                      "Colapinto, Franco"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25sp-mexican-colapinto-inyt-01-zvfp/25sp-mexican-colapinto-inyt-01-zvfp-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Franco Colapinto is driving the final nine races for Williams this season.",
                          "copyright": "Mark Thompson/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25sp-mexican-colapinto-inyt-01-zvfp/25sp-mexican-colapinto-inyt-01-zvfp-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Franco Colapinto is driving the final nine races for Williams this season.",
                          "copyright": "Mark Thompson/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25sp-mexican-colapinto-inyt-01-zvfp/25sp-mexican-colapinto-inyt-01-zvfp-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Franco Colapinto is driving the final nine races for Williams this season.",
                          "copyright": "Mark Thompson/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/25sp-mexican-colapinto-inyt-01-zvfp/25sp-mexican-colapinto-inyt-01-zvfp-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Franco Colapinto is driving the final nine races for Williams this season.",
                          "copyright": "Mark Thompson/Getty Images"
                      }
                  ]
              },
              {
                  "slug_name": "23xp-hawkins",
                  "section": "Sports",
                  "subsection": "",
                  "title": "Julia Hawkins, Centenarian Sprinter, Dies at 108",
                  "abstract": "She took up running after her 100th birthday at the encouragement of her children, and went on to set two world records in the 100-meter dash.",
                  "uri": "nyt://article/76162dfb-4892-5c16-ae2f-0306cf7860ab",
                  "url": "https://www.nytimes.com/2024/10/23/sports/julia-hawkins-dead.html",
                  "byline": "By Alyssa Lukpat",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-23T12:31:24-04:00",
                  "created_date": "2024-10-23T11:32:18-04:00",
                  "published_date": "2024-10-23T11:32:18-04:00",
                  "first_published_date": "2024-10-23T11:32:18-04:00",
                  "material_type_facet": "Obituary (Obit)",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Deaths (Obituaries)",
                      "Age, Chronological",
                      "Records and Achievements",
                      "Track and Field",
                      "Running",
                      "Longevity"
                  ],
                  "org_facet": [],
                  "per_facet": [
                      "Hawkins, Julia (1916- )"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/00xp-hawkins-02-print1/00xp-hawkins-02-thumbStandard-v2.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Julia Hawkins competing in the 50-meter dash at the National Senior Games in Albuquerque in 2019.",
                          "copyright": "Brit Huckabay/National Senior Games Association, via Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/00xp-hawkins-02-print1/00xp-hawkins-02-mediumThreeByTwo210-v2.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Julia Hawkins competing in the 50-meter dash at the National Senior Games in Albuquerque in 2019.",
                          "copyright": "Brit Huckabay/National Senior Games Association, via Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/00xp-hawkins-02-print1/00xp-hawkins-02-mediumThreeByTwo440-v2.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Julia Hawkins competing in the 50-meter dash at the National Senior Games in Albuquerque in 2019.",
                          "copyright": "Brit Huckabay/National Senior Games Association, via Associated Press"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/00xp-hawkins-02-print1/00xp-hawkins-02-articleInline.jpg",
                          "format": "Normal",
                          "height": 285,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Julia Hawkins competing in the 50-meter dash at the National Senior Games in Albuquerque in 2019.",
                          "copyright": "Brit Huckabay/National Senior Games Association, via Associated Press"
                      }
                  ]
              },
              {
                  "slug_name": "23Valenzuela",
                  "section": "Sports",
                  "subsection": "",
                  "title": "Fernando Valenzuela, Pitcher Whose Screwballs Eluded Batters, Dies at 63",
                  "abstract": "The Los Angeles Dodgers star won the Rookie of the Year and Cy Young Awards in 1981, when “Fernandomania” made him a household name and filled ballparks.",
                  "uri": "nyt://article/8fe5812d-8460-50ca-bbd1-e1bdf6ba2233",
                  "url": "https://www.nytimes.com/2024/10/23/sports/fernando-valenzuela-dead.html",
                  "byline": "By Richard Sandomir",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-25T07:42:09-04:00",
                  "created_date": "2024-10-23T00:06:21-04:00",
                  "published_date": "2024-10-23T00:06:21-04:00",
                  "first_published_date": "2024-10-23T00:06:21-04:00",
                  "material_type_facet": "Obituary (Obit)",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Deaths (Obituaries)",
                      "Baseball"
                  ],
                  "org_facet": [
                      "Los Angeles Dodgers"
                  ],
                  "per_facet": [
                      "Valenzuela, Fernando"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/23/multimedia/23valenzuela-wzmb/23valenzuela-wzmb-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Fernando Valenzuela of the Dodgers performs his signature windup while playing in Los Angeles in 1982. He pitched for the team from 1980 through 1990.",
                          "copyright": "Larry Morris/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/23/multimedia/23valenzuela-wzmb/23valenzuela-wzmb-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Fernando Valenzuela of the Dodgers performs his signature windup while playing in Los Angeles in 1982. He pitched for the team from 1980 through 1990.",
                          "copyright": "Larry Morris/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/23/multimedia/23valenzuela-wzmb/23valenzuela-wzmb-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Fernando Valenzuela of the Dodgers performs his signature windup while playing in Los Angeles in 1982. He pitched for the team from 1980 through 1990.",
                          "copyright": "Larry Morris/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/23/multimedia/23valenzuela-wzmb/23valenzuela-wzmb-articleInline.jpg",
                          "format": "Normal",
                          "height": 126,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Fernando Valenzuela of the Dodgers performs his signature windup while playing in Los Angeles in 1982. He pitched for the team from 1980 through 1990.",
                          "copyright": "Larry Morris/The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "22asofsky",
                  "section": "Sports",
                  "subsection": "Basketball",
                  "title": "Stan Asofsky, Vociferous Courtside Superfan of the Knicks, Dies at 87",
                  "abstract": "For decades, beginning in 1959, he was a regular presence at Madison Square Garden (in two locations), befriending players and heckling opposing players and refs.",
                  "uri": "nyt://article/0e7749fe-d190-5a6b-9b13-1f6f17adaf2b",
                  "url": "https://www.nytimes.com/2024/10/22/sports/basketball/stan-asofsky-dead.html",
                  "byline": "By Harvey Araton",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-22T21:18:38-04:00",
                  "created_date": "2024-10-22T16:44:46-04:00",
                  "published_date": "2024-10-22T16:44:46-04:00",
                  "first_published_date": "2024-10-22T16:44:46-04:00",
                  "material_type_facet": "Obituary (Obit)",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Deaths (Obituaries)",
                      "Basketball",
                      "Fans (Persons)"
                  ],
                  "org_facet": [
                      "New York Knicks",
                      "Madison Square Garden"
                  ],
                  "per_facet": [
                      "Asofsky, Stan (1937-2024)",
                      "Klein, Fred (d 2020)"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/24/multimedia/21asofsky2-jwzb-print1/21asofsky2-jwzb-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Stan Asofsky, right, with his constant front-row companion, Fred Klein, during a Knicks game. Like many fans, he had waited half a century for another Knicks title. He died still waiting. ",
                          "copyright": "via Roberta Cohen"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/24/multimedia/21asofsky2-jwzb-print1/21asofsky2-jwzb-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Stan Asofsky, right, with his constant front-row companion, Fred Klein, during a Knicks game. Like many fans, he had waited half a century for another Knicks title. He died still waiting. ",
                          "copyright": "via Roberta Cohen"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/24/multimedia/21asofsky2-jwzb-print1/21asofsky2-jwzb-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Stan Asofsky, right, with his constant front-row companion, Fred Klein, during a Knicks game. Like many fans, he had waited half a century for another Knicks title. He died still waiting. ",
                          "copyright": "via Roberta Cohen"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/24/multimedia/21asofsky2-jwzb-print1/21asofsky2-jwzb-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Stan Asofsky, right, with his constant front-row companion, Fred Klein, during a Knicks game. Like many fans, he had waited half a century for another Knicks title. He died still waiting. ",
                          "copyright": "via Roberta Cohen"
                      }
                  ]
              },
              {
                  "slug_name": "21xp-yankeesdodgers",
                  "section": "Sports",
                  "subsection": "Baseball",
                  "title": "After 43 Years, Yankees and Dodgers Resume Their World Series Rivalry",
                  "abstract": "Even as the sport and the country have changed, the rivalry has produced some of baseball’s most memorable moments.",
                  "uri": "nyt://article/1e8cda95-da8b-5928-b52c-250f948ef34e",
                  "url": "https://www.nytimes.com/2024/10/21/sports/baseball/yankees-dodgers-world-series.html",
                  "byline": "By Victor Mather",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-22T11:38:52-04:00",
                  "created_date": "2024-10-21T05:40:21-04:00",
                  "published_date": "2024-10-21T05:40:21-04:00",
                  "first_published_date": "2024-10-21T05:40:21-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Baseball",
                      "World Series"
                  ],
                  "org_facet": [
                      "Brooklyn Dodgers",
                      "Los Angeles Dodgers",
                      "New York Yankees"
                  ],
                  "per_facet": [
                      "Robinson, Jackie",
                      "Stengel, Casey",
                      "Martin, Billy Jr (1928-89)",
                      "Larsen, Don",
                      "Koufax, Sandy",
                      "Jackson, Reggie (1946- )",
                      "Steinbrenner, George M 3d"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2017/10/23/sports/00YANKEESDODGERS-web-top/00YANKEESDODGERS-web-top-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jackie Robinson of the Brooklyn Dodgers stealing home in the opening game of the 1955 World Series, when the Dodgers met the New York Yankees for the sixth time.",
                          "copyright": "Meyer Liebowitz/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2017/10/23/sports/00YANKEESDODGERS-web-top/00YANKEESDODGERS-web-top-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jackie Robinson of the Brooklyn Dodgers stealing home in the opening game of the 1955 World Series, when the Dodgers met the New York Yankees for the sixth time.",
                          "copyright": "Meyer Liebowitz/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2017/10/23/sports/00YANKEESDODGERS-web-top/00YANKEESDODGERS-web-top-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jackie Robinson of the Brooklyn Dodgers stealing home in the opening game of the 1955 World Series, when the Dodgers met the New York Yankees for the sixth time.",
                          "copyright": "Meyer Liebowitz/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2017/10/23/sports/00YANKEESDODGERS-web-top/00YANKEESDODGERS-web-top-articleInline.jpg",
                          "format": "Normal",
                          "height": 141,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jackie Robinson of the Brooklyn Dodgers stealing home in the opening game of the 1955 World Series, when the Dodgers met the New York Yankees for the sixth time.",
                          "copyright": "Meyer Liebowitz/The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "17xp-triathlon",
                  "section": "Sports",
                  "subsection": "",
                  "title": "2 Triathletes Dead at World Championships, Organizers Say",
                  "abstract": "One athlete was from Mexico, and the other was from Britain. The circumstances around their deaths at an event were not immediately clear.",
                  "uri": "nyt://article/9f24e357-083c-5cd7-bcc2-403675f6748b",
                  "url": "https://www.nytimes.com/2024/10/17/sports/world-triathlon-championship-deaths-spain.html",
                  "byline": "By Jesus Jiménez",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-18T10:43:36-04:00",
                  "created_date": "2024-10-17T13:41:01-04:00",
                  "published_date": "2024-10-17T13:41:01-04:00",
                  "first_published_date": "2024-10-17T13:41:01-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Triathlon",
                      "Deaths (Fatalities)"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [
                      "Spain",
                      "Great Britain",
                      "Mexico"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/17/multimedia/17xp-tri/17xp-tri-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "World Triathlon, the sport’s governing body, said it was working with local organizers and the Spanish federation to provide support to the athletes’ families.",
                          "copyright": "World Triathlon"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/17/multimedia/17xp-tri/17xp-tri-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "World Triathlon, the sport’s governing body, said it was working with local organizers and the Spanish federation to provide support to the athletes’ families.",
                          "copyright": "World Triathlon"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/17/multimedia/17xp-tri/17xp-tri-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "World Triathlon, the sport’s governing body, said it was working with local organizers and the Spanish federation to provide support to the athletes’ families.",
                          "copyright": "World Triathlon"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/17/multimedia/17xp-tri/17xp-tri-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "World Triathlon, the sport’s governing body, said it was working with local organizers and the Spanish federation to provide support to the athletes’ families.",
                          "copyright": "World Triathlon"
                      }
                  ]
              },
              {
                  "slug_name": "19sp-usa-mclaren-inyt",
                  "section": "Sports",
                  "subsection": "Auto Racing",
                  "title": "Surprised That McLaren Is Leading Formula 1? So Is Its Boss, Zak Brown.",
                  "abstract": "He has transformed the team, which snatched the lead in the constructors’ championship from Red Bull a month ago.",
                  "uri": "nyt://article/f8c6d3a8-0f49-5bd5-b799-ff9444bf6027",
                  "url": "https://www.nytimes.com/2024/10/17/sports/autoracing/f1-mclaren-zak-brown.html",
                  "byline": "By Ian Parkes",
                  "item_type": "Article",
                  "source": "International New York Times",
                  "updated_date": "2024-10-17T09:50:14-04:00",
                  "created_date": "2024-10-17T05:03:43-04:00",
                  "published_date": "2024-10-17T05:03:43-04:00",
                  "first_published_date": "2024-10-17T05:03:43-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Automobile Racing",
                      "Content Type: Personal Profile"
                  ],
                  "org_facet": [
                      "Formula One",
                      "McLaren Racing"
                  ],
                  "per_facet": [
                      "Norris, Lando (1999- )",
                      "Piastri, Oscar",
                      "Seidl, Andreas",
                      "Brown, Zak (1971- )"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/19/multimedia/19sp-usa-mclaren-inyt-01-fjhg/19sp-usa-mclaren-inyt-01-fjhg-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Lando Norris of McLaren, right, won in Singapore to close the gap on Max Verstappen of Red Bull in the drivers’ standings.",
                          "copyright": "Roslan Rahman/Agence France-Presse &mdash; Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/19/multimedia/19sp-usa-mclaren-inyt-01-fjhg/19sp-usa-mclaren-inyt-01-fjhg-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Lando Norris of McLaren, right, won in Singapore to close the gap on Max Verstappen of Red Bull in the drivers’ standings.",
                          "copyright": "Roslan Rahman/Agence France-Presse &mdash; Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/19/multimedia/19sp-usa-mclaren-inyt-01-fjhg/19sp-usa-mclaren-inyt-01-fjhg-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Lando Norris of McLaren, right, won in Singapore to close the gap on Max Verstappen of Red Bull in the drivers’ standings.",
                          "copyright": "Roslan Rahman/Agence France-Presse &mdash; Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/19/multimedia/19sp-usa-mclaren-inyt-01-fjhg/19sp-usa-mclaren-inyt-01-fjhg-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Lando Norris of McLaren, right, won in Singapore to close the gap on Max Verstappen of Red Bull in the drivers’ standings.",
                          "copyright": "Roslan Rahman/Agence France-Presse &mdash; Getty Images"
                      }
                  ]
              },
              {
                  "slug_name": "19sp-usa-oakes-inyt",
                  "section": "Sports",
                  "subsection": "Auto Racing",
                  "title": "Oliver Oakes Leads Big Changes at Alpine",
                  "abstract": "The team first announced a new driver for 2025. Then its parent, Renault, said it would no longer be an F1 engine supplier. Oakes, the new team principal, called them “nice hot potato topics.”",
                  "uri": "nyt://article/f8f06c19-1f2c-5672-aba2-11312109e3ea",
                  "url": "https://www.nytimes.com/2024/10/17/sports/autoracing/f1-oliver-oakes-alpine.html",
                  "byline": "By Ian Parkes",
                  "item_type": "Article",
                  "source": "International New York Times",
                  "updated_date": "2024-10-17T05:02:46-04:00",
                  "created_date": "2024-10-17T05:02:46-04:00",
                  "published_date": "2024-10-17T05:02:46-04:00",
                  "first_published_date": "2024-10-17T05:02:46-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Automobile Racing",
                      "Content Type: Personal Profile"
                  ],
                  "org_facet": [
                      "Formula One",
                      "Renault SA"
                  ],
                  "per_facet": [
                      "Oakes, Oliver",
                      "Briatore, Flavio",
                      "Ocon, Esteban"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/19/multimedia/19sp-usa-oakes-inyt-01-vfhp/19sp-usa-oakes-inyt-01-vfhp-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Pierre Gasly of the Alpine Formula 1 team on the track ahead of the Grand Prix of Singapore in September. Gasly has worked closely with the team’s new principal, Oliver Oakes, this season.",
                          "copyright": "Clive Mason/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/19/multimedia/19sp-usa-oakes-inyt-01-vfhp/19sp-usa-oakes-inyt-01-vfhp-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Pierre Gasly of the Alpine Formula 1 team on the track ahead of the Grand Prix of Singapore in September. Gasly has worked closely with the team’s new principal, Oliver Oakes, this season.",
                          "copyright": "Clive Mason/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/19/multimedia/19sp-usa-oakes-inyt-01-vfhp/19sp-usa-oakes-inyt-01-vfhp-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Pierre Gasly of the Alpine Formula 1 team on the track ahead of the Grand Prix of Singapore in September. Gasly has worked closely with the team’s new principal, Oliver Oakes, this season.",
                          "copyright": "Clive Mason/Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/19/multimedia/19sp-usa-oakes-inyt-01-vfhp/19sp-usa-oakes-inyt-01-vfhp-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Pierre Gasly of the Alpine Formula 1 team on the track ahead of the Grand Prix of Singapore in September. Gasly has worked closely with the team’s new principal, Oliver Oakes, this season.",
                          "copyright": "Clive Mason/Getty Images"
                      }
                  ]
              },
              {
                  "slug_name": "19sp-usa-american-inyt",
                  "section": "Sports",
                  "subsection": "Auto Racing",
                  "title": "A Formula 1 Race in Texas, but Where Are the American Drivers?",
                  "abstract": "Formula 1 is mostly a European sport, and contenders must climb the racing ladder through events there. That is difficult for Americans.",
                  "uri": "nyt://article/9d33c109-8c51-5ddb-8fcc-89bb236ba2b2",
                  "url": "https://www.nytimes.com/2024/10/17/sports/autoracing/f1-united-states-grand-prix-austin.html",
                  "byline": "By Phillip Horton",
                  "item_type": "Article",
                  "source": "International New York Times",
                  "updated_date": "2024-10-17T21:07:16-04:00",
                  "created_date": "2024-10-17T05:02:23-04:00",
                  "published_date": "2024-10-17T05:02:23-04:00",
                  "first_published_date": "2024-10-17T05:02:23-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Automobile Racing",
                      "United States Grand Prix (Auto Race)"
                  ],
                  "org_facet": [
                      "Circuit of the Americas (Austin, Tex)",
                      "Formula One"
                  ],
                  "per_facet": [
                      "Sargeant, Logan"
                  ],
                  "geo_facet": [
                      "Austin (Tex)"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/19/multimedia/19sp-usa-american-inyt-01-hptf/19sp-usa-american-inyt-01-hptf-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The Americana at this year’s United States Grand Prix will not include an American driver.",
                          "copyright": "Erich Schlegel/Usa Today Sports, via Reuters"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/19/multimedia/19sp-usa-american-inyt-01-hptf/19sp-usa-american-inyt-01-hptf-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The Americana at this year’s United States Grand Prix will not include an American driver.",
                          "copyright": "Erich Schlegel/Usa Today Sports, via Reuters"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/19/multimedia/19sp-usa-american-inyt-01-hptf/19sp-usa-american-inyt-01-hptf-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The Americana at this year’s United States Grand Prix will not include an American driver.",
                          "copyright": "Erich Schlegel/Usa Today Sports, via Reuters"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/19/multimedia/19sp-usa-american-inyt-01-hptf/19sp-usa-american-inyt-01-hptf-articleInline.jpg",
                          "format": "Normal",
                          "height": 142,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The Americana at this year’s United States Grand Prix will not include an American driver.",
                          "copyright": "Erich Schlegel/Usa Today Sports, via Reuters"
                      }
                  ]
              }
          ]
      },
      {
          "status": "OK",
          "copyright": "Copyright (c) 2024 The New York Times Company.  All Rights Reserved.",
          "num_results": 20,
          "results": [
              {
                  "slug_name": "xxprebunk-surge",
                  "section": "Technology",
                  "subsection": "",
                  "title": "No, vote spikes on election night do not indicate voter fraud.",
                  "abstract": "The false claim, which has circulated in recent elections, is based on a misunderstanding of how votes are collected and reported.",
                  "uri": "nyt://article/1d3e5dc5-0d67-500e-94f6-22211f0c32bc",
                  "url": "https://www.nytimes.com/2024/11/01/technology/vote-spikes-election-night-voter-fraud.html",
                  "byline": "By Stuart A. Thompson",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T22:00:09-04:00",
                  "created_date": "2024-11-01T22:00:09-04:00",
                  "published_date": "2024-11-01T22:00:09-04:00",
                  "first_published_date": "2024-11-01T22:00:09-04:00",
                  "material_type_facet": "News",
                  "kicker": "Debunking Claims of Voter Fraud",
                  "subheadline": "",
                  "des_facet": [
                      "Presidential Election of 2024",
                      "Voter Fraud (Election Fraud)",
                      "Rumors and Misinformation"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/24/multimedia/2024-10-23-disinfo-prebunk-topper-surge/2024-10-23-disinfo-prebunk-topper-surge-thumbStandard-v7.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/24/multimedia/2024-10-23-disinfo-prebunk-topper-surge/2024-10-23-disinfo-prebunk-topper-surge-mediumThreeByTwo210-v7.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/24/multimedia/2024-10-23-disinfo-prebunk-topper-surge/2024-10-23-disinfo-prebunk-topper-surge-mediumThreeByTwo440-v7.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/24/multimedia/2024-10-23-disinfo-prebunk-topper-surge/2024-10-23-disinfo-prebunk-topper-surge-articleInline-v7.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "01nvidia",
                  "section": "Technology",
                  "subsection": "",
                  "title": "Nvidia Will Replace Intel in the Dow Jones Stock Index",
                  "abstract": "The change, starting next Friday, lifts a dominant player in artificial intelligence over its chip-making rival, which has struggled to keep up.",
                  "uri": "nyt://article/933cebd7-dd21-554c-ab43-992fe9392d71",
                  "url": "https://www.nytimes.com/2024/11/01/technology/nvidia-intel-dow-jones-index.html",
                  "byline": "By Kate Conger",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T19:30:33-04:00",
                  "created_date": "2024-11-01T19:30:33-04:00",
                  "published_date": "2024-11-01T19:30:33-04:00",
                  "first_published_date": "2024-11-01T19:30:33-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Computer Chips",
                      "Dow Jones Stock Average",
                      "Artificial Intelligence"
                  ],
                  "org_facet": [
                      "Intel Corporation",
                      "NVIDIA Corporation",
                      "S & P Dow Jones Indices"
                  ],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01NVIDIA-bpvh/01NVIDIA-bpvh-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Nvidia’s market value of $3.32 trillion has far surpassed Intel’s.",
                          "copyright": "Jim Wilson/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01NVIDIA-bpvh/01NVIDIA-bpvh-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Nvidia’s market value of $3.32 trillion has far surpassed Intel’s.",
                          "copyright": "Jim Wilson/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01NVIDIA-bpvh/01NVIDIA-bpvh-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Nvidia’s market value of $3.32 trillion has far surpassed Intel’s.",
                          "copyright": "Jim Wilson/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01NVIDIA-bpvh/01NVIDIA-bpvh-articleInline.jpg",
                          "format": "Normal",
                          "height": 143,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Nvidia’s market value of $3.32 trillion has far surpassed Intel’s.",
                          "copyright": "Jim Wilson/The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "generative-ai-decisions-experiment",
                  "section": "Technology",
                  "subsection": "",
                  "title": "I Took a ‘Decision Holiday’ and Put A.I. in Charge of My Life",
                  "abstract": "I thought it would make me put glue on pizza, but instead it entertained my children and got me to finally paint my office. How could it transform our daily lives?",
                  "uri": "nyt://interactive/c1dbca9d-714f-50a0-ac3e-aef3b1c967fb",
                  "url": "https://www.nytimes.com/interactive/2024/11/01/technology/generative-ai-decisions-experiment.html",
                  "byline": "By Kashmir Hill and Hang Do Thi Duc",
                  "item_type": "Interactive",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T18:08:47-04:00",
                  "created_date": "2024-11-01T18:07:32-04:00",
                  "published_date": "2024-11-01T18:07:32-04:00",
                  "first_published_date": "2024-11-01T18:07:32-04:00",
                  "material_type_facet": "Interactive Feature",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Artificial Intelligence",
                      "ChatGPT",
                      "vis-design"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/2024-10-02-biz-gen-ai-life-index/2024-10-02-biz-gen-ai-life-index-thumbStandard-v2.png",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/2024-10-02-biz-gen-ai-life-index/2024-10-02-biz-gen-ai-life-index-mediumThreeByTwo210-v2.png",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/2024-10-02-biz-gen-ai-life-index/2024-10-02-biz-gen-ai-life-index-mediumThreeByTwo440-v2.png",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/2024-10-02-biz-gen-ai-life-index/2024-10-02-biz-gen-ai-life-index-articleInline-v2.png",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "01disinfo-conference",
                  "section": "Technology",
                  "subsection": "",
                  "title": "How Election Deniers Sank a Security Conference in Georgia",
                  "abstract": "The gathering had nothing to do with the election. That didn’t stop conspiracy theorists from spreading falsehoods.",
                  "uri": "nyt://article/2d4c31f5-029c-502e-9d53-663706a0ea99",
                  "url": "https://www.nytimes.com/2024/11/01/technology/election-deniers-georgia.html",
                  "byline": "By Stuart A. Thompson",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T16:27:24-04:00",
                  "created_date": "2024-11-01T12:22:56-04:00",
                  "published_date": "2024-11-01T12:22:56-04:00",
                  "first_published_date": "2024-11-01T12:22:56-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Presidential Election of 2024",
                      "Rumors and Misinformation",
                      "Conspiracy Theories",
                      "Voter Fraud (Election Fraud)",
                      "Computer Security",
                      "United States Politics and Government"
                  ],
                  "org_facet": [
                      "Cybersecurity and Infrastructure Security Agency",
                      "Homeland Security Department"
                  ],
                  "per_facet": [
                      "Loomer, Laura"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/xxdisinfo-conference-ztbq/xxdisinfo-conference-ztbq-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Paul Wertz, a 61-year-old former paramedic and Navy reservist in Roswell, Ga., has organized security conferences since 2020.",
                          "copyright": "Nicole Craine for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/xxdisinfo-conference-ztbq/xxdisinfo-conference-ztbq-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Paul Wertz, a 61-year-old former paramedic and Navy reservist in Roswell, Ga., has organized security conferences since 2020.",
                          "copyright": "Nicole Craine for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/xxdisinfo-conference-ztbq/xxdisinfo-conference-ztbq-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Paul Wertz, a 61-year-old former paramedic and Navy reservist in Roswell, Ga., has organized security conferences since 2020.",
                          "copyright": "Nicole Craine for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/xxdisinfo-conference-ztbq/xxdisinfo-conference-ztbq-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Paul Wertz, a 61-year-old former paramedic and Navy reservist in Roswell, Ga., has organized security conferences since 2020.",
                          "copyright": "Nicole Craine for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "01disinfo-research",
                  "section": "Technology",
                  "subsection": "",
                  "title": "Disinformation Watchdogs Are Under Pressure. This Group Refuses to Stop.",
                  "abstract": "Though a larger coalition of fact checkers has disbanded, a team of students and researchers at the University of Washington in Seattle is still working to document how lies online threaten to undermine this year’s presidential race.",
                  "uri": "nyt://article/e13a6458-83e0-53fc-9ca9-d6b46a76e083",
                  "url": "https://www.nytimes.com/2024/11/01/technology/election-disinformation.html",
                  "byline": "By Steven Lee Myers and Stuart A. Thompson",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T16:09:01-04:00",
                  "created_date": "2024-11-01T12:22:28-04:00",
                  "published_date": "2024-11-01T12:22:28-04:00",
                  "first_published_date": "2024-11-01T12:22:28-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Presidential Election of 2024",
                      "Rumors and Misinformation",
                      "Colleges and Universities",
                      "Social Media",
                      "United States Politics and Government",
                      "Computers and the Internet",
                      "Censorship",
                      "Conspiracy Theories"
                  ],
                  "org_facet": [
                      "Stanford Internet Observatory",
                      "University of Washington"
                  ],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/DISINFO-RESEACHERS-sub-fcwj/DISINFO-RESEACHERS-sub-fcwj-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Four years ago, researchers at the University of Washington were part of a larger coalition formed to combat claims by President Donald J. Trump and others that the 2020 election was rigged. Now, that coalition has disbanded.",
                          "copyright": "Chona Kasinger for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/DISINFO-RESEACHERS-sub-fcwj/DISINFO-RESEACHERS-sub-fcwj-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Four years ago, researchers at the University of Washington were part of a larger coalition formed to combat claims by President Donald J. Trump and others that the 2020 election was rigged. Now, that coalition has disbanded.",
                          "copyright": "Chona Kasinger for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/DISINFO-RESEACHERS-sub-fcwj/DISINFO-RESEACHERS-sub-fcwj-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Four years ago, researchers at the University of Washington were part of a larger coalition formed to combat claims by President Donald J. Trump and others that the 2020 election was rigged. Now, that coalition has disbanded.",
                          "copyright": "Chona Kasinger for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/11/01/multimedia/DISINFO-RESEACHERS-sub-fcwj/DISINFO-RESEACHERS-sub-fcwj-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Four years ago, researchers at the University of Washington were part of a larger coalition formed to combat claims by President Donald J. Trump and others that the 2020 election was rigged. Now, that coalition has disbanded.",
                          "copyright": "Chona Kasinger for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "31apple",
                  "section": "Technology",
                  "subsection": "",
                  "title": "Apple’s Quarterly Profit Down Because of Tax Payment in Europe",
                  "abstract": "Sales for the iPhone maker were up 6 percent to to $94.93 billion. But a $14.4 billion tax bill cut profits that would have topped expectations.",
                  "uri": "nyt://article/71236860-6ef7-54cc-bda3-561c068c2d3f",
                  "url": "https://www.nytimes.com/2024/10/31/technology/apple-profit-earnings.html",
                  "byline": "By Tripp Mickle",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T18:24:13-04:00",
                  "created_date": "2024-10-31T17:10:57-04:00",
                  "published_date": "2024-10-31T17:10:57-04:00",
                  "first_published_date": "2024-10-31T17:10:57-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Company Reports",
                      "Artificial Intelligence",
                      "Computers and the Internet",
                      "Smartphones",
                      "iPhone"
                  ],
                  "org_facet": [
                      "Apple Inc",
                      "Huawei Technologies Co Ltd"
                  ],
                  "per_facet": [],
                  "geo_facet": [
                      "China"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31apple-2-qkhw/31apple-2-qkhw-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Apple’s delay with A.I. didn’t slow down its business",
                          "copyright": "Amy Osborne for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31apple-2-qkhw/31apple-2-qkhw-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Apple’s delay with A.I. didn’t slow down its business",
                          "copyright": "Amy Osborne for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31apple-2-qkhw/31apple-2-qkhw-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Apple’s delay with A.I. didn’t slow down its business",
                          "copyright": "Amy Osborne for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31apple-2-qkhw/31apple-2-qkhw-articleInline.jpg",
                          "format": "Normal",
                          "height": 126,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Apple’s delay with A.I. didn’t slow down its business",
                          "copyright": "Amy Osborne for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "31intel",
                  "section": "Technology",
                  "subsection": "",
                  "title": "Intel Posts $16.6 Billion Quarterly Loss, Its Biggest Ever",
                  "abstract": "The Silicon Valley chip maker has struggled to turn around its fortunes after missing opportunities and poor execution.",
                  "uri": "nyt://article/e677aeec-ed19-5f8b-b380-5e23a93d3704",
                  "url": "https://www.nytimes.com/2024/10/31/technology/intel-earnings-loss.html",
                  "byline": "By Don Clark",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T17:35:56-04:00",
                  "created_date": "2024-10-31T16:54:43-04:00",
                  "published_date": "2024-10-31T16:54:43-04:00",
                  "first_published_date": "2024-10-31T16:54:43-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Computer Chips",
                      "Computers and the Internet",
                      "Company Reports",
                      "Layoffs and Job Reductions"
                  ],
                  "org_facet": [
                      "Intel Corporation"
                  ],
                  "per_facet": [
                      "Gelsinger, Patrick"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31intel-mwvq/31intel-mwvq-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Intel said its loss for the third quarter totaled $16.6 billion.",
                          "copyright": "Anastasiia Sapon for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31intel-mwvq/31intel-mwvq-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Intel said its loss for the third quarter totaled $16.6 billion.",
                          "copyright": "Anastasiia Sapon for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31intel-mwvq/31intel-mwvq-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Intel said its loss for the third quarter totaled $16.6 billion.",
                          "copyright": "Anastasiia Sapon for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31intel-mwvq/31intel-mwvq-articleInline.jpg",
                          "format": "Normal",
                          "height": 129,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Intel said its loss for the third quarter totaled $16.6 billion.",
                          "copyright": "Anastasiia Sapon for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "31musk-xai",
                  "section": "Technology",
                  "subsection": "",
                  "title": "Elon Musk’s xAI in Funding Talks That Could Value Company at $40 Billion",
                  "abstract": "The financing efforts follow that of rival OpenAI, which recently closed a funding round that valued it at $157 billion.",
                  "uri": "nyt://article/ad76f968-cd7a-5d0d-a32f-8ad77960f1a7",
                  "url": "https://www.nytimes.com/2024/10/31/technology/elon-musk-xai-valuation.html",
                  "byline": "By Mike Isaac and Cade Metz",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T17:10:29-04:00",
                  "created_date": "2024-10-31T16:45:59-04:00",
                  "published_date": "2024-10-31T16:45:59-04:00",
                  "first_published_date": "2024-10-31T16:45:59-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Artificial Intelligence",
                      "Computers and the Internet",
                      "Start-ups",
                      "Venture Capital",
                      "Social Media",
                      "ChatGPT"
                  ],
                  "org_facet": [
                      "X.ai Inc",
                      "OpenAI Labs",
                      "X (Formerly Twitter)"
                  ],
                  "per_facet": [
                      "Musk, Elon"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31musk-xai-tpjk/31musk-xai-tpjk-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Elon Musk’s xAI could be valued at as much as $40 billion, although financing talks are in the early stages.",
                          "copyright": "David Swanson/Reuters"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31musk-xai-tpjk/31musk-xai-tpjk-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Elon Musk’s xAI could be valued at as much as $40 billion, although financing talks are in the early stages.",
                          "copyright": "David Swanson/Reuters"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31musk-xai-tpjk/31musk-xai-tpjk-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Elon Musk’s xAI could be valued at as much as $40 billion, although financing talks are in the early stages.",
                          "copyright": "David Swanson/Reuters"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/multimedia/31musk-xai-tpjk/31musk-xai-tpjk-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Elon Musk’s xAI could be valued at as much as $40 billion, although financing talks are in the early stages.",
                          "copyright": "David Swanson/Reuters"
                      }
                  ]
              },
              {
                  "slug_name": "31chatgpt-search",
                  "section": "Technology",
                  "subsection": "",
                  "title": "OpenAI Folds A.I.-Powered Search Engine Into ChatGPT",
                  "abstract": "The popular online chatbot can now access and deliver information from across the internet in real time, including news, stock prices and sports scores.",
                  "uri": "nyt://article/93000e0d-3c87-5706-b52c-f0f54a7af888",
                  "url": "https://www.nytimes.com/2024/10/31/technology/chatgpt-openai-search-engine.html",
                  "byline": "By Cade Metz",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T17:47:32-04:00",
                  "created_date": "2024-10-31T13:00:13-04:00",
                  "published_date": "2024-10-31T13:00:13-04:00",
                  "first_published_date": "2024-10-31T13:00:13-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Search Engines",
                      "ChatGPT",
                      "Computers and the Internet",
                      "Artificial Intelligence"
                  ],
                  "org_facet": [
                      "OpenAI Labs"
                  ],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/business/31CHATGPT-SEARCH-1-06/31CHATGPT-SEARCH-1-06-thumbStandard.png",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The new search engine is available beginning today for people who use ChatGPT Plus.",
                          "copyright": "OpenAI"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/business/31CHATGPT-SEARCH-1-06/31CHATGPT-SEARCH-1-06-mediumThreeByTwo210.png",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The new search engine is available beginning today for people who use ChatGPT Plus.",
                          "copyright": "OpenAI"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/business/31CHATGPT-SEARCH-1-06/31CHATGPT-SEARCH-1-06-mediumThreeByTwo440.png",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The new search engine is available beginning today for people who use ChatGPT Plus.",
                          "copyright": "OpenAI"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/31/business/31CHATGPT-SEARCH-1-06/31CHATGPT-SEARCH-1-06-articleInline.png",
                          "format": "Normal",
                          "height": 107,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "The new search engine is available beginning today for people who use ChatGPT Plus.",
                          "copyright": "OpenAI"
                      }
                  ]
              },
              {
                  "slug_name": "31youtube-election",
                  "section": "Technology",
                  "subsection": "",
                  "title": "Election Falsehoods Take Off on YouTube as It Looks the Other Way",
                  "abstract": "The video site removed 2020 misinformation, fearing real-world harm. Now it’s amplifying and profiting from 2024 falsehoods, researchers said.",
                  "uri": "nyt://article/e715bf88-b6b6-56d7-b8ae-6f3c4a3a5a8b",
                  "url": "https://www.nytimes.com/2024/10/31/technology/youtube-election-conspiracy-theories-misinformation.html",
                  "byline": "By Nico Grant",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-11-01T09:30:58-04:00",
                  "created_date": "2024-10-31T05:00:34-04:00",
                  "published_date": "2024-10-31T05:00:34-04:00",
                  "first_published_date": "2024-10-31T05:00:34-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Presidential Election of 2024",
                      "Rumors and Misinformation",
                      "Video Recordings, Downloads and Streaming",
                      "Social Media",
                      "Conspiracy Theories",
                      "internal-paywall-exempt-elections-app"
                  ],
                  "org_facet": [
                      "Media Matters for America",
                      "YouTube.com"
                  ],
                  "per_facet": [
                      "Giuliani, Rudolph W",
                      "Johnson, Benny",
                      "Shapiro, Benjamin A (1984- )",
                      "Patel, Kashyap"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/autossell/mobile-grid-copy/mobile-grid-copy-thumbStandard-v2.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/autossell/mobile-grid-copy/mobile-grid-copy-mediumThreeByTwo210-v2.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/autossell/mobile-grid-copy/mobile-grid-copy-mediumThreeByTwo440-v2.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/28/autossell/mobile-grid-copy/mobile-grid-copy-articleInline.jpg",
                          "format": "Normal",
                          "height": 190,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": ""
                      }
                  ]
              },
              {
                  "slug_name": "30meta",
                  "section": "Technology",
                  "subsection": "",
                  "title": "Meta’s Profit Rises 35%, Even as Spending Spree Continues",
                  "abstract": "The Silicon Valley company, which owns Facebook, Instagram and WhatsApp, said it does not plan to slow down its investments anytime soon.",
                  "uri": "nyt://article/3f5d51b4-dbdf-54dd-bc22-b1fac1cf4c06",
                  "url": "https://www.nytimes.com/2024/10/30/technology/meta-earnings-artificial-intelligence.html",
                  "byline": "By Mike Isaac",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T13:11:47-04:00",
                  "created_date": "2024-10-30T16:36:42-04:00",
                  "published_date": "2024-10-30T16:36:42-04:00",
                  "first_published_date": "2024-10-30T16:36:42-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Company Reports",
                      "Social Media",
                      "Artificial Intelligence",
                      "Online Advertising",
                      "Virtual Reality (Computers)",
                      "Computers and the Internet"
                  ],
                  "org_facet": [
                      "Meta Platforms Inc",
                      "Facebook Inc",
                      "Instagram Inc",
                      "WhatsApp Inc"
                  ],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30META-EARNINGS-1-vtql/30META-EARNINGS-1-vtql-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Meta’s Meta Quest headset. The company reported double-digit revenue and profit growth for the third quarter.",
                          "copyright": "Jim Wilson/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30META-EARNINGS-1-vtql/30META-EARNINGS-1-vtql-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Meta’s Meta Quest headset. The company reported double-digit revenue and profit growth for the third quarter.",
                          "copyright": "Jim Wilson/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30META-EARNINGS-1-vtql/30META-EARNINGS-1-vtql-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Meta’s Meta Quest headset. The company reported double-digit revenue and profit growth for the third quarter.",
                          "copyright": "Jim Wilson/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30META-EARNINGS-1-vtql/30META-EARNINGS-1-vtql-articleInline.jpg",
                          "format": "Normal",
                          "height": 143,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Meta’s Meta Quest headset. The company reported double-digit revenue and profit growth for the third quarter.",
                          "copyright": "Jim Wilson/The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "30microsoft",
                  "section": "Technology",
                  "subsection": "",
                  "title": "Microsoft’s Quarterly Revenue Is Up 16% to $65.6 Billion",
                  "abstract": "The company’s profit increased 11 percent to $24.7 billion, beating Wall Street’s expectations and its own predictions.",
                  "uri": "nyt://article/574bee7b-9780-5fd2-9c01-45d660632722",
                  "url": "https://www.nytimes.com/2024/10/30/technology/microsoft-quarterly-revenue-profits.html",
                  "byline": "By Karen Weise",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-30T19:18:49-04:00",
                  "created_date": "2024-10-30T16:25:19-04:00",
                  "published_date": "2024-10-30T16:25:19-04:00",
                  "first_published_date": "2024-10-30T16:25:19-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Artificial Intelligence",
                      "Computers and the Internet",
                      "Company Reports",
                      "Cloud Computing"
                  ],
                  "org_facet": [
                      "Microsoft Corp"
                  ],
                  "per_facet": [
                      "Nadella, Satya"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30MICROSOFT-EARNINGS-1-pqvt/30MICROSOFT-EARNINGS-1-pqvt-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Surface notebooks, powered by artificial intelligence, at a Microsoft event in May. The company has bet heavily on A.I. through its investments in OpenAI.",
                          "copyright": "Grant Hindsley for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30MICROSOFT-EARNINGS-1-pqvt/30MICROSOFT-EARNINGS-1-pqvt-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Surface notebooks, powered by artificial intelligence, at a Microsoft event in May. The company has bet heavily on A.I. through its investments in OpenAI.",
                          "copyright": "Grant Hindsley for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30MICROSOFT-EARNINGS-1-pqvt/30MICROSOFT-EARNINGS-1-pqvt-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Surface notebooks, powered by artificial intelligence, at a Microsoft event in May. The company has bet heavily on A.I. through its investments in OpenAI.",
                          "copyright": "Grant Hindsley for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30MICROSOFT-EARNINGS-1-pqvt/30MICROSOFT-EARNINGS-1-pqvt-articleInline.jpg",
                          "format": "Normal",
                          "height": 143,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Surface notebooks, powered by artificial intelligence, at a Microsoft event in May. The company has bet heavily on A.I. through its investments in OpenAI.",
                          "copyright": "Grant Hindsley for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "30singh-sentence",
                  "section": "Technology",
                  "subsection": "",
                  "title": "Nishad Singh, a Top FTX Executive, Is Given No Prison Time After Cooperation",
                  "abstract": "Mr. Singh, who was a top executive in Sam Bankman-Fried’s business empire, had pleaded guilty to fraud and campaign finance violations that contributed to the collapse of FTX.",
                  "uri": "nyt://article/571f1ec8-3765-5b76-916f-94448ca04632",
                  "url": "https://www.nytimes.com/2024/10/30/technology/nishad-singh-ftx-executive-sentencing.html",
                  "byline": "By Danielle Kaye and David Yaffe-Bellany",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T20:38:28-04:00",
                  "created_date": "2024-10-30T16:23:29-04:00",
                  "published_date": "2024-10-30T16:23:29-04:00",
                  "first_published_date": "2024-10-30T16:23:29-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Virtual Currency",
                      "Campaign Finance",
                      "Frauds and Swindling",
                      "Decisions and Verdicts",
                      "Bankruptcies",
                      "Computers and the Internet",
                      "Start-ups"
                  ],
                  "org_facet": [
                      "Alameda Research LLC",
                      "HK FTX Trading Ltd (Futures Exchange)"
                  ],
                  "per_facet": [
                      "Singh, Nishad",
                      "Bankman-Fried, Sam"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30FTX-SINGH-sub-glqb/30FTX-SINGH-sub-glqb-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Nishad Singh, a former top executive of the FTX crypto exchange, left, and Claire Watanabe, who also worked at FTX, arriving at federal court in Manhattan on Wednesday.",
                          "copyright": "Jeenah Moon for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30FTX-SINGH-sub-glqb/30FTX-SINGH-sub-glqb-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Nishad Singh, a former top executive of the FTX crypto exchange, left, and Claire Watanabe, who also worked at FTX, arriving at federal court in Manhattan on Wednesday.",
                          "copyright": "Jeenah Moon for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30FTX-SINGH-sub-glqb/30FTX-SINGH-sub-glqb-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Nishad Singh, a former top executive of the FTX crypto exchange, left, and Claire Watanabe, who also worked at FTX, arriving at federal court in Manhattan on Wednesday.",
                          "copyright": "Jeenah Moon for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/multimedia/30FTX-SINGH-sub-glqb/30FTX-SINGH-sub-glqb-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Nishad Singh, a former top executive of the FTX crypto exchange, left, and Claire Watanabe, who also worked at FTX, arriving at federal court in Manhattan on Wednesday.",
                          "copyright": "Jeenah Moon for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "30kraken",
                  "section": "Technology",
                  "subsection": "",
                  "title": "Kraken Lays Off 15% of Workers and Names New Co-Chief Executive",
                  "abstract": "The influential cryptocurrency exchange has undergone several reorganizations in recent years.",
                  "uri": "nyt://article/9998f0d7-cb58-599b-b8f0-4cb3ee6e45bc",
                  "url": "https://www.nytimes.com/2024/10/30/technology/kraken-cryptocurrency-layoff-ceo.html",
                  "byline": "By Mike Isaac, David Yaffe-Bellany and Ryan Mac",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-30T18:31:31-04:00",
                  "created_date": "2024-10-30T16:18:30-04:00",
                  "published_date": "2024-10-30T16:18:30-04:00",
                  "first_published_date": "2024-10-30T16:18:30-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Layoffs and Job Reductions",
                      "Appointments and Executive Changes",
                      "Virtual Currency",
                      "Computers and the Internet"
                  ],
                  "org_facet": [
                      "Kraken (Payward Inc)"
                  ],
                  "per_facet": [
                      "Powell, Jesse (Cryptocurrency Executive)",
                      "Ripley, David L",
                      "Sethi, Arjun (1983- )"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/business/30KRACKEN-arjun-sethi/30KRACKEN-arjun-sethi-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Kraken named Arjun Sethi, a longtime Silicon Valley executive, as co-chief executive.",
                          "copyright": "Ramsey Cardy/Sportsfile for Collision, via Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/business/30KRACKEN-arjun-sethi/30KRACKEN-arjun-sethi-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Kraken named Arjun Sethi, a longtime Silicon Valley executive, as co-chief executive.",
                          "copyright": "Ramsey Cardy/Sportsfile for Collision, via Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/business/30KRACKEN-arjun-sethi/30KRACKEN-arjun-sethi-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Kraken named Arjun Sethi, a longtime Silicon Valley executive, as co-chief executive.",
                          "copyright": "Ramsey Cardy/Sportsfile for Collision, via Getty Images"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/30/business/30KRACKEN-arjun-sethi/30KRACKEN-arjun-sethi-articleInline.jpg",
                          "format": "Normal",
                          "height": 126,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Kraken named Arjun Sethi, a longtime Silicon Valley executive, as co-chief executive.",
                          "copyright": "Ramsey Cardy/Sportsfile for Collision, via Getty Images"
                      }
                  ]
              },
              {
                  "slug_name": "30musk-bezos",
                  "section": "Technology",
                  "subsection": "",
                  "title": "Jeff Bezos, Elon Musk and the Billions of Ways to Influence an Election",
                  "abstract": "The world’s richest men have their own rocket fleets, their own media and their own schemes to succeed with Donald J. Trump.",
                  "uri": "nyt://article/f518411a-a3a1-5a0e-b6fe-53c90b6c9c55",
                  "url": "https://www.nytimes.com/2024/10/30/technology/jeff-bezos-elon-musk-election.html",
                  "byline": "By David Streitfeld",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-31T14:23:35-04:00",
                  "created_date": "2024-10-30T11:42:42-04:00",
                  "published_date": "2024-10-30T11:42:42-04:00",
                  "first_published_date": "2024-10-30T11:42:42-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "High Net Worth Individuals",
                      "Presidential Election of 2024",
                      "United States Politics and Government",
                      "Endorsements",
                      "Computers and the Internet",
                      "E-Commerce",
                      "Private Spaceflight",
                      "Electric and Hybrid Vehicles",
                      "News and News Media",
                      "Regulation and Deregulation of Industry",
                      "internal-paywall-exempt-elections-app"
                  ],
                  "org_facet": [
                      "Amazon.com Inc",
                      "Blue Origin",
                      "Space Exploration Technologies Corp",
                      "Tesla Motors Inc",
                      "X (Formerly Twitter)",
                      "Washington Post"
                  ],
                  "per_facet": [
                      "Bezos, Jeffrey P",
                      "Musk, Elon",
                      "Trump, Donald J"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/business/MUSK-BEZOS-1/MUSK-BEZOS-1-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jeff Bezos and Elon Musk have taken different approaches to the presidential election, with varying results.",
                          "copyright": "Nina Westervelt for The New York Times, Hiroko Masuike/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/business/MUSK-BEZOS-1/MUSK-BEZOS-1-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jeff Bezos and Elon Musk have taken different approaches to the presidential election, with varying results.",
                          "copyright": "Nina Westervelt for The New York Times, Hiroko Masuike/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/business/MUSK-BEZOS-1/MUSK-BEZOS-1-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jeff Bezos and Elon Musk have taken different approaches to the presidential election, with varying results.",
                          "copyright": "Nina Westervelt for The New York Times, Hiroko Masuike/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/business/MUSK-BEZOS-1/MUSK-BEZOS-1-articleInline.jpg",
                          "format": "Normal",
                          "height": 167,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Jeff Bezos and Elon Musk have taken different approaches to the presidential election, with varying results.",
                          "copyright": "Nina Westervelt for The New York Times, Hiroko Masuike/The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "30ftx-parents",
                  "section": "Technology",
                  "subsection": "",
                  "title": "How FTX’s Young Executives Shattered Their Parents",
                  "abstract": "As their children are sentenced for fraud, the parents of FTX’s top leaders have described their disbelief at how the crypto exchange upended their lives.",
                  "uri": "nyt://article/c9c1b6f3-9257-5dc9-bbde-b95944d66dc2",
                  "url": "https://www.nytimes.com/2024/10/30/technology/ftx-executives-parents.html",
                  "byline": "By David Yaffe-Bellany",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-30T16:35:02-04:00",
                  "created_date": "2024-10-30T05:02:24-04:00",
                  "published_date": "2024-10-30T05:02:24-04:00",
                  "first_published_date": "2024-10-30T05:02:24-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Virtual Currency",
                      "Frauds and Swindling",
                      "Computers and the Internet",
                      "Parenting"
                  ],
                  "org_facet": [
                      "Alameda Research LLC",
                      "HK FTX Trading Ltd (Futures Exchange)"
                  ],
                  "per_facet": [
                      "Bankman-Fried, Sam",
                      "Bankman, Joseph",
                      "Fried, Barbara (1951- )",
                      "Ellison, Caroline (1994- )",
                      "Singh, Nishad",
                      "Gururaj Singh",
                      "Wang, Zixiao (Gary)"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/00ftx-parents-hlqf/00ftx-parents-hlqf-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Sam Bankman-Fried’s parents, Joseph Bankman and Barbara Fried, are part of a group of parents who wrote letters pleading for leniency for their children involved in the FTX case.",
                          "copyright": "Karsten Moran for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/00ftx-parents-hlqf/00ftx-parents-hlqf-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Sam Bankman-Fried’s parents, Joseph Bankman and Barbara Fried, are part of a group of parents who wrote letters pleading for leniency for their children involved in the FTX case.",
                          "copyright": "Karsten Moran for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/00ftx-parents-hlqf/00ftx-parents-hlqf-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Sam Bankman-Fried’s parents, Joseph Bankman and Barbara Fried, are part of a group of parents who wrote letters pleading for leniency for their children involved in the FTX case.",
                          "copyright": "Karsten Moran for The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/00ftx-parents-hlqf/00ftx-parents-hlqf-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Sam Bankman-Fried’s parents, Joseph Bankman and Barbara Fried, are part of a group of parents who wrote letters pleading for leniency for their children involved in the FTX case.",
                          "copyright": "Karsten Moran for The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "29alphabet-earnings",
                  "section": "Technology",
                  "subsection": "",
                  "title": "Alphabet Revenue Jumps 15% to $88.3 Billion",
                  "abstract": "The tech giant’s 34 percent increase in quarterly profit topped Wall Street expectations, driven by its advertising and cloud businesses.",
                  "uri": "nyt://article/e4732f93-e1e0-57cb-91d7-4aa6c3b455d1",
                  "url": "https://www.nytimes.com/2024/10/29/technology/alphabet-google-earnings.html",
                  "byline": "By Nico Grant",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-29T17:57:42-04:00",
                  "created_date": "2024-10-29T16:26:26-04:00",
                  "published_date": "2024-10-29T16:26:26-04:00",
                  "first_published_date": "2024-10-29T16:26:26-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Company Reports",
                      "Search Engines",
                      "Computers and the Internet",
                      "Artificial Intelligence"
                  ],
                  "org_facet": [
                      "Alphabet Inc",
                      "Google Inc"
                  ],
                  "per_facet": [
                      "Pichai, Sundar"
                  ],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/ALPHABET-EARNINGS-1-kzbm/ALPHABET-EARNINGS-1-kzbm-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Alphabet, the parent company of Google, continued making large investments in data centers, chips and other hardware in the third quarter.",
                          "copyright": "Amy Osborne/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/ALPHABET-EARNINGS-1-kzbm/ALPHABET-EARNINGS-1-kzbm-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Alphabet, the parent company of Google, continued making large investments in data centers, chips and other hardware in the third quarter.",
                          "copyright": "Amy Osborne/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/ALPHABET-EARNINGS-1-kzbm/ALPHABET-EARNINGS-1-kzbm-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Alphabet, the parent company of Google, continued making large investments in data centers, chips and other hardware in the third quarter.",
                          "copyright": "Amy Osborne/The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/29/multimedia/ALPHABET-EARNINGS-1-kzbm/ALPHABET-EARNINGS-1-kzbm-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Alphabet, the parent company of Google, continued making large investments in data centers, chips and other hardware in the third quarter.",
                          "copyright": "Amy Osborne/The New York Times"
                      }
                  ]
              },
              {
                  "slug_name": "29peculiar-data",
                  "section": "Technology",
                  "subsection": "",
                  "title": "A Rural Missouri Town Fights Big Tech, and Itself",
                  "abstract": "Residents of Peculiar battled developers and some of their local officials to keep a giant data center out of their community.",
                  "uri": "nyt://article/a11337a0-23a3-5084-a52a-b37cfcfb45a4",
                  "url": "https://www.nytimes.com/2024/10/29/technology/data-center-peculiar-missouri.html",
                  "byline": "By Eli Tan and Graham Dickie",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-29T09:00:20-04:00",
                  "created_date": "2024-10-29T09:00:20-04:00",
                  "published_date": "2024-10-29T09:00:20-04:00",
                  "first_published_date": "2024-10-29T09:00:20-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "Local Government",
                      "Data Centers",
                      "Zoning",
                      "Computers and the Internet",
                      "Artificial Intelligence",
                      "Nondisclosure Agreements",
                      "Rural Areas",
                      "Area Planning and Renewal"
                  ],
                  "org_facet": [
                      "Iconiq Capital LLC",
                      "Diode Ventures LLC",
                      "Iron Point Partners LLC"
                  ],
                  "per_facet": [],
                  "geo_facet": [
                      "Peculiar (Mo)"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/07/multimedia/PECULIAR-DATA-1-01-mfkv/PECULIAR-DATA-1-01-mfkv-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Chad Buck, rear center, in a prayer circle with his family on land that was slated to be developed into a data center.",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/07/multimedia/PECULIAR-DATA-1-01-mfkv/PECULIAR-DATA-1-01-mfkv-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Chad Buck, rear center, in a prayer circle with his family on land that was slated to be developed into a data center.",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/07/multimedia/PECULIAR-DATA-1-01-mfkv/PECULIAR-DATA-1-01-mfkv-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Chad Buck, rear center, in a prayer circle with his family on land that was slated to be developed into a data center.",
                          "copyright": ""
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/07/multimedia/PECULIAR-DATA-1-01-mfkv/PECULIAR-DATA-1-01-mfkv-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "Chad Buck, rear center, in a prayer circle with his family on land that was slated to be developed into a data center.",
                          "copyright": ""
                      }
                  ]
              },
              {
                  "slug_name": "29foreign-disinfo",
                  "section": "Technology",
                  "subsection": "",
                  "title": "How Russia, China and Iran Are Interfering in the Presidential Election",
                  "abstract": "Eight years after Russia interfered in the 2016 presidential election, foreign influence with American voters has grown more sophisticated. That could have outsize consequences in the 2024 race.",
                  "uri": "nyt://article/55456924-7ff1-585c-b62c-d530637bb1f3",
                  "url": "https://www.nytimes.com/2024/10/29/technology/election-interference-russia-china-iran.html",
                  "byline": "By Sheera Frenkel, Tiffany Hsu and Steven Lee Myers",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-29T00:00:08-04:00",
                  "created_date": "2024-10-29T00:00:08-04:00",
                  "published_date": "2024-10-29T00:00:08-04:00",
                  "first_published_date": "2024-10-29T00:00:08-04:00",
                  "material_type_facet": "News",
                  "kicker": "",
                  "subheadline": "",
                  "des_facet": [
                      "International Relations",
                      "Rumors and Misinformation",
                      "Presidential Election of 2024",
                      "Social Media",
                      "Artificial Intelligence",
                      "Politics and Government",
                      "Propaganda",
                      "Russian Interference in 2016 US Elections and Ties to Trump Associates",
                      "internal-paywall-exempt-elections-app"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [
                      "China",
                      "Iran",
                      "Russia"
                  ],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/00foreign-disinfo-tcpm/00foreign-disinfo-tcpm-thumbStandard.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "In 2016, Russia’s interference in the presidential election looked very different from the disinformation campaigns that spread today.",
                          "copyright": "Marina Lystseva/Reuters"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/00foreign-disinfo-tcpm/00foreign-disinfo-tcpm-mediumThreeByTwo210.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "In 2016, Russia’s interference in the presidential election looked very different from the disinformation campaigns that spread today.",
                          "copyright": "Marina Lystseva/Reuters"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/00foreign-disinfo-tcpm/00foreign-disinfo-tcpm-mediumThreeByTwo440.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "In 2016, Russia’s interference in the presidential election looked very different from the disinformation campaigns that spread today.",
                          "copyright": "Marina Lystseva/Reuters"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/25/multimedia/00foreign-disinfo-tcpm/00foreign-disinfo-tcpm-articleInline.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "In 2016, Russia’s interference in the presidential election looked very different from the disinformation campaigns that spread today.",
                          "copyright": "Marina Lystseva/Reuters"
                      }
                  ]
              },
              {
                  "slug_name": "28prebunk-noncitizens",
                  "section": "Technology",
                  "subsection": "",
                  "title": "No, noncitizens are not voting in droves.",
                  "abstract": "Studies have shown that noncitizen voting is essentially nonexistent in federal elections in the United States.",
                  "uri": "nyt://article/cdfb1f2b-78d1-5fd1-997c-563eafdfbc75",
                  "url": "https://www.nytimes.com/2024/10/28/technology/noncitizen-voting-election.html",
                  "byline": "By Stuart A. Thompson",
                  "item_type": "Article",
                  "source": "New York Times",
                  "updated_date": "2024-10-29T10:53:47-04:00",
                  "created_date": "2024-10-28T23:04:53-04:00",
                  "published_date": "2024-10-28T23:04:53-04:00",
                  "first_published_date": "2024-10-28T23:04:53-04:00",
                  "material_type_facet": "News",
                  "kicker": "Debunking Claims of Voter Fraud",
                  "subheadline": "",
                  "des_facet": [
                      "Presidential Election of 2024",
                      "Citizenship and Naturalization",
                      "Rumors and Misinformation",
                      "Voting Rights, Registration and Requirements",
                      "Voter Fraud (Election Fraud)",
                      "Conspiracy Theories"
                  ],
                  "org_facet": [],
                  "per_facet": [],
                  "geo_facet": [],
                  "related_urls": [],
                  "multimedia": [
                      {
                          "url": "https://static01.nyt.com/images/2024/10/24/multimedia/2024-10-23-disinfo-prebunk-topper-noncitizens/2024-10-23-disinfo-prebunk-topper-noncitizens-thumbStandard-v7.jpg",
                          "format": "Standard Thumbnail",
                          "height": 75,
                          "width": 75,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/24/multimedia/2024-10-23-disinfo-prebunk-topper-noncitizens/2024-10-23-disinfo-prebunk-topper-noncitizens-mediumThreeByTwo210-v7.jpg",
                          "format": "mediumThreeByTwo210",
                          "height": 140,
                          "width": 210,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/24/multimedia/2024-10-23-disinfo-prebunk-topper-noncitizens/2024-10-23-disinfo-prebunk-topper-noncitizens-mediumThreeByTwo440-v7.jpg",
                          "format": "mediumThreeByTwo440",
                          "height": 293,
                          "width": 440,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "The New York Times"
                      },
                      {
                          "url": "https://static01.nyt.com/images/2024/10/24/multimedia/2024-10-23-disinfo-prebunk-topper-noncitizens/2024-10-23-disinfo-prebunk-topper-noncitizens-articleInline-v7.jpg",
                          "format": "Normal",
                          "height": 127,
                          "width": 190,
                          "type": "image",
                          "subtype": "photo",
                          "caption": "",
                          "copyright": "The New York Times"
                      }
                  ]
              }
          ]
      }
  ]

  sectionFeeds: Map<string, any> = new Map();
  currentIndexSection: Map<string, number> = new Map();

  constructor(private apiService: ApiService, private breakPointObserver: BreakpointObserver){
    // this.fetchAllApi();
    this.setNewsSectionData(this.test_object1)
  }

  ngOnInit(): void {
    this.breakPointObserver.observe([
        Breakpoints.HandsetPortrait,
      ]).subscribe((state: BreakpointState) => {
        console.log(state)
        if (state.matches) {
            if (state.breakpoints[Breakpoints.HandsetPortrait]) {
                this.displayCarouselBy = 3;
            } 
        }
      });
  }

  nextSlide(section: string) {
    const sectionIndex = this.currentIndexSection.get(section) ?? 0;
    if(sectionIndex < ((this.sectionFeeds.get(section).length / this.displayCarouselBy) - 1)){
        this.currentIndexSection.set(section, sectionIndex + 1);
        this.slide(this.currentIndexSection.get(section) ?? 0, section);
    }
  }

  prevSlide(section: string) {
    const sectionIndex = this.currentIndexSection.get(section) ?? 0;
    if(sectionIndex > 0){
        this.currentIndexSection.set(section, sectionIndex - 1);
        this.slide(this.currentIndexSection.get(section) ?? 0, section);
    }
  }

  slide(index: number, section: string){
    const parent = document.getElementById(`carousel-parent-${section}`);
    const children = parent?.querySelectorAll('.carousel-child');

    if(children?.length){
        children.forEach(element => {
        const child = element as HTMLElement;
        child.style.transform = `translateX(${ -index * this.displayCarouselBy * 100}%)` 
      });
    }
  }

  fetchAllApi(){
    let listSectionNews: any[] = [];
    
    this.selectedFeedSections.forEach( async (section, index: number) => {
      this.apiService.getNewestFeed('all', section)
      .subscribe({
        next: (response) => {
          listSectionNews.push(response);
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {
            if(index == this.selectedFeedSections.length -1){
              this.setNewsSectionData(listSectionNews)
            }
        }
      }) 
    })
  }

  setNewsSectionData(listSectionNews: any[]){
    this.selectedFeedSections.forEach((section, index) => {
      this.sectionFeeds.set(section, listSectionNews[index].results);
      this.currentIndexSection.set(section, 0);
    })


  }

  getMapEntries(map: any): any[]{
    return Array.from(map.entries());
  }
}
