import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  name = 'Nico'
  age = '26'
  img = 'https://source.unsplash.com/random'
  activator = true
  person = {
    name: 'Niko',
    age: 95,
    img: 'https://source.unsplash.com/random'
  }

  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  toggleButtons(){
    this.activator = !this.activator
  }

  add_age(){
    this.person.age += 10
  }

  rest_age(){
    this.person.age -= 10
  }

  change_name(event: Event){
    const element = event.target as HTMLInputElement
    this.person.name = element.value
  }

  my_list: string[] = ['casa','carro']
  new_item: string = ''

  add_to_list(){
    this.my_list.push(this.new_item)
    this.new_item=''
  }

  remove_from_list(index: number){
    this.my_list.splice(index,1)
  }

  register = {
    name: '',
    email: '',
    password: ''
  }
  onRegister(){
    console.log(this.register)
  }


  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://source.unsplash.com/random',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://source.unsplash.com/random'
    }
  ]

}
