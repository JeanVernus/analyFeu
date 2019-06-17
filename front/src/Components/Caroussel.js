import React, { Component } from 'react';
import arrowRight from '../Assets/chevron-right.png';
import arrowLeft from '../Assets/chevron-left.png';

class Caroussel extends Component {
  constructor() {
    super();
    this.state = {
      currentImageIndex: 0,
      arrowNext: arrowRight,
      arrowPrev: arrowLeft,
      images: [
        'https://static.actu.fr/uploads/2017/08/incendie-1-854x569.jpg',
        'https://scd.france24.com/fr/files_fr/imagecache/rfi_16x9_1024_578/article/image/incendie-paris-new.jpeg',
        'http://img.zphoto.fr/data/photo/2e/7e/418360.jpg',
        'https://i.ytimg.com/vi/jwRlwL16ZiM/maxresdefault.jpg',
        'https://cdn-lejdd.lanmedia.fr/var/europe1/storage/images/lejdd/international/moyen-orient/gigantesque-incendie-a-dubai-a-the-adress-une-tour-de-300m-de-haut-766547/37207802-2-fre-FR/Incendie-maitrise-dans-une-tour-de-306-metres-de-haut-a-Dubai-aucune-victime.jpg',
        'https://scd.france24.com/fr/files_fr/imagecache/rfi_16x9_1024_578/article/image/Dubai-feu-an-m.jpg',
        'http://s1.lprs1.fr/images/2019/04/15/8054073_f4ba09bc-5fbd-11e9-b02f-47178c6d780b-1_1000x625.jpg',
        'https://www.archimag.com/sites/archimag.com/files/styles/article/public/web_articles/image/Pompiers%20feu.jpg?itok=uZH4zMeC',
        'https://www.ndarinfo.com/photo/art/grande/31672420-29794410.jpg?v=1552679900',
        'https://cdn-media.rtl.fr/cache/xBdRpchH1WY1dIUTBFmG7g/1669v1080-2/online/image/2015/0803/7779293243_pres-de-9-000-pompiers-ont-ete-mobilises-pour-lutter-contre-des-feux-terribles.jpg'
      ]
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);

  }
  prevSlide() {
    const lastIndex = this.state.images.length - 1;
    const resetIndex = this.state.currentImageIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;
    this.setState({ currentImageIndex: index })
  }
  nextSlide() {
    const lastIndex = this.state.images.length - 1;
    const resetIndex = this.state.currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentImageIndex + 1;
    this.setState({ currentImageIndex: index });
  }

  render() {
    const index = this.state.currentImageIndex;
    let firstFiveVideo = this.state.images.slice(index, index + 1);
    if (firstFiveVideo.length < 5) {
      firstFiveVideo = firstFiveVideo.concat(this.state.images.slice(0, 1- firstFiveVideo.length))
    }
    return (
      <div>
        <img className="chevron"src={this.state.arrowPrev} onClick={this.prevSlide} alt=""  width="90" height="90" />
        {firstFiveVideo.map((image, index) =>
          <img className="slide" key={index} src={image} alt="" width="1000px" height="550px"/>
        )}
        <img className="chevron"src={this.state.arrowNext} onClick={this.nextSlide} alt=""   width="90" height="90" />
      </div>
    );
  }
}
export default Caroussel;