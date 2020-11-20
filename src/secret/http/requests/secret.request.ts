import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class SecretRequest {
  @IsNotEmpty()
  @IsString()
  public readonly body: string;

  @IsString()
  @MinLength(6)
  @IsOptional()
  public readonly password: string | null;

  @IsNotEmpty()
  @IsString()
  public readonly expiresIn: string;
}
