<template>
  <div>
    <h1><router-link :to="{ name: 'experts.list', params: { id: null }}">&lt; Back to Experts List</router-link></h1> 
    <body id="top">
      <header class="d-print-none">
        <div class="container text-center text-lg-left">
          <div class="py-3 clearfix">
            <div class="site-nav">
              <nav role="navigation">
                <ul class="nav justify-content-center">
                  <li class="nav-item">
                    <a :href="expert.personalInfo.twitter" title="Twitter"
                      ><i class="fab fa-twitter"></i
                      ><span class="menu-title sr-only">Twitter</span></a
                    >
                  </li>
                  <li class="nav-item">
                    <a :href="expert.personalInfo.facebook" title="Facebook"
                      ><i class="fab fa-facebook"></i
                      ><span class="menu-title sr-only">Facebook</span></a
                    >
                  </li>
                  <li class="nav-item">
                    <a :href="expert.personalInfo.linkedIn" title="Instagram"
                      ><i class="fab fa-instagram"></i
                      ><span class="menu-title sr-only">Instagram</span></a
                    >
                </li>
                  <li class="nav-item">
                    <a :href="expert.personalInfo.website" title="linkedIn"
                      ><i class="fab fa-linkedin-in"></i
                      ><span class="menu-title sr-only">linkedIn</span></a
                    >
                  </li> 
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div class="page-content">
        <div class="container">
          <div class="cover shadow-lg bg-white">
            <div class="cover-bg p-3 p-lg-4 text-white">
              <div class="row">
                <div class="col-lg-4 col-md-5">
                  <div class="avatar hover-effect bg-white shadow-sm p-1">
                    <img                     
                      :src="expert.personalInfo.personalPhoto"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="col-lg-8 col-md-7 text-center text-md-start">
                  <h2  class="h1 mt-2" data-aos="fade-left" data-aos-delay="0">
                    {{ expert.personalInfo.fullName }}
                    
                  </h2>

                <template v-if="expert.about">
                  <p
                    
                    data-aos="fade-left"
                    data-aos-delay="100"
                  >
                    {{ expert.about.currentTitle }}
                  </p>
                  <p
                  
                    data-aos="fade-left"
                    data-aos-delay="100"
                  >
                    {{ expert.about.summary }}
                   
                  </p>
                </template>
                 
                  <div
                    class="d-print-none"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    <a
                      class="btn btn-light text-dark shadow-sm mt-1 me-1"
                      href="right-resume.pdf"
                      target="_blank"
                      >Download CV</a
                    ><a class="btn btn-success shadow-sm mt-1" href="#contact"
                      >Hire Me</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="about-section pt-4 px-3 px-lg-4 mt-1">
              <div class="row">
                <div style="background: red; border: 5px solid green" class="col-md-12">

                  <!-- whenever you add this.. add this in the data section too -->
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault01" v-model="switchBox.experience">
                    <label class="form-check-label" for="flexSwitchCheckDefault01">Show Experience</label>
                  </div>  
                  <!-- end add -->

                  <!-- whenever you add this.. add this in the data section too -->
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault02" v-model="switchBox.email">
                    <label class="form-check-label" for="flexSwitchCheckDefault02">Show Email</label>
                  </div>  
                  <!-- end add -->                  

                </div>  

                <div class="col-md-12">
                  <h2 class="h3 mb-3">About Me</h2>
                   
                   <h3 v-if="expert.personalInfo.fullName">  {{ expert.personalInfo.fullName }}
                        |
                      <span v-if="expert.personalInfo.country && expert.locale==0 " class="pb-1">{{ expert.personalInfo.country.nameAr }}</span>
                        <span v-if="expert.personalInfo.country && expert.locale==1 " class="pb-1">{{ expert.personalInfo.country.nameEn }}</span>
                   </h3>

                  <p v-if="expert.personalInfo.summary">
                  
                    {{ expert.personalInfo.summary }}
                  </p>
                </div>
                <div class="col-md-5 offset-md-1">
                  <div class="row mt-2">
                    <div
                      v-if="expert.personalInfo.dateOfBirth"
                      class="row mt-2"
                    >
                      <div class="col-sm-4">
                        <div v-if="expert.personalInfo.dateOfBirth" class="pb-1">Date Of Birth:</div>
                      </div>
                      <div class="col-sm-8">
                        <div  class="pb-1 text-secondary">
                          {{ expert.personalInfo.dateOfBirth | formatDateM }}
                        </div>
                      </div>
                    </div>
                    <div v-if="switchBox.email" class="row mt-2">
                      <div class="col-sm-4">
                        <div class="pb-1">Email</div>
                      </div>
                      <div class="col-sm-8">
                        <div class="pb-1 text-secondary">
                          {{ expert.personalInfo.email }}
                        </div>
                      </div>
                    </div>
                    <div v-if="expert.personalInfo.phone" class="row mt-2">
                      <div class="col-sm-4">
                        <div class="pb-1">Phone</div>
                      </div>
                      <div class="col-sm-8">
                        <div class="pb-1 text-secondary">
                          {{ expert.personalInfo.phone }}
                        </div>
                      </div>
                    </div>
                    <div
                      v-if="expert.personalInfo.country.nameEn"
                      class="row mt-2"
                    >
                      <div class="col-sm-4">
                        <div v-if="expert.personalInfo.country && expert.locale==0 " class="pb-1">{{ expert.personalInfo.country.nameAr }}</div>
                        <div v-if="expert.personalInfo.country && expert.locale==1 " class="pb-1">{{ expert.personalInfo.country.nameEn }}</div>
                      </div>
                      <div class="col-sm-8">
                        <div class="pb-1 text-secondary">
                          {{ expert.personalInfo.country }}
                          {{ expert.personalInfo.country.nameEn }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr  v-if="switchBox.experience" />
            <div class="work-experience-section px-3 px-lg-4" v-if="switchBox.experience">
              <h2 v-if="expert.experiences" class="h3 mb-4">Work Experience</h2>
              <div class="timeline">
                <div
                  v-for="experience in expert.experiences"
                  :key="experience.id"
                  class="timeline-card timeline-card-primary card shadow-sm"
                >
                  <div class="card-body">
                    <div v-if="experience.jobTitle" class="h5 mb-1">
                      {{ experience.jobTitle }}
                      <span v-if="experience.countryId" class="text-muted h6"
                        >at {{ experience.country.nameEn }}</span
                      >
                    </div>
                    <div
                      v-if="experience.jobTitle"
                      class="text-muted text-small mb-2"
                    >
                      May, 2015 - Present
                    </div>
                    <div v-if="experience.description">
                      {{ experience.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr v-if="expert.projects" />
            <div class="page-break"></div>
            <div v-if="expert.projects" class="education-section px-3 px-lg-4 pb-4">
              <h2 class="h3 mb-4">Projects</h2>
              <div class="timeline">
                <div
                  v-for="project in expert.projects"
                  :key="project.id"
                  class="timeline-card timeline-card-success card shadow-sm"
                >
                  <div class="card-body">
                    <div class="h5 mb-1">
                      <a target="_blank" :href="project.url">{{
                        project.name
                      }}</a>
                    </div>
                    <div class="text-muted text-small mb-2">
                      {{ project.startDate | formatDate }} -
                      {{ project.endDate | formatDate }}
                    </div>
                    <div>
                      {{ project.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            <hr v-if="expert.publishedWorks" class="d-print-none" />
            <div  v-if="expert.publishedWorks" class="work-experience-section px-3 px-lg-4">
              <h2  class="h3 mb-4">Published Work</h2>
              <div class="timeline">
                <div
                  v-for="publishedWork in expert.publishedWorks"
                  :key="publishedWork.id"
                  class="timeline-card timeline-card-primary card shadow-sm"
                >
                  <div class="card-body">
                    <div v-if="publishedWork.title" class="h3 mb-1">
                      <a :href="publishedWork.url">{{ publishedWork.title }}</a>

                      <span class="text-muted h6"
                        >is {{ publishedWork.publishedWorkType.nameEn }}</span
                      >
                    </div>
                    <div class="text-muted text-small mb-2">
                      {{ publishedWork.publishDate | formatDateM }}
                    </div>
                    <div v-if="publishedWork.description">
                      {{ publishedWork.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr v-if="expert.memberships" class="d-print-none" />
            <div class="work-experience-section px-3 px-lg-4">
              <h2 v-if="expert.memberships" class="h3 mb-4">Memberships</h2>
              <div class="timeline">
                <div
                  v-for="membership in expert.memberships"
                  :key="membership.id"
                  class="timeline-card timeline-card-primary card shadow-sm"
                >
                  <div class="card-body">
                    <div class="h3 mb-1">
                      {{ membership.title }}

                      <span class="text-muted h6"
                        >in {{ membership.orgName }}</span
                      >
                    </div>

                    <div>
                      {{ membership.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      expert: {},
      switchBox: {
        experience: true,
        email: true
      }
    };
  },


  created () {
      axios
        .get("https://qalatdb.simulalab.org/api/cv-by-id/" + this.$route.params.id)
              .then(response => {
          if (response.status != 200) {
            console.log(response.status);
          } else {
            this.expert = response.data;
          }
        });
  },
  

  
};
</script>

<style scoped>
  html {
    scroll-behavior: smooth;
  }

  .site-title {
    font-size: 1.25rem;
    line-height: 2.5rem;
  }

  .nav-link {
    padding: 0;
    font-size: 1.25rem;
    line-height: 2.5rem;
    color: rgba(0, 0, 0, 0.5);
  }

  .nav-link:hover,
  .nav-link:focus,
  .active .nav-link {
    color: rgba(0, 0, 0, 0.8);
  }

  .nav-item + .nav-item {
    margin-left: 1rem;
  }

  .cover {
    border-radius: 10px;
  }

  /* .cover-bg {
    background-color: #4a89dc;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.12'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    border-radius: 10px 10px 0 0;
  } */

  .avatar {
    max-width: 216px;
    max-height: 216px;
    margin-top: 20px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  .nav {
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .avatar img {
    /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }

  footer a:not(.nav-link) {
    color: inherit;
    border-bottom: 1px dashed;
    text-decoration: none;
    cursor: pointer;
  }

  @media (min-width: 48em) {
    .site-title {
      float: left;
    }
    .site-nav {
      float: right;
    }
    .avatar {

      margin-left: 0;
    }
  }
  @media print {
    body {
      background-color: #fff;
    }
    .container {
      width: auto;
      max-width: 100%;
      padding: 0;
    }
    .cover,
    .cover-bg {
      border-radius: 0;
    }
    .cover.shadow-lg {
      box-shadow: none !important;
    }
    .cover-bg {
      padding: 5rem !important;
      padding-bottom: 10px !important;
    }
    .avatar {
      margin-top: -10px;
    }
    .about-section {
      padding: 6.5rem 5rem 2rem !important;
    }
    .skills-section,
    .work-experience-section,
    .education-section,
    .contant-section {
      padding: 1.5rem 5rem 2rem !important;
    }
    .page-break {
      padding-top: 5rem;
      page-break-before: always;
    }
  }
  /* Buttons */
  /* Inputs */
  /* Timeline custom component */
  .timeline {
    border-left: 2px solid #e6e9ed;
    padding: 1rem 0;
  }

  .timeline-card {
    position: relative;
    margin-left: 31px;
    border-left: 2px solid;
    margin-bottom: 2rem;
  }

  .timeline-card:last-child {
    margin-bottom: 1rem;
  }

  .timeline-card:before {
    content: "";
    display: inline-block;
    position: absolute;
    background-color: #fff;
    border-radius: 10px;
    width: 12px;
    height: 12px;
    top: 20px;
    left: -41px;
    border: 2px solid;
    z-index: 2;
  }

  .timeline-card:after {
    content: "";
    display: inline-block;
    position: absolute;
    background-color: currentColor;
    width: 29px;
    height: 2px;
    top: 25px;
    left: -29px;
    z-index: 1;
  }

  .timeline-card-primary {
    border-left-color: #4a89dc;
  }

  .timeline-card-primary:before {
    border-color: #4a89dc;
  }

  .timeline-card-primary:after {
    background-color: #4a89dc;
  }

  .timeline-card-success {
    border-left-color: #37bc9b;
  }

  .timeline-card-success:before {
    border-color: #37bc9b;
  }

  .timeline-card-success:after {
    background-color: #37bc9b;
  }

  html {
    scroll-behavior: smooth;
  }

  .site-title {
    font-size: 1.25rem;
    line-height: 2.5rem;
  }

  .nav-link {
    padding: 0;
    font-size: 1.25rem;
    line-height: 2.5rem;
    color: rgba(0, 0, 0, 0.5);
  }

  .nav-link:hover,
  .nav-link:focus,
  .active .nav-link {
    color: rgba(0, 0, 0, 0.8);
  }

  .nav-item + .nav-item {
    margin-left: 1rem;
  }

  .cover {
    border-radius: 10px;
  }

  /* .cover-bg {
    background-color: #4a89dc;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.12'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    border-radius: 10px 10px 0 0;
  } */

  .avatar {
    max-width: 216px;
    max-height: 216px;
    margin-top: 20px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .avatar img {
    /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }

  footer a:not(.nav-link) {
    color: inherit;
    border-bottom: 1px dashed;
    text-decoration: none;
    cursor: pointer;
  }

  @media (min-width: 48em) {
    .site-title {
      float: left;
    }
    .site-nav {
      float: right;
    }
    .avatar {
      
      margin-left: 0;
    }
  }

  @media print {
    body {
      background-color: #fff;
    }
    .container {
      width: auto;
      max-width: 100%;
      padding: 0;
    }
    .cover,
    .cover-bg {
      border-radius: 0;
    }
    .cover.shadow-lg {
      box-shadow: none !important;
    }
    .cover-bg {
      padding: 5rem !important;
      padding-bottom: 10px !important;
    }
    .avatar {
      margin-top: -10px;
    }
    .about-section {
      padding: 6.5rem 5rem 2rem !important;
    }
    .skills-section,
    .work-experience-section,
    .education-section,
    .contant-section {
      padding: 1.5rem 5rem 2rem !important;
    }
    .page-break {
      padding-top: 5rem;
      page-break-before: always;
    }
  }
  .card-body {
    margin-left: 20px;
  }
</style>