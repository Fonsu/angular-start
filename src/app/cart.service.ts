import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  addToCart = product => this.items.push(product);
  getItems = () => this.items;
  clearCart = () => (this.items = []);
  getShippingPrices = () => this.http.get('../assets/shipping.json');

  constructor(private http: HttpClient) {}
}
