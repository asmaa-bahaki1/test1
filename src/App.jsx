import Akhaltekehorse from './Akhal teke horse';
import Americanpainthorse from './American paint horse';
import Americanquarterhorse from './American quarter horse';
import Americansaddlebredhorse from './American saddlebred horse';
import Americancurlyhorse from './American curly Horse';
import Home from './Home';
import Search from './Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              text="Home"
              text1="About"
              text2="Contact"
              text4={
                <>
                  The best treatment for 
                  <br />
                  humans
                </>
              }
              text5={
                <>
                  World of Horse Riding
                </>
              }
              text6={
                <>
                  Discover the Wild on
                  <br/>
                  Horse           
                </>
              }
              text7={
                <>
                  What is it distinguished by?
                </>
              }
              text8={
                <>
                Beauty
                </>
              }
              text9={
                <>
                Movement
                </>
              }
              text10={
                <>
                Figure
                </>
              }
              text11={
                  <>
                  Horseback riding, an activity often associated with grandeur and nobility, is not just a leisure pursuit but a gateway to numerous benefits that enhance physical and mental well-being. Far from being a relic of the past, horseback riding has evolved into a modern-day therapeutic practice, offering a unique blend of exercise and mental enjoyment. Let's quickly discuss the benefits of horseback riding.
                  </>
              }
              text12={
                <>
                Enhance physical fitness and body health
                </>
              }
              text13={
                <>
                Improve mood and mental healt                
                </>
              }
              text14={
                <>
                Develop concentration, balance, and coordination skills                
                </>
              }
              text15={
                <>
                Improve communication and social skills                
                </>
              }
              text16={
                <>
                Meet our
                <br/> 
                professionals
                </>
              }
              text17={
                <>
                We have an experienced qualified team to take care of your best friend
                </>
              }
              text18={
                <>
                Horses of the world
                </>
              }
              text19={
                <>
                The horse is a mammal considered a domestic animal that has been bred since ancient times for the service of humans. Known for its strength and speed, horses are used for a variety of purposes, including riding, farming, racing, sports, and for work in expeditions and military parades.
                </>
              }
              text20={
                <>
                List of American horse breeds
                </>
              }
              text21={
                <>
                Akhal teke horse
                </>
              }
              text22={
                <>
                American paint horse
                </>
              }
              text23={
                <>
                American quarter horse 
                </>
              }
              text24={
                <>
                American saddlebred horse
                </>
              }
              text25={
                <>
                American curly horse
                </>
              }
              text26={
                <>
                Arabian horses
                </>
              }
              text27={
                <>
                The Arabian horse is one of the lightest horse breeds in the world, and its origin is in the Arabian Peninsula. Arabian horses are distinguished by their distinctive head and high tail, making them one of the most easily recognizable breeds in the world. They are one of the oldest and best horse breeds, and are known for their ability to run long distances and their striking beauty. Archaeological evidence dates back more than 4,500 years. Over the ages, Arabian horses originated in the heart of the Arabian Peninsula and spread to other countries of the world, either through trade or war. They are also used for breeding with other breeds to improve their abilities in patience, accuracy, and speed. They have strong bones and pure Arabian blood, which is why Arabian horses are currently the most present in horse racing around the world.        
                </>
              }
              text28={
                <>
                Contact Us
                </>
              }
              text29={
                <>
                Address
                </>
              }
              text30={
                <>
                Horse farm
                </>
              }
              text31={
                <>
                Phone
                </>
              }
              text32={
                <>
                123 456 789
                </>
              }
              text33={
                <>
                Email
                </>
              }
              text34={
                <>
                horses@gmail.com
                </>
              }
              text35={
                <>
                Follow Us
                </>
              }
            />
          }
        />
        <Route
            path="/akhal teke horse"
            element={
              <Akhaltekehorse
              text={
                <>
                  Akhal Teke Horse
                </>
              } 
              text1={
                <>
                  The Akhal-Teke, from the Turkmen word, is a breed of Turkmen horse known for its speed, endurance, intelligence, fine mane, and distinctive metallic sheen. The luster of their coat has led to their nickname, "Golden Horses." Adapted to harsh climatic conditions, they are believed to be one of the oldest horse breeds in existence. There are currently around 6,600 Akhal-Tekes in the world, mostly in Turkmenistan, although they are also found throughout Europe and North America. The Akhal-Teke is the name of a series of oases along the northern slope of the Kopet-Dag Mountains in Turkmenistan. They were inhabited by the Turkmen Teke tribe.
                </>
              }
              />
            } 
          />
          <Route
              path="/american paint horse"
              element={
                <Americanpainthorse
                text={
                  <>
                    American Paint Horse
                  </>
                } 
                text1={
                  <>
                    The American Paint Horse is a breed of horse that combines both the conformational characteristics of a western stock horse with a pinto spotting pattern of white and dark coat colors. Developed from a base of spotted horses with Quarter Horse and Thoroughbred bloodlines, the American Paint Horse Association (APHA) breed registry is now one of the largest in North America. The registry allows some non-spotted animals to be registered as "Solid Paint Bred" and considers the American Paint Horse to be a horse breed with distinct characteristics, not merely a color breed.
                  </>
                }
                />
              } 
            />
            <Route
                path="/american quarter horse"
                element={
                  <Americanquarterhorse
                  text={
                    <>
                      American Quarter Horse
                    </>
                  } 
                  text1={
                    <>
                      The American Quarter Horse, or Quarter Horse, is an American breed of horse that excels at sprinting short distances. Its name is derived from its ability to outrun other horse breeds in races of 1⁄4 mi (0.40 km) or less; some have been clocked at speeds up to 44 mph (71 km/h). The development of the Quarter Horse traces to the 1600s.
                      The American Quarter Horse is the most popular breed in the United States, and the American Quarter Horse Association is the largest breed registry in the world, with almost three million living American Quarter Horses registered in 2014. The American Quarter Horse is well known both as a race horse and for its performance in rodeos, horse shows, and as a working ranch horse.
                    </>
                  }
                  />
                } 
              />
              <Route
                  path="/american saddlebred horse"
                  element={
                    <Americansaddlebredhorse
                    text={
                      <>
                        American Saddlebred Horse
                      </>
                    } 
                    text1={
                      <>
                        The American Saddlebred is a horse breed from the United States. Descended from riding-type horses bred at the time of the American Revolution, the American Saddlebred includes the Narragansett Pacer, Canadian Pacer, Morgan and Thoroughbred among its ancestors. Developed into its modern type in Kentucky, it was once known as the "Kentucky Saddler", and used extensively as an officer's mount in the American Civil War. In 1891, a breed registry was formed in the United States. Throughout the 20th century, the breed's popularity continued to grow in the United States, and exports began to South Africa and Great Britain. Since the formation of the US registry, almost 250,000 American Saddlebreds have been registered, and can now be found around the world, with separate breed registries established in Great Britain, Australia, continental Europe, and southern Africa.
                      </>
                    }
                    />
                  } 
                />
             <Route
                  path="/american curly horse"
                  element={
                    <Americancurlyhorse
                    text={
                      <>
                        American Curly Horse
                      </>
                    } 
                    text1={
                      <>
                        The American Bashkir Curly or North American Curly Horse is a North American breed of horse, characterized by an unusual curly coat of hair.[4]: 248  It derives from American horses of Iberian origin, in which curly-coated individuals occasionally occur; it is unrelated to Asian horses such as the Bashkir and Lokai, which may also be curly-coated.[5]: 452  The American Bashkir Curly has been extensively cross-bred with horses of other breeds, and varies widely in size and conformation; it may be of any color.[6]: 434 
                      </>
                    }
                    />
                  } 
                />
                 <Route path='/Search' element={<Search />} /> 
      </Routes>
    </Router>
  );
}

export default App;
