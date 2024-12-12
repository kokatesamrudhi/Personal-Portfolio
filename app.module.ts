import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-home></app-home>
    <app-about></app-about>
    <app-projects></app-projects>
  `
})
export class AppComponent {
  title = 'samrudhi-portfolio';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <h1>Samrudhi Kokate</h1>
      <nav class="navbar">
        <a href="#home" class="nav-link">Home</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#projects" class="nav-link">Projects</a>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background-color: #e9e9e9;
      padding: 20px;
      text-align: center;
    }
    .navbar {
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-top: 10px;
    }
    .nav-link {
      text-decoration: none;
      color: #292929;
      font-weight: bold;
    }
  `]
})
export class HeaderComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section id="home" class="home">
      <h2>Welcome!</h2>
      <p>I'm a designer with a focus on human-centered design.</p>
    </section>
  `,
  styles: [`
    .home {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: #f4f4f4;
    }
    h2 {
      color: #FFA500;
      font-size: 2rem;
    }
  `]
})
export class HomeComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section id="about" class="about">
      <h2>About Me</h2>
      <p>Hello! I love creating designs that bring value to users.</p>
    </section>
  `,
  styles: [`
    .about {
      padding: 40px;
      text-align: center;
      background-color: #ffffff;
    }
    h2 {
      font-size: 2rem;
      color: #333;
      margin-bottom: 20px;
    }
  `]
})
export class AboutComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <section id="projects" class="projects">
      <h2>Projects</h2>
      <div class="project-list">
        <p>Museum of Raw Thoughts - Curating creativity</p>
        <p>Botswana - Promoting cultural preservation</p>
      </div>
    </section>
  `,
  styles: [`
    .projects {
      padding: 40px;
      text-align: center;
      background-color: #f9f9f9;
    }
    h2 {
      color: #3FCDD5;
      font-size: 2rem;
      margin-bottom: 20px;
    }
    .project-list p {
      font-size: 1rem;
      margin: 10px 0;
    }
  `]
})
export class ProjectsComponent {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}