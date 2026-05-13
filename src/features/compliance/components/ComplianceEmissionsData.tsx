"use client";

import {
  Card,
  Icon,
  Label,
  Table,
  TableRow,
  TableCell,
  TableHeaderRow,
  TableHeaderCell,
  Button,
  Tag,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/download.js";
import "@ui5/webcomponents-icons/dist/sys-enter-2.js";
import "@ui5/webcomponents-icons/dist/pending.js";
import "@ui5/webcomponents-icons/dist/collaborate.js";
import "@ui5/webcomponents-icons/dist/competitor.js";
import "@ui5/webcomponents-icons/dist/survey.js";

const tableData = [
  {
    id: "SC-GLO-110",
    category: "Purchased Goods",
    distance: "4,250",
    fuel: "1,120",
    co2e: "2,990",
    period: "Q3 2023",
    status: "Verified",
  },
  {
    id: "SC-SEA-452",
    category: "Upstream Logistics",
    distance: "3,800",
    fuel: "980",
    co2e: "2,616",
    period: "Q3 2023",
    status: "Estimated",
  },
  {
    id: "SC-EUR-882",
    category: "Waste Management",
    distance: "1,200",
    fuel: "180",
    co2e: "480",
    period: "Q3 2023",
    status: "Verified",
  },
  {
    id: "SC-NAM-021",
    category: "Business Travel",
    distance: "5,100",
    fuel: "1,350",
    co2e: "3,604",
    period: "Q3 2023",
    status: "Verified",
  },
];

export function ComplianceEmissionsData() {
  return (
    <div className="px-container-padding py-6">
      <div className="mx-auto w-full max-w-[1400px] space-y-6">
        <section className="grid grid-cols-1 gap-card-gap md:grid-cols-3">
          <Card className="cursor-pointer overflow-hidden rounded-xl border border-outline-variant transition-shadow hover:shadow-lg">
            <div className="flex flex-col gap-2 p-4">
              <div className="flex items-center justify-between">
                <Label className="text-label-sm uppercase text-on-surface-variant">
                  Total Scope 3
                </Label>
                <Icon name="competitor" className="h-5 w-5 text-primary" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-display text-on-surface">
                  15,420.2
                </span>
                <span className="text-body-md text-on-surface-variant">
                  tCO2e
                </span>
              </div>
            </div>
          </Card>

          <Card className="cursor-pointer overflow-hidden rounded-xl border border-outline-variant transition-shadow hover:shadow-lg">
            <div className="flex flex-col gap-2 p-4">
              <div className="flex items-center justify-between">
                <Label className="text-label-sm uppercase text-on-surface-variant">
                  Supply Chain Partners
                </Label>
                <Icon name="collaborate" className="h-5 w-5 text-secondary" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-display text-on-surface">142</span>
                <span className="text-body-md text-on-surface-variant">
                  / 150 Reporting partners
                </span>
              </div>
            </div>
          </Card>

          <Card className="cursor-pointer overflow-hidden rounded-xl border border-outline-variant transition-shadow hover:shadow-lg">
            <div className="flex flex-col gap-2 p-4">
              <div className="flex items-center justify-between">
                <Label className="text-label-sm uppercase text-on-surface-variant">
                  Data Completeness
                </Label>
                <Icon name="survey" className="h-5 w-5 text-primary" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-display text-on-surface">
                  98.5%
                </span>
                <span className="text-body-md text-on-surface-variant">
                  Verified
                </span>
              </div>
            </div>
          </Card>
        </section>

        <section className="flex min-h-0 flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
          <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-low px-6 py-4">
            <h2 className="text-headline-md text-on-surface">
              Value Chain Records
            </h2>
            <Button
              design="Transparent"
              icon="download"
              className="border border-outline-variant transition-colors hover:bg-surface-container-high"
            >
              Export
            </Button>
          </div>

          <div className="flex-1 overflow-auto">
            <Table
              className="w-full"
              headerRow={
                <TableHeaderRow sticky>
                  <TableHeaderCell
                    minWidth="150px"
                    className="pl-6 text-label-md uppercase text-on-surface-variant"
                  >
                    Partner ID
                  </TableHeaderCell>
                  <TableHeaderCell
                    minWidth="200px"
                    className="text-label-md uppercase text-on-surface-variant"
                  >
                    Category
                  </TableHeaderCell>
                  <TableHeaderCell
                    minWidth="150px"
                    horizontalAlign="End"
                    className="text-label-md uppercase text-on-surface-variant"
                  >
                    Distance (km)
                  </TableHeaderCell>
                  <TableHeaderCell
                    minWidth="150px"
                    horizontalAlign="End"
                    className="text-label-md uppercase text-on-surface-variant"
                  >
                    Fuel Used (L)
                  </TableHeaderCell>
                  <TableHeaderCell
                    minWidth="150px"
                    horizontalAlign="End"
                    className="pr-4 text-label-md uppercase text-on-surface-variant"
                  >
                    CO2e (kg)
                  </TableHeaderCell>
                  <TableHeaderCell
                    minWidth="150px"
                    className="pl-4 text-label-md uppercase text-on-surface-variant"
                  >
                    Period
                  </TableHeaderCell>
                  <TableHeaderCell
                    minWidth="150px"
                    className="pr-6 text-label-md uppercase text-on-surface-variant"
                  >
                    Verification
                  </TableHeaderCell>
                </TableHeaderRow>
              }
            >
              {tableData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="pl-6">
                    <span className="text-label-sm tabular-nums text-on-surface-variant">
                      {row.id}
                    </span>
                  </TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell horizontalAlign="End">
                    <span className="tabular-nums">{row.distance}</span>
                  </TableCell>
                  <TableCell horizontalAlign="End">
                    <span className="tabular-nums">{row.fuel}</span>
                  </TableCell>
                  <TableCell horizontalAlign="End">
                    <span className="pr-4 tabular-nums font-semibold text-primary">
                      {row.co2e}
                    </span>
                  </TableCell>
                  <TableCell className="pl-4">{row.period}</TableCell>
                  <TableCell className="pr-6">
                    <Tag
                      design={
                        row.status === "Verified" ? "Positive" : "Information"
                      }
                      className="text-label-sm uppercase"
                      icon={
                        <Icon
                          name={
                            row.status === "Verified"
                              ? "sys-enter-2"
                              : "pending"
                          }
                        />
                      }
                    >
                      {row.status}
                    </Tag>
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          </div>
        </section>
      </div>
    </div>
  );
}
