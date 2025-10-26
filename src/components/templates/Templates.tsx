import { Button } from "../ui/button";
import { Item, ItemContent, ItemMedia } from "../ui/item";

export default function Templates() {
  return (
    <div className="flex flex-col items-center justify-center mx-w-lg gap-6">
      <h1 className="text-2xl font-bold tracking-tight">View Templates</h1>
      <section className="flex flex-wrap gap-10">
        <Item variant="outline" className="flex flex-col">
            <ItemMedia variant="image" className="w-full h-60">
                <img src="/images/blue_gradient.jpg"></img>
            </ItemMedia>
          <ItemContent>
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-xl font-semibold text-[#b3e6ff] mb-2">
                Classic
              </h2>
              <p>
                a simple yet effective resume template
              </p>
              <Button variant="link" className="px-0 text-[#b3e6ff]">
                outline template {">"}
              </Button>
            </div>
          </ItemContent>
        </Item>
      </section>
    </div>
  );
}
