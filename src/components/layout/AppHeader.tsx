"use client";

import { Input } from "@ui5/webcomponents-react/Input";
import { Button } from "@ui5/webcomponents-react/Button";
import { Icon } from "@ui5/webcomponents-react/Icon";
import "@ui5/webcomponents-icons/dist/search.js";
import "@ui5/webcomponents-icons/dist/bell.js";
import "@ui5/webcomponents-icons/dist/slim-arrow-down.js";

export function AppHeader() {
  return (
    <header className="fixed top-0 right-0 h-16 z-30 border-b border-outline-variant bg-white flex items-center justify-between px-6 w-[calc(100%-15rem)]">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-64">
          <Input
            className="w-full"
            placeholder="Search logistics..."
            accessibleName="Search logistics"
            icon={<Icon name="search" slot="icon" />}
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 flex-1">
        <Button
          design="Transparent"
          icon="bell"
          accessibleName="Notifications"
          className="active:scale-95 transition-transform"
        />
        <div className="h-6 w-px bg-outline-variant mx-2"></div>
        <button
          className="flex items-center gap-2 hover:bg-surface-container-high p-1 pr-3 rounded-full transition-colors border border-transparent hover:border-outline-variant active:scale-95 motion-safe:active:scale-95"
          aria-label="User profile: Tran V."
        >
          <img
            alt="Tran V. Avatar"
            className="w-8 h-8 rounded-full bg-surface-container-highest object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoeqBmWWzoqPPetbxCjAf5hYlpj1cZjE9U_yLJscKuMuGaFOo8K5L8V3Ydpxc30CGGb1kCagr59cjukPA3swCzXNYSHJ5D2CtsPN7DshDpR3DpyoxgFltIO5mfU4-7toM2LMtILxiGwwkthauyiUjUQYeIh8cKeEsb3ADllL9CDdD3iM4ze9Sta0IV2qlMBp69J0__PBxjhSVsIk7XWwhLfCmUWNhSugFD-0WO_xEw-ahges2J8KwYGvqg_1zmLFur9mP-puGFqerB"
          />
          <span className="text-label-md text-on-surface">Tran V.</span>
          <Icon name="slim-arrow-down" className="text-on-surface-variant" />
        </button>
      </div>
    </header>
  );
}
