import care1 from '../../../assets/images/care-img-1.webp';
export interface CareContentData {
  img: string;
  item1: string;
  item2: string;
  item3: string;
}
export interface CareHeaderData {
  title: string;
  p1: string;
  p2?: string;
}
export const careContentData: CareContentData = {
  img: care1,
  item1: 'Online 24/7 services',
  item2: 'Emergency Medicine',
  item3: 'Ambulance Service',
};
export const careHeaderData: CareHeaderData = {
  title: 'Immediate Virtual Healthcare',
  p1: 'Gain immediate access to professional medical care and assistance through our virtual platform, ensuring your health needs are addressed promptly and efficiently.',
  p2: "Your well-being is our priority, and we're just a click away to assist you with any medical concerns you may have.",
};
