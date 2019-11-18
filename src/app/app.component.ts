import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular application";
  messages = [
    {
      title: "Elon Musk created new car",
      numberOfLikes: 8,
      isLiked: false,
      // tslint:disable-next-line:max-line-length
      text: `Elon Reeve Musk FRS (/ˈiːlɒn/; born June 28, 1971) is a technology entrepreneur, investor, and engineer.[4][5][6] He holds South African, Canadian, and U.S. citizenship and is the founder, CEO, and chief engineer/designer of SpaceX;[7] co-founder, CEO, and product architect of Tesla, Inc.;[8] co-founder of Neuralink; founder of The Boring Company;[9] co-founder and initial co-chairman of OpenAI;[10] and co-founder of PayPal. In December 2016, he was ranked 21st on the Forbes list of The World's Most Powerful People.[11] He has a net worth of $19.4 billion and is listed by Forbes as the 40th-richest person in the world.`
    },
    {
      title: "Bill Gates donated $3B to medical fund",
      numberOfLikes: 18,
      isLiked: true,
      text:
        "As of May 16, 2013, Bill Gates had donated $28 billion to the foundation. Since its founding, the foundation has endowed and supported a broad range of social, health, and education developments including the establishment of the Gates Cambridge Scholarships at Cambridge University."
    }
  ];
  onLikeChanged(eventArgs) {
    console.log("Liked:", eventArgs.isLiked);
  }
}
