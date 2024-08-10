import {
  Card,
  CardFooter,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
export const DataGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-2 mb-8 mt-4">
      <Card>
        <CardHeader>
          <CardTitle>
            <p>Active jobs</p>
          </CardTitle>
          <CardDescription>
            <span>Total number of active jobs.</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h1 className="text-xl font-semibold">2</h1>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <p>Inactive jobs</p>
          </CardTitle>
          <CardDescription>
            <span>Total number of active jobs.</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h1 className="text-xl font-semibold">2</h1>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <p>Total jobs</p>
          </CardTitle>
          <CardDescription>
            <span>Total number of active jobs.</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h1 className="text-xl font-semibold">4</h1>
        </CardContent>
      </Card>
    </div>
  );
};
