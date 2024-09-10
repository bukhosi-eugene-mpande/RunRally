'use client';
import Image from 'next/image';
import { faker } from '@faker-js/faker';
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

export default function ProductPictures() {
  faker.seed(123);
  return (
    <div className="p-4 h-full gap-8 justify-center bg-gray-50 flex border border-dashed border-gray-200 rounded-xl">
      <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
        <CardHeader>
          <CardTitle>Product Images</CardTitle>
          <CardDescription>
            Lipsum dolor sit amet, consectetur adipiscing elit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <Image
              alt="Product image"
              className="aspect-square w-full rounded-md object-cover"
              height="300"
              src={faker.image.url()}
              width="300"
            />
            <div className="grid grid-cols-3 gap-2">
              <Image
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="84"
                src={faker.image.url()}
                width="84"
              />
              <Image
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="84"
                src={faker.image.url()}
                width="84"
              />
              <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                <Upload className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">Upload</span>
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
