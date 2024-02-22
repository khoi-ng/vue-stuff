<template>
  <section class="about">
    <header><h1>About Page</h1></header>
    <main class="content">
      <article>
        <!-- This Project is a playground where I try out things with vue.js. Since
        Vue.js is one of the most popular Frameworks for Webdevelopment it
        should be abit familiar with it. When I want to get more into
        Webdevelopment. -->
        <!-- 
        <div class="img-container">
          <img class="me" src="../assets/img/me2.png" alt="" />
          
        </div> -->

        <div class="personal-infos">
          <h2>
            <div class="h2-deco"></div>
            Personal Information
          </h2>

          <div class="row">
            <div>Name:</div>
            <div>Duy Khoi Nguyen</div>
          </div>
          <div class="row">
            <div>Adress:</div>
            <div>St.-Jürgen-Straße 111, 24937 Flensburg</div>
          </div>
          <div class="row">
            <div>Mobile:</div>
            <div>+49 176 56342316</div>
          </div>
          <div class="row">
            <div>E-mail:</div>
            <div>KhoiNG123@t-online.de</div>
          </div>
          <div class="row">
            <div>Birthdate/place:</div>
            <div>10. January 1997 in Forchheim, DE</div>
          </div>

          <h2>
            <div class="h2-deco"></div>
            Experience
          </h2>

          <div class="row">
            <div>09/2022 – 07/2023</div>
            <div>
              <p>Softwareengineer bei der KGU-Consulting GmbH in Vollzeit</p>
              <p>Meine Aufgaben waren:</p>
              <ul>
                <li>
                  Bugfixing/Analysing/Searching für Redaktionssystem
                  TechPubStudio in Java
                </li>
                <li>Programmierung in Java, Javascript, XSLT</li>
                <li>
                  Transformieren von XML-Dokumenten zu HTML, PDF &amp;
                  Formularen mittels XSLT
                </li>
                <li>
                  Arbeiten in Kundenprojekten für Unternehmen wie Porsche,
                  Nordex, Siemens usw.
                </li>
              </ul>
            </div>
          </div>

          <div class="row">
            <div>03/2020 – 09/2022</div>
            <div>
              <p>Werkstudent bei der KGU-Consulting GmbH</p>
              <p>Meine Aufgaben waren:</p>
              <ul>
                <li>
                  Transformieren von XML-Dokumenten zu HTML, PDF &amp;
                  Formularen mittels XSLT
                </li>
                <li>
                  Arbeiten in Kundenprojekten für Unternehmen wie Porsche,
                  Nordex, Siemens usw.
                </li>
              </ul>
            </div>
          </div>

          <h2>
            <div class="h2-deco"></div>
            Education
          </h2>

          <div class="row">
            <div>2018 - 2022</div>
            <div>
              <p>Hochschule Flensburg</p>
              <p>Bachelor of Science: Angewandte Informatik</p>
            </div>
          </div>
          <div class="row">
            <div>2014 - 2018</div>
            <div>
              <p>Schule am Meer Büsum</p>
              <p>Abschluss: Abitur</p>
            </div>
          </div>
          <div class="row">
            <div>2010 - 2014</div>
            <div>
              <p>Neocorus-schule Realschule Büsum</p>
              <p>Abschluss: Mittlere Reife</p>
            </div>
          </div>

          <h2>
            <div class="h2-deco"></div>
            Skills
          </h2>

          <div class="row">
            <div>Programmiersprachen:</div>
            <div>Java, Javascript, XSLT, XML, HTML, CSS, SASS, C#, SQL</div>
          </div>
          <div class="row">
            <div>Sprachkenntnisse:</div>
            <div>Deutsch, Englisch</div>
          </div>
        </div>
      </article>
    </main>
    <Footer></Footer>
  </section>
</template>

<script>
import Footer from '../components/FooterComp.vue';

export default {
  components: {
    Footer,
  },
};
</script>

<style scoped>
.img-container {
  /* border: red solid 1px; */
  /* Center child horizontally*/
  display: flex;
  justify-content: center;
}

.img-container img.me {
  width: 200px;
  height: 180px;
  /* background-color: rgb(214, 229, 230);
  border-radius: 50%; */
  border-radius: 50%;
  /* margin: 0 auto; */
}

div h2 {
  display: flex;
  flex-direction: row;
  /* border: 1px black solid; */
}

div h2 div.h2-deco {
  /* border: 1px black solid; */
  background-color: rgb(44, 100, 22);
  height: 2px;
  width: 190px;
  margin-right: 10px;
  margin-top: auto;
  margin-bottom: auto;
}

.row {
  display: flex;
  flex-direction: row;
}

.row div p {
  margin: 0;
}

.row > div {
  margin-top: 6px;
}

.row > div:first-child {
  width: 200px;
}

.row > div:nth-child(2) {
  width: 440px;
  /* border: black 1px solid; */
}

section {
  position: relative;
  min-height: 100%;
  padding-bottom: 200px;
}

article {
  position: relative;
  margin-bottom: 20px;
  align-items: center;
}

article div {
  font-size: 13px;
}

.content {
  text-align: left;
  width: 100%;
}

.about {
  /* margin: 2em; */
  margin-top: 3em;
}

.personal-infos {
  align-content: center;
  /* padding-left: auto; */
  margin: 0 30%;
  width: 660px;
  /* border: 1px solid red; */
}
</style>
