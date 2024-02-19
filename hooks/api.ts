import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { addUser } from "@/utils/actions";
import { Credentials } from "@/types";

const useCreateUserMutation = () => {
  return useMutation({
    mutationFn: (credentials: Credentials) => addUser(credentials),
    onSuccess(data) {
      return data;
    },
  });
};

export { useCreateUserMutation };
