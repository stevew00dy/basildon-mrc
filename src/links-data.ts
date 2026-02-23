export interface Link {
  name: string;
  url: string;
}

export interface LinkCategory {
  name: string;
  links: Link[];
}

const linksData: LinkCategory[] = [
  {
    name: "Model Railway Clubs",
    links: [
      { name: "Chiltern Model Railway Association", url: "https://www.cmra.org.uk/" },
      { name: "Billericay Model Railway Group", url: "https://www.billericaymrg.co.uk/" },
      { name: "Braintree & Halstead MRC", url: "https://www.braintree-halsteadmrc.co.uk/" },
      { name: "Chelmsford & District MRC", url: "https://www.chelmsford-and-district-mrc.webs.com/" },
      { name: "Colchester & District MRC", url: "https://colchestermrc.org/" },
      { name: "Ilford & West Essex MRC", url: "https://www.iwemrc.org.uk/" },
      { name: "Mid-Essex MRC (Shenfield)", url: "https://www.midessexmrc.org/" },
      { name: "Roding Valley MRG", url: "https://www.rodingvalleymrg.co.uk/" },
      { name: "Shoeburyness MRC", url: "https://www.shoeburynessmrc.co.uk/" },
      { name: "Warley MRC", url: "https://www.thewarleyshow.co.uk/" },
    ],
  },
  {
    name: "Heritage Railways",
    links: [
      { name: "National Railway Museum", url: "https://www.railwaymuseum.org.uk/" },
      { name: "Mangapps Railway Museum", url: "https://www.mangapps.co.uk/" },
      { name: "East Anglian Railway Museum", url: "https://www.earm.co.uk/" },
      { name: "Colne Valley Railway", url: "https://www.colnevalleyrailway.co.uk/" },
      { name: "Mid Suffolk Light Railway", url: "https://www.mslr.org.uk/" },
      { name: "Bluebell Railway", url: "https://www.bluebell-railway.com/" },
      { name: "Kent & East Sussex Railway", url: "https://www.kesr.org.uk/" },
      { name: "North Norfolk Railway", url: "https://www.nnrailway.co.uk/" },
      { name: "Nene Valley Railway", url: "https://www.nvr.org.uk/" },
      { name: "Bure Valley Railway", url: "https://www.bvrw.co.uk/" },
    ],
  },
  {
    name: "Gauge Associations",
    links: [
      { name: "N Gauge Society", url: "https://www.ngaugesociety.com/" },
      { name: "2mm Scale Association", url: "https://www.2mm.org.uk/" },
      { name: "3mm Society", url: "https://www.3mmsociety.org.uk/" },
      { name: "Double O Gauge Association", url: "https://www.doubleogauge.com/" },
      { name: "EM Gauge Society", url: "https://www.emgs.org/" },
      { name: "Scalefour Society", url: "https://www.scalefour.org/" },
      { name: "Gauge O Guild", url: "https://www.gaugeoguild.com/" },
      { name: "009 Society", url: "https://www.009society.com/" },
      { name: "7mm Narrow Gauge Association", url: "https://www.7mmnga.org.uk/" },
      { name: "G Scale Society", url: "https://www.gscalesociety.com/" },
    ],
  },
  {
    name: "Traders & Suppliers",
    links: [
      { name: "Hattons of Liverpool", url: "https://www.hattons.co.uk/" },
      { name: "Rails of Sheffield", url: "https://www.railsofsheffield.com/" },
      { name: "Gaugemaster", url: "https://www.gaugemaster.com/" },
      { name: "Hornby", url: "https://www.hornby.com/" },
      { name: "Bachmann", url: "https://www.bachmann.co.uk/" },
      { name: "Dapol", url: "https://www.dapol.co.uk/" },
      { name: "C & L Finescale", url: "https://www.finescale.org.uk/" },
      { name: "Scalescenes (downloadable card kits)", url: "https://www.scalescenes.com/" },
      { name: "UK Model Shops Directory", url: "https://www.ukmodelshops.co.uk/" },
      { name: "Braintree Model Railways", url: "https://braintreemodelrailways.co.uk/" },
    ],
  },
  {
    name: "Magazines & Media",
    links: [
      { name: "Railway Modeller", url: "https://www.peco-uk.com/" },
      { name: "British Railway Modelling", url: "https://www.world-of-railways.co.uk/" },
      { name: "RMweb Forum", url: "https://www.rmweb.co.uk/" },
      { name: "Heritage Railway Association", url: "https://www.hra.uk.com/" },
    ],
  },
  {
    name: "Local & Basildon",
    links: [
      { name: "Rail Club de Meaux (our twin club in France)", url: "https://railclubdemeaux.fr/" },
      { name: "C2C Railways (trains to Basildon)", url: "https://www.c2c-online.co.uk/" },
      { name: "Basildon Council", url: "https://www.basildon.gov.uk/" },
    ],
  },
];

export default linksData;
