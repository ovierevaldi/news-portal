import { Component, Input, OnInit } from '@angular/core';
import { NewsSmallComponent } from "../news-small/news-small.component";
import { ApiService } from '../../services/api.service';
import { NewsData } from '../../../../types/news.model';
import { LocalCacheService } from '../../services/local-cache.service';
import { environment } from '../../../environments/environment.development';
import { LoadingService } from '../../services/loading.service';
import { getMostPopularURL } from '../../../lib/helper';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-popular-news',
  standalone: true,
  imports: [NewsSmallComponent, LoadingComponent],
  templateUrl: './popular-news.component.html',
  styles: '',
})
export class LatestNewsComponent implements OnInit{
  currentDuration: string;
  previousDuration: string = '';
  popularNewsList: NewsData[] = [];

  testData: any = [
    {
        "uri": "nyt://article/af4024e8-677b-5c40-b187-0ae91e4cc870",
        "url": "https://www.nytimes.com/2024/10/08/us/politics/harris-trump-poll-national.html",
        "id": 100000009746338,
        "asset_id": 100000009746338,
        "source": "New York Times",
        "published_date": "2024-10-08",
        "updated": "2024-10-09 11:15:30",
        "section": "U.S.",
        "subsection": "Politics",
        "nytdsection": "u.s.",
        "adx_keywords": "Presidential Election of 2024;United States Politics and Government;Polls and Public Opinion;Harris, Kamala D;Trump, Donald J;New York Times/Siena College Poll",
        "column": null,
        "byline": "By Adam Nagourney, Ruth Igielnik and Camille Baker",
        "type": "Article",
        "title": "Poll Finds Harris Rising as She Challenges Trump on Change",
        "abstract": "A national Times/Siena poll found Kamala Harris with a slim lead over Donald J. Trump. Voters were more likely to see her, not Mr. Trump, as a break from the status quo.",
        "des_facet": [
            "Presidential Election of 2024",
            "United States Politics and Government",
            "Polls and Public Opinion"
        ],
        "org_facet": [
            "New York Times/Siena College Poll"
        ],
        "per_facet": [
            "Harris, Kamala D",
            "Trump, Donald J"
        ],
        "geo_facet": [],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "The New York Times",
                "approved_for_syndication": 1,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/10/07/multimedia/2024-10-07-nationalpoll-index/2024-10-07-nationalpoll-index-thumbStandard-v2.png",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/07/multimedia/2024-10-07-nationalpoll-index/2024-10-07-nationalpoll-index-mediumThreeByTwo210-v2.png",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/07/multimedia/2024-10-07-nationalpoll-index/2024-10-07-nationalpoll-index-mediumThreeByTwo440-v2.png",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    },
    {
        "uri": "nyt://article/352fb64c-1e84-5dad-8f9d-e02c64d0597e",
        "url": "https://www.nytimes.com/2024/10/13/business/boars-head-owners-listeria-outbreak.html",
        "id": 100000009723488,
        "asset_id": 100000009723488,
        "source": "New York Times",
        "published_date": "2024-10-13",
        "updated": "2024-10-19 00:48:28",
        "section": "Business",
        "subsection": "",
        "nytdsection": "business",
        "adx_keywords": "Food Contamination and Poisoning;Suits and Litigation (Civil);Listeria Monocytogenes;Factories and Manufacturing;Meat;Brunckhorst Family;Martin, Robert S (1949- );Boar's Head Brand;Brooklyn (NYC);Jarratt (Va);Florida",
        "column": null,
        "byline": "By Maureen Farrell",
        "type": "Article",
        "title": "The Secretive Dynasty That Controls the Boar’s Head Brand",
        "abstract": "The deli-meat company made its owners fabulously wealthy. But they have remained silent, even as the company faces the biggest scandal in its history.",
        "des_facet": [
            "Food Contamination and Poisoning",
            "Suits and Litigation (Civil)",
            "Listeria Monocytogenes",
            "Factories and Manufacturing",
            "Meat"
        ],
        "org_facet": [
            "Boar's Head Brand"
        ],
        "per_facet": [
            "Brunckhorst Family",
            "Martin, Robert S (1949- )"
        ],
        "geo_facet": [
            "Brooklyn (NYC)",
            "Jarratt (Va)",
            "Florida"
        ],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "The Boar’s Head plant in Brooklyn, the borough where the processed-meat company was founded.",
                "copyright": "John Taggart for The New York Times",
                "approved_for_syndication": 1,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/10/20/multimedia/13Boarshead-flags-sub-fgmh/13Boarshead-flags-sub-fgmh-thumbStandard.jpg",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/20/multimedia/13Boarshead-flags-sub-fgmh/13Boarshead-flags-sub-fgmh-mediumThreeByTwo210.jpg",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/20/multimedia/13Boarshead-flags-sub-fgmh/13Boarshead-flags-sub-fgmh-mediumThreeByTwo440.jpg",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    },
    {
        "uri": "nyt://article/6be2bb6e-bce8-5675-a799-97a5a6f823ec",
        "url": "https://www.nytimes.com/2024/10/06/us/politics/trump-speeches-age-cognitive-decline.html",
        "id": 100000009739281,
        "asset_id": 100000009739281,
        "source": "New York Times",
        "published_date": "2024-10-06",
        "updated": "2024-10-07 09:08:42",
        "section": "U.S.",
        "subsection": "Politics",
        "nytdsection": "u.s.",
        "adx_keywords": "vis-video;Presidential Election of 2024;Age, Chronological;Speeches and Statements;Twenty-Fifth Amendment (US Constitution);Psychology and Psychologists;Memory;Elderly;Presidents and Presidency (US);Trump, Donald J;Biden, Joseph R Jr",
        "column": null,
        "byline": "By Peter Baker, Dylan Freedman, Chevaz Clarke and Aaron Byrd",
        "type": "Article",
        "title": "Trump’s Speeches, Increasingly Angry and Rambling, Reignite the Question of Age",
        "abstract": "With the passage of time, the 78-year-old former president’s speeches have grown darker, harsher, longer, angrier, less focused, more profane and increasingly fixated on the past, according to a review of his public appearances over the years.",
        "des_facet": [
            "vis-video",
            "Presidential Election of 2024",
            "Age, Chronological",
            "Speeches and Statements",
            "Twenty-Fifth Amendment (US Constitution)",
            "Psychology and Psychologists",
            "Memory",
            "Elderly",
            "Presidents and Presidency (US)"
        ],
        "org_facet": [],
        "per_facet": [
            "Trump, Donald J",
            "Biden, Joseph R Jr"
        ],
        "geo_facet": [],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Doug Mills/The New York Times",
                "approved_for_syndication": 1,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/10/06/multimedia/06dc-trump-age-vqgm/06dc-trump-age-vqgm-thumbStandard.jpg",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/06/multimedia/06dc-trump-age-vqgm/06dc-trump-age-vqgm-mediumThreeByTwo210.jpg",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/06/multimedia/06dc-trump-age-vqgm/06dc-trump-age-vqgm-mediumThreeByTwo440.jpg",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    },
    {
        "uri": "nyt://article/730ea3f2-727c-5d66-a3ed-1264be0b5d42",
        "url": "https://www.nytimes.com/2024/10/27/us/trump-msg-rally.html",
        "id": 100000009786123,
        "asset_id": 100000009786123,
        "source": "New York Times",
        "published_date": "2024-10-27",
        "updated": "2024-10-28 22:33:33",
        "section": "U.S.",
        "subsection": "",
        "nytdsection": "u.s.",
        "adx_keywords": "Presidential Election of 2024;United States Politics and Government;Right-Wing Extremism and Alt-Right;internal-paywall-exempt-elections-app;Trump, Donald J;Republican Party;Madison Square Garden;New York City",
        "column": null,
        "byline": "By Shane Goldmacher, Maggie Haberman and Michael Gold",
        "type": "Article",
        "title": "Trump at the Garden: A Closing Carnival of Grievances, Misogyny and Racism",
        "abstract": "The inflammatory rally was a capstone for an increasingly aggrieved campaign for Donald Trump, whose rhetoric has grown darker and more menacing.",
        "des_facet": [
            "Presidential Election of 2024",
            "United States Politics and Government",
            "Right-Wing Extremism and Alt-Right",
            "internal-paywall-exempt-elections-app"
        ],
        "org_facet": [
            "Republican Party",
            "Madison Square Garden"
        ],
        "per_facet": [
            "Trump, Donald J"
        ],
        "geo_facet": [
            "New York City"
        ],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "Former President Donald J. Trump on Sunday at Madison Square Garden. The rally featured inflammatory remarks from the featured speakers, many of whom also spoke at the Republican National Convention this year.",
                "copyright": "Kenny Holston/The New York Times",
                "approved_for_syndication": 1,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/10/27/multimedia/27pol-msg-trump-topart-wbgj/27pol-msg-trump-topart-wbgj-thumbStandard.jpg",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/27/multimedia/27pol-msg-trump-topart-wbgj/27pol-msg-trump-topart-wbgj-mediumThreeByTwo210-v7.jpg",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/27/multimedia/27pol-msg-trump-topart-wbgj/27pol-msg-trump-topart-wbgj-mediumThreeByTwo440-v7.jpg",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    },
    {
        "uri": "nyt://article/fcfc41f8-98ac-54b4-a612-a8ad7c3f043a",
        "url": "https://www.nytimes.com/2024/10/08/us/politics/trump-putin-woodward-book.html",
        "id": 100000009748647,
        "asset_id": 100000009748647,
        "source": "New York Times",
        "published_date": "2024-10-08",
        "updated": "2024-10-09 10:18:34",
        "section": "U.S.",
        "subsection": "Politics",
        "nytdsection": "u.s.",
        "adx_keywords": "Books and Literature;Coronavirus (2019-nCoV);Tests (Medical);United States Politics and Government;United States International Relations;Woodward, Bob;Trump, Donald J;Putin, Vladimir V;Russia",
        "column": null,
        "byline": "By Peter Baker",
        "type": "Article",
        "title": "Book Revives Questions About Trump’s Ties to Putin",
        "abstract": "The journalist Bob Woodward cited an unnamed aide saying that Donald J. Trump had spoken to Vladimir V. Putin as many as seven times since leaving office. Multiple sources say they cannot confirm that report.",
        "des_facet": [
            "Books and Literature",
            "Coronavirus (2019-nCoV)",
            "Tests (Medical)",
            "United States Politics and Government",
            "United States International Relations"
        ],
        "org_facet": [],
        "per_facet": [
            "Woodward, Bob",
            "Trump, Donald J",
            "Putin, Vladimir V"
        ],
        "geo_facet": [
            "Russia"
        ],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "President Donald J. Trump and President Vladimir V. Putin of Russia at a bilateral meeting at the G20 summit in Osaka, Japan, in 2019.",
                "copyright": "Erin Schaff/The New York Times",
                "approved_for_syndication": 1,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/10/08/multimedia/08dc-woodward-NEW-twhj/08dc-woodward-NEW-twhj-thumbStandard.jpg",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/08/multimedia/08dc-woodward-NEW-twhj/08dc-woodward-NEW-twhj-mediumThreeByTwo210.jpg",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/08/multimedia/08dc-woodward-NEW-twhj/08dc-woodward-NEW-twhj-mediumThreeByTwo440.jpg",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    },
    {
        "uri": "nyt://article/d859f5db-09f0-5868-866c-4ea5385aa111",
        "url": "https://www.nytimes.com/2024/10/26/us/los-angeles-times-endorsement-soon-shiong.html",
        "id": 100000009784776,
        "asset_id": 100000009784776,
        "source": "New York Times",
        "published_date": "2024-10-26",
        "updated": "2024-10-28 01:07:03",
        "section": "U.S.",
        "subsection": "",
        "nytdsection": "u.s.",
        "adx_keywords": "Presidential Election of 2024;Newspapers;Endorsements;News and News Media;Garza, Mariel (Editor);Soon-Shiong, Patrick;Harris, Kamala D;Los Angeles Times;Los Angeles (Calif)",
        "column": null,
        "byline": "By Soumya Karlamangla and Shawn Hubler",
        "type": "Article",
        "title": "Daughter of L.A. Times Owner Says Endorsement Decision Stemmed From Harris Stance on Gaza War",
        "abstract": "After the paper canceled its planned endorsement of Kamala Harris, the owner, Patrick Soon-Shiong, said his daughter didn’t speak for the organization. But many staff members questioned his motives.",
        "des_facet": [
            "Presidential Election of 2024",
            "Newspapers",
            "Endorsements",
            "News and News Media"
        ],
        "org_facet": [
            "Los Angeles Times"
        ],
        "per_facet": [
            "Garza, Mariel (Editor)",
            "Soon-Shiong, Patrick",
            "Harris, Kamala D"
        ],
        "geo_facet": [
            "Los Angeles (Calif)"
        ],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "Patrick Soon-Shiong walking with Andrea Chang, a staff member, at the Los Angeles Times newsroom in 2018.",
                "copyright": "Irfan Khan/Los Angeles Times, via Associated Press",
                "approved_for_syndication": 1,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/10/26/multimedia/26nat-lat-01-ljfb/26nat-lat-01-ljfb-thumbStandard.jpg",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/26/multimedia/26nat-lat-01-ljfb/26nat-lat-01-ljfb-mediumThreeByTwo210.jpg",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/26/multimedia/26nat-lat-01-ljfb/26nat-lat-01-ljfb-mediumThreeByTwo440.jpg",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    },
    {
        "uri": "nyt://article/609de58d-c42f-517d-a9d6-77c0d95d7bf8",
        "url": "https://www.nytimes.com/2024/10/23/opinion/election-polls-results-trump-harris.html",
        "id": 100000009770808,
        "asset_id": 100000009770808,
        "source": "New York Times",
        "published_date": "2024-10-23",
        "updated": "2024-10-24 22:40:00",
        "section": "Opinion",
        "subsection": "",
        "nytdsection": "opinion",
        "adx_keywords": "Voting and Voters;Polls and Public Opinion;Presidential Election of 2024;Electoral College;United States Politics and Government;Harris, Kamala D;Trump, Donald J;Democratic Party;Republican Party",
        "column": null,
        "byline": "By Nate Silver",
        "type": "Article",
        "title": "Nate Silver: Here’s What My Gut Says About the Election, but Don’t Trust Anyone’s Gut, Even Mine",
        "abstract": "A 50-50 forecast really does mean 50-50. And you should be open to the possibility that those forecasts are wrong.",
        "des_facet": [
            "Voting and Voters",
            "Polls and Public Opinion",
            "Presidential Election of 2024",
            "Electoral College",
            "United States Politics and Government"
        ],
        "org_facet": [
            "Democratic Party",
            "Republican Party"
        ],
        "per_facet": [
            "Harris, Kamala D",
            "Trump, Donald J"
        ],
        "geo_facet": [],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Illustration by The New York Times; source photographs by Cj Gunther/Shutterstock and Sean Rayford/Getty Images",
                "approved_for_syndication": 1,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/10/25/opinion/23silver2-image/23silver2-image-thumbStandard.jpg",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/25/opinion/23silver2-image/23silver2-image-mediumThreeByTwo210.jpg",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/25/opinion/23silver2-image/23silver2-image-mediumThreeByTwo440.jpg",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    },
    {
        "uri": "nyt://article/d50425ad-cd6c-5ea0-abc7-5ea3bba315cc",
        "url": "https://www.nytimes.com/2024/10/23/technology/characterai-lawsuit-teen-suicide.html",
        "id": 100000009763342,
        "asset_id": 100000009763342,
        "source": "New York Times",
        "published_date": "2024-10-23",
        "updated": "2024-11-01 19:56:19",
        "section": "Technology",
        "subsection": "",
        "nytdsection": "technology",
        "adx_keywords": "Artificial Intelligence;Mobile Applications;Computers and the Internet;Loneliness;Suits and Litigation (Civil);Suicides and Suicide Attempts;Teenagers and Adolescence;Children and Childhood;Mental Health and Disorders;Shazeer, Noam;De Freitas, Daniel;Garcia, Megan L;Setzer, Sewell III (2009-24);Character.AI;Google Inc",
        "column": null,
        "byline": "By Kevin Roose",
        "type": "Article",
        "title": "Can A.I. Be Blamed for a Teen’s Suicide?",
        "abstract": "The mother of a 14-year-old Florida boy says he became obsessed with a chatbot on Character.AI before his death.",
        "des_facet": [
            "Artificial Intelligence",
            "Mobile Applications",
            "Computers and the Internet",
            "Loneliness",
            "Suits and Litigation (Civil)",
            "Suicides and Suicide Attempts",
            "Teenagers and Adolescence",
            "Children and Childhood",
            "Mental Health and Disorders"
        ],
        "org_facet": [
            "Character.AI",
            "Google Inc"
        ],
        "per_facet": [
            "Shazeer, Noam",
            "De Freitas, Daniel",
            "Garcia, Megan L",
            "Setzer, Sewell III (2009-24)"
        ],
        "geo_facet": [],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "Sewell Setzer III was 14 when he killed himself in February.",
                "copyright": "",
                "approved_for_syndication": 0,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/10/31/business/23ROOSE-02/23ROOSE-02-thumbStandard.jpg",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/31/business/23ROOSE-02/23ROOSE-02-mediumThreeByTwo210.jpg",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/31/business/23ROOSE-02/23ROOSE-02-mediumThreeByTwo440.jpg",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    },
    {
        "uri": "nyt://article/d6fb71c4-6317-5e5b-a97e-d9262af52cd6",
        "url": "https://www.nytimes.com/2024/10/16/us/politics/kamala-harris-fox-news-interview.html",
        "id": 100000009765558,
        "asset_id": 100000009765558,
        "source": "New York Times",
        "published_date": "2024-10-16",
        "updated": "2024-10-17 21:16:02",
        "section": "U.S.",
        "subsection": "Politics",
        "nytdsection": "u.s.",
        "adx_keywords": "Presidential Election of 2024;United States Politics and Government;Harris, Kamala D",
        "column": null,
        "byline": "By Nicholas Nehamas and Katie Rogers",
        "type": "Article",
        "title": "6 Takeaways From Harris’s Combative Interview on Fox News",
        "abstract": "Pressed and often interrupted by Bret Baier, the vice president opened up a little more distance from President Biden and defended her position on immigration and border security.",
        "des_facet": [
            "Presidential Election of 2024",
            "United States Politics and Government"
        ],
        "org_facet": [],
        "per_facet": [
            "Harris, Kamala D"
        ],
        "geo_facet": [],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "Vice President Kamala Harris at a campaign rally earlier on Wednesday. Her Fox News interview that ran later was her first on the network.",
                "copyright": "Ruth Fremson/The New York Times",
                "approved_for_syndication": 1,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/10/16/multimedia/16pol-harris-foxnews-topart-whvm/16pol-harris-foxnews-topart-whvm-thumbStandard.jpg",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/16/multimedia/16pol-harris-foxnews-topart-whvm/16pol-harris-foxnews-topart-whvm-mediumThreeByTwo210.jpg",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/16/multimedia/16pol-harris-foxnews-topart-whvm/16pol-harris-foxnews-topart-whvm-mediumThreeByTwo440.jpg",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    },
    {
        "uri": "nyt://article/875198a0-139e-5800-a3a5-8e9fd67294f3",
        "url": "https://www.nytimes.com/2024/10/04/us/cannabis-marijuana-risks-addiction.html",
        "id": 100000009694131,
        "asset_id": 100000009694131,
        "source": "New York Times",
        "published_date": "2024-10-04",
        "updated": "2024-10-12 16:47:08",
        "section": "U.S.",
        "subsection": "",
        "nytdsection": "u.s.",
        "adx_keywords": "Cannabis Foods and Products;Marijuana;Medical Marijuana;Doctors;Regulation and Deregulation of Industry;Drug Abuse and Traffic;Nausea;Deaths (Fatalities);Mental Health and Disorders;Addiction (Psychology);Law and Legislation;Research;States (US);audio-neutral-informative;audio-neutral-suspenseful;United States",
        "column": null,
        "byline": "By Megan Twohey, Danielle Ivory and Carson Kessler",
        "type": "Article",
        "title": "As America’s Marijuana Use Grows, So Do the Harms",
        "abstract": "The drug, legal in much of the country, is widely seen as nonaddictive and safe. For some users, these assumptions are dangerously wrong.",
        "des_facet": [
            "Cannabis Foods and Products",
            "Marijuana",
            "Medical Marijuana",
            "Doctors",
            "Regulation and Deregulation of Industry",
            "Drug Abuse and Traffic",
            "Nausea",
            "Deaths (Fatalities)",
            "Mental Health and Disorders",
            "Addiction (Psychology)",
            "Law and Legislation",
            "Research",
            "States (US)",
            "audio-neutral-informative",
            "audio-neutral-suspenseful"
        ],
        "org_facet": [],
        "per_facet": [],
        "geo_facet": [
            "United States"
        ],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Sonny Figueroa/The New York Times",
                "approved_for_syndication": 1,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/09/25/multimedia/cannabis-promo/cannabis-promo-thumbStandard.jpg",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/09/25/multimedia/cannabis-promo/cannabis-promo-mediumThreeByTwo210.jpg",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/09/25/multimedia/cannabis-promo/cannabis-promo-mediumThreeByTwo440.jpg",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    },
    {
        "uri": "nyt://article/7f9c3e9d-39f2-5aeb-8ae7-afc3a3f6a2a0",
        "url": "https://www.nytimes.com/2024/09/26/well/mind/dementia-signs-symptoms.html",
        "id": 100000009375044,
        "asset_id": 100000009375044,
        "source": "New York Times",
        "published_date": "2024-09-26",
        "updated": "2024-10-04 14:47:29",
        "section": "Well",
        "subsection": "Mind",
        "nytdsection": "well",
        "adx_keywords": "Dementia;Frontotemporal Dementia;Memory;Alzheimer's Disease;Parkinson's Disease;Brain;Personal Finances;Sleep;Smell (Olfaction);Orderliness and Clutter;Parasomnias (Sleep Disorders);Dreams;Elderly;Content Type: Service",
        "column": null,
        "byline": "By Dana G. Smith",
        "type": "Article",
        "title": "Memory Loss Isn’t the Only Sign of Dementia",
        "abstract": "Here are five other common red flags to look out for.",
        "des_facet": [
            "Dementia",
            "Frontotemporal Dementia",
            "Memory",
            "Alzheimer's Disease",
            "Parkinson's Disease",
            "Brain",
            "Personal Finances",
            "Sleep",
            "Smell (Olfaction)",
            "Orderliness and Clutter",
            "Parasomnias (Sleep Disorders)",
            "Dreams",
            "Elderly",
            "Content Type: Service"
        ],
        "org_facet": [],
        "per_facet": [],
        "geo_facet": [],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Cristina Daura",
                "approved_for_syndication": 0,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/10/01/well/26WELL-DEMENTIA-SIGNS-image/26WELL-DEMENTIA-SIGNS-image-thumbStandard-v4.jpg",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/01/well/26WELL-DEMENTIA-SIGNS-image/26WELL-DEMENTIA-SIGNS-image-mediumThreeByTwo210-v3.jpg",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/01/well/26WELL-DEMENTIA-SIGNS-image/26WELL-DEMENTIA-SIGNS-image-mediumThreeByTwo440-v3.jpg",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    },
    {
        "uri": "nyt://article/b083e2d5-f4eb-56b0-8fd6-e05352cf9952",
        "url": "https://www.nytimes.com/2024/10/28/us/politics/trump-secret-house-republicans-panic.html",
        "id": 100000009787501,
        "asset_id": 100000009787501,
        "source": "New York Times",
        "published_date": "2024-10-28",
        "updated": "2024-10-29 17:58:00",
        "section": "U.S.",
        "subsection": "Politics",
        "nytdsection": "u.s.",
        "adx_keywords": "United States Politics and Government;Presidential Election of 2024;Voter Fraud (Election Fraud);internal-paywall-exempt-elections-app;Trump, Donald J;Johnson, Mike (1972- );House of Representatives;Republican Party",
        "column": null,
        "byline": "By Annie Karni",
        "type": "Article",
        "title": "Trump Hints at ‘Little Secret’ With House Republicans, Setting Off a Panic",
        "abstract": "The former president seemed to delight in fueling speculation about what he is cooking up with House Republicans, prompting Democrats to worry about election fraud. Speaker Mike Johnson refused to explain.",
        "des_facet": [
            "United States Politics and Government",
            "Presidential Election of 2024",
            "Voter Fraud (Election Fraud)",
            "internal-paywall-exempt-elections-app"
        ],
        "org_facet": [
            "House of Representatives",
            "Republican Party"
        ],
        "per_facet": [
            "Trump, Donald J",
            "Johnson, Mike (1972- )"
        ],
        "geo_facet": [],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "Former President Donald J. Trump during a rally at Madison Square Garden in New York on Sunday.",
                "copyright": "Kenny Holston/The New York Times",
                "approved_for_syndication": 1,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28DC-MEMO-SECRET-bgfq/28DC-MEMO-SECRET-bgfq-thumbStandard.jpg",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28DC-MEMO-SECRET-bgfq/28DC-MEMO-SECRET-bgfq-mediumThreeByTwo210.jpg",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/28/multimedia/28DC-MEMO-SECRET-bgfq/28DC-MEMO-SECRET-bgfq-mediumThreeByTwo440.jpg",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    },
    {
        "uri": "nyt://article/5a824b76-4f83-5577-a10e-e69e1334a535",
        "url": "https://www.nytimes.com/2024/10/14/us/politics/trump-town-hall-dj-music.html",
        "id": 100000009761466,
        "asset_id": 100000009761466,
        "source": "New York Times",
        "published_date": "2024-10-14",
        "updated": "2024-10-16 00:18:18",
        "section": "U.S.",
        "subsection": "Politics",
        "nytdsection": "u.s.",
        "adx_keywords": "Presidential Election of 2024;Trump, Donald J;Pennsylvania",
        "column": null,
        "byline": "By Michael Gold",
        "type": "Article",
        "title": "Trump Bobs His Head to Music for 30 Minutes in Odd Town Hall Detour",
        "abstract": "After multiple interruptions, Donald Trump cut off questions and seemed to decide that it would be more enjoyable for all concerned — and, it appeared, for himself —  if he fired up his campaign playlist.",
        "des_facet": [
            "Presidential Election of 2024"
        ],
        "org_facet": [],
        "per_facet": [
            "Trump, Donald J"
        ],
        "geo_facet": [
            "Pennsylvania"
        ],
        "media": [],
        "eta_id": 0
    },
    {
        "uri": "nyt://article/df7c690a-36e2-55bb-a071-d53c64082b15",
        "url": "https://www.nytimes.com/2024/10/08/climate/john-morales-weatherman-hurricane.html",
        "id": 100000009750151,
        "asset_id": 100000009750151,
        "source": "New York Times",
        "published_date": "2024-10-08",
        "updated": "2024-10-11 08:08:35",
        "section": "Climate",
        "subsection": "",
        "nytdsection": "climate",
        "adx_keywords": "Hurricane Milton (2024);Weather;Television;News and News Media;Global Warming;Florida;Miami (Fla)",
        "column": null,
        "byline": "By Cara Buckley",
        "type": "Article",
        "title": "When a Television Meteorologist Breaks Down on Air and Admits Fear",
        "abstract": "John Morales, who has forecast weather for decades, went viral after choking up on air while discussing Hurricane Milton.",
        "des_facet": [
            "Hurricane Milton (2024)",
            "Weather",
            "Television",
            "News and News Media",
            "Global Warming"
        ],
        "org_facet": [],
        "per_facet": [],
        "geo_facet": [
            "Florida",
            "Miami (Fla)"
        ],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "NBC 6 South Florida",
                "approved_for_syndication": 0,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/10/08/climate/00cli-morales-poster/00cli-morales-poster-thumbStandard.png",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/08/climate/00cli-morales-poster/00cli-morales-poster-mediumThreeByTwo210.png",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/08/climate/00cli-morales-poster/00cli-morales-poster-mediumThreeByTwo440.png",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    },
    {
        "uri": "nyt://article/d0ed3f55-c8f4-563b-86ff-827baf8350f8",
        "url": "https://www.nytimes.com/2024/10/23/opinion/kamala-harris-win-election.html",
        "id": 100000009773771,
        "asset_id": 100000009773771,
        "source": "New York Times",
        "published_date": "2024-10-23",
        "updated": "2024-10-28 15:01:59",
        "section": "Opinion",
        "subsection": "",
        "nytdsection": "opinion",
        "adx_keywords": "Presidential Election of 2024;Harris, Kamala D;Trump, Donald J;Republican Party;Democratic Party",
        "column": null,
        "byline": "By James Carville",
        "type": "Article",
        "title": "James Carville: Three Reasons I’m Certain Kamala Harris Will Win",
        "abstract": "Why I’m not sweating this election.",
        "des_facet": [
            "Presidential Election of 2024"
        ],
        "org_facet": [
            "Republican Party",
            "Democratic Party"
        ],
        "per_facet": [
            "Harris, Kamala D",
            "Trump, Donald J"
        ],
        "geo_facet": [],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Damon Winter/The New York Times",
                "approved_for_syndication": 1,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/10/23/multimedia/23carville-ljfq/23carville-ljfq-thumbStandard.jpg",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/23/multimedia/23carville-ljfq/23carville-ljfq-mediumThreeByTwo210.jpg",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/23/multimedia/23carville-ljfq/23carville-ljfq-mediumThreeByTwo440.jpg",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    },
    {
        "uri": "nyt://article/9dec8441-99bd-55fe-a7d0-2700cca07bf5",
        "url": "https://www.nytimes.com/2024/10/29/style/ivanka-trump.html",
        "id": 100000009746036,
        "asset_id": 100000009746036,
        "source": "New York Times",
        "published_date": "2024-10-29",
        "updated": "2024-11-01 17:37:21",
        "section": "Style",
        "subsection": "",
        "nytdsection": "style",
        "adx_keywords": "Presidential Election of 2024;Politics and Government;United States Politics and Government;internal-paywall-exempt-elections-app;Kushner, Jared;Ward, Vicky;Trump, Ivanka;Trump, Donald J;Republican National Committee;Republican Party;Florida",
        "column": null,
        "byline": "By Jesse McKinley",
        "type": "Article",
        "title": "Where’s Ivanka?",
        "abstract": "Donald J. Trump’s oldest daughter and former top aide was once one of his most prominent campaign surrogates. Lately, she’s noticeably absent.",
        "des_facet": [
            "Presidential Election of 2024",
            "Politics and Government",
            "United States Politics and Government",
            "internal-paywall-exempt-elections-app"
        ],
        "org_facet": [
            "Republican National Committee",
            "Republican Party"
        ],
        "per_facet": [
            "Kushner, Jared",
            "Ward, Vicky",
            "Trump, Ivanka",
            "Trump, Donald J"
        ],
        "geo_facet": [
            "Florida"
        ],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "Ivanka Trump has been upfront about her absence, but it remains politically mysterious.",
                "copyright": "Haiyun Jiang for The New York Times",
                "approved_for_syndication": 1,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/11/03/multimedia/28TRUMP-IVANKA-fczq/28TRUMP-IVANKA-fczq-thumbStandard.jpg",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/11/03/multimedia/28TRUMP-IVANKA-fczq/28TRUMP-IVANKA-fczq-mediumThreeByTwo210.jpg",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/11/03/multimedia/28TRUMP-IVANKA-fczq/28TRUMP-IVANKA-fczq-mediumThreeByTwo440.jpg",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    },
    {
        "uri": "nyt://article/989f71f4-379a-5841-b116-d2c0c924af9d",
        "url": "https://www.nytimes.com/2024/10/29/business/elon-musk-children-compound.html",
        "id": 100000009769967,
        "asset_id": 100000009769967,
        "source": "New York Times",
        "published_date": "2024-10-29",
        "updated": "2024-10-31 09:05:17",
        "section": "Business",
        "subsection": "",
        "nytdsection": "business",
        "adx_keywords": "Real Estate and Housing (Residential);Birth Rates;In Vitro Fertilization;Pregnancy and Childbirth;High Net Worth Individuals;Content Type: Personal Profile;audio-neutral-informative;audio-neutral-immersive;Musk, Elon;Zilis, Shivon;Grimes (1988- );Musk, Justine (1972- );Shanahan, Nicole (1985- );Austin (Tex)",
        "column": null,
        "byline": "By Kirsten Grind, Ryan Mac and Sheera Frenkel",
        "type": "Article",
        "title": "Elon Musk Wants Big Families. He Bought a Secret Compound for His.",
        "abstract": "As the billionaire warns of population collapse and the moral obligation to have children, he’s navigating his own complicated family.",
        "des_facet": [
            "Real Estate and Housing (Residential)",
            "Birth Rates",
            "In Vitro Fertilization",
            "Pregnancy and Childbirth",
            "High Net Worth Individuals",
            "Content Type: Personal Profile",
            "audio-neutral-informative",
            "audio-neutral-immersive"
        ],
        "org_facet": [],
        "per_facet": [
            "Musk, Elon",
            "Zilis, Shivon",
            "Grimes (1988- )",
            "Musk, Justine (1972- )",
            "Shanahan, Nicole (1985- )"
        ],
        "geo_facet": [
            "Austin (Tex)"
        ],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Photo Illustration by Mark Harris",
                "approved_for_syndication": 0,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/10/31/business/30musk-compound-B1/00musk-compound-thumbStandard.jpg",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/31/business/30musk-compound-B1/00musk-compound-mediumThreeByTwo210.jpg",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/31/business/30musk-compound-B1/00musk-compound-mediumThreeByTwo440.jpg",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    },
    {
        "uri": "nyt://article/4a3cb252-7a98-5bda-bfe9-67c6b43b908c",
        "url": "https://www.nytimes.com/2024/10/22/opinion/trump-kamala-harris-democrats.html",
        "id": 100000009773114,
        "asset_id": 100000009773114,
        "source": "New York Times",
        "published_date": "2024-10-22",
        "updated": "2024-10-25 09:30:35",
        "section": "Opinion",
        "subsection": "",
        "nytdsection": "opinion",
        "adx_keywords": "Presidential Election of 2024;United States Politics and Government;Race and Ethnicity;Labor and Jobs;Black People;Liberalism (US Politics);Harris, Kamala D;Biden, Joseph R Jr;Obama, Barack;Trump, Donald J;Democratic Party",
        "column": null,
        "byline": "By Bret Stephens",
        "type": "Article",
        "title": "There’s One Main Culprit if Donald Trump Wins",
        "abstract": "They should look at themselves and the way they practice politics.",
        "des_facet": [
            "Presidential Election of 2024",
            "United States Politics and Government",
            "Race and Ethnicity",
            "Labor and Jobs",
            "Black People",
            "Liberalism (US Politics)"
        ],
        "org_facet": [
            "Democratic Party"
        ],
        "per_facet": [
            "Harris, Kamala D",
            "Biden, Joseph R Jr",
            "Obama, Barack",
            "Trump, Donald J"
        ],
        "geo_facet": [],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Damon Winter/The New York Times",
                "approved_for_syndication": 1,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/10/23/multimedia/22stephens-jlgm/22stephens-jlgm-thumbStandard-v2.jpg",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/23/multimedia/22stephens-jlgm/22stephens-jlgm-mediumThreeByTwo210.jpg",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/23/multimedia/22stephens-jlgm/22stephens-jlgm-mediumThreeByTwo440.jpg",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    },
    {
        "uri": "nyt://interactive/5c8ccada-edcd-5fe7-b2be-58bfeb68d4bd",
        "url": "https://www.nytimes.com/interactive/2024/weather/hurricane-milton-tracker-path-florida.html",
        "id": 100000009744246,
        "asset_id": 100000009744246,
        "source": "New York Times",
        "published_date": "2024-10-05",
        "updated": "2024-10-11 12:48:46",
        "section": "Weather",
        "subsection": "",
        "nytdsection": "weather",
        "adx_keywords": "Hurricane Milton (2024);Maps;Gulf of Mexico;Florida",
        "column": null,
        "byline": "By Camille Baker, William B. Davis, Madison Dong, Judson Jones, John Keefe, Joey K. Lee, Zach Levitt, Bea Malsky and Veronica Penney",
        "type": "Interactive",
        "title": "Milton Tracker: Latest on Storm's Path, Power Outages and Winds",
        "abstract": "See the likely path, evacuation orders and wind arrival times for Milton.",
        "des_facet": [
            "Hurricane Milton (2024)",
            "Maps"
        ],
        "org_facet": [],
        "per_facet": [],
        "geo_facet": [
            "Gulf of Mexico",
            "Florida"
        ],
        "media": [
            {
                "type": "image",
                "subtype": "",
                "caption": "",
                "copyright": "The New York Times",
                "approved_for_syndication": 1,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/10/05/world/fourteen-map-path-tracker-index/fourteen-map-path-tracker-index-thumbStandard-v295.jpg",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/05/world/fourteen-map-path-tracker-index/fourteen-map-path-tracker-index-mediumThreeByTwo210-v295.jpg",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/10/05/world/fourteen-map-path-tracker-index/fourteen-map-path-tracker-index-mediumThreeByTwo440-v295.jpg",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    },
    {
        "uri": "nyt://interactive/3b52a322-b40a-563f-839f-a4b9d4fad83a",
        "url": "https://www.nytimes.com/interactive/2024/us/elections/presidential-election-swing-states.html",
        "id": 100000009627214,
        "asset_id": 100000009627214,
        "source": "New York Times",
        "published_date": "2024-08-14",
        "updated": "2024-11-01 10:32:23",
        "section": "U.S.",
        "subsection": "2024 Elections",
        "nytdsection": "u.s.",
        "adx_keywords": "Presidential Election of 2024;Elections;internal-paywall-exempt-elections-app;Harris, Kamala D;Trump, Donald J",
        "column": null,
        "byline": "By Lily Boyce, Lazaro Gamio, Eli Murray and Alicia Parlapiano",
        "type": "Interactive",
        "title": "Tracking the Swing States for Harris and Trump",
        "abstract": "The presidential race will most likely come down to voters in eight states that remain competitive.",
        "des_facet": [
            "Presidential Election of 2024",
            "Elections",
            "internal-paywall-exempt-elections-app"
        ],
        "org_facet": [],
        "per_facet": [
            "Harris, Kamala D",
            "Trump, Donald J"
        ],
        "geo_facet": [],
        "media": [
            {
                "type": "image",
                "subtype": "",
                "caption": "",
                "copyright": "The New York Times",
                "approved_for_syndication": 1,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2024/08/13/multimedia/2024-07-30-election-races-tracker-index/2024-07-30-election-races-tracker-index-thumbStandard-v31.png",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/08/13/multimedia/2024-07-30-election-races-tracker-index/2024-07-30-election-races-tracker-index-mediumThreeByTwo210-v31.png",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2024/08/13/multimedia/2024-07-30-election-races-tracker-index/2024-07-30-election-races-tracker-index-mediumThreeByTwo440-v31.png",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    }
  ]

  constructor(private api: ApiService, public loadingService: LoadingService){
    this.currentDuration = '30'
  }

  ngOnInit(): void {
    this.popularNewsList = this.testData;
    // this.fetchData(this.currentDuration);
  }

   async fetchData(duration: string){
    this.loadingService.show();
    try {
        const data: any = await this.api.getMostPopular(duration);
        this.setPopularNewsList(data.results);
        console.log(data.results)
    } 
    catch (error) { 
      console.log('Cannot fetch api,' + error)
    }
    this.loadingService.hide();
  }

   setPopularNewsList(bulkData: any){
    this.popularNewsList = [];
    bulkData.forEach((element : any) => {
      this.popularNewsList.push(element as NewsData);
    });
   }

   onChangeDuration(e: any){
    this.currentDuration = e.target.value;

    this.fetchData(this.currentDuration)
   }
}
