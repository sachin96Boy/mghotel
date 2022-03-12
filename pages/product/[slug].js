import {
  Button,
  Card,
  Grid,
  Link as MatLink,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import useStyle from "../../utils/styles";
import Image from "next/image";

function ProductScreen() {
  const classes = useStyle();
  const router = useRouter();
  const { slug } = router.query;

  const product = data.products.find((p) => p.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <Link href="/" passHref>
          <MatLink>
            <Typography>Back to products</Typography>
          </MatLink>
        </Link>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.images}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1">{product.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Brand: {product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Rating: {product.rating} stars ({product.numReviews} reviews)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>description:{product.description}</Typography>{" "}
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography component={"b"}>
                      Rs {product.price}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0 ? "In Stock" : "out of Stock"}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              {/* add to cart button */}
              <ListItem>
                {product.countInStock > 0 ? (
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Add to cart
                  </Button>
                ) : (
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    hidden
                  >
                    Add to cart
                  </Button>
                )}
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default ProductScreen;
