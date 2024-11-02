import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { LoadingService } from '../../services/loading.service';
import { LoadingComponent } from '../loading/loading.component';
import { NewsData } from '../../../../types/news.model';
import { getNoImage, getSentenceAmount, separateFirstSentence } from '../../../lib/helper';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-newest-news',
  standalone: true,
  imports: [CarouselComponent, LoadingComponent, DatePipe],
  templateUrl: './newest-news.component.html'
})

export class NewestNewsComponent {
  selectedSource: 'all' | 'nyt' = 'all'
  selectedSection: string = 'all'

  newestFeedsData: any[] = []
  currentFeed: NewsData = null;

  newestFeedsDatas = [
    {
        "slug_name": "02ukraine-frontline-photos",
        "section": "World",
        "subsection": "Europe",
        "title": "Scenes of Trench Warfare in the Age of Drones",
        "abstract": "At a critical battlefield in eastern Ukraine, advanced technology is shaping battles that resemble the wars of older eras. When drones are watching, assaults become violent sprints.",
        "uri": "nyt://article/bf44fbe9-8808-5cd6-b1f8-2e354821a22e",
        "url": "https://www.nytimes.com/2024/11/02/world/europe/scenes-of-trench-warfare-in-the-age-of-drones.html",
        "byline": "By Tyler Hicks",
        "item_type": "Article",
        "source": "New York Times",
        "updated_date": "2024-11-02T00:01:26-04:00",
        "created_date": "2024-11-02T00:01:26-04:00",
        "published_date": "2024-11-02T00:01:26-04:00",
        "first_published_date": "2024-11-02T00:01:26-04:00",
        "material_type_facet": "News",
        "kicker": "",
        "subheadline": "",
        "des_facet": [
            "Defense and Military Forces",
            "Drones (Pilotless Planes)",
            "Russian Invasion of Ukraine (2022)"
        ],
        "org_facet": [],
        "per_facet": [],
        "geo_facet": [
            "Donbas (Ukraine)",
            "Kostiantynivka (Ukraine)",
            "Toretsk (Ukraine)",
            "Ukraine"
        ],
        "related_urls": [],
        "multimedia": [
            {
                "url": "https://static01.nyt.com/images/2024/10/17/multimedia/00Ukraine-Toretsk-Photos-kbtg-promo/00Ukraine-Toretsk-Photos-kbtg-thumbStandard.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75,
                "type": "image",
                "subtype": "photo",
                "caption": "A Ukrainian soldier repels a Russian attack with a rocket-propelled grenade outside Toretsk, Ukraine this month.",
                "copyright": "Tyler Hicks/The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/10/17/multimedia/00Ukraine-Toretsk-Photos-kbtg-promo/00Ukraine-Toretsk-Photos-kbtg-mediumThreeByTwo210.jpg",
                "format": "mediumThreeByTwo210",
                "height": 140,
                "width": 210,
                "type": "image",
                "subtype": "photo",
                "caption": "A Ukrainian soldier repels a Russian attack with a rocket-propelled grenade outside Toretsk, Ukraine this month.",
                "copyright": "Tyler Hicks/The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/10/17/multimedia/00Ukraine-Toretsk-Photos-kbtg-promo/00Ukraine-Toretsk-Photos-kbtg-mediumThreeByTwo440.jpg",
                "format": "mediumThreeByTwo440",
                "height": 293,
                "width": 440,
                "type": "image",
                "subtype": "photo",
                "caption": "A Ukrainian soldier repels a Russian attack with a rocket-propelled grenade outside Toretsk, Ukraine this month.",
                "copyright": "Tyler Hicks/The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/10/17/multimedia/00Ukraine-Toretsk-Photos-kbtg-promo/00Ukraine-Toretsk-Photos-kbtg-articleInline.jpg",
                "format": "Normal",
                "height": 127,
                "width": 190,
                "type": "image",
                "subtype": "photo",
                "caption": "A Ukrainian soldier repels a Russian attack with a rocket-propelled grenade outside Toretsk, Ukraine this month.",
                "copyright": "Tyler Hicks/The New York Times"
            }
        ]
    },
    {
        "slug_name": "02quote-web",
        "section": "Corrections",
        "subsection": "",
        "title": "Quote of the Day: U.C.L.A. Football Travel This Season (In Miles)",
        "abstract": "Quotation of the Day for Saturday, November 2, 2024.",
        "uri": "nyt://article/3f1d3e01-6072-5b86-b8a9-7cf56fe5ab45",
        "url": "https://www.nytimes.com/2024/11/02/pageoneplus/quote-of-the-day-ucla-football-travel-this-season-in-miles.html",
        "byline": "",
        "item_type": "Article",
        "source": "New York Times",
        "updated_date": "2024-11-02T00:01:18-04:00",
        "created_date": "2024-11-02T00:01:18-04:00",
        "published_date": "2024-11-02T00:01:18-04:00",
        "first_published_date": "2024-11-02T00:01:18-04:00",
        "material_type_facet": "Quote",
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
        "slug_name": "02Interpreter-MideastBalance-web",
        "section": "World",
        "subsection": "Middle East",
        "title": "Can Iran and Israel Find a New Equilibrium?",
        "abstract": "Even with peace talks underway, the region is far from stable.",
        "uri": "nyt://article/7dc290b4-9c7d-578d-b89c-8b8a090af5f5",
        "url": "https://www.nytimes.com/2024/11/02/world/middleeast/can-iran-and-israel-find-a-new-equilibrium.html",
        "byline": "By Amanda Taub",
        "item_type": "Article",
        "source": "New York Times",
        "updated_date": "2024-11-02T00:01:17-04:00",
        "created_date": "2024-11-02T00:01:17-04:00",
        "published_date": "2024-11-02T00:01:17-04:00",
        "first_published_date": "2024-11-02T00:01:17-04:00",
        "material_type_facet": "News",
        "kicker": "",
        "subheadline": "",
        "des_facet": [
            "Israel-Gaza War (2023- )",
            "Iran-Israel Proxy Conflict",
            "War and Armed Conflicts"
        ],
        "org_facet": [],
        "per_facet": [],
        "geo_facet": [
            "Gaza Strip",
            "Iran",
            "Israel"
        ],
        "related_urls": [],
        "multimedia": [
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01Interpreter-MideastBalance-01-tvhp/01Interpreter-MideastBalance-01-tvhp-thumbStandard.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75,
                "type": "image",
                "subtype": "photo",
                "caption": "A new billboard in Tehran with photos of President Biden and Prime Minister Benjamin Netanyahu of Israel on one side, labeled as “Warmongers,” and President Masoud Pezeshkian of Iran and a military officer, on the other side.",
                "copyright": "Arash Khamooshi for The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01Interpreter-MideastBalance-01-tvhp/01Interpreter-MideastBalance-01-tvhp-mediumThreeByTwo210.jpg",
                "format": "mediumThreeByTwo210",
                "height": 140,
                "width": 210,
                "type": "image",
                "subtype": "photo",
                "caption": "A new billboard in Tehran with photos of President Biden and Prime Minister Benjamin Netanyahu of Israel on one side, labeled as “Warmongers,” and President Masoud Pezeshkian of Iran and a military officer, on the other side.",
                "copyright": "Arash Khamooshi for The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01Interpreter-MideastBalance-01-tvhp/01Interpreter-MideastBalance-01-tvhp-mediumThreeByTwo440.jpg",
                "format": "mediumThreeByTwo440",
                "height": 293,
                "width": 440,
                "type": "image",
                "subtype": "photo",
                "caption": "A new billboard in Tehran with photos of President Biden and Prime Minister Benjamin Netanyahu of Israel on one side, labeled as “Warmongers,” and President Masoud Pezeshkian of Iran and a military officer, on the other side.",
                "copyright": "Arash Khamooshi for The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01Interpreter-MideastBalance-01-tvhp/01Interpreter-MideastBalance-01-tvhp-articleInline.jpg",
                "format": "Normal",
                "height": 127,
                "width": 190,
                "type": "image",
                "subtype": "photo",
                "caption": "A new billboard in Tehran with photos of President Biden and Prime Minister Benjamin Netanyahu of Israel on one side, labeled as “Warmongers,” and President Masoud Pezeshkian of Iran and a military officer, on the other side.",
                "copyright": "Arash Khamooshi for The New York Times"
            }
        ]
    },
    {
        "slug_name": "02italy-operaclub",
        "section": "World",
        "subsection": "Europe",
        "title": "To Join This Club, a Member Must Die. And You Must Adore Verdi.",
        "abstract": "Based in Parma, Club dei 27 is so exclusive that it’s given rise to all sorts of myths. But it’s really about venerating the famous opera composer born near the Italian city.",
        "uri": "nyt://article/587c7b58-eeec-5355-b3a4-83d1f2e5b6c2",
        "url": "https://www.nytimes.com/2024/11/02/world/europe/club-dei-27-verdi-parma.html",
        "byline": "By Elisabetta Povoledo",
        "item_type": "Article",
        "source": "New York Times",
        "updated_date": "2024-11-02T00:01:14-04:00",
        "created_date": "2024-11-02T00:01:14-04:00",
        "published_date": "2024-11-02T00:01:14-04:00",
        "first_published_date": "2024-11-02T00:01:14-04:00",
        "material_type_facet": "News",
        "kicker": "",
        "subheadline": "",
        "des_facet": [
            "Opera",
            "Classical Music"
        ],
        "org_facet": [],
        "per_facet": [
            "Verdi, Giuseppe"
        ],
        "geo_facet": [
            "Italy",
            "Parma (Italy)"
        ],
        "related_urls": [],
        "multimedia": [
            {
                "url": "https://static01.nyt.com/images/2024/11/03/multimedia/03italy-operaclub-01-htlg/03italy-operaclub-01-htlg-thumbStandard.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75,
                "type": "image",
                "subtype": "photo",
                "caption": "Members of Club dei 27 singing “Va Pensiero” in celebration of Giuseppe Verdi last month outside his birthplace near Parma, Italy.",
                "copyright": "Marco Gualazzini for The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/03/multimedia/03italy-operaclub-01-htlg/03italy-operaclub-01-htlg-mediumThreeByTwo210.jpg",
                "format": "mediumThreeByTwo210",
                "height": 140,
                "width": 210,
                "type": "image",
                "subtype": "photo",
                "caption": "Members of Club dei 27 singing “Va Pensiero” in celebration of Giuseppe Verdi last month outside his birthplace near Parma, Italy.",
                "copyright": "Marco Gualazzini for The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/03/multimedia/03italy-operaclub-01-htlg/03italy-operaclub-01-htlg-mediumThreeByTwo440.jpg",
                "format": "mediumThreeByTwo440",
                "height": 293,
                "width": 440,
                "type": "image",
                "subtype": "photo",
                "caption": "Members of Club dei 27 singing “Va Pensiero” in celebration of Giuseppe Verdi last month outside his birthplace near Parma, Italy.",
                "copyright": "Marco Gualazzini for The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/03/multimedia/03italy-operaclub-01-htlg/03italy-operaclub-01-htlg-articleInline.jpg",
                "format": "Normal",
                "height": 127,
                "width": 190,
                "type": "image",
                "subtype": "photo",
                "caption": "Members of Club dei 27 singing “Va Pensiero” in celebration of Giuseppe Verdi last month outside his birthplace near Parma, Italy.",
                "copyright": "Marco Gualazzini for The New York Times"
            }
        ]
    },
    {
        "slug_name": "01election-live-levittown-pennsylvania",
        "section": "U.S.",
        "subsection": "Politics",
        "title": "For one mother and son, the 8-hour wait to vote in Bucks County, Pa., was worth it.",
        "abstract": "",
        "uri": "nyt://article/b94b8f47-4f6b-55c0-85f2-99cd4a334f18",
        "url": "https://www.nytimes.com/live/2024/11/01/us/harris-trump-election/levittown-pa-long-lines",
        "byline": "By Lisa Lerer",
        "item_type": "Article",
        "source": "New York Times",
        "updated_date": "2024-11-01T23:00:15-04:00",
        "created_date": "2024-11-01T23:00:15-04:00",
        "published_date": "2024-11-01T23:00:15-04:00",
        "first_published_date": "2024-11-01T23:00:15-04:00",
        "material_type_facet": "Live Blog Post",
        "kicker": "",
        "subheadline": "",
        "des_facet": [
            "Presidential Election of 2024",
            "Voting and Voters"
        ],
        "org_facet": [],
        "per_facet": [
            "Harris, Kamala D",
            "Trump, Donald J"
        ],
        "geo_facet": [
            "Bucks County (Pa)",
            "Pennsylvania"
        ],
        "related_urls": [],
        "multimedia": [
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01election-live-levittown-pennsylvania/01election-live-levittown-pennsylvania-thumbStandard.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75,
                "type": "image",
                "subtype": "photo",
                "caption": "Voters waiting to cast their ballots at a Bucks County government office in Levittown, Pa., on Friday.",
                "copyright": "Lisa Lerer"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01election-live-levittown-pennsylvania/01election-live-levittown-pennsylvania-mediumThreeByTwo210.jpg",
                "format": "mediumThreeByTwo210",
                "height": 140,
                "width": 210,
                "type": "image",
                "subtype": "photo",
                "caption": "Voters waiting to cast their ballots at a Bucks County government office in Levittown, Pa., on Friday.",
                "copyright": "Lisa Lerer"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01election-live-levittown-pennsylvania/01election-live-levittown-pennsylvania-mediumThreeByTwo440.jpg",
                "format": "mediumThreeByTwo440",
                "height": 293,
                "width": 440,
                "type": "image",
                "subtype": "photo",
                "caption": "Voters waiting to cast their ballots at a Bucks County government office in Levittown, Pa., on Friday.",
                "copyright": "Lisa Lerer"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01election-live-levittown-pennsylvania/01election-live-levittown-pennsylvania-articleInline.jpg",
                "format": "Normal",
                "height": 127,
                "width": 190,
                "type": "image",
                "subtype": "photo",
                "caption": "Voters waiting to cast their ballots at a Bucks County government office in Levittown, Pa., on Friday.",
                "copyright": "Lisa Lerer"
            }
        ]
    },
    {
        "slug_name": "01election-live-votewatch-erie-county",
        "section": "U.S.",
        "subsection": "Politics",
        "title": "Judge Finds Pennsylvania County Short of Ballots and Extends Early-Voting Hours",
        "abstract": "A state judge in Erie County, Pa., found that thousands of voters may not have received their ballots in time for the election on Tuesday, ordering the county to remedy the issue.",
        "uri": "nyt://article/2ec9526e-c000-5e3a-9684-636fc1b72997",
        "url": "https://www.nytimes.com/2024/11/01/us/politics/erie-county-voting-mail-ballots.html",
        "byline": "By Nick Corasaniti and Rebecca Davis O’Brien",
        "item_type": "Article",
        "source": "New York Times",
        "updated_date": "2024-11-01T23:27:49-04:00",
        "created_date": "2024-11-01T22:56:08-04:00",
        "published_date": "2024-11-01T22:56:08-04:00",
        "first_published_date": "2024-11-01T22:56:08-04:00",
        "material_type_facet": "News",
        "kicker": "",
        "subheadline": "",
        "des_facet": [
            "Presidential Election of 2024",
            "Absentee Voting",
            "Elections, Secretary of State"
        ],
        "org_facet": [
            "Republican Party"
        ],
        "per_facet": [],
        "geo_facet": [
            "Erie County (Pa)"
        ],
        "related_urls": [],
        "multimedia": [
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01election-live-votewatch-erie-county1-fvqj/01election-live-votewatch-erie-county1-fvqj-thumbStandard.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75,
                "type": "image",
                "subtype": "photo",
                "caption": "Corry, Pa., a small city in Erie County, which is considered a bellwether in a critical battleground state.",
                "copyright": "Dustin Franz/Agence France-Presse — Getty Images"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01election-live-votewatch-erie-county1-fvqj/01election-live-votewatch-erie-county1-fvqj-mediumThreeByTwo210.jpg",
                "format": "mediumThreeByTwo210",
                "height": 140,
                "width": 210,
                "type": "image",
                "subtype": "photo",
                "caption": "Corry, Pa., a small city in Erie County, which is considered a bellwether in a critical battleground state.",
                "copyright": "Dustin Franz/Agence France-Presse — Getty Images"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01election-live-votewatch-erie-county1-fvqj/01election-live-votewatch-erie-county1-fvqj-mediumThreeByTwo440.jpg",
                "format": "mediumThreeByTwo440",
                "height": 293,
                "width": 440,
                "type": "image",
                "subtype": "photo",
                "caption": "Corry, Pa., a small city in Erie County, which is considered a bellwether in a critical battleground state.",
                "copyright": "Dustin Franz/Agence France-Presse — Getty Images"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01election-live-votewatch-erie-county1-fvqj/01election-live-votewatch-erie-county1-fvqj-articleInline.jpg",
                "format": "Normal",
                "height": 127,
                "width": 190,
                "type": "image",
                "subtype": "photo",
                "caption": "Corry, Pa., a small city in Erie County, which is considered a bellwether in a critical battleground state.",
                "copyright": "Dustin Franz/Agence France-Presse — Getty Images"
            }
        ]
    },
    {
        "slug_name": "01nat-breonna-taylor",
        "section": "U.S.",
        "subsection": "",
        "title": "Federal Jury Finds Ex-Officer Guilty of Violating Breonna Taylor’s Rights",
        "abstract": "The former detective fired 10 shots through Ms. Taylor’s apartment in a raid that set off a wave of protests across the country.",
        "uri": "nyt://article/707a1c2f-4aeb-5bed-b65c-90375d7f7f5d",
        "url": "https://www.nytimes.com/2024/11/01/us/breonna-taylor-brett-hankison-verdict.html",
        "byline": "By Orlando Mayorquín",
        "item_type": "Article",
        "source": "New York Times",
        "updated_date": "2024-11-01T22:39:23-04:00",
        "created_date": "2024-11-01T22:01:34-04:00",
        "published_date": "2024-11-01T22:01:34-04:00",
        "first_published_date": "2024-11-01T22:01:34-04:00",
        "material_type_facet": "News",
        "kicker": "",
        "subheadline": "",
        "des_facet": [
            "Police Brutality, Misconduct and Shootings"
        ],
        "org_facet": [
            "Police Department (Louisville, Ky)"
        ],
        "per_facet": [
            "Taylor, Breonna (1993-2020)",
            "Hankison, Brett (Louisville, Ky, Police Officer)"
        ],
        "geo_facet": [],
        "related_urls": [],
        "multimedia": [
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01nat-breonna-taylor-cfvz/01nat-breonna-taylor-cfvz-thumbStandard.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75,
                "type": "image",
                "subtype": "photo",
                "caption": "Brett Hankison in 2022. The former Louisville, Ky., police detective fired 10 shots through Breonna Taylor’s apartment in a fatal raid in 2020. ",
                "copyright": "Timothy D. Easley/Associated Press"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01nat-breonna-taylor-cfvz/01nat-breonna-taylor-cfvz-mediumThreeByTwo210.jpg",
                "format": "mediumThreeByTwo210",
                "height": 140,
                "width": 210,
                "type": "image",
                "subtype": "photo",
                "caption": "Brett Hankison in 2022. The former Louisville, Ky., police detective fired 10 shots through Breonna Taylor’s apartment in a fatal raid in 2020. ",
                "copyright": "Timothy D. Easley/Associated Press"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01nat-breonna-taylor-cfvz/01nat-breonna-taylor-cfvz-mediumThreeByTwo440.jpg",
                "format": "mediumThreeByTwo440",
                "height": 293,
                "width": 440,
                "type": "image",
                "subtype": "photo",
                "caption": "Brett Hankison in 2022. The former Louisville, Ky., police detective fired 10 shots through Breonna Taylor’s apartment in a fatal raid in 2020. ",
                "copyright": "Timothy D. Easley/Associated Press"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01nat-breonna-taylor-cfvz/01nat-breonna-taylor-cfvz-articleInline.jpg",
                "format": "Normal",
                "height": 127,
                "width": 190,
                "type": "image",
                "subtype": "photo",
                "caption": "Brett Hankison in 2022. The former Louisville, Ky., police detective fired 10 shots through Breonna Taylor’s apartment in a fatal raid in 2020. ",
                "copyright": "Timothy D. Easley/Associated Press"
            }
        ]
    },
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
        "slug_name": "02wordplay-band-aids",
        "section": "Gameplay",
        "subsection": "",
        "title": "Band Aids",
        "abstract": "Blake Slonecker delivers a cutting-edge Saturday puzzle.",
        "uri": "nyt://article/750f0c16-6d88-529f-9a17-1601c737dc4d",
        "url": "https://www.nytimes.com/2024/11/01/crosswords/daily-puzzle-2024-11-02.html",
        "byline": "By Caitlin Lovinger",
        "item_type": "Article",
        "source": "New York Times",
        "updated_date": "2024-11-01T22:00:09-04:00",
        "created_date": "2024-11-01T22:00:09-04:00",
        "published_date": "2024-11-01T22:00:09-04:00",
        "first_published_date": "2024-11-01T22:00:09-04:00",
        "material_type_facet": "News",
        "kicker": "Wordplay, The CROSSWORD COLUMN",
        "subheadline": "",
        "des_facet": [
            "Crossword Puzzles"
        ],
        "org_facet": [],
        "per_facet": [
            "Slonecker, Blake (Crossword Constructor)"
        ],
        "geo_facet": [],
        "related_urls": [],
        "multimedia": [
            {
                "url": "https://static01.nyt.com/images/2024/11/02/crosswords/02wordplay-set-list/02wordplay-set-list-thumbStandard.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75,
                "type": "image",
                "subtype": "photo",
                "caption": "A Fender Stratocaster played by Kurt Cobain and a set list for a 1991 Nirvana concert sold for nearly $600,000 at Julien’s Auctions in California last year.",
                "copyright": "Frederic J. Brown/Agence France-Presse — Getty Images"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/02/crosswords/02wordplay-set-list/02wordplay-set-list-mediumThreeByTwo210.jpg",
                "format": "mediumThreeByTwo210",
                "height": 140,
                "width": 210,
                "type": "image",
                "subtype": "photo",
                "caption": "A Fender Stratocaster played by Kurt Cobain and a set list for a 1991 Nirvana concert sold for nearly $600,000 at Julien’s Auctions in California last year.",
                "copyright": "Frederic J. Brown/Agence France-Presse — Getty Images"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/02/crosswords/02wordplay-set-list/02wordplay-set-list-mediumThreeByTwo440.jpg",
                "format": "mediumThreeByTwo440",
                "height": 293,
                "width": 440,
                "type": "image",
                "subtype": "photo",
                "caption": "A Fender Stratocaster played by Kurt Cobain and a set list for a 1991 Nirvana concert sold for nearly $600,000 at Julien’s Auctions in California last year.",
                "copyright": "Frederic J. Brown/Agence France-Presse — Getty Images"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/02/crosswords/02wordplay-set-list/02wordplay-set-list-articleInline.jpg",
                "format": "Normal",
                "height": 122,
                "width": 190,
                "type": "image",
                "subtype": "photo",
                "caption": "A Fender Stratocaster played by Kurt Cobain and a set list for a 1991 Nirvana concert sold for nearly $600,000 at Julien’s Auctions in California last year.",
                "copyright": "Frederic J. Brown/Agence France-Presse — Getty Images"
            }
        ]
    },
    {
        "slug_name": "02corrections",
        "section": "Corrections",
        "subsection": "",
        "title": "Corrections: Nov. 2, 2024",
        "abstract": "Corrections that appeared in print on Saturday, Nov. 2, 2024.",
        "uri": "nyt://article/749c0d8d-de17-5ff2-8612-88d58da4d0ad",
        "url": "https://www.nytimes.com/2024/11/01/pageoneplus/corrections-nov-2-2024.html",
        "byline": "",
        "item_type": "Article",
        "source": "New York Times",
        "updated_date": "2024-11-01T21:30:01-04:00",
        "created_date": "2024-11-01T21:30:01-04:00",
        "published_date": "2024-11-01T21:30:01-04:00",
        "first_published_date": "2024-11-01T21:30:01-04:00",
        "material_type_facet": "Correction",
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
        "slug_name": "01dc-senate-money",
        "section": "U.S.",
        "subsection": "Politics",
        "title": "Judge Allows Unusual G.O.P. Strategy to Pump Money Into Senate Races",
        "abstract": "Democrats had claimed that the advertising strategy may have violated federal election laws establishing strict limits on spending by national party committees to aid individual candidates.",
        "uri": "nyt://article/cf7277c9-0eae-530e-a5f8-43945ac319f0",
        "url": "https://www.nytimes.com/2024/11/01/us/politics/senate-republicans-ads-money.html",
        "byline": "By Luke Broadwater",
        "item_type": "Article",
        "source": "New York Times",
        "updated_date": "2024-11-01T21:19:43-04:00",
        "created_date": "2024-11-01T21:12:27-04:00",
        "published_date": "2024-11-01T21:12:27-04:00",
        "first_published_date": "2024-11-01T21:12:27-04:00",
        "material_type_facet": "News",
        "kicker": "",
        "subheadline": "",
        "des_facet": [
            "United States Politics and Government",
            "Political Advertising",
            "Campaign Finance",
            "Decisions and Verdicts",
            "Elections, Senate"
        ],
        "org_facet": [
            "Democratic Party",
            "Federal Election Commission",
            "Republican Party",
            "Senate"
        ],
        "per_facet": [],
        "geo_facet": [],
        "related_urls": [],
        "multimedia": [
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01dc-senate-jhwz/01dc-senate-jhwz-thumbStandard.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75,
                "type": "image",
                "subtype": "photo",
                "caption": "A federal judge ruled on Friday that Senate Republicans could continue to pump tens of millions of dollars into key swing state races by reclassifying campaign ads as fund-raising appeals.",
                "copyright": "Eric Lee/The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01dc-senate-jhwz/01dc-senate-jhwz-mediumThreeByTwo210.jpg",
                "format": "mediumThreeByTwo210",
                "height": 140,
                "width": 210,
                "type": "image",
                "subtype": "photo",
                "caption": "A federal judge ruled on Friday that Senate Republicans could continue to pump tens of millions of dollars into key swing state races by reclassifying campaign ads as fund-raising appeals.",
                "copyright": "Eric Lee/The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01dc-senate-jhwz/01dc-senate-jhwz-mediumThreeByTwo440.jpg",
                "format": "mediumThreeByTwo440",
                "height": 293,
                "width": 440,
                "type": "image",
                "subtype": "photo",
                "caption": "A federal judge ruled on Friday that Senate Republicans could continue to pump tens of millions of dollars into key swing state races by reclassifying campaign ads as fund-raising appeals.",
                "copyright": "Eric Lee/The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01dc-senate-jhwz/01dc-senate-jhwz-articleInline.jpg",
                "format": "Normal",
                "height": 127,
                "width": 190,
                "type": "image",
                "subtype": "photo",
                "caption": "A federal judge ruled on Friday that Senate Republicans could continue to pump tens of millions of dollars into key swing state races by reclassifying campaign ads as fund-raising appeals.",
                "copyright": "Eric Lee/The New York Times"
            }
        ]
    },
    {
        "slug_name": "01pol-nevada",
        "section": "U.S.",
        "subsection": "Politics",
        "title": "Uncertainty Reigns in Nevada With Rise of Nonpartisan Voters",
        "abstract": "With early voting coming to a close, Donald Trump and Kamala Harris must now ensure their respective bases show up on Election Day, while chasing down those whose choice is less clear.",
        "uri": "nyt://article/ca62d4d5-04a6-5bc0-a854-869fed2a5cfa",
        "url": "https://www.nytimes.com/2024/11/01/us/politics/nonpartisan-voters-nevada.html",
        "byline": "By Benjamin Oreskes",
        "item_type": "Article",
        "source": "New York Times",
        "updated_date": "2024-11-01T21:50:23-04:00",
        "created_date": "2024-11-01T20:39:24-04:00",
        "published_date": "2024-11-01T20:39:24-04:00",
        "first_published_date": "2024-11-01T20:39:24-04:00",
        "material_type_facet": "News",
        "kicker": "",
        "subheadline": "",
        "des_facet": [
            "Presidential Election of 2024",
            "United States Politics and Government",
            "Polls and Public Opinion",
            "Voting Rights, Registration and Requirements"
        ],
        "org_facet": [],
        "per_facet": [
            "Reid, Harry",
            "Harris, Kamala D",
            "Trump, Donald J"
        ],
        "geo_facet": [
            "Nevada",
            "Reno (Nev)"
        ],
        "related_urls": [],
        "multimedia": [
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01pol-nevada-1-bwqc/01pol-nevada-1-bwqc-thumbStandard.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75,
                "type": "image",
                "subtype": "photo",
                "caption": "Voters waited in line to cast their ballots at Meadows Mall during the last day of Nevada’s in-person early voting in Las Vegas.",
                "copyright": "Bridget Bennett for The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01pol-nevada-1-bwqc/01pol-nevada-1-bwqc-mediumThreeByTwo210.jpg",
                "format": "mediumThreeByTwo210",
                "height": 140,
                "width": 210,
                "type": "image",
                "subtype": "photo",
                "caption": "Voters waited in line to cast their ballots at Meadows Mall during the last day of Nevada’s in-person early voting in Las Vegas.",
                "copyright": "Bridget Bennett for The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01pol-nevada-1-bwqc/01pol-nevada-1-bwqc-mediumThreeByTwo440.jpg",
                "format": "mediumThreeByTwo440",
                "height": 293,
                "width": 440,
                "type": "image",
                "subtype": "photo",
                "caption": "Voters waited in line to cast their ballots at Meadows Mall during the last day of Nevada’s in-person early voting in Las Vegas.",
                "copyright": "Bridget Bennett for The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01pol-nevada-1-bwqc/01pol-nevada-1-bwqc-articleInline.jpg",
                "format": "Normal",
                "height": 127,
                "width": 190,
                "type": "image",
                "subtype": "photo",
                "caption": "Voters waited in line to cast their ballots at Meadows Mall during the last day of Nevada’s in-person early voting in Las Vegas.",
                "copyright": "Bridget Bennett for The New York Times"
            }
        ]
    },
    {
        "slug_name": "01long-island-rape",
        "section": "New York",
        "subsection": "",
        "title": "As Election Nears, Republicans Blame Child’s Rape on Immigration Crisis",
        "abstract": "Wilson Castillo Diaz was arrested in New York in connection with the rape of a 5-year-old girl. On Friday, local Republicans blamed Democratic immigration policies.",
        "uri": "nyt://article/55b52933-62aa-5369-8652-6dab89c45861",
        "url": "https://www.nytimes.com/2024/11/01/nyregion/5-year-old-raped-long-island-immigration.html",
        "byline": "By Alyce McFadden and Olivia Bensimon",
        "item_type": "Article",
        "source": "New York Times",
        "updated_date": "2024-11-01T20:20:49-04:00",
        "created_date": "2024-11-01T20:18:33-04:00",
        "published_date": "2024-11-01T20:18:33-04:00",
        "first_published_date": "2024-11-01T20:18:33-04:00",
        "material_type_facet": "News",
        "kicker": "",
        "subheadline": "",
        "des_facet": [
            "Illegal Immigration",
            "Sex Crimes",
            "Presidential Election of 2024",
            "Police"
        ],
        "org_facet": [
            "Immigration and Customs Enforcement (US)",
            "Police Department (Nassau County, NY)"
        ],
        "per_facet": [
            "Blakeman, Bruce A"
        ],
        "geo_facet": [
            "Honduras",
            "Long Island (NY)",
            "New York City",
            "Westbury (NY)"
        ],
        "related_urls": [],
        "multimedia": [
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01migrant-rape-01-gktc/01migrant-rape-01-gktc-thumbStandard.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75,
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Andrew Theodorakis/Getty Images"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01migrant-rape-01-gktc/01migrant-rape-01-gktc-mediumThreeByTwo210.jpg",
                "format": "mediumThreeByTwo210",
                "height": 140,
                "width": 210,
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Andrew Theodorakis/Getty Images"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01migrant-rape-01-gktc/01migrant-rape-01-gktc-mediumThreeByTwo440.jpg",
                "format": "mediumThreeByTwo440",
                "height": 293,
                "width": 440,
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Andrew Theodorakis/Getty Images"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01migrant-rape-01-gktc/01migrant-rape-01-gktc-articleInline.jpg",
                "format": "Normal",
                "height": 107,
                "width": 190,
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Andrew Theodorakis/Getty Images"
            }
        ]
    },
    {
        "slug_name": "01election-live-wallace-bush",
        "section": "U.S.",
        "subsection": "Politics",
        "title": "Nicolle Wallace Calls on Her Former Boss, George W. Bush, to Denounce Trump",
        "abstract": "Ms. Wallace, who served as the communications director in the Bush White House, made the appeal on her MSNBC program.",
        "uri": "nyt://article/4a3bc7ef-7cf4-59c8-b766-5e045595ddf4",
        "url": "https://www.nytimes.com/2024/11/01/us/politics/george-w-bush-nicole-wallace-2024-election.html",
        "byline": "By Tim Balk",
        "item_type": "Article",
        "source": "New York Times",
        "updated_date": "2024-11-01T20:17:38-04:00",
        "created_date": "2024-11-01T20:05:37-04:00",
        "published_date": "2024-11-01T20:05:37-04:00",
        "first_published_date": "2024-11-01T20:05:37-04:00",
        "material_type_facet": "News",
        "kicker": "",
        "subheadline": "",
        "des_facet": [
            "Presidential Election of 2024",
            "Endorsements"
        ],
        "org_facet": [
            "MSNBC",
            "New Yorker"
        ],
        "per_facet": [
            "Bush, George W",
            "Cheney, Dick",
            "Cheney, Liz",
            "Harris, Kamala D",
            "Remnick, David",
            "Trump, Donald J"
        ],
        "geo_facet": [],
        "related_urls": [],
        "multimedia": [
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01election-live-wallace-bush/01election-live-wallace-bush-thumbStandard.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75,
                "type": "image",
                "subtype": "photo",
                "caption": "Nicolle Wallace at the White House in 2006.",
                "copyright": "Charles Dharapak/Associated Press"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01election-live-wallace-bush/01election-live-wallace-bush-mediumThreeByTwo210.jpg",
                "format": "mediumThreeByTwo210",
                "height": 140,
                "width": 210,
                "type": "image",
                "subtype": "photo",
                "caption": "Nicolle Wallace at the White House in 2006.",
                "copyright": "Charles Dharapak/Associated Press"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01election-live-wallace-bush/01election-live-wallace-bush-mediumThreeByTwo440.jpg",
                "format": "mediumThreeByTwo440",
                "height": 293,
                "width": 440,
                "type": "image",
                "subtype": "photo",
                "caption": "Nicolle Wallace at the White House in 2006.",
                "copyright": "Charles Dharapak/Associated Press"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01election-live-wallace-bush/01election-live-wallace-bush-articleInline.jpg",
                "format": "Normal",
                "height": 127,
                "width": 190,
                "type": "image",
                "subtype": "photo",
                "caption": "Nicolle Wallace at the White House in 2006.",
                "copyright": "Charles Dharapak/Associated Press"
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
        "slug_name": "01spain-rain-floods_ESP",
        "section": "En español",
        "subsection": "Mundo",
        "title": "Las lluvias en España dejan al menos 205 personas fallecidas",
        "abstract": "Las autoridades dijeron que decenas de personas seguían desaparecidas, mientras los meteorólogos advertían de nuevas inundaciones en el suroeste del país.",
        "uri": "nyt://article/ef8be9d2-9e25-578e-8d70-b27146a2e0db",
        "url": "https://www.nytimes.com/es/2024/11/01/espanol/mundo/lluvias-espana-inundaciones-fallecidos.html",
        "byline": "By José Bautista and Lynsey Chutel",
        "item_type": "Article",
        "source": "New York Times",
        "updated_date": "2024-11-01T19:22:14-04:00",
        "created_date": "2024-11-01T19:22:14-04:00",
        "published_date": "2024-11-01T19:22:14-04:00",
        "first_published_date": "2024-11-01T19:22:14-04:00",
        "material_type_facet": "News",
        "kicker": "",
        "subheadline": "",
        "des_facet": [
            "Floods",
            "Weather",
            "Rain",
            "Deaths (Fatalities)",
            "Rescues",
            "Disasters and Emergencies"
        ],
        "org_facet": [],
        "per_facet": [
            "Sanchez Perez-Castejon, Pedro (1972- )"
        ],
        "geo_facet": [
            "Balearic Islands (Spain)",
            "Andalusia (Spain)",
            "Catalonia (Spain)",
            "Madrid (Spain)",
            "Valencia (Spain)",
            "Spain"
        ],
        "related_urls": [],
        "multimedia": [
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01spain-rain-hjvg/01spain-rain-hjvg-thumbStandard.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75,
                "type": "image",
                "subtype": "photo",
                "caption": "A woman clears mud off the street after heavy flooding in Paiporta, near Valencia, Spain, on Friday.",
                "copyright": "Nacho Doce/Reuters"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01spain-rain-hjvg/01spain-rain-hjvg-mediumThreeByTwo210.jpg",
                "format": "mediumThreeByTwo210",
                "height": 140,
                "width": 210,
                "type": "image",
                "subtype": "photo",
                "caption": "A woman clears mud off the street after heavy flooding in Paiporta, near Valencia, Spain, on Friday.",
                "copyright": "Nacho Doce/Reuters"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01spain-rain-hjvg/01spain-rain-hjvg-mediumThreeByTwo440.jpg",
                "format": "mediumThreeByTwo440",
                "height": 293,
                "width": 440,
                "type": "image",
                "subtype": "photo",
                "caption": "A woman clears mud off the street after heavy flooding in Paiporta, near Valencia, Spain, on Friday.",
                "copyright": "Nacho Doce/Reuters"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01spain-rain-hjvg/01spain-rain-hjvg-articleInline.jpg",
                "format": "Normal",
                "height": 127,
                "width": 190,
                "type": "image",
                "subtype": "photo",
                "caption": "A woman clears mud off the street after heavy flooding in Paiporta, near Valencia, Spain, on Friday.",
                "copyright": "Nacho Doce/Reuters"
            }
        ]
    },
    {
        "slug_name": "01dc-scotus-penn",
        "section": "U.S.",
        "subsection": "Politics",
        "title": "Supreme Court Rejects Bid to Block Count of Some Pennsylvania Provisional Ballots",
        "abstract": "Republicans had sought to block the counting of provisional ballots by voters whose mail-in ballots were deemed invalid. Democrats celebrated the ruling as a win in a crucial state.",
        "uri": "nyt://article/15f1ad5e-231c-5e9b-b37a-6a22acac3c71",
        "url": "https://www.nytimes.com/2024/11/01/us/politics/supreme-court-pennsylvania-ballots.html",
        "byline": "By Abbie VanSickle",
        "item_type": "Article",
        "source": "New York Times",
        "updated_date": "2024-11-01T21:27:15-04:00",
        "created_date": "2024-11-01T19:13:16-04:00",
        "published_date": "2024-11-01T19:13:16-04:00",
        "first_published_date": "2024-11-01T19:13:16-04:00",
        "material_type_facet": "News",
        "kicker": "",
        "subheadline": "",
        "des_facet": [
            "States (US)",
            "Decisions and Verdicts",
            "Absentee Voting"
        ],
        "org_facet": [
            "Republican National Committee",
            "Republican Party",
            "Supreme Court (US)"
        ],
        "per_facet": [
            "Kennedy, Robert F Jr"
        ],
        "geo_facet": [
            "Pennsylvania"
        ],
        "related_urls": [],
        "multimedia": [
            {
                "url": "https://static01.nyt.com/images/2024/10/31/multimedia/00dc-scotus-penn-lmvc/00dc-scotus-penn-lmvc-thumbStandard.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75,
                "type": "image",
                "subtype": "photo",
                "caption": "The Supreme Court’s decision could affect thousands of mail-in ballots in a state that is crucial to each party’s path to victory in the presidential contest.",
                "copyright": "Eric Lee/The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/10/31/multimedia/00dc-scotus-penn-lmvc/00dc-scotus-penn-lmvc-mediumThreeByTwo210.jpg",
                "format": "mediumThreeByTwo210",
                "height": 140,
                "width": 210,
                "type": "image",
                "subtype": "photo",
                "caption": "The Supreme Court’s decision could affect thousands of mail-in ballots in a state that is crucial to each party’s path to victory in the presidential contest.",
                "copyright": "Eric Lee/The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/10/31/multimedia/00dc-scotus-penn-lmvc/00dc-scotus-penn-lmvc-mediumThreeByTwo440.jpg",
                "format": "mediumThreeByTwo440",
                "height": 293,
                "width": 440,
                "type": "image",
                "subtype": "photo",
                "caption": "The Supreme Court’s decision could affect thousands of mail-in ballots in a state that is crucial to each party’s path to victory in the presidential contest.",
                "copyright": "Eric Lee/The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/10/31/multimedia/00dc-scotus-penn-lmvc/00dc-scotus-penn-lmvc-articleInline.jpg",
                "format": "Normal",
                "height": 190,
                "width": 190,
                "type": "image",
                "subtype": "photo",
                "caption": "The Supreme Court’s decision could affect thousands of mail-in ballots in a state that is crucial to each party’s path to victory in the presidential contest.",
                "copyright": "Eric Lee/The New York Times"
            }
        ]
    },
    {
        "slug_name": "01xp-camper",
        "section": "U.S.",
        "subsection": "",
        "title": "Montana Camper Offered His Killer a Beer Before He Was Murdered, Police Say",
        "abstract": "DNA from a beer can helped lead the authorities to an arrest in the killing of Dustin Kjersem, whose death was originally reported as a possible bear attack, officials said.",
        "uri": "nyt://article/664f34cc-ac76-57e7-9ed3-cf0a2431269a",
        "url": "https://www.nytimes.com/2024/11/01/us/montana-camper-suspect-charged.html",
        "byline": "By Hank Sanders",
        "item_type": "Article",
        "source": "New York Times",
        "updated_date": "2024-11-01T22:03:03-04:00",
        "created_date": "2024-11-01T19:08:04-04:00",
        "published_date": "2024-11-01T19:08:04-04:00",
        "first_published_date": "2024-11-01T19:08:04-04:00",
        "material_type_facet": "News",
        "kicker": "",
        "subheadline": "",
        "des_facet": [
            "Murders, Attempted Murders and Homicides",
            "Camps and Camping",
            "Animal Attacks",
            "Beer",
            "Bears",
            "Forensic Science"
        ],
        "org_facet": [],
        "per_facet": [
            "Dustin Kjersem"
        ],
        "geo_facet": [
            "Basin (Mont)",
            "Big Sky (Mont)",
            "Bozeman (Mont)",
            "Montana"
        ],
        "related_urls": [],
        "multimedia": [
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01XP-CAMPER/01XP-CAMPER-thumbStandard.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75,
                "type": "image",
                "subtype": "photo",
                "caption": "Dustin Kjersem, a Montana camper whose death was initially reported as a bear attack.",
                "copyright": "Gallatin County Sheriff’s Office"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01XP-CAMPER/01XP-CAMPER-mediumThreeByTwo210.jpg",
                "format": "mediumThreeByTwo210",
                "height": 140,
                "width": 210,
                "type": "image",
                "subtype": "photo",
                "caption": "Dustin Kjersem, a Montana camper whose death was initially reported as a bear attack.",
                "copyright": "Gallatin County Sheriff’s Office"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01XP-CAMPER/01XP-CAMPER-mediumThreeByTwo440.jpg",
                "format": "mediumThreeByTwo440",
                "height": 293,
                "width": 440,
                "type": "image",
                "subtype": "photo",
                "caption": "Dustin Kjersem, a Montana camper whose death was initially reported as a bear attack.",
                "copyright": "Gallatin County Sheriff’s Office"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01XP-CAMPER/01XP-CAMPER-articleInline.jpg",
                "format": "Normal",
                "height": 152,
                "width": 190,
                "type": "image",
                "subtype": "photo",
                "caption": "Dustin Kjersem, a Montana camper whose death was initially reported as a bear attack.",
                "copyright": "Gallatin County Sheriff’s Office"
            }
        ]
    },
    {
        "slug_name": "01election-live-education-issues-version",
        "section": "U.S.",
        "subsection": "Politics",
        "title": "On the issues: Where Harris and Trump stand on education.",
        "abstract": "",
        "uri": "nyt://article/16e471c8-11f9-5408-865e-532324976109",
        "url": "https://www.nytimes.com/live/2024/11/01/us/harris-trump-election/on-the-issues-where-harris-and-trump-stand-on-education",
        "byline": "By Maggie Astor",
        "item_type": "Article",
        "source": "New York Times",
        "updated_date": "2024-11-01T19:00:06-04:00",
        "created_date": "2024-11-01T19:00:06-04:00",
        "published_date": "2024-11-01T19:00:06-04:00",
        "first_published_date": "2024-11-01T19:00:06-04:00",
        "material_type_facet": "Live Blog Post",
        "kicker": "",
        "subheadline": "",
        "des_facet": [],
        "org_facet": [],
        "per_facet": [],
        "geo_facet": [],
        "related_urls": [],
        "multimedia": [
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01election-live-education-issues-version-bwtk/01election-live-education-issues-version-bwtk-thumbStandard.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75,
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Jeff Faughender/Courier Journal, via Associated Press"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01election-live-education-issues-version-bwtk/01election-live-education-issues-version-bwtk-mediumThreeByTwo210.jpg",
                "format": "mediumThreeByTwo210",
                "height": 140,
                "width": 210,
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Jeff Faughender/Courier Journal, via Associated Press"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01election-live-education-issues-version-bwtk/01election-live-education-issues-version-bwtk-mediumThreeByTwo440.jpg",
                "format": "mediumThreeByTwo440",
                "height": 293,
                "width": 440,
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Jeff Faughender/Courier Journal, via Associated Press"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01election-live-education-issues-version-bwtk/01election-live-education-issues-version-bwtk-articleInline.jpg",
                "format": "Normal",
                "height": 130,
                "width": 190,
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Jeff Faughender/Courier Journal, via Associated Press"
            }
        ]
    },
    {
        "slug_name": "01-pol-on-politics-newsletter-friday-web",
        "section": "U.S.",
        "subsection": "Politics",
        "title": "Trump Still Can’t Stop Talking About Women",
        "abstract": "The countdown to the election feels like an Advent calendar with a dubious remark behind each door.",
        "uri": "nyt://article/d2bfc63e-824e-59f1-97f5-9706d2f4899a",
        "url": "https://www.nytimes.com/2024/11/01/us/politics/harris-trump-womens-health-election.html",
        "byline": "By Jess Bidgood",
        "item_type": "Article",
        "source": "New York Times",
        "updated_date": "2024-11-01T18:59:41-04:00",
        "created_date": "2024-11-01T18:58:13-04:00",
        "published_date": "2024-11-01T18:58:13-04:00",
        "first_published_date": "2024-11-01T18:58:13-04:00",
        "material_type_facet": "News",
        "kicker": "",
        "subheadline": "",
        "des_facet": [
            "Politics and Government",
            "Elections",
            "Presidential Election of 2024"
        ],
        "org_facet": [],
        "per_facet": [
            "Harris, Kamala D",
            "Trump, Donald J"
        ],
        "geo_facet": [],
        "related_urls": [],
        "multimedia": [
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01-pol-on-politics-newsletter-friday-trump-women-fwtm/01-pol-on-politics-newsletter-friday-trump-women-fwtm-thumbStandard.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75,
                "type": "image",
                "subtype": "photo",
                "caption": "Former President Donald Trump at a campaign rally in Green Bay, Wis., on Wednesday.",
                "copyright": "Doug Mills/The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01-pol-on-politics-newsletter-friday-trump-women-fwtm/01-pol-on-politics-newsletter-friday-trump-women-fwtm-mediumThreeByTwo210.jpg",
                "format": "mediumThreeByTwo210",
                "height": 140,
                "width": 210,
                "type": "image",
                "subtype": "photo",
                "caption": "Former President Donald Trump at a campaign rally in Green Bay, Wis., on Wednesday.",
                "copyright": "Doug Mills/The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01-pol-on-politics-newsletter-friday-trump-women-fwtm/01-pol-on-politics-newsletter-friday-trump-women-fwtm-mediumThreeByTwo440.jpg",
                "format": "mediumThreeByTwo440",
                "height": 293,
                "width": 440,
                "type": "image",
                "subtype": "photo",
                "caption": "Former President Donald Trump at a campaign rally in Green Bay, Wis., on Wednesday.",
                "copyright": "Doug Mills/The New York Times"
            },
            {
                "url": "https://static01.nyt.com/images/2024/11/01/multimedia/01-pol-on-politics-newsletter-friday-trump-women-fwtm/01-pol-on-politics-newsletter-friday-trump-women-fwtm-articleInline.jpg",
                "format": "Normal",
                "height": 199,
                "width": 190,
                "type": "image",
                "subtype": "photo",
                "caption": "Former President Donald Trump at a campaign rally in Green Bay, Wis., on Wednesday.",
                "copyright": "Doug Mills/The New York Times"
            }
        ]
    }
  ]

  constructor(private router: Router, private apiService: ApiService, public loading: LoadingService){
    // this.fetchNewestFeeds();
    this.setNewsFeed(this.newestFeedsDatas);
    this.currentFeed = this.newestFeedsData[0];
  }

  async fetchNewestFeeds(){
    this.loading.show();

    this.apiService.getNewestFeed(this.selectedSource, this.selectedSection)
    .subscribe({
      next: (response) => {
        this.setNewsFeed(response.results)
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        this.loading.hide();
      }
    }) 
  }

  setNewsFeed(datas: any){
    datas.forEach((data: any, index: number) => {
      this.newestFeedsData.push(data);
      
    });
  }

  goToDetailsNews() {
    window.open(this.currentFeed?.url)
  }
  
  getSentence(field: 'first' | 'rest', text: string | undefined){
    switch (field) {
        case 'first':
            return text ? separateFirstSentence(text).first_sentence : ''
        case 'rest':
            return text ? separateFirstSentence(text).restOfText : ''
    }
  }

  goToNews(index: number) {
    this.currentFeed = this.newestFeedsData[index];
  }

  getAllMultimediaImages(){
    const imagesUrl: string[] = [];

    this.newestFeedsData.forEach((data) => {
      if(data.multimedia[2]){
        imagesUrl.push(data.multimedia[2].url)
      }
      else{
        imagesUrl.push(getNoImage())
      }
    });
    return imagesUrl;
  }
}
