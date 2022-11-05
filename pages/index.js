import Layout from "../components/Layout";
import Link from "next/link";
import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import db from "../utils/db";
import Product from "../models/Product";

export default function Home(props) {
  const { products } = props;
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.name}>
              <Card>
                <Link href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component={"img"}
                      image={product.images}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
                <CardActions>
                  <Typography>
                    <b>Rs</b> {product.price}
                  </Typography>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  await db.connect();
  // lean will return a plain javascript object instead of mongoose document
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      // convertdocuments to JSON objects
      products: products.map(db.convertDocToObj),
    }, // will be passed to the page component as props
  }
}