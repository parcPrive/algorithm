import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throws } from 'assert';

import { Repository } from 'typeorm';
import { ProductSaleslocation } from '../productsSaleslocation/entities/productSaleslocation.entity';
import { ProductTag } from '../productsTag/entities/productTag.entity';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductSaleslocation)
    private readonly productSaleslocationRepository: Repository<ProductSaleslocation>,

    @InjectRepository(ProductTag)
    private readonly productTagRepository: Repository<ProductTag>,
  ) {}
  async findAll() {
    return await this.productRepository.find({
      relations: ['productSaleslocation', 'productCategory', 'productTags'],
    });
  }

  async findOne({ productId }) {
    return await this.productRepository.findOne({
      where: { id: productId },
      relations: ['productSaleslocation', 'productCategory', 'productTags'],
    });
  }
  async create({ createProductInput }) {
    // // 1. 상품만 등록하는 경우
    // //카테고리를 데이터베이스에 저장
    // const result = await this.productRepository.save({
    //   ...createProductInput,
    //   //하나하나 직접 나열하기
    //   // name: createProductInput.name,
    //   // description: createProductInput.description,
    //   // price: createProductInput.price,
    // });
    // console.log(result);
    //
    // 2. 상품과 상품거래위치를 같이 등록하는 경우
    const { productSaleslocation, productCategoryId, productTags, ...product } =
      createProductInput;

    const result = await this.productSaleslocationRepository.save({
      ...productSaleslocation,
    });

    // productTags // "#전자제품", "#영등포", "#컴퓨터"]
    const result2 = [];
    for (let i = 0; i < productTags.length; i++) {
      const tagname = productTags[i].replace('#', '');

      // 이미 등록된 테그인지 확인해보기

      const prevTag = await this.productTagRepository.findOne({
        name: tagname,
      });

      if (prevTag) {
        result2.push(prevTag);
      } else {
        const newTag = await this.productTagRepository.save({ name: tagname });
        result2.push(newTag);
      }
    }

    return await this.productRepository.save({
      ...product,
      productSaleslocation: result,
      productCategory: { id: productCategoryId }, // 카테고리 추가(result 통째로 넣기 vs id만 널기)
      productTags: result2,
    });
  }

  async update({ productId, updateProductInput }) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });
    const newProduct = {
      ...product,
      ...updateProductInput,
      // id: product.id,
      // name: product.name,
      // description: product.description,
      // price: product.price,
      // isSoldout: product.isSoldout,
    };
    return await this.productRepository.save(newProduct);
  }

  async checkSoldout({ productId }) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    }
    // if (product.isSoldout) {
    //   throw new HttpException(
    //     '이미 판매가 완료된 상품입니다.',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }
  }

  async delete({ productId }) {
    // // 1. 실제 삭제
    // const result = await this.productRepository.delete({ id: productId });
    // result.affected ? true : false;

    // // 2. 소프트 삭제(직접 구현) - isDeleted
    // this.productRepository.update({ id: productId }, { isDeleted: true });

    // // 3. 소프트 삭제(직접 구현) - deleteAt
    // this.productRepository.update({ id: productId }, { deleteAt: new Date() });

    // // 4. 소프트 삭제(TypeORM 제공 - softRemove
    // this.productRepository.softRemove({ id: productId });

    // 5. 소프트 삭제(TypeORM 제공 - softDelete
    const result = await this.productRepository.softDelete({ id: productId });
    return result.affected ? true : false;
  }
}
