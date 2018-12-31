import {Injectable} from '@angular/core';
import {IPerson, IStory} from '../model/story';
import {BehaviorSubject, Observable} from 'rxjs';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PlotService} from '../plot/services/plot.service';
import {ILocation} from '../scene/model/scene';
import {IAccount} from '../shared/model/account';
import {AccountService} from '../shared/services/account.service';
import {OidcService} from '../../core/oidc.service';


@Injectable({
  providedIn: 'root'
})
export class StoryService {

  stories: Observable<IStory[]> = null;
  localStories: IStory[] | null;
  currentAccount:IAccount;

  baseUrl: string = 'http://localhost:7632/';


  private navbarSubject: BehaviorSubject<string> = new BehaviorSubject('story');
  navBarSourceChanges$ = this.navbarSubject.asObservable();


  //There is always only one story
  private selectedStoriesSubject: BehaviorSubject<IStory | null> = new BehaviorSubject(null);
  storiesSourceChanges$ = this.selectedStoriesSubject.asObservable();

  constructor(private http: HttpClient, private plotService: PlotService,private accountService:AccountService,
              private oidcService:OidcService) {
  }

  /**
   * Http Service Stories
   * @param selectedStory
   */
  getServiceStories(account: any): Observable<IStory[]> {
    return this.http.get<IStory[]>(this.baseUrl + '/story/getAll', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    });
  }

  saveServiceStory(story: IStory){
    let accesstoken = this.oidcService.getAccessToken();
    let headers = new HttpHeaders().set("Authorization",'Bearer ${accesstoken}' );
    this.http.post<IStory>(this.baseUrl + 'story', story,{headers:headers})
      .subscribe(res => this.changeSelectedStory(res));
  }


  changeSelectedStory(selectedStory: IStory) {
    this.selectedStoriesSubject.next(selectedStory);
  }

  changeNavbarState(state: string) {
    this.navbarSubject.next(state);
  }

  getStories(): IStory[] {


    if (localStorage.getItem('world')) {
      this.localStories = JSON.parse(localStorage.getItem('world'));
    } else {

      this.localStories = staticstory;

    }
    return this.localStories;

  }

  newStory() {
    let ah;
    this.accountService.accountSourceChanges$.subscribe(res => ah = res);
    let ns: IStory = {
      _id:'',
       author: '',
      title: 'Newly Author',
      suppose: '',
      whatif: '',
      maguffin: '',
      leadPov:'',
      scenes: [],
      plotPoints: [],

    };
    this.localStories.push(ns);
    this.changeSelectedStory(ns);
    console.log('Local stories after new ', this.localStories);
  }

  newScene() {
    let newscene = {
      sequence: 0,
      purpose: '',
      goal: '',
      start: '',
      duration: 0,
      unit: '',
      location: {name:''},
      people: [],
      narrative: '',
      things: []
    };
    this.storiesSourceChanges$.subscribe(
      story => story.scenes.push(newscene)
    );
    // this.sceneList.push(newscene);
  }


  newPlotline() {
    let plotweb;
    let plotline;
    this.storiesSourceChanges$.subscribe(
      story => {
        plotweb = story.plotPoints,
          plotline = this.plotService.generateNewPlotLine(plotweb),
          plotweb.push(plotline);
      }
    );
  }

  saveStories() {
    let local = this.localStories;
    let current;
    let dehydrated;

    this.storiesSourceChanges$.subscribe(story => current = story);
    console.log('current story servuce', current);

    if (current) {
      let idx = local.findIndex(s => s._id === current._id);
      // @ts-ignore
      this.localStories.splice(this.localStories.indexOf(idx), 1);

      local.push(current);
      dehydrated = JSON.stringify(local);
      localStorage.setItem('world', dehydrated);
    } else {
      dehydrated = JSON.stringify(local);
      localStorage.setItem('world', dehydrated);

    }
    console.log(dehydrated);

  }

  removeStory(story: IStory) {
    console.log('Deleting story', story);
    this.localStories.splice(this.localStories.indexOf(story), 1);
    this.changeSelectedStory(null);
    this.saveStories();
    console.log('After Delete', this.localStories);

  }
}

//  const plotSchema = new mongoose.Schema({
//   id:Number,
// sequence:Number,
// name:String,
// thread:String,
// follows:Number,
// description:String
// });
//
//  const sceneSchema = new mongoose.Schema({
//   id:String,
// sequence:Number,
// purpose:String,
// goal:String,
// start:String,
// duration:Number,
// unit:String,
// location:String,
// people:[],
// narrative:String
// });
//
//  const thingSchema =new mongoose.Schema({
//   id:String,
// name:String,
// description:String,
// location:String
// });
//  const storySchema = new mongoose.Schema({
//   id:Number,
//   author:String,
//   title:String,
//   suppose:String,
//   whatif:String,
//   maguffin:String,
//   leadPov:String,
//   scenes:[sceneSchema],
//   plotPoints:[plotSchema],
//   people:[],
//   things:[thingSchema],
//   events:[],
//   locations:[]
// });
//


const staticstory: IStory[] = [{


  "_id":"",
  'author': 'Levi Woodyard',
  'title': 'Chemically Murder',
  'suppose': 'A man comes into the ER and dies shortly thereafter',
  'whatif': 'The man\'s criminal past is quickly revealed, but his cause of death is a mystery',
  'maguffin': 'After toxicology report comes back, it appears he was poisoned by a blood agent',
  'leadPov': "Dan Cahote, a DHS agent, is running down domestic terrorist when this case may lead to a cache of WMD's",
  'scenes': [],
  'plotPoints': []

},
  {
    "_id":"",
    'author': 'David Woolery',
    'title': 'Mistakenly Identity',
    'suppose': 'Federal Marshals apprehend a wanted criminal after he submits his finger prints for a job ',
    'whatif': 'The man is living under a new identity',
    'maguffin': 'The man has no memory of this other person. Moreover he has a complete memory of his new identity.',
    'leadPov': 'Amy Redcliff, an FBI agent is faced with a criminal that has no memory of his crimes, torn by her need for justice.',
    'scenes': [],
    'plotPoints': []

  },
  {
    "_id":"",
    'author': 'Dado Overwiley',
    'title': 'Explosively Descent',
    'suppose': 'A 737 explodes at 30,000 as it prepare for descent',
    'whatif': 'There is a lone survivor',
    'maguffin': 'The passenger\'s survival appears to be due to divine intervention',
    'leadPov': "Felicia Martin, a seasoned reporter, is saddled with this story after moved to a new job.",
    'scenes': [
      {

        'sequence': 1,
        'purpose': 'Introduce main character and plot of story',
        'goal': 'Felicia is mentally preparing herself for her first real day just as the disaster happens',
        'start': '13 May 2017:09:00',
        'duration': 3,
        'unit': 'hours',
        'location': {name:'Felicia\'s apartment'},
        'people': [
          {'name': 'Felicia Martin'}
        ],
        'things': [
          {
            'name': 'Cats',
            'description': 'Tickets to the theater',
            'location': 'Bathroom counter',

          }

        ],
        'narrative': 'I hit the floor like a rotten hog pulling through a meat hook. The crow position is like doing handstand, but stopping halfway to rest your knees on your elbows. The trick was balance. If you tried to strong arm the manuvere you’d fall on your ass. I’d failed before without the moist sound effects of sweat in plastic. Nashville probably had yoga studios; I would find one once I wasn’t living out to boxes. Imagine, a yoga studio full of white people--nope,can’t do it. Until then I was stuck in between two heat lamps wrapped in a garbage bag and calling it exercise. It was better than unpacking, that would be work. In theory a two bedroom apartment had enough extra space to not have to be surrounded by cardboard.\n\nI was hired over the phone on Monday, and there was enough relocation expense to move me here before week end. My boss, Rex Grambone, editor in chief; legend; and all around racist and every other -cist asshole was eager to show me to the staff. My wardrobe goal that day was targeting Mormon slut, but it came out more Amish dominatrix. The news decided I was too complacent. I imagined breakfast foods while sorting out suggestive work attire when Flight 1509 exploded on its descent into Nashville International. \n \nI spent most of the night debating how short my skirt should be and this happens. I stripped naked to keep from dashing to the office. I get my defining career moment first day on the job. This was serious. We could be going to war. I had to pace just to keep from putting my clothes back on. Finally,I climbed into some trashbags and started my routine. Falling on my ass made a shloshing-splattering sound that focued me. I watched the news, made notes and after showering put on a skirt with a slit that let everyone know I was wearing a thong. \n'
      },
      {

        'sequence': 2,
        'purpose': 'Put the lead in motion/see her grapple with her new boss',
        'goal': 'Felicia is trying to assert herself and assume a leadership role.',
        'start': '13 May 2017:13:00',
        'duration': 4,
        'unit': 'hours',
        'location': {name:'Nashville Bi-Weekly'},
        'people': [
          {'name': 'Felicia Martin'},
          {'name': 'Rex Grambone'},
          {'name': 'Susan Compton'},
          {'name': 'Kevin Nguyen'},
          {'name': 'Raghu Viswandapail'},
          {'name': 'Richard Traxton'},
          {'name': 'Venu Sandip'},
          {'name': 'Concho Krebs'}
        ],
        'things': [],
        'narrative': 'We\'ve got a plane exploding just before making its descent. The daily’s will have top of the fold coverage around here and front page everywhere this airline goes. \n      Local news will run it tonight and the nationals will have hourly coverage through Saturday."\n\t         “Chief, what are we editing for this week’s run.”\n           “Not a damn thing.” He said, “Holiday weekend, NTSB is still sorting out this mess and there is airplane\n      parts and dead bodies over miles of pasture. All they have to do before Monday, is confirm the manifest.” \n       He lobbed research tasks about the accident at each of the nerds: Could it be a collision and with what? \n       Can we rule out a missile or other MIL spec weapon? What kind of maintenance problem could cause an explosion? \n       Could someone have brought something on board that caused the explosion? \n       Was anyone of interest on the plane or supposed to be on the plane? '
      },
      {

        'sequence': 3,
        'purpose': 'Start refining Felicia\'s back story and her HD\'s.',
        'goal': 'Find discharge in old routines ',
        'start': '13 May 2017:18:00',
        'duration': 2,
        'unit': 'hours',
        'location':{name: 'Felicia\'s Apartment'},
        'people': [
          {'name': 'Felicia Martin'},
          {'name': 'Pamela Martin'}
        ],
        'things': [],
        'narrative': 'I got into my beat up station wagon for the short drive home. I checked my phone--Mom had called...several times.\n       It was six o’clock. I might have time to eat or masturbate before she calls again. Tuna salad--already made and some crackers\n       were on my plate when the phone rang at half past.\n\t         “Hi Mom.”\n\t         “I was sure that plane had killed you before you went to mass.”\n\t         “I was going to call you after I ate.”\n\t         “Honey have you been to mass?”\n\t         “Good Friday is tomorrow.”\n\t         “So you’ve already been.”\n           “Did you go this morning?”\n           “At noon, it was lovely. Bobby was there with his mother.”\n           I put the phone on speaker and started eating. \n           I can’t believe she stilled called him that--Bob, no Robert.  Cathy, was and is my best friend. \n           Robert seemed like the perfect match--for Mom. Her daughter\'s best friend could her daughter-in-law.  \n           Probably why she mentioned him every phone call and one reason I left. Mom had digressed into something new and interesting\n            Bobby had done with something new and interesting in New York. \n\n\t         “Was Cathy at mass too?”\n\t         “Oh yeah, she was there too. I think she with someone.”\n\t         “Someone I know?”\n\t         "Oh heavens no?”\n\t         “I haven’t talked to her since I moved--”\n\t         “You know if you were here--”\n\t         “You think I can still make mass they should be going till midnight, \n\t         right? I’ll tell you all about it.”\n\t         “Well it’s really late, but if you think you should go I don’t want to stifle you.”\n\t         “I love you, Mom, thanks for calling.”\n'
      }
    ],
    'plotPoints': [
      {
        'name': 'main',
        'points': [
          {

            'sequence': 0,
            'name': '9/11',
            'description': 'Elected officials scrambled to look effective',

            'thread': 'main'
          },
          {

            'sequence': 1,
            'name': 'Lawmakers looked busy',
            'description': 'A special senate subcommittee was formed to find solutions',

            'thread': 'main'
          },
          {

            'sequence': 2,
            'name': 'Pork-barrel spending',
            'description': 'Legislators saw this as a way to secure support by spending money',

            'thread': 'main'
          }
        ]
      },
      {
        'name': 'leadpov',
        'points': [
          {

            'sequence': 0,
            'name': 'Under cover story',
            'thread': 'leadpov',

            'description': 'Felicia is wrapping up a five month long investigation into trafficking in untaxed liquor and tobacco in a tri-state region. '
          },
          {

            'sequence': 1,
            'name': 'Story Breaks',
            'thread': 'leadpov',

            'description': 'Felicia sends her report to the ATF and publishes it; top the fold Monday morning news.'
          }
        ]
      }
    ],


  }
];
