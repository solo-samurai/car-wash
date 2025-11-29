import { Partner } from "@/lib/data";
import { MapPin, Star } from "lucide-react";

interface PartnerListProps {
  partners: Partner[];
  selectedPartnerId: string;
  onSelect: (partnerId: string) => void;
}

export function PartnerList({
  partners,
  selectedPartnerId,
  onSelect,
}: PartnerListProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Select a Partner Center</h2>
      <div className="grid grid-cols-1 gap-4">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className={`flex items-center justify-between p-6 border rounded-xl cursor-pointer hover:border-primary transition-all ${
              selectedPartnerId === partner.id
                ? "border-primary bg-primary/5 ring-1 ring-primary"
                : "border-border"
            }`}
            onClick={() => onSelect(partner.id)}
          >
            <div>
              <h3 className="text-lg font-semibold">{partner.name}</h3>
              <div className="flex items-center gap-2 text-muted-foreground mt-1">
                <MapPin className="h-4 w-4" />
                <span>{partner.address}</span>
              </div>
              {partner.hasValet && (
                <span className="inline-block mt-2 px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-medium">
                  Valet Available
                </span>
              )}
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded-lg">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="font-bold text-yellow-700 dark:text-yellow-400">
                  {partner.rating}
                </span>
              </div>
              {partner.valetFee && (
                <span className="text-xs text-muted-foreground mt-2">
                  +${partner.valetFee} Valet Fee
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
