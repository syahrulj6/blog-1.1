import { searchPostsByTitle } from '@/lib/actions';
import { Button, Input } from '@nextui-org/react';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import { Post } from '@/lib/types';
import Link from 'next/link';

export const SearchInput = () => {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState<Post[]>([]);

  const handleSearch = async () => {
    try {
      if (query === '') {
        setSearchResult([]);
        return;
      }

      const res = await searchPostsByTitle(query);
      setSearchResult(res);
      setQuery('');
    } catch (error) {
      console.log('Failed to search post', error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <form className="grid md:grid-cols-3  items-center" action={handleSearch}>
        <Input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="col-span-2 flex items-center"
          color="default"
          variant="bordered"
          type="text"
          label="Search"
          labelPlacement="inside"
          size="sm"
          endContent={
            <Button type="submit" size="sm" radius="full" variant="bordered" className="mb-[2px] ">
              <BiSearch className="w-4 h-4" />
            </Button>
          }
        />
      </form>
      {searchResult.map((post) => (
        <Link href={`/${post.slug}`} key={post.id} className="text-md hover:text-primary-500 transition-colors">
          {post.title}
        </Link>
      ))}
    </div>
  );
};
