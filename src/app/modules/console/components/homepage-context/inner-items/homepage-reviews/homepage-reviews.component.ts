import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-homepage-reviews',
  templateUrl: './homepage-reviews.component.html',
  styleUrls: ['./homepage-reviews.component.scss']
})
export class HomepageReviewsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      991: {
        items: 3
      },
      1399: {
        items: 4
      },
    },
    nav: true
  }
  slidesStore = [
    {
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAACDCAMAAABvJh+JAAAAMFBMVEXy8vK7v8LM0NP19fW4vL/v7+/r7O21ub3AxMfO0NHGycvR09TLzc7V1tfl5ufa3N1OxGOhAAADSklEQVRoge2a25arIAyGxQBatPD+b7vRjqeKQiChF9v/pq5Z034rISQh2DSPHj169OjRo0eP/gcBNEppL6Wm50pM7VrTi1m9aZ1u+MmgnBFSilX+2TjFCwbdih1yRYs3o8XQDF0AOoM7NjC4kKUruLc83OEGOoPfHFwToXrui57bR6meO/6CSs+Ne/iPOxD6Gd6JVM91ZFywyVQvTYVtEFAhDJG5CBdTulmhqF4kVKSxVOaqHmmsMARUcFgfC2kJsAZLJckZCk31rU65tahUsag4ZaDjeJJ0xVj80lIsLqC3z6TyBJlDFX0pNieQCUL5wVbA/iik8jbQWIxtM6jl54O85Fhe+X5TCjKaC5LCByO+uyA4+uF68w+WoKn5UQuH7+E6omM90liCgJqENLejWNmZi1ldWZwYV2mMuYqKinGzpBwTJWdmwsP8rFcSt6MeTSXlSPmmhU7c2BCOaQwXiyspeIaOoE13Q235hsruahgne6rcFBIoDz6Rp/k58+AeGtsKuaGnx9bWuKfw5OWOojeD03xM+PIhTFo/jn+ng9qxNym7A5zpX5oIbMdpKRMaJHDdtNgjARj0khXjTYNaomwo3sLDGrTRgQSMW3gXFSKw+yuYyG8diqM0BZ7+qrK3JfyUsjMNBnW+ILjmnguFfGVRdeCO69LPofZDZnSuF2cQaUJB6mtTuERgF/i6uMr3Nxj0dQeAK8Hgrn5nqjeDXe+oAZQd724cMdxIIyFF3zo7yb3HQCHM5KacLeWfov+YfLIH1CEgrsRjgiaFJp8AU68RU5V0zQlp/T+KG8+TGfcvCdxorSYOp0WxmplzNRBX5NaexcUz9zZr5E2PU3S3ixiieNHdaTBrrJmqy2TFFE8fyfaqQ2A11teiC2zWfD5ZVwMrZmOFDJZA1pWdscGcoW8mBETckLF8e3bFBioRX4LadE5VbNl4r0ABHOPfKseeDo3UDVRY/VeGrOLjs5fZN+0f9mvr1vHxKZa5E+OqQ4JMmNrS6JgxmIvPDnsoQ+gXwPK1x1Zb2kP1q7RrZ+xu51aLqGNMVUoWM3aXlqEa9fhuRL1A3r8Jotj7mZ02LH8btWnXUNmK2G6LqKpYvcfKStphGyvaWjKf7PgPKrAr+3WGwFEAAAAASUVORK5CYII=',
      name: "Ridmi Jayamanna",
      starCount: 5,
      description: "I received great cleaning service from Billie, she was professional and efficient, my flat was perfect and Billie was nice to meet!"
    }, {
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAACDCAMAAABvJh+JAAAAMFBMVEXy8vK7v8LM0NP19fW4vL/v7+/r7O21ub3AxMfO0NHGycvR09TLzc7V1tfl5ufa3N1OxGOhAAADSklEQVRoge2a25arIAyGxQBatPD+b7vRjqeKQiChF9v/pq5Z034rISQh2DSPHj169OjRo0eP/gcBNEppL6Wm50pM7VrTi1m9aZ1u+MmgnBFSilX+2TjFCwbdih1yRYs3o8XQDF0AOoM7NjC4kKUruLc83OEGOoPfHFwToXrui57bR6meO/6CSs+Ne/iPOxD6Gd6JVM91ZFywyVQvTYVtEFAhDJG5CBdTulmhqF4kVKSxVOaqHmmsMARUcFgfC2kJsAZLJckZCk31rU65tahUsag4ZaDjeJJ0xVj80lIsLqC3z6TyBJlDFX0pNieQCUL5wVbA/iik8jbQWIxtM6jl54O85Fhe+X5TCjKaC5LCByO+uyA4+uF68w+WoKn5UQuH7+E6omM90liCgJqENLejWNmZi1ldWZwYV2mMuYqKinGzpBwTJWdmwsP8rFcSt6MeTSXlSPmmhU7c2BCOaQwXiyspeIaOoE13Q235hsruahgne6rcFBIoDz6Rp/k58+AeGtsKuaGnx9bWuKfw5OWOojeD03xM+PIhTFo/jn+ng9qxNym7A5zpX5oIbMdpKRMaJHDdtNgjARj0khXjTYNaomwo3sLDGrTRgQSMW3gXFSKw+yuYyG8diqM0BZ7+qrK3JfyUsjMNBnW+ILjmnguFfGVRdeCO69LPofZDZnSuF2cQaUJB6mtTuERgF/i6uMr3Nxj0dQeAK8Hgrn5nqjeDXe+oAZQd724cMdxIIyFF3zo7yb3HQCHM5KacLeWfov+YfLIH1CEgrsRjgiaFJp8AU68RU5V0zQlp/T+KG8+TGfcvCdxorSYOp0WxmplzNRBX5NaexcUz9zZr5E2PU3S3ixiieNHdaTBrrJmqy2TFFE8fyfaqQ2A11teiC2zWfD5ZVwMrZmOFDJZA1pWdscGcoW8mBETckLF8e3bFBioRX4LadE5VbNl4r0ABHOPfKseeDo3UDVRY/VeGrOLjs5fZN+0f9mvr1vHxKZa5E+OqQ4JMmNrS6JgxmIvPDnsoQ+gXwPK1x1Zb2kP1q7RrZ+xu51aLqGNMVUoWM3aXlqEa9fhuRL1A3r8Jotj7mZ02LH8btWnXUNmK2G6LqKpYvcfKStphGyvaWjKf7PgPKrAr+3WGwFEAAAAASUVORK5CYII=',
      name: "Deshan Perera",
      starCount: 5,
      description: "Speedy service, extremely satisfied by the quality provided."
    }, {
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAACDCAMAAABvJh+JAAAAMFBMVEXy8vK7v8LM0NP19fW4vL/v7+/r7O21ub3AxMfO0NHGycvR09TLzc7V1tfl5ufa3N1OxGOhAAADSklEQVRoge2a25arIAyGxQBatPD+b7vRjqeKQiChF9v/pq5Z034rISQh2DSPHj169OjRo0eP/gcBNEppL6Wm50pM7VrTi1m9aZ1u+MmgnBFSilX+2TjFCwbdih1yRYs3o8XQDF0AOoM7NjC4kKUruLc83OEGOoPfHFwToXrui57bR6meO/6CSs+Ne/iPOxD6Gd6JVM91ZFywyVQvTYVtEFAhDJG5CBdTulmhqF4kVKSxVOaqHmmsMARUcFgfC2kJsAZLJckZCk31rU65tahUsag4ZaDjeJJ0xVj80lIsLqC3z6TyBJlDFX0pNieQCUL5wVbA/iik8jbQWIxtM6jl54O85Fhe+X5TCjKaC5LCByO+uyA4+uF68w+WoKn5UQuH7+E6omM90liCgJqENLejWNmZi1ldWZwYV2mMuYqKinGzpBwTJWdmwsP8rFcSt6MeTSXlSPmmhU7c2BCOaQwXiyspeIaOoE13Q235hsruahgne6rcFBIoDz6Rp/k58+AeGtsKuaGnx9bWuKfw5OWOojeD03xM+PIhTFo/jn+ng9qxNym7A5zpX5oIbMdpKRMaJHDdtNgjARj0khXjTYNaomwo3sLDGrTRgQSMW3gXFSKw+yuYyG8diqM0BZ7+qrK3JfyUsjMNBnW+ILjmnguFfGVRdeCO69LPofZDZnSuF2cQaUJB6mtTuERgF/i6uMr3Nxj0dQeAK8Hgrn5nqjeDXe+oAZQd724cMdxIIyFF3zo7yb3HQCHM5KacLeWfov+YfLIH1CEgrsRjgiaFJp8AU68RU5V0zQlp/T+KG8+TGfcvCdxorSYOp0WxmplzNRBX5NaexcUz9zZr5E2PU3S3ixiieNHdaTBrrJmqy2TFFE8fyfaqQ2A11teiC2zWfD5ZVwMrZmOFDJZA1pWdscGcoW8mBETckLF8e3bFBioRX4LadE5VbNl4r0ABHOPfKseeDo3UDVRY/VeGrOLjs5fZN+0f9mvr1vHxKZa5E+OqQ4JMmNrS6JgxmIvPDnsoQ+gXwPK1x1Zb2kP1q7RrZ+xu51aLqGNMVUoWM3aXlqEa9fhuRL1A3r8Jotj7mZ02LH8btWnXUNmK2G6LqKpYvcfKStphGyvaWjKf7PgPKrAr+3WGwFEAAAAASUVORK5CYII=',
      name: "Anne Fernando",
      starCount: 5,
      description: "Very friendly and a very good cleaner, would highly recommend."
    },

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
