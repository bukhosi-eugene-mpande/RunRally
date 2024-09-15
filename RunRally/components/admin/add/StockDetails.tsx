import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronLeft,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Upload,
  Users2,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';

export const description =
  'A product edit page. The product edit page has a form to edit the product details, stock, product category, product status, and product images. The product edit page has a sidebar navigation and a main content area. The main content area has a form to edit the product details, stock, product category, product status, and product images. The sidebar navigation has links to product details, stock, product category, product status, and product images.';

export default function StockDetails() {
  return (
    <div className="p-4 h-full gap-8 justify-center bg-gray-50 flex border border-dashed border-gray-200 rounded-xl">
      <Card x-chunk="dashboard-07-chunk-1">
        <CardHeader>
          <CardTitle>Stock</CardTitle>
          <CardDescription>
            Lipsum dolor sit amet, consectetur adipiscing elit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SKU</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="w-[100px]">Size</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">GGPC-001</TableCell>
                <TableCell>
                  <Label htmlFor="stock-1" className="sr-only">
                    Stock
                  </Label>
                  <Input id="stock-1" type="number" defaultValue="100" />
                </TableCell>
                <TableCell>
                  <Label htmlFor="price-1" className="sr-only">
                    Price
                  </Label>
                  <Input id="price-1" type="number" defaultValue="99.99" />
                </TableCell>
                <TableCell>
                  <ToggleGroup type="single" defaultValue="s" variant="outline">
                    <ToggleGroupItem value="s">S</ToggleGroupItem>
                    <ToggleGroupItem value="m">M</ToggleGroupItem>
                    <ToggleGroupItem value="l">L</ToggleGroupItem>
                  </ToggleGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">GGPC-002</TableCell>
                <TableCell>
                  <Label htmlFor="stock-2" className="sr-only">
                    Stock
                  </Label>
                  <Input id="stock-2" type="number" defaultValue="143" />
                </TableCell>
                <TableCell>
                  <Label htmlFor="price-2" className="sr-only">
                    Price
                  </Label>
                  <Input id="price-2" type="number" defaultValue="99.99" />
                </TableCell>
                <TableCell>
                  <ToggleGroup type="single" defaultValue="m" variant="outline">
                    <ToggleGroupItem value="s">S</ToggleGroupItem>
                    <ToggleGroupItem value="m">M</ToggleGroupItem>
                    <ToggleGroupItem value="l">L</ToggleGroupItem>
                  </ToggleGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">GGPC-003</TableCell>
                <TableCell>
                  <Label htmlFor="stock-3" className="sr-only">
                    Stock
                  </Label>
                  <Input id="stock-3" type="number" defaultValue="32" />
                </TableCell>
                <TableCell>
                  <Label htmlFor="price-3" className="sr-only">
                    Stock
                  </Label>
                  <Input id="price-3" type="number" defaultValue="99.99" />
                </TableCell>
                <TableCell>
                  <ToggleGroup type="single" defaultValue="s" variant="outline">
                    <ToggleGroupItem value="s">S</ToggleGroupItem>
                    <ToggleGroupItem value="m">M</ToggleGroupItem>
                    <ToggleGroupItem value="l">L</ToggleGroupItem>
                  </ToggleGroup>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="justify-center border-t p-4">
          <Button size="sm" variant="ghost" className="gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            Add Variant
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
