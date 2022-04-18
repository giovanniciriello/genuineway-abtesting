import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AbtestingService } from 'src/app/services/abtesting.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  public features = [
    {
      key: "upper",
      title: "UPPER",
      description: "The first upper is made of 100% calfskin of American origin treated with chrome and tanned in Italy. The second upper is in calfskin and goatskin finished to obtain a suede effect, tanned in Italy.",
      imgUrl: "https://womsh.genuineway.io/wp-content/uploads/elementor/thumbs/W211816_03-pf8i0icr6dtdvg42kaq7a40xrjzh7ont7ql8pftfr4.jpg",
      suppliers: [
        { name: "BSC ALASKA", link: "https://genuineway.io/wp-content/uploads/2021/02/BSC-ALASKA.pdf" },
        { name: "ARPEX", link: "https://genuineway.io/wp-content/uploads/2021/02/imtex_ok.pdf" },
        { name: "DMD SOLOFRA", link: "https://genuineway.io/wp-content/uploads/2021/02/DMD-SOLOFRA.pdf" }
      ],
      position: {
        bottom: '35%', right: '15%'
      }
    },
    {
      key: "lining",
      title: "LINING",
      description: "The lining of this shoes is made by 30% of metal-free leather and by 70% of recycled and organic cotton. The percentage of recycled fiber amounts to 70%.",
      imgUrl: "https://womsh.genuineway.io/wp-content/uploads/elementor/thumbs/W211816_04-pf8i0icr6dtdvg42kaq7a40xrjzh7ont7ql8pftfr4.jpg",
      suppliers: [
        { name: "EREDI MARIA MEZZABOTTA", link: "https://genuineway.io/wp-content/uploads/2021/02/DDT-Eredi-Maria-Mezzabotta.pdf" },
        { name: "DLB", link: "https://genuineway.io/wp-content/uploads/2021/02/dbl_ok.pdf" }
      ],
      position: {
        top: '5%', left: '15%'
      }
    },
    {
      key: "laces",
      title: "LACES",
      description: "These laces are made by 100% of recycled PET deriving from used plastic bottles thah have been collected in Northern Italy",
      imgUrl: "https://womsh.genuineway.io/wp-content/uploads/elementor/thumbs/Lacci_wave-pf8i0jald7uo722pet4tulsecxuufdrjjv8q6ps1kw.jpg",
      suppliers: [
        { name: "ARPEX", link: "https://genuineway.io/wp-content/uploads/2021/02/ddt-arpex.pdf" }
      ],
      position: {
        top: '25%', right: '35%'
      }
    },
    {
      key: "sole",
      title: "SOLE",
      description: " Lightweight and resistant thermoplastic material based on SBS polymer.It appears as a glossy-matt surface.Complies with the European Regulation 1907/2006 (REACH)",
      imgUrl: "https://womsh.genuineway.io/wp-content/uploads/elementor/thumbs/W211816_05-pf8i0jald7uo722pet4tulsecxuufdrjjv8q6ps1kw.jpg",
      suppliers: [
        { name: "DSH", link: "https://genuineway.io/wp-content/uploads/2021/02/DHS.pdf" }
      ],
      position: {
        bottom: '12%', left: '10%'
      }
    },
    {
      key: "packaging",
      title: "PACKAGING",
      description: "WOMSH chooses to use a sustainable packaging solution made out of recycled cardboard, which comes from 100% recycled and recyclable cellulose processed with organic waste. This packaging is also manufactured with clean energy",
      imgUrl: "https://womsh.genuineway.io/wp-content/uploads/elementor/thumbs/packaging_womsh_template-pf8acy03kwl66wdxo6lnane4ay7mm4opbtepr4efwg.jpg",
      suppliers: [
        { name: "DILPACK", link: "https://genuineway.io/wp-content/uploads/2021/02/ddt_polyedra_crushmais.pdf" },
      ],
      position: {
        top: '5%', right: '5%'
      }
    }
  ]

  public selectedFeature = this.features[0]

  constructor(
    private modalService: NgbModal,
    public ab: AbtestingService
  ) { }

  ngOnInit(): void {
  }

  openFeatureModal(featureModal: any, featureKey: string) {
    this.selectedFeature = this.features.find(f => f.key === featureKey) || this.features[0];
    this.modalService.open(featureModal, {
      centered: true
    })
  }

}
