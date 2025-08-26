import { useEffect, useState } from "react";
import type { Product } from "../../api/products";
import { fetchProducts, fetchCategories } from "../../api/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Container, Grid, Input, Select } from "./styles";

export default function ListingPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(false);
      try {
        const [p, c] = await Promise.all([fetchProducts(), fetchCategories()]);
        setProducts(p);
        setFiltered(p);
        setCategories(c);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  useEffect(() => {
    let temp = [...products];
    if (search) temp = temp.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
    if (category) temp = temp.filter((p) => p.category === category);
    temp.sort((a, b) => (sort === "asc" ? a.price - b.price : b.price - a.price));
    setFiltered(temp);
  }, [search, category, sort, products]);

  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container><button onClick={() => window.location.reload()}>Retry</button></Container>;

  return (
    <Container>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </Select>
        <Select value={sort} onChange={(e) => setSort(e.target.value as "asc" | "desc")}>
          <option value="asc">Price ↑</option>
          <option value="desc">Price ↓</option>
        </Select>
      </div>

      <Grid>
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </Grid>
    </Container>
  );
}
