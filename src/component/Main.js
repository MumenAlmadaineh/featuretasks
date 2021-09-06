import React, { Component } from 'react';
import HornedBeast from './HornedBeast';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      vote: 0
    };
  }
  getVote = () => {
    alert('work');
  }
  render() {
    let animals = 
    [
      {
        title:'UniWhal',
        imgUrl:'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        description:'A unicorn and a narwhal nuzzling their horns',
        button: 0,
        vote: this.state.vote
      },
      {
        title:'Rhino Family',
        imgUrl:'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80',
        description:'Mother (or father) rhino with two babies',
        button: 0,
        vote: this.state.vote
      },
      {
        title:'Unicorn Head',
        imgUrl:'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg',
        description:'Someone wearing a creepy unicorn head mask',
        button:0,
        vote: this.state.vote
      },
      {
        title:'UniLego',
        imgUrl:'https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80',
        description:'Lego figurine dressed in a unicorn outfit',
        button:0,
        vote: this.state.vote
      },
      {
        title:'Basically a unicorn',
        imgUrl:'https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg',
        description:'A narwhal is basically a unicorn after all, right?',
        button:0,
        vote: this.state.vote
      },
      {
        title:'truth',
        imgUrl:'https://i.pinimg.com/originals/16/cf/2a/16cf2a0b3fd51b9bee08bb6296193b75.jpg',
        description:'The truth behind narwhals',
        button:0,
        vote: this.state.vote
      },
      {
        title:'Baby Rhino',
        imgUrl:'https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg',
        description:'This is actually a figurine but it looks kinda real',
        button:0,
        vote: this.state.vote
      },
      {
        title:'Cera',
        imgUrl:'https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003',
        description:'Three horns but still, horns. And who doesnt like The Land Before Time?',
        button:0,
        vote: this.state.vote
      },
      {
        title:'Narwhal costume',
        imgUrl:'https://ae01.alicdn.com/kf/HTB18GwSQVXXXXaZaXXXq6xXFXXXh/Animal-Cosplay-Costume-Narwhal-Onesie-Mens-Womens-Cartoon-Whale-Pajamas.jpg',
        description:'A woman wearing a blue narwhal costume',
        button:0,
        vote: this.state.vote
      },
      {
        title:'Rhino costume',
        imgUrl:'https://ae01.alicdn.com/kf/HTB18GwSQVXXXXaZaXXXq6xXFXXXh/Animal-Cosplay-Costume-Narwhal-Onesie-Mens-Womens-Cartoon-Whale-Pajamas.jpg',
        description:'A woman wearing a blue narwhal costume',
        button:0,
        vote: this.state.vote
      },
      {
        title:'Rhino costume',
        imgUrl:'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg',
        description:'Someone wearing a creepy unicorn head mask',
        button:0,
        vote: this.state.vote
      },
      {
        title:'Believe',
        imgUrl:'https://www.tinselbox.com/wp-content/uploads/2018/03/I-BELIEVE-IN-UNICORNS-FREE-PRINTABLE-WATERCOLOR-7-of-1.jpg',
        description:'I believe in unicorns, do you?',
        button:0,
        vote: this.state.vote
      },
      {
        title:'Unicorn Head',
        imgUrl:'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg',
        description:'Someone wearing a creepy unicorn head mask',
        button:0,
        vote: this.state.vote
      },
      {
        title:'Markhor',
        imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg/220px-Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg',
        description:'These wild goats eat snakes, then secrete a foam that locals fight over for the antivemon properties -- how cool is that?',
        button:0,
        vote: this.state.vote
      },
      {
        title:'Unicorn Head',
        imgUrl:'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg',
        description:'Someone wearing a creepy unicorn head mask',
        button:0,
        vote: this.state.vote
      },
      {
        title:'Unicorn Head',
        imgUrl:'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg',
        description:'Someone wearing a creepy unicorn head mask',
        button:0,
        vote: this.state.vote
      },
      {
        title:'Baby markhor',
        imgUrl:'http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi',
        description:'Even the babies are adorable',
        button:0,
        vote: this.state.vote
      },
      {
        title:'Unicorn Head',
        imgUrl:'https://images.unsplash.com/photo-1558560063-931ca9822a0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        description:'Those horns though',
        button:0,
        vote: this.state.vote
      },
      {
        title:'Addax',
        imgUrl:'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg',
        description:'Someone wearing a creepy unicorn head mask',
        button:0,
        vote: this.state.vote
      },
      {
        title:'Baby mouflon',
        imgUrl:'https://images.unsplash.com/photo-1556890077-020ec300d5db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
        description:'This guy is basically extinct but survives well in captivity, so theyre frequently found in zoos',
        button:0,
        vote: this.state.vote
      },
      {
        title:'Smaug',
        imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg',
        description:'Fan illustration of Smaug from The Hobbit',
        button:0,
        vote: this.state.vote
      },
    ];
    return (
      <>
        {
          animals.map(item=>{
            return <HornedBeast title = {item.title} imgUrl = {item.imgUrl} description = {item.description} vote = {item.vote} button =  {item.button} />;
          })
        }
      </> 
    );
  }
}

export default Main;
