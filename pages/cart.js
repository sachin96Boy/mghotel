import {
  Button,
  Card,
  Grid,
  Link as MatLink,
  List,
  ListItem,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/store";

function Cart() {
  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  return (
    <Layout title={"Food Bucket"}>
      <Typography component={"h1"} variant="h1">
        Food Bucket
      </Typography>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty.{" "}
          <Link href="/" passHref>
            <MatLink>Go Grab something else</MatLink>
          </Link>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Image
                          src={item.images}
                          alt={item.name}
                          width={50}
                          height={50}
                        />
                      </TableCell>
                      <TableCell>
                        <Link href={`/product/${item.slug}`} passHref>
                          <MatLink>
                            <Typography
                              style={{
                                fontWeight: "bold",
                                fontSize: "1.5rem",
                              }}
                            >
                              {item.name}
                            </Typography>
                          </MatLink>
                        </Link>
                      </TableCell>
                      <TableCell align="right">
                        <Select value={item.quantity}>
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <MenuItem key={x + 1} value={x + 1}>
                              {x + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                      <TableCell align="right">Rs. {item.price}</TableCell>
                      <TableCell align="right">
                        <Button variant="contained" color="secondary">
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h2">
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                    items) : Rs.{" "}
                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                  </Typography>
                </ListItem>
                <ListItem>
                    <Button variant="contained" color="primary" fullWidth>
                        Proceed to Checkout
                    </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}

export default dynamic(()=> Promise.resolve(Cart), {ssr: false});
