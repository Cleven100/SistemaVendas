package io.github.cleven.vendasapi.rest.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.cleven.vendasapi.model.Product;
import io.github.cleven.vendasapi.model.repository.ProductRepository;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    
 @Autowired
 private ProductRepository repository;

 @PostMapping   
 public ProductFormRequest save(@RequestBody ProductFormRequest product ) {

   Product entityProduct = new Product(product.getName(), product.getDescription(), product.getPrice(), product.getSku());
   repository.save(entityProduct);
   System.out.println(entityProduct);


   System.out.println(product);   
   return product;
 }

}
