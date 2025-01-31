import { Component, OnInit } from '@angular/core';
import {MmService} from "../../../services/mm.service";
import {Mentor} from "../../../models/entity/mentor";
import {Mentee} from "../../../models/entity/mentee";

@Component({
  selector: 'app-home-counts',
  templateUrl: './home-counts.component.html',
  styleUrls: ['./home-counts.component.scss']
})
export class HomeCountsComponent implements OnInit {

  mentorCount: number = 0;
  menteeCount: number = 0;
  counts: Counts;

  constructor(private mmService: MmService) {
    this.counts = {
      mentors: 0,
      mentees: 0,
      total: 0,
      matches: 0
    };
  }

  ngOnInit(): void {
    this.mmService.getAllMs("mentor")
      .subscribe((mentors: Mentor[]) => {
        this.mentorCount = mentors.length;
      });
    this.mmService.getAllMs("mentee")
      .subscribe((mentees: Mentee[]) => {
        this.menteeCount = mentees.length;
      })

    this.counts = {
      mentors: this.mentorCount,
      mentees: this.menteeCount,
      total: this.mentorCount + this.menteeCount,
      matches: 0 // TODO update this to persist the front with valid data
    }
  }

}

interface Counts {
  mentors: number;
  mentees: number;
  total: number;
  matches: number;
}
